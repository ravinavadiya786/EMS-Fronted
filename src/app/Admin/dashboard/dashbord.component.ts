import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})



export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient) { }
  courses: any = 0;
  students: any = 0;
  divisions: any = 0;
  standard: any = 0;
  subject: any = 0;
  faculty: any = 0;
  tbldata: any;

  ngAfterViewInit(): void {
    this.http.get("http://localhost:8050/Admin/Notice_Borad").subscribe((data: any) => {
      this.tbldata = data
      this.tbldata = this.tbldata.sort((a, b) => {
        return new Date(b.Date).getTime() - new Date(a.Date).getTime()
      })
    })

  }
  ngOnInit() {
    this.http.get("http://localhost:8050/Admin/Standard").subscribe((data: any) => this.standard = data.length)
    this.http.get("http://localhost:8050/Admin/Course").subscribe((data: any) => this.courses = data.length)
    this.http.get("http://localhost:8050/Admin/Student").subscribe((data: any) => this.students = data.length)
    this.http.get("http://localhost:8050/Admin/Faculty").subscribe((data: any) => this.faculty = data.length)
    this.http.get("http://localhost:8050/Admin/Division").subscribe((data: any) => this.divisions = data.length)
    this.http.get("http://localhost:8050/Admin/Subject").subscribe((data: any) => this.subject = data.length)

  }

}
