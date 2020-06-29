import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MySwitchComponent } from '../../switch/switch.component';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mcourse',
  templateUrl: './mcourse.component.html',
  styleUrls: ['./mcourse.component.scss']
})
export class McourseComponent implements OnInit {
  courses: any;
  tbldata: any;
  alertsettings;
  show: boolean = false;
  is_submtted = false;

  constructor(private http: HttpClient, private toast: ToastrService) { }


  courseform: FormGroup = new FormGroup({
    Course_Name: new FormControl('', Validators.required),
    Duration: new FormControl('', Validators.required),
  });


  fetchstan() {
    this.http.get("https://education.serverless.social/Admin/Course").subscribe((data: any) => {
      this.tbldata = data.map((value: any) => {
        return {
          '_id': value._id,
          'Course_Name': value.Course_Name,
          'Duration': value.Duration,
          'Created_On': value.Created_On.substr(0, 10),
          'Is_Active': value.Is_Active,
        }
      })
    })
  }

  ngOnInit() {
    this.fetchstan()
    this.http.get("https://education.serverless.social/Admin/Course").subscribe((data: any) => {
      this.courses = data
      var that = this

      this.alertsettings = {
        delete: {
          confirmDelete: true,
          deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
        },
        actions: {
          add: false
        },
        edit: {
          confirmSave: true,
          editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
        },
        columns: {

          Course_Name: {
            title: 'Course',
          },
          Duration: {
            title: 'Duration',
          },
          Created_On: {
            title: 'Created On',
          },
          Is_Active: {
            title: 'Active',
            type: 'custom',
            renderComponent: MySwitchComponent,
            onComponentInitFunction(instance) {
              instance.save.subscribe(data => {
                that.http.put("https://education.serverless.social/Admin/Course", { _id: data.rowdata._id, Is_Active: data.value }).subscribe((data: any) => {
                  console.log(data)
                  if (data.Error) {
                    that.toast.error(data.Error);
                  } else {
                    that.toast.success(data.Success);
                    that.fetchstan()
                  }
                });
              })
            }
          },

        },
        attr: {
          class: "table table-responsive"
        },

      };
    })

  }

  get getformvalue() {
    return this.courseform.controls
  }
  postdata() {
    this.is_submtted = true
    if (this.courseform.invalid) {
      return
    }
    this.http.post("https://education.serverless.social/Admin/Course", this.courseform.value).subscribe((data: any) => {
      if (data.Success) {
        this.toast.success(data.Success)
        this.fetchstan()
        this.show = false
      } else {
        this.toast.error(data.Error);
      }
    })
  }


  //  For confirm action On Delete
  onDeleteConfirm(event) {
    var that = this
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
        event.confirm.reject();
        swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      } else {

        that.http.delete("https://education.serverless.social/Admin/Course?_id=" + event.data._id).subscribe((data: any) => {
          if (data.Error) {
            that.toast.error(data.Error);
          } else {
            that.toast.error(data.Success);
            that.fetchstan()
          }
        })
        event.confirm.resolve();
        swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      }
    })
  }

  //  For confirm action On Save
  onSaveConfirm(event) {
    var that = this
    swal.fire({
      title: 'Are you sure you want to Update?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0CC27E',
      cancelButtonColor: '#FF586B',
      confirmButtonText: 'Yes, Update It!',
      cancelButtonText: 'No, Cancel!',
      confirmButtonClass: 'btn btn-success btn-raised mr-5',
      cancelButtonClass: 'btn btn-danger btn-raised',
      buttonsStyling: false
    }).then(function (data) {
      if (data.dismiss === swal.DismissReason.cancel) {
        event.confirm.reject();
        swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      } else {

        that.http.put("https://education.serverless.social/Admin/Course", { ...event.newData, Course_ID: event.newData.Course_Name }).subscribe((data: any) => {
          if (data.Error) {
            that.toast.error(data.Error);
          } else {
            that.toast.success(data.Success);
            that.fetchstan()
            event.confirm.resolve(event.newData);

          }
        })
        event.confirm.resolve();
        swal.fire(
          'Updated!',
          'Your imaginary file has been Updated.',
          'success'
        )
      }
    })

  }


}
export const routedComponents = [McourseComponent];




