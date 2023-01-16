import { Component } from '@angular/core';
import { PigService } from '../pig.service';
import { ActivatedRoute } from '@angular/router';
import { HashService } from '../hash.service';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-pig',
  templateUrl: './delete-pig.component.html',
  styleUrls: ['./delete-pig.component.css']
})



export class DeletePigComponent {

  constructor(private pigService:PigService,private hashService:HashService, private locationService:LocationService,private _Activatedroute:ActivatedRoute,private router:Router){
  }

  hashedPassword:string;
  password:string;
  private actualPass = "84892b91ef3bf9d216bbc6e88d74a77c";
  hashedPasswordObject:any;
  public isHidden = true;
  onSubmit(data:any){
    this.password = data.password;
    this.hashService.collectHashedPassword(this.password).subscribe(data=>{
    this.hashedPassword = data.Digest
    if(this.hashedPassword!=this.actualPass){
      this.isHidden = false;
    }
    if(this.hashedPassword==this.actualPass){
      this.onDelete();
    }
   })
 } 
 selectedPig:any; 
 savedPig:any;
 ngOnInit(){
   this.selectedPig=this._Activatedroute.snapshot.paramMap.get("id");
   this.pigService.getPigById(this.selectedPig!).subscribe((data)=>{
   this.savedPig = data;
 })
 }
  onDelete() {
    try {
    var position:string ;
    var pigStatus:string = '';
      
  this.pigService.getPigById(this.selectedPig).subscribe((data)=>{
    position = data.data.Location.name
    pigStatus = data.data.status
    if(pigStatus!="Retrieved"){
      var pigPosition; 
      this.locationService.getLocationByName(position!).subscribe((data)=>{
        pigPosition = data;
        pigPosition.data.count -=1;
        this.locationService.updateLocation(pigPosition);
    })
    }
  })
    this.pigService.deletePig(this.selectedPig);
    console.log(`Deleted`)
    } catch (error) {
     console.log(error) 
    }
    setTimeout(()=>{
    this.router.navigate(['/start'])
    },500)
  }
  backClicked(){
    this.router.navigate(['/start'])
   }
}
