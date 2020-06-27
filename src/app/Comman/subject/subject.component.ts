import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  tbldata: any;
  alertsettings;

  constructor(private http: HttpClient) { }

  fetchstan() {
    this.http.get("https://education.serverless.social/Admin/Subject").subscribe((data: any) => {
      this.tbldata = data.map((value: any) => {
        return {
          '_id': value._id,
          'Standard_Name': value.Std_ID ? value.Std_ID.Name : 'Deleted Record',
          'Course_Name': value.Course_ID ? value.Course_ID.Course_Name : 'Deleted Record',
          'Sub_Name': value.Sub_Name,
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

          Course_Name: {
            title: 'Course',
          },
          Standard_Name: {
            title: 'Standard',
          },
          Sub_Name: {
            title: 'Subject',
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
