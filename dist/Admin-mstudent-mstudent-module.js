(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-mstudent-mstudent-module"],{

/***/ "./src/app/Admin/mstudent/mstudent-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/Admin/mstudent/mstudent-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MstudentRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MstudentRoutingModule", function() { return MstudentRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _mstudent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mstudent.component */ "./src/app/Admin/mstudent/mstudent.component.ts");





var routes = [
    {
        path: '',
        component: _mstudent_component__WEBPACK_IMPORTED_MODULE_2__["MstudentComponent"],
    }
];
var MstudentRoutingModule = /** @class */ (function () {
    function MstudentRoutingModule() {
    }
    MstudentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MstudentRoutingModule });
    MstudentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MstudentRoutingModule_Factory(t) { return new (t || MstudentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MstudentRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MstudentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MstudentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();
var routedComponents = [_mstudent_component__WEBPACK_IMPORTED_MODULE_2__["MstudentComponent"]];


/***/ }),

/***/ "./src/app/Admin/mstudent/mstudent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Admin/mstudent/mstudent.component.ts ***!
  \******************************************************/
/*! exports provided: MstudentComponent, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MstudentComponent", function() { return MstudentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../switch/switch.component */ "./src/app/switch/switch.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");















var MstudentComponent = /** @class */ (function () {
    function MstudentComponent(http, Router, toast, AuthService) {
        this.http = http;
        this.Router = Router;
        this.toast = toast;
        this.AuthService = AuthService;
        this.lastClickTime = 0;
        this.role = this.AuthService.getRole();
    }
    MstudentComponent.prototype.fetchstan = function () {
        var _this = this;
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Student").subscribe(function (data) {
            _this.tbldata = data.map(function (item) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { Created_On: dateformat__WEBPACK_IMPORTED_MODULE_8___default()(item.Created_On, "fullDate"), Img_Path: "<img  src=" + item.Img_Path + " alt=\"avatar\" height=\"45\" width=\"50\" class=\"rounded-circle\" >" });
            });
            var that = _this;
            _this.alertsettings = {
                actions: {
                    add: false,
                    edit: false,
                    delete: _this.role === "Admin" ? true : false,
                },
                delete: {
                    confirmDelete: true,
                    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
                },
                columns: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ Img_Path: {
                        type: 'html',
                        title: 'Image',
                        filter: false,
                        width: "40px"
                    }, Name: {
                        title: 'Name',
                    }, PhNo: {
                        title: 'Phone No'
                    }, Created_On: {
                        title: 'Created On'
                    } }, (_this.role === "Admin" && {
                    Is_Active: {
                        title: 'Active',
                        type: 'custom',
                        renderComponent: _switch_switch_component__WEBPACK_IMPORTED_MODULE_5__["MySwitchComponent"],
                        onComponentInitFunction: function (instance) {
                            instance.save.subscribe(function (data) {
                                that.http.put("https://cooing-famous-iguanacolossus.glitch.me/Admin/Student", { _id: data.rowdata._id, Is_Active: data.value }).subscribe(function (data) {
                                    console.log(data);
                                    if (data.Error) {
                                        that.toast.error(data.Error);
                                    }
                                    else {
                                        that.toast.success(data.Success);
                                        that.fetchstan();
                                    }
                                });
                            });
                        }
                    }
                })),
                attr: {
                    class: "table table-responsive"
                },
            };
        });
    };
    MstudentComponent.prototype.ngOnInit = function () {
        this.fetchstan();
    };
    //  For confirm action On Delete
    MstudentComponent.prototype.onDeleteConfirm = function (event) {
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
                that.http.delete("https://cooing-famous-iguanacolossus.glitch.me/Admin/Student?_id=" + event.data._id).subscribe(function (data) {
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
    MstudentComponent.prototype.funct = function (value) {
        if (this.lastClickTime === 0) {
            this.lastClickTime = new Date().getTime();
        }
        else {
            var change = (new Date().getTime()) - this.lastClickTime;
            if (change < 400) {
                this.Router.navigateByUrl('/Comman/profile', { state: value.data });
            }
            this.lastClickTime = 0;
        }
    };
    MstudentComponent.ɵfac = function MstudentComponent_Factory(t) { return new (t || MstudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
    MstudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MstudentComponent, selectors: [["app-mstudent"]], decls: 13, vars: 2, consts: [["id", "action"], [1, "row", "text-left"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "overflow", "hidden"], [1, "card-title", 2, "float", "left"], ["display", "inline", 2, "float", "right"], [1, "ft-refresh-ccw", "font-large-1", "blue-grey", "darken-4", "mr-1", 3, "click"], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], [3, "settings", "source", "deleteConfirm", "userRowSelect"]], template: function MstudentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Manage Standard");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MstudentComponent_Template_i_click_8_listener() { return ctx.fetchstan(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ng2-smart-table", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deleteConfirm", function MstudentComponent_Template_ng2_smart_table_deleteConfirm_12_listener($event) { return ctx.onDeleteConfirm($event); })("userRowSelect", function MstudentComponent_Template_ng2_smart_table_userRowSelect_12_listener($event) { return ctx.funct($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx.alertsettings)("source", ctx.tbldata);
        } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableComponent"]], styles: [".ng2-smart-pagination.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  line-height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vbXN0dWRlbnQvRzpcXFJhaiBFTVMgUHJvamVjdFxcQW5ndWxhcl9FTVMvc3JjXFxhcHBcXEFkbWluXFxtc3R1ZGVudFxcbXN0dWRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0FkbWluL21zdHVkZW50L21zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksaUJBQWlCO0FDRDdCIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vbXN0dWRlbnQvbXN0dWRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmcyLXNtYXJ0LXBhZ2luYXRpb257XG4gICAgJi5wYWdpbmF0aW9ue1xuICAgICAgICAucGFnZS1saW5re1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIubmcyLXNtYXJ0LXBhZ2luYXRpb24ucGFnaW5hdGlvbiAucGFnZS1saW5rIHtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG59XG4iXX0= */"] });
    return MstudentComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MstudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-mstudent',
                templateUrl: './mstudent.component.html',
                styleUrls: ['./mstudent.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, null); })();
var routedComponents = [MstudentComponent];


/***/ }),

/***/ "./src/app/Admin/mstudent/mstudent.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Admin/mstudent/mstudent.module.ts ***!
  \***************************************************/
/*! exports provided: MstudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MstudentModule", function() { return MstudentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _mstudent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mstudent.component */ "./src/app/Admin/mstudent/mstudent.component.ts");
/* harmony import */ var _mstudent_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mstudent-routing.module */ "./src/app/Admin/mstudent/mstudent-routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/auth/token-interceptor.service */ "./src/app/shared/auth/token-interceptor.service.ts");









var MstudentModule = /** @class */ (function () {
    function MstudentModule() {
    }
    MstudentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MstudentModule });
    MstudentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MstudentModule_Factory(t) { return new (t || MstudentModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptorService"],
                multi: true
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mstudent_routing_module__WEBPACK_IMPORTED_MODULE_3__["MstudentRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ]] });
    return MstudentModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MstudentModule, { declarations: [_mstudent_component__WEBPACK_IMPORTED_MODULE_2__["MstudentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _mstudent_routing_module__WEBPACK_IMPORTED_MODULE_3__["MstudentRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MstudentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_mstudent_component__WEBPACK_IMPORTED_MODULE_2__["MstudentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _mstudent_routing_module__WEBPACK_IMPORTED_MODULE_3__["MstudentRoutingModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["TokenInterceptorService"],
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=Admin-mstudent-mstudent-module.js.map