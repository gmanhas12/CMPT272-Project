import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HashService {
  constructor(private http: HttpClient, ) {
}
  collectHashedPassword(password:string): Observable<any> {
    return this.http.get<any>(`https://api.hashify.net/hash/md5/hex?value=${password}`);
  }

}
