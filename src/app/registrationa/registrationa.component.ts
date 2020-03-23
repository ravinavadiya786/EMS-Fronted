import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  FormControl ,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationa',
  templateUrl: './registrationa.component.html',
  styleUrls: ['./registrationa.component.scss']
})
export class RegistrationaComponent implements OnInit {

  constructor() { }
  adminform : FormGroup = new FormGroup({
    aname:new FormControl('',Validators.required),
    Gender:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    phno:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(8)]),

})
public hasError = (controlName: string, errorName: string) =>{
  return this.adminform.controls[controlName].hasError(errorName);
}
onSubmit()
{
  console.log(this.adminform.value);
}

ngOnInit(){} 
}