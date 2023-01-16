import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PigData } from '../pig.model';
import { PigService } from '../pig.service';
import { LocationService } from '../location.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HashService } from '../hash.service';
@Component({
  selector: 'app-edit-pig-form',
  templateUrl: './edit-pig-form.component.html',
  styleUrls: ['./edit-pig-form.component.css']
})
export class EditPigFormComponent implements OnInit{


  public statusArray  = ["Not ready", "Ready For Pick Up","Retrieved"]
  constructor(private router:Router,private pigService:PigService,private hashService:HashService, private locationService:LocationService,private _Activatedroute:ActivatedRoute,private fb:FormBuilder){}

  public status: string = '';
  public firstStatus:string = ''
  public isChanged:boolean = false;
  public isHidden:boolean = true;
  hashedPassword:string;
  private correctPassword = "84892b91ef3bf9d216bbc6e88d74a77c";
  chosenPigId:any;  
  returnedPig:any;
  statusForm:FormGroup;

  ngOnInit(){
    this.statusForm = this.fb.group({
      status: []
    });

    this.statusForm.valueChanges.subscribe(x=>{
      this.isChanged = true;
      this.status = x.status;
      })


   this.chosenPigId=this._Activatedroute.snapshot.paramMap.get("id");
    this.pigService.getPigById(this.chosenPigId!).subscribe((data)=>{
    this.firstStatus = data.data.status;
    this.returnedPig = data;
  })


  }
  update() {
  }
  public pName: string = '';
  public pPhone: string = '';
  public pass: string = '';
  public pigBreed: string = '';
  public pigId: string = '';
  public place: string = '';
  public extraNotes: string = '';
  onSubmit(data: any) {
    this.pass = data.password;
   this.hashService.collectHashedPassword(this.pass).subscribe(response=>{
    this.hashedPassword = response.Digest
    if(this.hashedPassword==this.correctPassword){
    this.pName = data.pName;
    this.pPhone = data.pPhone;
    this.pigBreed = data.pigBreed;
    this.pigId = data.pigId;
    this.place = data.place;
    this.extraNotes = data.extraNotes;
    var jsonObjectToPass: PigData = {
      key: this.pigId,
      data: {
          pigInfo: {
          breed: this.pigBreed,
          pid: +this.pigId,
        },      
          personInfo: {
          name: this.pName,
          phone: this.pPhone,
        },
          Location: {
          name: this.place,
        },
        status: this.isChanged?this.status:this.firstStatus,
        extraNotes: this.extraNotes,
        timeAndDate: '',
      },
    };
    try {
    setTimeout(()=>{
    this.router.navigate(['/start'])
    },1000)
    } catch (error) {
      console.log(error);
    }


    }
    else{
      this.isHidden = false;
    }
   })
  }
 backClicked(){

    this.router.navigate(['/start'])
 }

}
