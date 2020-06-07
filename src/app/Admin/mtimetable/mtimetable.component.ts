import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import { MySwitchComponent } from '../../switch/switch.component';



@Component({
  selector: 'app-mtimetable',
  templateUrl: './mtimetable.component.html',
  styleUrls: ['./mtimetable.component.scss']
})

export class MtimetableComponent implements OnInit {

  week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  courses: any;
  tbldata: any;
  standards: any;
  subject: any;
  division: any;
  alertsettings;
  public isCollapsed = true;

  constructor(private http: HttpClient, private toast: ToastrService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.http.get("http://localhost:8050/Admin/Course").subscribe((data: any) => this.courses = data)
    this.http.get("http://localhost:8050/Admin/Standard").subscribe((data: any) => this.standards = data)
    this.http.get("http://localhost:8050/Admin/Subject").subscribe((data: any) => this.subject = data)
    this.http.get("http://localhost:8050/Admin/Division").subscribe((data: any) => this.division = data)
    this.fetchstan()

  }

  timetableform: FormGroup = new FormGroup({
    Course_ID: new FormControl(''),
    Std_ID: new FormControl(''),
    Day: new FormControl(''),
    Subject_ID: new FormControl(''),
    Division_ID: new FormControl(''),
    From_Time: new FormControl(''),
    To_Time: new FormControl(''),
  });


  fetchstan() {
    this.http.get("http://localhost:8050/Admin/TimeTable").subscribe((data: any) => {
      this.tbldata = data.map((value: any) => {
        return {
          '_id': value._id,
          'Standard_Name': value.Std_ID ? value.Std_ID.Name : 'Deleted Record',
          'Course_Name': value.Course_ID ? value.Course_ID.Course_Name : 'Deleted Record',
          'Division_Name': value.Division_ID ? value.Division_ID.Division_Name : 'Deleted Record',
          'Subject_Name': value.Subject_ID ? value.Subject_ID.Sub_Name : 'Deleted Record',
          'From_Time': value.From_Time,
          'To_Time': value.To_Time,
          'Day': value.Day,
          'Is_Active': value.Is_Active,
        }
      })
      console.log('timetable', this.tbldata)

      var that = this

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
          Day: {
            title: 'Day',
            editor: {
              type: 'list',
              config: {
                list: this.week ? this.week.map((data: any) => { return { title: data, value: data } }) : []
              }
            }
          },
          From_Time: {
            title: 'From_Time',
          },
          To_Time: {
            title: 'To_Time',
          },
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
          Division_Name: {
            title: 'Division',
            editor: {
              type: 'list',
              config: {
                list: this.division ? this.division.map((data: any) => { return { title: data.Division_Name, value: data._id } }) : []
              }
            }
          },
          Subject_Name: {
            title: 'Subject',
            editor: {
              type: 'list',
              config: {
                list: this.subject ? this.subject.map((data: any) => { return { title: data.Sub_Name, value: data._id } }) : []
              }
            }
          },
          Is_Active: {
            title: 'Active',
            type: 'custom',
            editable: false,
            renderComponent: MySwitchComponent,
            onComponentInitFunction(instance) {
              instance.save.subscribe(data => {
                that.http.put("http://localhost:8050/Admin/TimeTable", { _id: data.rowdata._id, Is_Active: data.value }).subscribe((data: any) => {
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


  postdata() {
    this.timetableform.value.From_Time = `${this.timetableform.value.From_Time.hour}:${this.timetableform.value.From_Time.minute}`
    this.timetableform.value.To_Time = `${this.timetableform.value.To_Time.hour}:${this.timetableform.value.To_Time.minute}`

    this.http.post("http://localhost:8050/Admin/TimeTable", this.timetableform.value).subscribe((data: any) => {
      if (data.Success) {
        this.toast.success(data.Success)
        this.fetchstan()
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
        that.http.delete("http://localhost:8050/Admin/TimeTable?_id=" + event.data._id).subscribe((data: any) => {
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
        that.http.put("http://localhost:8050/Admin/TimeTable", { ...event.newData, Course_ID: event.newData.Course_Name }).subscribe((data: any) => {
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
export const routedComponents = [MtimetableComponent];