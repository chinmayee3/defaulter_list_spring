import { Component } from '@angular/core';
import {StudentDefaultService} from './services/student-default.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api call in Angular';
  getall:any;

  constructor(private student_data:StudentDefaultService)
  {


    this.student_data.getall().subscribe((data)=>{
      this.getall=data;  })

  }
}
