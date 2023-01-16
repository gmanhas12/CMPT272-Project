import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { LocationService } from '../location.service';
import { LocationData } from '../location.model';
import {icon, Marker} from 'leaflet';

const iconRetinalUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

@Component({
  selector: 'app-pig-map',
  templateUrl: './pig-map.component.html',
  styleUrls: ['./pig-map.component.css']
})


export class PigMapComponent implements AfterViewInit {
  private map:any;
  private arr:LocationData[]
  constructor(private locationService:LocationService){}



  ngAfterViewInit(): void {
    this.map = L.map('map').setView([	49.2827, -123.1207], 11);
    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ21hNTQiLCJhIjoiY2xiNjBiem9xMGJzNzN2cW40bHR6emhrZSJ9.-pVkmVfow4BjVKrub31CDQ',{
      maxZoom:18,
      attribution:'Map data &copy; <a = href = "https://www.openstreetmap.prg/copyright">OpenStreetMap</a> contributors, ' +
      'Imagery © <a href = "https://www.mapboxx.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
    }).addTo(this.map);
    tiles.addTo(this.map);

  this.locationService.getAllLocations().subscribe((data) => {
  this.arr = data
  this.arr.forEach(location=>{
  if(location.data.count!=0){
    const marker1 = L.marker([location.data.lat, location.data.long]).addTo(this.map)
    marker1.bindPopup(`${location.data.count} pig(s) found here`).openPopup()
        }
    })
  })
}

}
