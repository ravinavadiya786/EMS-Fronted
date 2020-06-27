import { Component, OnInit } from "@angular/core"
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { ToastrService } from "ngx-toastr"
import { HttpClient } from "@angular/common/http"
import { MySwitchComponent } from "../../switch/switch.component"
import dateformat from 'dateformat';

@Component({
  selector: "app-assignment",
  templateUrl: "./assignment.component.html",
  styleUrls: ["./assignment.component.scss"],
})
export class AssignmentComponent implements OnInit {
  constructor(private http: HttpClient, private toast: ToastrService) { }

  assignmentform = new FormGroup({
    Sub_ID: new FormControl("", Validators.required),
    Submision_Date: new FormControl("", Validators.required),
    Title: new FormControl("", Validators.required),
  })
  minDate=new Date()
  subject: any
  assignmentData_settings: any
  Submited_Assignment_settings: any

  file: any
  is_submtted = false
  formData: FormData = new FormData()
  assignmentData: Array<any> = []
  Submited_Assignment: Array<any> = []
  show = false;
  isCollapsed = false;

  fetchstan() {
    this.http
      .get("https://education.serverless.social/Faculty/Assignment/Availble_Assignment")
      .subscribe((data: Array<any>) => {

        this.assignmentData = data.map(item => {
          return {
            ...item,
            Date: dateformat(item.Date, "dddd, mmmm dS"),
            Submision_Date: dateformat(item.Submision_Date, "dddd, mmmm dS"),
            Sub_ID: item.Sub_ID?.Sub_Name,
            Asmt_file: `<a href=${item.Asmt_file} target="_blank"><i class="ft-file-text font-medium-5"></i></a>`
          }
        })
        var that = this
        this.assignmentData_settings = {
          actions: {
            add: false,
            edit: false,
            delete: false,
          },
          columns: {
            Title: {
              title: "Assignment Name",
            },
            Submision_Date: {
              title: "Submision_Date",
            },
            Date: {
              title: "Created Date",
            },
            Sub_ID: {
              title: 'Subject',
            },
            Asmt_file: {
              title: "Assigment File",
              type: 'html',
            },
            Is_Active: {
              title: "Active",
              type: "custom",
              editable: false,
              renderComponent: MySwitchComponent,
              onComponentInitFunction(instance) {
                instance.save.subscribe((data) => {
                  that.http
                    .put("https://education.serverless.social/Faculty/Assignment", {
                      _id: data.rowdata._id,
                      Is_Active: data.value,
                    })
                    .subscribe((data: any) => {
                      if (data.Error) {
                        that.toast.error(data.Error)
                      } else {
                        that.toast.success(data.Success)
                        that.fetchstan()
                      }
                    })
                })
              },
            },
          },
          attr: {
            class: "table table-responsive",
          },
        }
      })

    this.http
      .get("https://education.serverless.social/Faculty/Assignment/Submited_Assignment")
      .subscribe((data: any) => {
        this.Submited_Assignment = data.map(item => {
          return {
            Title: item.AssignmentFaculty_ID?.Title,
            Submit_Date: dateformat(item.Submit_Date, "dddd, mmmm dS"),
            Created_on: dateformat(item.AssignmentFaculty_ID?.Date, "dddd, mmmm dS"),
            Submision_Date: dateformat(item.AssignmentFaculty_ID?.Submision_Date, "dddd, mmmm dS"),
            Sub_Name: item.AssignmentFaculty_ID?.Sub_ID?.Sub_Name,
            Student_Name: item.Student_ID?.Name,
            Asmt_file: `<a href=${item.AssignmentFaculty_ID?.Asmt_file} target="_blank"><i class="ft-file-text font-medium-5"></i></a>`,
            Stud_Asmt_file: `<a href=${item.Stud_Asmt_file} target="_blank"><i class="ft-file-text font-medium-5"></i></a>`
          }
        })
        this.Submited_Assignment_settings = {
          actions: {
            add: false,
            edit: false,
            delete: false,
          },
          columns: {
            Title: {
              title: "Assignment Name",
            },
            Student_Name: {
              title: "Student Name",
            },
            Sub_Name: {
              title: "Subject",
            },
            Asmt_file: {
              title: "Assigment File",
              type: 'html',
            },
            Stud_Asmt_file: {
              title: "Submited Assignment File",
              type: 'html',
            },
            Submit_Date: {
              title: "Submited date",
            },
            Created_on: {
              title: "Created Date",
            },
            Submision_Date: {
              title: 'Submission datae',
            },
          }
        }
      })
  }
  ngOnInit(): void {
    this.fetchstan()
  }

  ngAfterViewInit() {
    this.http
      .get("https://education.serverless.social/Admin/Subject")
      .subscribe((data: any) => (this.subject = data))
  }

  changefile(event) {
    this.file = event.target.files[0]
  }

  postdata() {
    this.is_submtted = true

    if (this.assignmentform.invalid && !this.file) {
      return
    }
    this.formData.append("Asmt_file", this.file)

    for (const property in this.assignmentform.value) {
      this.formData.append(property, this.assignmentform.value[property])
    }

    this.http
      .post("https://education.serverless.social/Faculty/Assignment", this.formData)
      .subscribe((data: any) => {
        if (data.Success) {
          this.toast.success(data.Success)
          this.fetchstan()
          this.show = false
        } else {
          this.toast.error(data.Error)
        }
      })
  }

  get getformvalue() {
    return this.assignmentform.controls
  }
}
