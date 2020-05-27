import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  constructor(private http: HttpClient, private toast: ToastrService) { }

  assignmentform: FormGroup
  is_submtted = false
  ngOnInit(): void {

    this.assignmentform = new FormGroup({
      Asmt_file: new FormControl('', Validators.required),
      Sub_ID: new FormControl('', Validators.required),
      Submision_Date: new FormControl('', Validators.required),
      Title: new FormControl('', Validators.required),
    });

  }

  postdata() {
    this.is_submtted = true

    if (this.assignmentform.invalid) {
      return;
    }
    console.log(this.assignmentform.value)
    //   this.http.post("http://localhost:8050/Faculty/Test", this.assignmentform.value).subscribe((data: any) => {
    //     if (data.Success) {
    //       this.toast.success(data.Success)
    //       // this.fetchstan()
    //     } else {
    //       this.toast.error(data.Error);
    //     }
    //   })
    // }
  }
  get getformvalue() {
    return this.assignmentform.controls;
  }
}
