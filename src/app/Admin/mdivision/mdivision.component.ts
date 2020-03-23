import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MySwitchComponent } from '../../switch/switch.component';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mdivision',
  templateUrl: './mdivision.component.html',
  styleUrls: ['./mdivision.component.scss']
})
export class MdivisionComponent implements OnInit {
  courses: any;
  tbldata: any;
  standards: any;
  alertsettings;
  show : boolean = false;

  constructor(private http: HttpClient, private toast: ToastrService) { }

  divisionform: FormGroup = new FormGroup({
    Course_ID: new FormControl(''),
    Std_ID: new FormControl(''),
    Division_Name: new FormControl(''),
  });


  fetchstan() {
    this.http.get("https://college-managment-system.herokuapp.com/Admin/Division").subscribe((data: any) => {

      this.tbldata = data.map((value: any) => {
        return {
          '_id': value._id,
          'Division_Name': value.Division_Name,
          'Course_Name': value.Course_ID ? value.Course_ID.Course_Name : 'Deleted Course',
          'Standard_Name': value.Std_ID ? value.Std_ID.Name : 'Deleted Standard',
          'Created_On': value.Created_On.substr(0, 10),
          'Is_Active': value.Is_Active,
        }
      })

      var that = this

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
          Division_Name: {
            title: 'Division Name',
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

          Created_On: {
            title: 'Created On',
          },
          Is_Active: {
            title: 'Active',
            type: 'custom',
            renderComponent: MySwitchComponent,
            onComponentInitFunction(instance) {
              instance.save.subscribe(data => {
                // tslint:disable-next-line: no-shadowed-variable
                that.http.put("https://college-managment-system.herokuapp.com/Admin/Division", { _id: data.rowdata._id, Is_Active: data.value }).subscribe((data: any) => {
                  console.log(data)
                  if (data.Error) {
                    that.toast.error(data.Error);
                  } else {
                    that.toast.success(data.Success);
                    that.fetchstan()

                  }
                });

              });
            }

          },

        },
        actions: {
          add: false,
        },
        attr: {
          class: "table table-responsive"
        },

      };


    })
  }
  ngOnInit() {
    this.http.get("https://college-managment-system.herokuapp.com/Admin/Course").subscribe((data: any) => this.courses = data)
    this.http.get("https://college-managment-system.herokuapp.com/Admin/Standard").subscribe((data: any) => this.standards = data)
    this.fetchstan()

  }

  postdata() {
    console.log(this.divisionform.value)
    this.http.post("https://college-managment-system.herokuapp.com/Admin/Division", this.divisionform.value).subscribe((data: any) => {
      if (data.Success) {
        this.toast.success(data.Success)
        this.fetchstan()
      } else {
        this.toast.error(data.Error);
      }
    })
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

        that.http.delete("https://college-managment-system.herokuapp.com/Admin/Course?_id=" + event.data._id).subscribe((data: any) => {
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
        that.http.put("https://college-managment-system.herokuapp.com/Admin/Course", { ...event.newData, Course_ID: event.newData.Course_Name }).subscribe((data: any) => {
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
export const routedComponents = [MdivisionComponent];







