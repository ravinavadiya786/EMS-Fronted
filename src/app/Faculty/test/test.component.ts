import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from "@angular/forms";
import swal from 'sweetalert2';

import { MySwitchComponent } from '../../switch/switch.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  productForm: FormGroup;
  subject: any;
  course: any;
  alertsettings;
  submitted = false;
  testData: any;
  public isCollapsed = true;


  constructor(private http: HttpClient, private fb: FormBuilder, private toast: ToastrService) { }


  ngOnInit() {
    this.productForm = this.fb.group({
      Subject_ID: new FormControl('', Validators.required),
      Course_ID: new FormControl('', Validators.required),
      Test_Name: new FormControl('', Validators.required),
      ArrQuestions: this.fb.array([
        this.fb.group({
          Question: new FormControl('', Validators.required),
          AnsA: new FormControl('', Validators.required),
          AnsB: new FormControl('', Validators.required),
          Correct_Ans: new FormControl('', Validators.required),
          AnsC: new FormControl('', Validators.required),
          AnsD: new FormControl('', Validators.required)
        })
      ])
    });

    // this.fetchstan();
  }

  fetchstan() {
    this.http.get("http://localhost:8050/Faculty/Test").subscribe((data: any) => {
      this.isCollapsed = true
      this.testData = data
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
          Test_Name: {
            title: 'Test Name',
          },
          Course_Name: {
            title: 'Course',
            editor: {
              type: 'list',
              config: {
                list: this.course && this.course.map((data: any) => { return { title: data.Course_Name, value: data._id } })
              }
            }
          },
          Sub_Name: {
            title: 'Subject',
            editor: {
              type: 'list',
              config: {
                list: this.subject && this.subject.map((data: any) => { return { title: data.Sub_Name, value: data._id } })
              }
            }
          },
          Created_On: {
            title: 'Created On',
          },
          Is_Active: {
            title: 'Active',
            type: 'custom',
            editable: false,
            renderComponent: MySwitchComponent,
            onComponentInitFunction(instance) {
              instance.save.subscribe(data => {
                that.http.put("http://localhost:8050/Faculty/Test", { _id: data.rowdata._id, Is_Active: data.value }).subscribe((data: any) => {
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
    return this.productForm.controls;
  }
  get sellingPoints() {
    return this.productForm.get("ArrQuestions") as FormArray;
  }
  
  GetsubjectBuCourse(id) {
    this.http.get(`http://localhost:8050/Admin/Subject/CourseWise/${id}`).subscribe((data: any) => this.subject = data)
  }
  ngAfterViewInit() {
    // this.http.get("http://localhost:8050/Admin/Subject").subscribe((data: any) => this.subject = data)
    this.http.get("http://localhost:8050/Admin/Course").subscribe((data: any) => {
      this.course = data
      this.fetchstan();
    })

  }

  postdata() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }

    this.http.post("http://localhost:8050/Faculty/Test", this.productForm.value).subscribe((data: any) => {
      if (data.Success) {
        this.toast.success(data.Success)
        this.fetchstan()
      } else {
        this.toast.error(data.Error);
      }
    })
  }

  AddQuestions() {
    this.sellingPoints.push(this.fb.group({
      Question: new FormControl('', Validators.required),
      AnsA: new FormControl('', Validators.required),
      AnsB: new FormControl('', Validators.required),
      Correct_Ans: new FormControl('', Validators.required),
      AnsC: new FormControl('', Validators.required),
      AnsD: new FormControl('', Validators.required)
    }));
  }

  RemoveQuestions(index) {
    this.sellingPoints.removeAt(index);
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
        that.http.delete("http://localhost:8050/Faculty/Test?_id=" + event.data._id).subscribe((data: any) => {
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
        that.http.put("http://localhost:8050/Faculty/Test", { ...event.newData, Course_ID: event.newData.Course_Name, Subject_ID: event.newData.Sub_Name }).subscribe((data: any) => {
          if (data.Error) {
            that.fetchstan()
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
