import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import { MySwitchComponent } from '../../switch/switch.component';
import { Router } from "@angular/router";
import { AuthService } from '../../shared/auth/auth.service'
import dateformat from 'dateformat';

@Component({
    selector: 'app-mstudent',
    templateUrl: './mstudent.component.html',
    styleUrls: ['./mstudent.component.scss']
})
export class MstudentComponent implements OnInit {
    tbldata: any;
    alertsettings: object;
    lastClickTime: number = 0;
    role: string
    constructor(public http: HttpClient, private Router: Router, private toast: ToastrService, private AuthService: AuthService) {
        this.role = this.AuthService.getRole()
    }


    fetchstan() {
        this.http.get("https://education.serverless.social/Admin/Student").subscribe((data: any) => {
            this.tbldata = data.map(item => {
                return {
                    ...item,
                    Created_On: dateformat(item.Created_On, "fullDate"),
                    Img_Path: `<img  src=${item.Img_Path} alt="avatar" height="45" width="50" class="rounded-circle" >`
                }
            })
            var that = this

            this.alertsettings = {
                actions: {
                    add: false,
                    edit: false,
                    delete: this.role === "Admin" ? true : false,
                },
                delete: {
                    confirmDelete: true,
                    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
                },
                columns: {
                    Img_Path: {
                        type: 'html',
                        title: 'Image',
                        filter: false,
                        width: "40px"
                    },
                    Name: {
                        title: 'Name',
                    },
                    PhNo : {
                        title: 'Phone No'
                    },
                    Created_On: {
                        title: 'Created On'
                    },
                    ...(this.role === "Admin" && {
                        Is_Active: {
                            title: 'Active',
                            type: 'custom',
                            renderComponent: MySwitchComponent,
                            onComponentInitFunction(instance) {
                                instance.save.subscribe((data: any) => {
                                    that.http.put("https://education.serverless.social/Admin/Student", { _id: data.rowdata._id, Is_Active: data.value }).subscribe((data: any) => {
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

                        }
                    }),
                },

                attr: {
                    class: "table table-responsive"
                },

            }
        })
    }

    ngOnInit() {
        this.fetchstan()
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
                console.log(event.data)

                that.http.delete("https://education.serverless.social/Admin/Student?_id=" + event.data._id).subscribe((data: any) => {
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

    funct(value) {
        if (this.lastClickTime === 0) {
            this.lastClickTime = new Date().getTime();
        } else {
            const change = (new Date().getTime()) - this.lastClickTime;
            if (change < 400) {
                this.Router.navigateByUrl('/Comman/profile', { state: value.data });
            }
            this.lastClickTime = 0;
        }
    }



}
export const routedComponents = [MstudentComponent];

