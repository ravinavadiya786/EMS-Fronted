import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
})



export class DashboardComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private http: HttpClient) { }

  divisions: any = 0;

  subject: any = 0;

  noticeboardData: any;

  ngAfterViewInit(): void {
    this.http.get("https://education.serverless.social/Admin/Notice_Borad").subscribe((data: any) => {
      this.noticeboardData = data
      this.noticeboardData = this.noticeboardData.sort((a, b) => {
        return new Date(b.Date).getTime() - new Date(a.Date).getTime()
      })
    })

  }
  ngOnInit() {
    this.http.get("https://education.serverless.social/Admin/Division").subscribe((data: any) => this.divisions = data.length)
    this.http.get("https://education.serverless.social/Admin/Subject").subscribe((data: any) => this.subject = data.length)

  }

}
