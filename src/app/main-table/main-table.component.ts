import { Component } from '@angular/core';
import { PigService } from '../pig.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent {
  constructor(private pigService: PigService, private router: Router) {

  }
  onClickEditPig(evt: Event) {
    var event = evt.target as HTMLButtonElement;
    this.router.navigate(['/edit',`${event.id}`])
  }

  onClickMoreInfo(evt: Event) {
    var event = evt.target as HTMLButtonElement;
    this.router.navigate(['/info',`${event.id}`])
  }

  onClickDelete(evt: Event) {
    var event = evt.target as HTMLButtonElement;
    this.router.navigate(['/delete',`${event.id}`])
  }
  response: any;
  ngOnInit(): void {
    this.pigService.getPigs().subscribe((data) => {
      this.response = data;
    });
  }
  sortByLocation(){
    this.response =this.response.sort((a:any,b:any)=>
      b.data.Location.name >a.data.Location.name ? -1:1
    )
  }


  sortByTime(){
    this.response =this.response.sort((a:any,b:any)=>
      b.data.timeAndDate >a.data.timeAndDate ? -1:1
    )
  }
  sortByReported(){
    this.response =this.response.sort((a:any,b:any)=>
      b.data.personInfo.name >a.data.personInfo.name ? -1:1
    )
  }

  sortByStatus(){
    this.response =this.response.sort((a:any,b:any)=>
      b.data.status >a.data.status ? -1:1
    )
  }
}
