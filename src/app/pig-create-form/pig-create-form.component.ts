import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { LocationService } from '../location.service';
import { PigData } from '../pig.model';
import { PigService } from '../pig.service';
import { LocationData } from '../location.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pig-create-form',
  templateUrl: './pig-create-form.component.html',
  styleUrls: ['./pig-create-form.component.css'],
})
export class PigCreateFormComponent implements OnInit {
  public pName: string = '';
  public pPhone: string = '';
  public pigBreed: string = '';
  public pigId: string = '';
  public location: string = '';
  public extraNote: string = '';
  public status: string = '';
 

  constructor(private router:Router,private pigService: PigService, private locationService: LocationService,private fb:FormBuilder) {

  }

  private locationArray:LocationData[];
  public locationNameArray:string[] = [];
 locationForm:FormGroup;
 statusForm:FormGroup;
 showAdditionalTextFIeld :boolean = false;
 public newLocationEntered = false;

  public locationNameDom =document.getElementById("locationName") as HTMLInputElement;
  public locationLat: string = '';
  public locationName: string = '';
  public locationLong: string = '';
  public locationNameId = 'whatUp';
  public isHidden = "hidden";
  public statusArray  = ["Not ready", "Ready For Pick Up","Retrieved"]
  locationLatValue :string= "";

  ngOnInit(){
     this.locationService.getAllLocations().subscribe((data) => {

      this.locationArray = data
      this.locationArray.forEach(location=>{
        this.locationNameArray.push(location.key)
      })

      })

    this.locationForm = this.fb.group({
      sus:[] 
    });
    this.statusForm = this.fb.group({
      status:[] 
    });
  this.statusForm.valueChanges.subscribe(x=>{

  this.status = x.status;
  })
this.locationForm.valueChanges.subscribe(x => {
  if(x.sus==99){
    this.isHidden ="text"
    this.showAdditionalTextFIeld = true;
    this.newLocationEntered = true;
  }
  else {
    this.isHidden ="hidden"
    this.locationName = x.sus;

  }
})
}
  submit() {
    console.log(this.locationForm.value)
  }
  onSubmit(data: any) {

    this.pName = data.pName;
    this.pPhone = data.pPhone;
    this.pigBreed = data.pigBreed;
    this.pigId = data.pigId;
    this.locationLat = data.locationLat;
    this.locationLong = data.locationLong;
    this.extraNote = data.extraNote;
    if(this.newLocationEntered){
      this.locationName = data.locationName;
      this.locationService.insertLocation(
  {
    key:data.locationName,
    data:{
      lat:+this.locationLat,
      long:+this.locationLong,
      count:0
    }
  }
      )
    }
    var jsonObjectToPass: PigData = {
      key: this.pigId,
      data: {
        personInfo: {
          name: this.pName,
          phone: this.pPhone,
        },
        pigInfo: {
          breed: this.pigBreed,
          pid: +this.pigId,
        },
        Location: {
          name: this.locationName,
        },
        extraNotes: this.extraNote,
        timeAndDate:  this.formatDate(new Date()),
        status: this.status,
      },
    };
    try {
      this.pigService.addPig(jsonObjectToPass);
      var theLocation ;
  this.locationService.getLocationByName(this.locationName!).subscribe((data)=>{
    theLocation = data;
    theLocation.data.count +=1;
    this.locationService.updateLocation(theLocation);
  })
    setTimeout(()=>{

    this.router.navigate(['/start'])
    },1000)
    } catch (error) {
      console.log(error);
    }
  }
   padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  
 backClicked(){

    this.router.navigate(['/start'])
 }
   formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }
}
