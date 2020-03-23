import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { AuthService } from '../../shared/auth/auth.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data: any;
  constructor(private location: Location, private Router: Router, private AuthService: AuthService, private http: HttpClient) { }


  ngOnInit() {

    if (this.AuthService.getRole() === "Student") {
      this.http.get("https://college-managment-system.herokuapp.com/Admin/Student").subscribe((data: any) => this.data = data[0])
    }
    else if (this.AuthService.getRole() === "Faculty") {
      this.http.get("https://college-managment-system.herokuapp.com/Admin/Faculty").subscribe((data: any) => this.data = data[0])
    } else if (this.location.getState()) {
      this.data = this.location.getState()

    } else {

      this.Router.navigateByUrl('/')
    }
  }

}
