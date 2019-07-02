import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctor } from '../model/doctor';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = `${environment.apiUrlApi}/admin/doctor/register`;

  constructor(private http: HttpClient) {
  }


  saveDoctor(doctor: Doctor): Observable<Doctor> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
    return this.http.post<Doctor>(this.url, JSON.stringify(doctor), {
      headers: headers
    }).pipe(
      map(response => {
        const data = response;
        return data;
      }));
  }
}
