import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';

@Component({
  selector: 'app-vattendace',
  templateUrl: './vattendace.component.html',
  styleUrls: ['./vattendace.component.scss']
})
export class VattendaceComponent implements OnInit {

  readonly url = 'http://localhost:8050/Faculty/Attendance';
  courses: any;
  tbldata: any;
  standards: any;
  alertsettings;

  AttendaceData: any;

  constructor(private http: HttpClient, private toast: ToastrService) { }

  fetchstan() {
    this.http.get(this.url).subscribe(data => {
      this.AttendaceData = data
      this.alertsettings = {
        actions: {
          add: false
        },
        delete: {
          confirmDelete: true,
          deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
        },

        edit: {
          confirmSave: true,
          editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
        },

        columns: {
          
          Student_Id: {
            title: "Student Name",
            valuePrepareFunction: (user) => {
              return user.Name;
            }
          },
          Faculty_Id : {
            title: "Faculty Name",
            valuePrepareFunction: (user) => {
              return user.Name;
            }
          },
          Present : {
            title: "Present",
          },
          Date: {
            title: 'Date',
            valuePrepareFunction: (date) => {
              return date.substr(0,10);
            }
          },

        },

        attr: {
          class: "table table-responsive"
        },

      };
    })

  }

  ngOnInit(): void {
    this.fetchstan()
  }


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
        console.log(event.data)

        that.http.delete(`http://localhost:8050/Faculty/Attendance?_id=` + event.data._id).subscribe((data: any) => {
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
        console.log(event.data)
        that.http.put(`http://localhost:8050/Faculty/Attendance`, { ...event.newData, Course_ID: event.newData.Course_Name }).subscribe((data: any) => {
          if (data.Error) {
            that.toast.error(data.Error);
          } else {
            that.toast.success(data.Success);
            // that.fetchstan()
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
