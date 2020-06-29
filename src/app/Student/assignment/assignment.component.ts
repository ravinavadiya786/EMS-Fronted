import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import dateformat from 'dateformat';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

    file: any
    id: string;
    Availble_Assignment: Array<any> = []
    Submited_Assignment: Array<any> = []
    formData: FormData = new FormData()
    isCollapsed = false;

    coulmns = [
        'Title',
        'Faculty',
        'Subject Name',
        'Assignment File',
        'Submision Date',
        'Created Date',
        'Submit Assignment',
    ]
    Submited_Assignment_coulmns = [
        'Assignment Name',
        'Submited Date',
        'Created Date',
        'Submision Date',
        'Faculty',
        'Subject',
        'Assigment File',
        'Submited Assignment File',
    ]

    constructor(public http: HttpClient, private toast: ToastrService, private modalService: NgbModal) { }

    fetchstan() {
        this.http
            .get("https://cooing-famous-iguanacolossus.glitch.me/Student/Assignment/Availble_Assignment")
            .subscribe((data: Array<any>) => {
                this.Availble_Assignment = data.map(item => {
                    return {
                        ...item,
                        Date: dateformat(item.Date, "dddd, mmmm dS"),
                        Submision_Date: dateformat(item.Submision_Date, "dddd, mmmm dS"),
                    }
                })
            })
    }

    ngOnInit(): void {
        this.fetchstan()
    }

    ngAfterViewInit() {
        this.http
            .get("https://cooing-famous-iguanacolossus.glitch.me/Student/Assignment/Submited_Assignment")
            .subscribe((data: Array<any>) => {
                this.Submited_Assignment = data.map(item => {
                    return {
                        Title: item.AssignmentFaculty_ID?.Title,
                        Submit_Date: dateformat(item.Submit_Date, "dddd, mmmm dS"),
                        Created_on: dateformat(item.AssignmentFaculty_ID?.Date, "dddd, mmmm dS"),
                        Submision_Date: dateformat(item.AssignmentFaculty_ID?.Submision_Date, "dddd, mmmm dS"),
                        Subject_Name: item.AssignmentFaculty_ID?.Sub_ID?.Sub_Name,
                        Faculty_Name: item.AssignmentFaculty_ID?.Faculty_ID?.Name,
                        Asmt_file: item.AssignmentFaculty_ID?.Asmt_file,
                        Stud_Asmt_file: item.Stud_Asmt_file
                    }
                })
            })
    }

    changefile(event) {
        this.file = event.target.files[0]
    }

    openmodel(content, id) {
        this.id = id
        this.modalService.open(content, { centered: true });
    }

    postdata() {
        this.formData.append("Asmt_file", this.file)
        this.formData.append("AssignmentFaculty_ID", this.id)

        this.http
            .post("https://cooing-famous-iguanacolossus.glitch.me/Student/Assignment", this.formData)
            .subscribe((data: any) => {
                if (data.Success) {
                    this.toast.success(data.Success)
                    this.modalService.dismissAll()
                    this.fetchstan()
                } else {
                    this.toast.error(data.Error)
                }
            })
    }
}
export const routedComponents = [AssignmentComponent];