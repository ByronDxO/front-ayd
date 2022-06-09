import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CubicaService {
  API_URI = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }


  

  getNum(numero : String){
    return this.http.post(this.API_URI,numero);
  }


}
