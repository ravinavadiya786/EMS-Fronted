import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.scss']
})
export class NoticeboardComponent implements OnInit {

  tbldata: any;

  constructor(private http: HttpClient) { }

  fetchstan() {
    this.http.get("https://college-managment-system.herokuapp.com/Admin/Notice_Borad").subscribe((data: any) => {
      this.tbldata = data.map((value: any) => {
        return {
          '_id': value._id,
          'Title': value.Title,
          'Faculty_ID': value.Faculty_ID ? value.Faculty_ID.Course_Name : '',
          'Desc': value.Desc,
          'Date': value.Date.substr(0, 10)
        }
      })
    })
  }

  ngOnInit() {
    this.fetchstan()
  }

}