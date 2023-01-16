import { Component } from '@angular/core';
import { PigService } from '../pig.service';
import { ActivatedRoute } from '@angular/router';
import { HashService } from '../hash.service';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})

export class MoreInfoComponent {

  constructor(private pigService:PigService,private hashService:HashService, private locationService:LocationService,private _Activatedroute:ActivatedRoute,private router:Router){
  }
 selectedPig:any; 
 savedPig:any;
 ngOnInit(){
   this.selectedPig=this._Activatedroute.snapshot.paramMap.get("id");
   this.pigService.getPigById(this.selectedPig!).subscribe((data)=>{
   this.savedPig = data;
 })
 }
 
  backClicked(){
    this.router.navigate(['/start'])
   }
}
