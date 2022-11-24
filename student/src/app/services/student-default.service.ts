import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentDefaultService {
url="http://localhost:8070/getall"
  constructor(private http:HttpClient) { }
  getall()
  {
    return this.http.get(this.url);
  }
}
