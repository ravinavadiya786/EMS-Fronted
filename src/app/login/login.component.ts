import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_CONSTANTS } from '../CONSTS';

@Component({
  selector: 'app-alogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class loginComponent implements OnInit {

  ENDURL = "https://education.serverless.social"
  //  https://college-managment-system.herokuapp.com"

  constructor(public http: HttpClient, private toast: ToastrService, private Router: Router) {
    if (localStorage.getItem('token')) {
      this.Router.navigate([jwt_decode(localStorage.getItem('token')).role])
    }
  }

  loginform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required]),
  })

  // login = () => {

  //   CometChat.login(this.uid, COMETCHAT_CONSTANTS.API_KEY).then((user) => {
  //     console.log('sucess',user);
  //     location.href = '/embeded-app';
  //   }, error => {
  //     console.log('CometChatLogin Failed', error);
  //   });
  // }

  logout() {
    CometChat.logout().then(() => {
      location.href = '/';
    });
  }

  onSubmit() {
    this.http.post(`${this.ENDURL}/auth/login`, this.loginform.value).subscribe((data: any) => {
      if (data.Success) {
        console.log(this.loginform.value);
        localStorage.setItem('token', data.token)
        this.toast.clear()
        this.Router.navigate([jwt_decode(localStorage.getItem('token')).role])
        CometChat.login(data.id, COMETCHAT_CONSTANTS.API_KEY).then((user) => {
          console.log('sucess', user);
          // location.href = '/embeded-app';
        }, error => {
          console.log('CometChatLogin Failed', error);
        });
        this.toast.success('Success Login');
      } else {
        this.toast.clear()
        this.toast.error(data.Error, 'Error', {
          closeButton: true,
          tapToDismiss: true,
          timeOut: 0
        });
      }
    })


  }

  ngOnInit() { }
}