import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  tbldata: any;
  alertsettings;

  constructor(private http: HttpClient) { }

  fetchstan() {
    this.http.get("http://localhost:8050/Admin/TimeTable").subscribe((data: any) => {
      this.tbldata = data.map((value: any) => {
        return {
          '_id': value._id,
          'Standard_Name': value.Std_ID ? value.Std_ID.Name : 'Deleted Record',
          'Course_Name': value.Course_ID ? value.Course_ID.Course_Name : 'Deleted Record',
          'Division_Name': value.Division_ID ? value.Division_ID.Division_Name : 'Deleted Record',
          'Subject_Name': value.Subject_ID ? value.Subject_ID.Sub_Name : 'Deleted Record',
          'From_Time': value.From_Time,
          'To_Time' : value.To_Time,
          'Day': value.Day,
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
          Subject_Name: {
            title: 'Subject',
          },
          Division_Name : {
            title  : 'Division'
          },
          From_Time: {
            title: 'From',
          },
          To_Time: {
            title: 'TO',
          },
          Day: {
            title: 'Day',
          },
        }
      }
    })
  }

  ngOnInit() {
    this.fetchstan()
  }

}
