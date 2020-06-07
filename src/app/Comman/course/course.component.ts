import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  tbldata: any;
  alertsettings;
  constructor(private http: HttpClient) { }

  fetchstan() {
    this.http.get("http://localhost:8050/Admin/Course").subscribe((data: any) => {
      this.tbldata = data

      this.alertsettings = {
        attr: {
          class: "table table-responsive"
        },
        actions: {
          add: false,
          edit: false,
          delete: false
        },
        columns: {
          Course_Name: {
            title: 'Course',
          },
          Duration: {
            title: 'Duration',
          },
          Created_On: {
            title: 'Created On',
            valuePrepareFunction: (date) => {
              return date.substr(0, 10);
            }
          },
        }
      };
    })

  }
  ngOnInit() {
    this.fetchstan()
  }
}