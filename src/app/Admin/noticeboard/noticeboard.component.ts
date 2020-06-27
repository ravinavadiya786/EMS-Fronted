import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.scss']
})

export class NoticeBoardComponent implements OnInit {
  ModalTitle = '';
  id: number;
  // data: {};
  myForm: FormGroup;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toast: ToastrService
  ) {

  }
  tbldata: any;
  isupdate: boolean = false;
  // id: string;
  fetchstan() {
    this.http.get("https://education.serverless.social/Admin/Notice_Borad").subscribe((data: any) => {
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
    this.myForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Desc: ['', Validators.required],
    });
    if (this.id === 0) {
      this.ModalTitle = "Add Task";
    }
    else {
      this.ModalTitle = "Edit Task";
    }
  }

  openmodel(content) {
    this.modalService.open(content, { centered: true });
  }

  handledelete(id) {
    var that = this;
    swal.fire({
      title: 'Are you sure you want to delete?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0CC27E',
      cancelButtonColor: '#FF586B',
      confirmButtonText: 'Yes, Delete It!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success btn-raised mr-5',
      cancelButtonClass: 'btn btn-danger btn-raised',
      buttonsStyling: false
    }).then(function (data) {
      if (data.dismiss === swal.DismissReason.cancel) {

        swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      } else {


        that.http.delete("https://education.serverless.social/Admin/Notice_Borad?_id=" + id).subscribe((data: any) => {
          if (data.Error) {
            that.toast.error(data.Error);
          } else {
            that.toast.error(data.Success);
            that.fetchstan()
          }
        })
        swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      }
    })

  }
  handleupdate(id, title, desc, content) {

    this.myForm = this.formBuilder.group({
      Title: [title, Validators.required],
      Desc: [desc, Validators.required],
    });
    this.modalService.open(content, { centered: true });
    this.id = id;
    this.isupdate = true;

  }
  submitForm() {
    if (this.isupdate) {
      this.isupdate = false
      this.http.put("https://education.serverless.social/Admin/Notice_Borad", { ...this.myForm.value, _id: this.id }).subscribe((data: any) => {
        if (data.Error) {
          this.toast.error(data.Error);
        } else {
          this.toast.success(data.Success);
          this.modalService.dismissAll()
          this.myForm.reset()
          this.fetchstan()
        }
      })
    } else {
      this.http.post("https://education.serverless.social/Admin/Notice_Borad", this.myForm.value).subscribe((data: any) => {
        if (data.Success) {
          this.toast.success(data.Success);
          this.modalService.dismissAll()
          this.myForm.reset()
          this.fetchstan()
        } else {
          this.toast.error(data.Error);
        }
      })
    }
  }

}
export const routedComponents = [NoticeBoardComponent];
