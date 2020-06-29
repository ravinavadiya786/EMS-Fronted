(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-mfaculty-mfaculty-module"],{

/***/ "./src/app/Admin/mfaculty/mfaculty-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/Admin/mfaculty/mfaculty-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MfacultyRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MfacultyRoutingModule", function() { return MfacultyRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _mfaculty_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mfaculty.component */ "./src/app/Admin/mfaculty/mfaculty.component.ts");





var routes = [
    {
        path: '',
        component: _mfaculty_component__WEBPACK_IMPORTED_MODULE_2__["MfacultyComponent"],
    }
];
var MfacultyRoutingModule = /** @class */ (function () {
    function MfacultyRoutingModule() {
    }
    MfacultyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MfacultyRoutingModule });
    MfacultyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MfacultyRoutingModule_Factory(t) { return new (t || MfacultyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MfacultyRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MfacultyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfacultyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
var routedComponents = [_mfaculty_component__WEBPACK_IMPORTED_MODULE_2__["MfacultyComponent"]];


/***/ }),

/***/ "./src/app/Admin/mfaculty/mfaculty.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Admin/mfaculty/mfaculty.component.ts ***!
  \******************************************************/
/*! exports provided: MfacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MfacultyComponent", function() { return MfacultyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../switch/switch.component */ "./src/app/switch/switch.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");











var MfacultyComponent = /** @class */ (function () {
    function MfacultyComponent(http, Router, toast) {
        this.http = http;
        this.Router = Router;
        this.toast = toast;
        this.lastClickTime = 0;
    }
    MfacultyComponent.prototype.fetchstan = function () {
        var _this = this;
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Faculty").subscribe(function (data) {
            _this.tbldata = data;
            var that = _this;
            _this.alertsettings = {
                actions: {
                    add: false,
                    edit: false
                },
                delete: {
                    confirmDelete: true,
                    deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
                },
                columns: {
                    Name: {
                        title: 'Name',
                    },
                    Created_On: {
                        title: 'Created On',
                    },
                    Is_Active: {
                        title: 'Active',
                        type: 'custom',
                        renderComponent: _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__["MySwitchComponent"],
                        onComponentInitFunction: function (instance) {
                            instance.save.subscribe(function (data) {
                                that.http.put("https://cooing-famous-iguanacolossus.glitch.me/Admin/Faculty", { _id: data.rowdata._id, Is_Active: data.value }).subscribe(function (data) {
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
                    },
                },
                attr: {
                    class: "table table-responsive"
                },
            };
        });
    };
    MfacultyComponent.prototype.ngOnInit = function () {
        this.fetchstan();
    };
    //  For confirm action On Delete
    MfacultyComponent.prototype.onDeleteConfirm = function (event) {
        var that = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
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
            if (data.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) {
                event.confirm.reject();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
            else {
                console.log(event.data);
                that.http.delete("https://cooing-famous-iguanacolossus.glitch.me/Admin/Faculty?_id=" + event.data._id).subscribe(function (data) {
                    if (data.Error) {
                        that.toast.error(data.Error);
                    }
                    else {
                        that.toast.error(data.Success);
                        that.fetchstan();
                    }
                });
                event.confirm.resolve();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
            }
        });
    };
    MfacultyComponent.prototype.funct = function (value) {
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
    MfacultyComponent.ɵfac = function MfacultyComponent_Factory(t) { return new (t || MfacultyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
    MfacultyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MfacultyComponent, selectors: [["app-mfaculty"]], decls: 13, vars: 2, consts: [["id", "action"], [1, "row", "text-left"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "overflow", "hidden"], [1, "card-title", 2, "float", "left"], ["display", "inline", 2, "float", "right"], [1, "ft-refresh-ccw", "font-large-1", "blue-grey", "darken-4", "mr-1", 3, "click"], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], [3, "settings", "source", "deleteConfirm", "userRowSelect"]], template: function MfacultyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Manage Standard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfacultyComponent_Template_i_click_8_listener() { return ctx.fetchstan(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ng2-smart-table", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteConfirm", function MfacultyComponent_Template_ng2_smart_table_deleteConfirm_12_listener($event) { return ctx.onDeleteConfirm($event); })("userRowSelect", function MfacultyComponent_Template_ng2_smart_table_userRowSelect_12_listener($event) { return ctx.funct($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.alertsettings)("source", ctx.tbldata);
        } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableComponent"]], styles: [".ng2-smart-pagination.pagination[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%] {\n  line-height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vbWZhY3VsdHkvRzpcXFJhaiBFTVMgUHJvamVjdFxcQW5ndWxhcl9FTVMvc3JjXFxhcHBcXEFkbWluXFxtZmFjdWx0eVxcbWZhY3VsdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0FkbWluL21mYWN1bHR5L21mYWN1bHR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksaUJBQWlCO0FDRDdCIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vbWZhY3VsdHkvbWZhY3VsdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmcyLXNtYXJ0LXBhZ2luYXRpb257XG4gICAgJi5wYWdpbmF0aW9ue1xuICAgICAgICAucGFnZS1saW5re1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm5nMi1zbWFydC1wYWdpbmF0aW9uLnBhZ2luYXRpb24gLnBhZ2UtbGluayB7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xufVxuIl19 */"] });
    return MfacultyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfacultyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mfaculty',
                templateUrl: './mfaculty.component.html',
                styleUrls: ['./mfaculty.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Admin/mfaculty/mfaculty.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Admin/mfaculty/mfaculty.module.ts ***!
  \***************************************************/
/*! exports provided: MfacultyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MfacultyModule", function() { return MfacultyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _mfaculty_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mfaculty-routing.module */ "./src/app/Admin/mfaculty/mfaculty-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/auth/token-interceptor.service */ "./src/app/shared/auth/token-interceptor.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _mfaculty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mfaculty.component */ "./src/app/Admin/mfaculty/mfaculty.component.ts");









var MfacultyModule = /** @class */ (function () {
    function MfacultyModule() {
    }
    MfacultyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MfacultyModule });
    MfacultyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MfacultyModule_Factory(t) { return new (t || MfacultyModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptorService"],
                multi: true
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mfaculty_routing_module__WEBPACK_IMPORTED_MODULE_2__["MfacultyRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ]] });
    return MfacultyModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MfacultyModule, { declarations: [_mfaculty_component__WEBPACK_IMPORTED_MODULE_7__["MfacultyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _mfaculty_routing_module__WEBPACK_IMPORTED_MODULE_2__["MfacultyRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfacultyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_mfaculty_component__WEBPACK_IMPORTED_MODULE_7__["MfacultyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _mfaculty_routing_module__WEBPACK_IMPORTED_MODULE_2__["MfacultyRoutingModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptorService"],
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=Admin-mfaculty-mfaculty-module.js.map