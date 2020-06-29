(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Comman-vattendace-vattendace-module"],{

/***/ "./src/app/Comman/vattendace/vattendace-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Comman/vattendace/vattendace-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: VattendaceRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VattendaceRoutingModule", function() { return VattendaceRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _vattendace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vattendace.component */ "./src/app/Comman/vattendace/vattendace.component.ts");





var routes = [
    {
        path: '',
        component: _vattendace_component__WEBPACK_IMPORTED_MODULE_2__["VattendaceComponent"],
    }
];
var VattendaceRoutingModule = /** @class */ (function () {
    function VattendaceRoutingModule() {
    }
    VattendaceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VattendaceRoutingModule });
    VattendaceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VattendaceRoutingModule_Factory(t) { return new (t || VattendaceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return VattendaceRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VattendaceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VattendaceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
var routedComponents = [_vattendace_component__WEBPACK_IMPORTED_MODULE_2__["VattendaceComponent"]];


/***/ }),

/***/ "./src/app/Comman/vattendace/vattendace.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Comman/vattendace/vattendace.component.ts ***!
  \***********************************************************/
/*! exports provided: VattendaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VattendaceComponent", function() { return VattendaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");












var VattendaceComponent = /** @class */ (function () {
    function VattendaceComponent(http, toast, AuthService) {
        this.http = http;
        this.toast = toast;
        this.AuthService = AuthService;
        this.url = 'https://cooing-famous-iguanacolossus.glitch.me/Faculty/Attendance';
        this.role = this.AuthService.getRole();
    }
    VattendaceComponent.prototype.fetchstan = function () {
        var _this = this;
        this.http.get(this.url).subscribe(function (data) {
            _this.AttendaceData = data.map(function (item) {
                var _a, _b, _c, _d, _e, _f;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { Date: dateformat__WEBPACK_IMPORTED_MODULE_6___default()(item.Date, "fullDate"), Student_Name: (_a = item.Student_Id) === null || _a === void 0 ? void 0 : _a.Name, Faculty_Name: (_b = item.Faculty_Id) === null || _b === void 0 ? void 0 : _b.Name, Course_Name: (_d = (_c = item.Student_Id) === null || _c === void 0 ? void 0 : _c.Course_id) === null || _d === void 0 ? void 0 : _d.Course_Name, Standard_Name: (_f = (_e = item.Student_Id) === null || _e === void 0 ? void 0 : _e.Standard_id) === null || _f === void 0 ? void 0 : _f.Name });
            });
            _this.alertsettings = {
                actions: {
                    add: false,
                    edit: false,
                    delete: _this.role === "Student" ? false : true
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
        });
    };
    VattendaceComponent.prototype.ngOnInit = function () {
        this.fetchstan();
    };
    VattendaceComponent.prototype.onDeleteConfirm = function (event) {
        var that = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
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
            if (data.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                event.confirm.reject();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
            else {
                console.log(event.data);
                that.http.delete("https://cooing-famous-iguanacolossus.glitch.me/Faculty/Attendance?_id=" + event.data._id).subscribe(function (data) {
                    if (data.Error) {
                        that.toast.error(data.Error);
                    }
                    else {
                        that.toast.error(data.Success);
                        that.fetchstan();
                    }
                });
                event.confirm.resolve();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
            }
        });
    };
    //  For confirm action On Save
    VattendaceComponent.prototype.onSaveConfirm = function (event) {
        var that = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
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
            if (data.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                event.confirm.reject();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
            else {
                console.log(event.data);
                that.http.put("https://cooing-famous-iguanacolossus.glitch.me/Faculty/Attendance", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.newData), { Course_ID: event.newData.Course_Name })).subscribe(function (data) {
                    if (data.Error) {
                        that.toast.error(data.Error);
                    }
                    else {
                        that.toast.success(data.Success);
                        // that.fetchstan()
                        event.confirm.resolve(event.newData);
                    }
                });
                event.confirm.resolve();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Updated!', 'Your imaginary file has been Updated.', 'success');
            }
        });
    };
    VattendaceComponent.ɵfac = function VattendaceComponent_Factory(t) { return new (t || VattendaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
    VattendaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VattendaceComponent, selectors: [["app-vattendace"]], decls: 7, vars: 2, consts: [[1, "row", "text-left"], [1, "col-sm-12"], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], [3, "settings", "source", "deleteConfirm", "editConfirm"]], template: function VattendaceComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ng2-smart-table", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deleteConfirm", function VattendaceComponent_Template_ng2_smart_table_deleteConfirm_6_listener($event) { return ctx.onDeleteConfirm($event); })("editConfirm", function VattendaceComponent_Template_ng2_smart_table_editConfirm_6_listener($event) { return ctx.onSaveConfirm($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx.alertsettings)("source", ctx.AttendaceData);
        } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbW1hbi92YXR0ZW5kYWNlL3ZhdHRlbmRhY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
    return VattendaceComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VattendaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-vattendace',
                templateUrl: './vattendace.component.html',
                styleUrls: ['./vattendace.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Comman/vattendace/vattendace.module.ts":
/*!********************************************************!*\
  !*** ./src/app/Comman/vattendace/vattendace.module.ts ***!
  \********************************************************/
/*! exports provided: VattendaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VattendaceModule", function() { return VattendaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _vattendace_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vattendace-routing.module */ "./src/app/Comman/vattendace/vattendace-routing.module.ts");
/* harmony import */ var _vattendace_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vattendace.component */ "./src/app/Comman/vattendace/vattendace.component.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/auth/token-interceptor.service */ "./src/app/shared/auth/token-interceptor.service.ts");









var VattendaceModule = /** @class */ (function () {
    function VattendaceModule() {
    }
    VattendaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VattendaceModule });
    VattendaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VattendaceModule_Factory(t) { return new (t || VattendaceModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptorService"],
                multi: true
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _vattendace_routing_module__WEBPACK_IMPORTED_MODULE_2__["VattendaceRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]] });
    return VattendaceModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VattendaceModule, { declarations: [_vattendace_component__WEBPACK_IMPORTED_MODULE_3__["VattendaceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _vattendace_routing_module__WEBPACK_IMPORTED_MODULE_2__["VattendaceRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VattendaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_vattendace_component__WEBPACK_IMPORTED_MODULE_3__["VattendaceComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _vattendace_routing_module__WEBPACK_IMPORTED_MODULE_2__["VattendaceRoutingModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptorService"],
                        multi: true
                    }
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=Comman-vattendace-vattendace-module.js.map