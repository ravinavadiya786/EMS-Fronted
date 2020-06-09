import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MySwitchComponent } from '../../switch/switch.component';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';

@Component({
  selector: 'app-msubject',
  templateUrl: './msubject.component.html',
  styleUrls: ['./msubject.component.scss']
})

export class MsubjectComponent implements OnInit {

  courses: any;
  tbldata: any;
  standards: any;
  alertsettings;
  show: boolean = false;
  is_submtted = false

  constructor(private http: HttpClient, private toast: ToastrService) { }


  subjectform: FormGroup = new FormGroup({
    Course_ID: new FormControl('', Validators.required),
    Std_ID: new FormControl('', Validators.required),
    Sub_Name: new FormControl('', Validators.required),
  });



  fetchstan() {
    this.http.get("http://localhost:8050/Admin/Subject").subscribe((data: any) => {
      this.tbldata = data.map((value: any) => {
        return {
          '_id': value._id,
          'Standard_Name': value.Std_ID ? value.Std_ID.Name : 'Deleted Record',
          'Course_Name': value.Course_ID ? value.Course_ID.Course_Name : 'Deleted Record',
          'Sub_Name': value.Sub_Name,
          'Created_On': value.Created_On.substr(0, 10),
          'Is_Active': value.Is_Active,
        }
      })

      let that = this

      this.alertsettings = {
        delete: {
          confirmDelete: true,
          deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
        },

        edit: {
          confirmSave: true,
          editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
        },
        columns: {
          Course_Name: {
            title: 'Course',
            editor: {
              type: 'list',
              config: {
                list: this.courses ? this.courses.map((data: any) => { return { title: data.Course_Name, value: data._id } }) : []
              }
            }
          },
          Standard_Name: {
            title: 'Standard',
            editor: {
              type: 'list',
              config: {
                list: this.standards ? this.standards.map((data: any) => { return { title: data.Name, value: data._id } }) : []
              }
            }
          },
          Sub_Name: {
            title: 'Subject',
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
                that.http.put("http://localhost:8050/Admin/Subject", { _id: data.rowdata._id, Is_Active: data.value }).subscribe((data: any) => {
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
        actions: {
          add: false
        },
        attr: {
          class: "table table-responsive"
        },

      };

    })
  }

  ngOnInit() {
    this.http.get("http://localhost:8050/Admin/Course").subscribe((data: any) => this.courses = data)
    this.http.get("http://localhost:8050/Admin/Standard").subscribe((data: any) => this.standards = data)
    this.fetchstan()
  }

  get getformvalue() {
    return this.subjectform.controls
}
  postdata() {
    this.is_submtted = true
    if (this.subjectform.invalid) {
        return
    }
    this.http.post("http://localhost:8050/Admin/Subject", this.subjectform.value).subscribe((data: any) => {
      if (data.Success) {
        this.toast.success(data.Success)
        this.fetchstan()
        this.show = false;
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
        that.http.delete("http://localhost:8050/Admin/Subject?_id=" + event.data._id).subscribe((data: any) => {
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
        that.http.put("http://localhost:8050/Admin/Subject", { ...event.newData, Course_ID: event.newData.Course_Name }).subscribe((data: any) => {
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
export const routedComponents = [MsubjectComponent];

