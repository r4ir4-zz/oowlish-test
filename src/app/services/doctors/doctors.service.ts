import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from '../api.config';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }

  getDoctors() {
    return new Promise((resolve, reject) => {
      try {
        this.http.get(URL_API + '/doctors').subscribe(doctors => {
          resolve(doctors)
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  changeDisponibility(doctor) {
    return new Promise((resolve, reject) => {
      try {
        this.http.patch(URL_API + '/doctors/' + doctor.upin, doctor).subscribe((response) => {
          resolve(response);
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}