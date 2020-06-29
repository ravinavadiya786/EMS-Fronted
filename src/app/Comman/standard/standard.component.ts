import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent implements OnInit {
  courses: any;

  tbldata: any;
  alertsettings;

  constructor(private http: HttpClient) { }

  fetchstan() {
    this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Standard").subscribe((data: any) => {
      this.tbldata = data.map((value: any) => {
        return {
          '_id': value._id,
          'Name': value.Name,
          'Course_Name': value.Course_ID ? value.Course_ID.Course_Name : 'Deleted Course',
          'Duration': value.Course_ID.Duration,
          'Created_On': value.Created_On.substr(0, 10),
          'Is_Active': value.Is_Active,
        }
      })

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

          Name: {
            title: 'Standard',
          },
          Course_Name: {
            title: 'Course',

          },
          Duration: {
            title: 'Duration',
          },
          Created_On: {
            title: 'Created On',
          },
        }
      }
    })
  }

  ngOnInit() {
    this.fetchstan()
  }

}
