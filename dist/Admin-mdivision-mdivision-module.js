(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-mdivision-mdivision-module"],{

/***/ "./src/app/Admin/mdivision/mdivision-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Admin/mdivision/mdivision-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MdivisionRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdivisionRoutingModule", function() { return MdivisionRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _mdivision_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdivision.component */ "./src/app/Admin/mdivision/mdivision.component.ts");





var routes = [
    {
        path: '',
        component: _mdivision_component__WEBPACK_IMPORTED_MODULE_2__["MdivisionComponent"],
    }
];
var MdivisionRoutingModule = /** @class */ (function () {
    function MdivisionRoutingModule() {
    }
    MdivisionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MdivisionRoutingModule });
    MdivisionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MdivisionRoutingModule_Factory(t) { return new (t || MdivisionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MdivisionRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MdivisionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MdivisionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();
var routedComponents = [_mdivision_component__WEBPACK_IMPORTED_MODULE_2__["MdivisionComponent"]];


/***/ }),

/***/ "./src/app/Admin/mdivision/mdivision.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Admin/mdivision/mdivision.component.ts ***!
  \********************************************************/
/*! exports provided: MdivisionComponent, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdivisionComponent", function() { return MdivisionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../switch/switch.component */ "./src/app/switch/switch.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");













function MdivisionComponent_div_1_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r6._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.Course_Name);
} }
function MdivisionComponent_div_1_label_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Course is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdivisionComponent_div_1_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var items_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", items_r7._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](items_r7.Name);
} }
function MdivisionComponent_div_1_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Standard is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdivisionComponent_div_1_label_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Division is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdivisionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add Division");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MdivisionComponent_div_1_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.postdata(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Course_ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Select Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MdivisionComponent_div_1_option_17_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MdivisionComponent_div_1_label_18_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Standard_ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Select Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, MdivisionComponent_div_1_option_26_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MdivisionComponent_div_1_label_27_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Division");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, MdivisionComponent_div_1_label_33_Template, 2, 0, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.divisionform);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.courses);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.is_submtted && (ctx_r0.getformvalue.Course_ID.errors == null ? null : ctx_r0.getformvalue.Course_ID.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.standards);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.is_submtted && (ctx_r0.getformvalue.Std_ID.errors == null ? null : ctx_r0.getformvalue.Std_ID.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.is_submtted && (ctx_r0.getformvalue.Division_Name.errors == null ? null : ctx_r0.getformvalue.Division_Name.errors.required));
} }
var MdivisionComponent = /** @class */ (function () {
    function MdivisionComponent(http, toast) {
        this.http = http;
        this.toast = toast;
        this.show = false;
        this.is_submtted = false;
        this.divisionform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Course_ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Std_ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Division_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    MdivisionComponent.prototype.fetchstan = function () {
        var _this = this;
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Division").subscribe(function (data) {
            _this.tbldata = data.map(function (value) {
                return {
                    '_id': value._id,
                    'Division_Name': value.Division_Name,
                    'Course_Name': value.Course_ID ? value.Course_ID.Course_Name : 'Deleted Course',
                    'Standard_Name': value.Std_ID ? value.Std_ID.Name : 'Deleted Standard',
                    'Created_On': value.Created_On.substr(0, 10),
                    'Is_Active': value.Is_Active,
                };
            });
            var that = _this;
            _this.alertsettings = {
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
                                list: _this.courses ? _this.courses.map(function (data) { return { title: data.Course_Name, value: data._id }; }) : []
                            }
                        }
                    },
                    Standard_Name: {
                        title: 'Standard',
                        editor: {
                            type: 'list',
                            config: {
                                list: _this.standards ? _this.standards.map(function (data) { return { title: data.Name, value: data._id }; }) : []
                            }
                        }
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
                                // tslint:disable-next-line: no-shadowed-variable
                                that.http.put("https://cooing-famous-iguanacolossus.glitch.me/Admin/Division", { _id: data.rowdata._id, Is_Active: data.value }).subscribe(function (data) {
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
                actions: {
                    add: false,
                },
                attr: {
                    class: "table table-responsive"
                },
            };
        });
    };
    MdivisionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Course").subscribe(function (data) { return _this.courses = data; });
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Standard").subscribe(function (data) { return _this.standards = data; });
        this.fetchstan();
    };
    Object.defineProperty(MdivisionComponent.prototype, "getformvalue", {
        get: function () {
            return this.divisionform.controls;
        },
        enumerable: true,
        configurable: true
    });
    MdivisionComponent.prototype.postdata = function () {
        var _this = this;
        this.is_submtted = true;
        if (this.divisionform.invalid) {
            return;
        }
        this.http.post("https://cooing-famous-iguanacolossus.glitch.me/Admin/Division", this.divisionform.value).subscribe(function (data) {
            if (data.Success) {
                _this.toast.success(data.Success);
                _this.fetchstan();
                _this.show = false;
            }
            else {
                _this.toast.error(data.Error);
            }
        });
    };
    MdivisionComponent.prototype.onDeleteConfirm = function (event) {
        var that = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
            if (data.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                event.confirm.reject();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
            else {
                console.log(event.data);
                that.http.delete("https://cooing-famous-iguanacolossus.glitch.me/Admin/Course?_id=" + event.data._id).subscribe(function (data) {
                    if (data.Error) {
                        that.toast.error(data.Error);
                    }
                    else {
                        that.toast.error(data.Success);
                        that.fetchstan();
                    }
                });
                event.confirm.resolve();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
            }
        });
    };
    //  For confirm action On Save
    MdivisionComponent.prototype.onSaveConfirm = function (event) {
        var that = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
            if (data.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                event.confirm.reject();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
            else {
                console.log(event.data);
                that.http.put("https://cooing-famous-iguanacolossus.glitch.me/Admin/Course", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.newData), { Course_ID: event.newData.Course_Name })).subscribe(function (data) {
                    if (data.Error) {
                        that.toast.error(data.Error);
                    }
                    else {
                        that.toast.success(data.Success);
                        that.fetchstan();
                        event.confirm.resolve(event.newData);
                    }
                });
                event.confirm.resolve();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Updated!', 'Your imaginary file has been Updated.', 'success');
            }
        });
    };
    MdivisionComponent.ɵfac = function MdivisionComponent_Factory(t) { return new (t || MdivisionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
    MdivisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MdivisionComponent, selectors: [["app-mdivision"]], decls: 15, vars: 3, consts: [[1, "row", "text-left"], ["class", "col-sm-12", 4, "ngIf"], ["id", "action"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "overflow", "hidden"], [1, "card-title", 2, "float", "left"], ["display", "inline", "href", "javascript:void(0)", 1, "btn", "btn-raised", "mr-1", "shadow-z-2", "btn-primary", 2, "float", "right", 3, "click"], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], [3, "settings", "source", "deleteConfirm", "editConfirm"], [1, "card-header"], [1, "card-title"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-body"], [1, "form-section"], [1, "row"], [1, "form-group", "col-md-6", "mb-2"], ["for", "Course_ID"], ["formControlName", "Course_ID", 1, "form-control"], ["selected", "selected", "disabled", "true", "value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], ["for", "Std_ID"], ["formControlName", "Std_ID", 1, "form-control"], ["for", "Division_Name"], ["type", "text", "formControlName", "Division_Name", "id", "Division_Name", "placeholder", "Division Name", 1, "form-control", "border-primary"], [1, "form-actions", "left"], ["type", "reset", 1, "btn", "btn-raised", "btn-warning", "mr-1"], [1, "ft-x"], ["type", "submit", 1, "btn", "btn-raised", "btn-primary"], [1, "fa", "fa-check-square-o"], [3, "value"], [1, "text-danger"]], template: function MdivisionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MdivisionComponent_div_1_Template, 41, 6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Manage Division");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdivisionComponent_Template_a_click_9_listener() { return ctx.show = !ctx.show; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Add New Division");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ng2-smart-table", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deleteConfirm", function MdivisionComponent_Template_ng2_smart_table_deleteConfirm_14_listener($event) { return ctx.onDeleteConfirm($event); })("editConfirm", function MdivisionComponent_Template_ng2_smart_table_editConfirm_14_listener($event) { return ctx.onSaveConfirm($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx.alertsettings)("source", ctx.tbldata);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL21kaXZpc2lvbi9tZGl2aXNpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
    return MdivisionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MdivisionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-mdivision',
                templateUrl: './mdivision.component.html',
                styleUrls: ['./mdivision.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();
var routedComponents = [MdivisionComponent];


/***/ }),

/***/ "./src/app/Admin/mdivision/mdivision.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Admin/mdivision/mdivision.module.ts ***!
  \*****************************************************/
/*! exports provided: MdivisionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdivisionModule", function() { return MdivisionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _mdivision_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdivision.component */ "./src/app/Admin/mdivision/mdivision.component.ts");
/* harmony import */ var _mdivision_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mdivision-routing.module */ "./src/app/Admin/mdivision/mdivision-routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/auth/token-interceptor.service */ "./src/app/shared/auth/token-interceptor.service.ts");










var MdivisionModule = /** @class */ (function () {
    function MdivisionModule() {
    }
    MdivisionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MdivisionModule });
    MdivisionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MdivisionModule_Factory(t) { return new (t || MdivisionModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptorService"],
                multi: true
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mdivision_routing_module__WEBPACK_IMPORTED_MODULE_3__["MdivisionRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ]] });
    return MdivisionModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MdivisionModule, { declarations: [_mdivision_component__WEBPACK_IMPORTED_MODULE_2__["MdivisionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _mdivision_routing_module__WEBPACK_IMPORTED_MODULE_3__["MdivisionRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MdivisionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _mdivision_routing_module__WEBPACK_IMPORTED_MODULE_3__["MdivisionRoutingModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
                ],
                declarations: [
                    _mdivision_component__WEBPACK_IMPORTED_MODULE_2__["MdivisionComponent"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                        useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptorService"],
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=Admin-mdivision-mdivision-module.js.map