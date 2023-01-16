import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationData } from './location.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class LocationService {
  response: any;
  returnedPig:any;
  constructor(private http: HttpClient, ) {}

  getAllLocations(): Observable<LocationData[]> {
    return this.http.get<LocationData[]>(
      'https://272.selfip.net/apps/cwIrqVK8tf/collections/piglocations12/documents/'
    );
  }


  insertLocation(locationData: LocationData) {
    this.http
      .post<any>(
        'https://272.selfip.net/apps/cwIrqVK8tf/collections/piglocations12/documents/',
        locationData
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  updateLocation(locationData: LocationData) {
    var name = locationData.key
    this.http
      .put<any>(
        `https://272.selfip.net/apps/cwIrqVK8tf/collections/piglocations12/documents/${name}`,
        locationData
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  getLocationByName(name:string):Observable<LocationData> {
      return this.http.get<LocationData>(
      `https://272.selfip.net/apps/cwIrqVK8tf/collections/piglocations12/documents/${name}`
    )
    
  }
}
