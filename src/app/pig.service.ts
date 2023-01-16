import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PigData } from './pig.model';
@Injectable({
  providedIn: 'root',
})
export class PigService {
  
constructor(private http: HttpClient) {
}

  getPigs(): Observable<PigData> {
    return this.http.get<PigData>('https://272.selfip.net/apps/cwIrqVK8tf/collections/pig_data/documents/');}
  addPig(pigData: PigData) {
    this.http
      .post<any>('https://272.selfip.net/apps/cwIrqVK8tf/collections/pig_data/documents/',
        pigData)
      .subscribe((data) => {
        console.log(data);
      });
  }
  updatePig(pigData: PigData) {
    var id = pigData.key
    this.http
      .put<any>(`https://272.selfip.net/apps/cwIrqVK8tf/collections/pig_data/documents/${id}`,pigData)
      .subscribe((data) => {
        console.log(data);
      });
  }

  deletePig(id: string): void {
    try {
      this.http
        .delete(`https://272.selfip.net/apps/cwIrqVK8tf/collections/pig_data/documents/${id}`)
        .subscribe(() => console.log('delete successful'));
    } catch (error) {
      console.log(error);
    }
  }
  getPigById(id:string):Observable<PigData> {
      return this.http.get<PigData>(`https://272.selfip.net/apps/cwIrqVK8tf/collections/pig_data/documents/${id}`)}
}
