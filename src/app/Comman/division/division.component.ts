import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {

  tbldata: Array<any>;
  alertsettings :any;

  constructor(private http: HttpClient) { }

  fetchstan() {
    this.http.get("https://college-managment-system.herokuapp.com/Admin/Division").subscribe((data: any) => {
      this.tbldata = data.map((value: any) => {
        return {
          '_id': value._id,
          'Division_Name': value.Division_Name,
          'Course_Name': value.Course_ID ? value.Course_ID.Course_Name : 'Deleted Course',
          'Standard_Name': value.Std_ID ? value.Std_ID.Name : 'Deleted Standard',
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
          Division_Name: {
            title: 'Division Name',
          },
          Course_Name: {
            title: 'Course',

          },
          Standard_Name: {
            title: 'Standard',
          },

          Created_On: {
            title: 'Created On',
          },
        }
      };
    })
  }

  ngOnInit() {
    this.fetchstan()
  }

}
