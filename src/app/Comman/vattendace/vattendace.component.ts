import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import { AuthService } from '../../shared/auth/auth.service';
import dateformat from 'dateformat'

@Component({
  selector: 'app-vattendace',
  templateUrl: './vattendace.component.html',
  styleUrls: ['./vattendace.component.scss']
})
export class VattendaceComponent implements OnInit {

  url = 'https://education.serverless.social/Faculty/Attendance';
  courses: any;
  tbldata: any;
  standards: any;
  alertsettings: any;

  AttendaceData: any;
  role: string;
  constructor(private http: HttpClient, private toast: ToastrService, private AuthService: AuthService) {
    this.role = this.AuthService.getRole()
  }

  fetchstan() {
    this.http.get(this.url).subscribe((data: any) => {
      this.AttendaceData = data.map(item => {
        return {
          ...item,
          Date: dateformat(item.Date, "fullDate"),
          Student_Name: item.Student_Id?.Name,
          Faculty_Name: item.Faculty_Id?.Name,
          Course_Name: item.Student_Id?.Course_id?.Course_Name,
          Standard_Name: item.Student_Id?.Standard_id?.Name
        }
      })
      this.alertsettings = {
        actions: {
          add: false,
          edit: false,
          delete: this.role === "Student" ? false : true
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
          Student_Name: {
            title: "Student Name",
          },
          Faculty_Name: {
            title: "Faculty Name",
          },
          Course_Name: {
            title: "Course_Name",
          },
          Standard_Name: {
            title: "Standard_Name",
          },
          Present: {
            title: "Present",
          },
          Date: {
            title: 'Date',
          }
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

        that.http.delete(`https://education.serverless.social/Faculty/Attendance?_id=` + event.data._id).subscribe((data: any) => {
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
        that.http.put(`https://education.serverless.social/Faculty/Attendance`, { ...event.newData, Course_ID: event.newData.Course_Name }).subscribe((data: any) => {
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
