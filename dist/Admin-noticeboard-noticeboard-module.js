(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-noticeboard-noticeboard-module"],{

/***/ "./src/app/Admin/noticeboard/noticeboard-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Admin/noticeboard/noticeboard-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NoticeBoardRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeBoardRoutingModule", function() { return NoticeBoardRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _noticeboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticeboard.component */ "./src/app/Admin/noticeboard/noticeboard.component.ts");





var routes = [
    {
        path: '',
        component: _noticeboard_component__WEBPACK_IMPORTED_MODULE_2__["NoticeBoardComponent"],
    }
];
var NoticeBoardRoutingModule = /** @class */ (function () {
    function NoticeBoardRoutingModule() {
    }
    NoticeBoardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NoticeBoardRoutingModule });
    NoticeBoardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NoticeBoardRoutingModule_Factory(t) { return new (t || NoticeBoardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return NoticeBoardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NoticeBoardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticeBoardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();
var routedComponents = [_noticeboard_component__WEBPACK_IMPORTED_MODULE_2__["NoticeBoardComponent"]];


/***/ }),

/***/ "./src/app/Admin/noticeboard/noticeboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Admin/noticeboard/noticeboard.component.ts ***!
  \************************************************************/
/*! exports provided: NoticeBoardComponent, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeBoardComponent", function() { return NoticeBoardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");













function NoticeBoardComponent_ng_template_0_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Title Must Be valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NoticeBoardComponent_ng_template_0_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Descriptions Must Be valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NoticeBoardComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoticeBoardComponent_ng_template_0_Template_button_click_3_listener() { var modal_r3 = ctx.$implicit; return modal_r3.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NoticeBoardComponent_ng_template_0_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.submitForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "fieldset", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NoticeBoardComponent_ng_template_0_small_12_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "fieldset", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NoticeBoardComponent_ng_template_0_small_17_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.ModalTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.myForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.myForm.controls.Title.valid && ctx_r1.myForm.controls.Title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.myForm.controls.Desc.valid && ctx_r1.myForm.controls.Desc.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.myForm.valid);
} }
function NoticeBoardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoticeBoardComponent_div_6_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var item_r9 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return ctx_r10.handleupdate(item_r9._id, item_r9.Title, item_r9.Desc, _r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoticeBoardComponent_div_6_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var item_r9 = ctx.$implicit; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.handledelete(item_r9._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r9.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.Desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.Date);
} }
var NoticeBoardComponent = /** @class */ (function () {
    function NoticeBoardComponent(modalService, formBuilder, http, toast) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.ModalTitle = '';
        this.isupdate = false;
    }
    // id: string;
    NoticeBoardComponent.prototype.fetchstan = function () {
        var _this = this;
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Notice_Borad").subscribe(function (data) {
            _this.tbldata = data.map(function (value) {
                return {
                    '_id': value._id,
                    'Title': value.Title,
                    'Faculty_ID': value.Faculty_ID ? value.Faculty_ID.Course_Name : '',
                    'Desc': value.Desc,
                    'Date': value.Date.substr(0, 10)
                };
            });
        });
    };
    NoticeBoardComponent.prototype.ngOnInit = function () {
        this.fetchstan();
        this.myForm = this.formBuilder.group({
            Title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        if (this.id === 0) {
            this.ModalTitle = "Add Task";
        }
        else {
            this.ModalTitle = "Edit Task";
        }
    };
    NoticeBoardComponent.prototype.openmodel = function (content) {
        this.modalService.open(content, { centered: true });
    };
    NoticeBoardComponent.prototype.handledelete = function (id) {
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
            else {
                that.http.delete("https://cooing-famous-iguanacolossus.glitch.me/Admin/Notice_Borad?_id=" + id).subscribe(function (data) {
                    if (data.Error) {
                        that.toast.error(data.Error);
                    }
                    else {
                        that.toast.error(data.Success);
                        that.fetchstan();
                    }
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
            }
        });
    };
    NoticeBoardComponent.prototype.handleupdate = function (id, title, desc, content) {
        this.myForm = this.formBuilder.group({
            Title: [title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Desc: [desc, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.modalService.open(content, { centered: true });
        this.id = id;
        this.isupdate = true;
    };
    NoticeBoardComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.isupdate) {
            this.isupdate = false;
            this.http.put("https://cooing-famous-iguanacolossus.glitch.me/Admin/Notice_Borad", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.myForm.value), { _id: this.id })).subscribe(function (data) {
                if (data.Error) {
                    _this.toast.error(data.Error);
                }
                else {
                    _this.toast.success(data.Success);
                    _this.modalService.dismissAll();
                    _this.myForm.reset();
                    _this.fetchstan();
                }
            });
        }
        else {
            this.http.post("https://cooing-famous-iguanacolossus.glitch.me/Admin/Notice_Borad", this.myForm.value).subscribe(function (data) {
                if (data.Success) {
                    _this.toast.success(data.Success);
                    _this.modalService.dismissAll();
                    _this.myForm.reset();
                    _this.fetchstan();
                }
                else {
                    _this.toast.error(data.Error);
                }
            });
        }
    };
    NoticeBoardComponent.ɵfac = function NoticeBoardComponent_Factory(t) { return new (t || NoticeBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
    NoticeBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NoticeBoardComponent, selectors: [["app-noticeboard"]], decls: 9, vars: 1, consts: [["class", "fade shadow-z-2 "], ["content", ""], [1, "btn", "btn-primary", "float-right", "btn-block", "btn-raised", "gradient-mint", "shadow-z-2", 3, "click"], [4, "ngFor", "ngForOf"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "modal-body", "taskboard-modal"], [1, "container"], [1, "form-group", "position-relative", "has-icon-left"], ["type", "text", "formControlName", "Title", "id", "todoTitle", "placeholder", "Title", "required", "", 1, "form-control"], ["class", "form-text text-muted danger ng-star-inserted text-center", 4, "ngIf"], [1, "form-control-position", "control-position-right"], [1, "ft-image"], ["type", "text", "formControlName", "Desc", "id", "todoMessage", "placeholder", "Descriptions", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "submit", 1, "btn", "btn-success", "float-right", "btn-block", "btn-raised", "shadow-z-1", 3, "disabled"], [1, "form-text", "text-muted", "danger", "ng-star-inserted", "text-center"], [1, "card", "w-100", "shadow-z-2"], [1, "card-header"], [1, "card-title", "text-center"], [1, "ft-edit", "float-right", "m-2", 3, "click"], [1, "ft-trash-2", "float-right", "m-2", 3, "click"], ["aria-expanded", "true", 1, "card-content", "m-0"], [1, "card-body"], [1, "card-text"], [1, "card-footer", "m-0"], [1, "text-muted", "pt-1", "text-warning"]], template: function NoticeBoardComponent_Template(rf, ctx) { if (rf & 1) {
            var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NoticeBoardComponent_ng_template_0_Template, 23, 5, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoticeBoardComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return ctx.openmodel(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Add Notice\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NoticeBoardComponent_div_6_Template, 15, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tbldata);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL25vdGljZWJvYXJkL25vdGljZWJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return NoticeBoardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NoticeBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-noticeboard',
                templateUrl: './noticeboard.component.html',
                styleUrls: ['./noticeboard.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();
var routedComponents = [NoticeBoardComponent];


/***/ }),

/***/ "./src/app/Admin/noticeboard/noticeboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Admin/noticeboard/noticeboard.module.ts ***!
  \*********************************************************/
/*! exports provided: NoticeBoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeBoardModule", function() { return NoticeBoardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _noticeboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticeboard.component */ "./src/app/Admin/noticeboard/noticeboard.component.ts");
/* harmony import */ var _noticeboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noticeboard-routing.module */ "./src/app/Admin/noticeboard/noticeboard-routing.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/auth/token-interceptor.service */ "./src/app/shared/auth/token-interceptor.service.ts");










var NoticeBoardModule = /** @class */ (function () {
    function NoticeBoardModule() {
    }
    NoticeBoardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NoticeBoardModule });
    NoticeBoardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NoticeBoardModule_Factory(t) { return new (t || NoticeBoardModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["TokenInterceptorService"],
                multi: true
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _noticeboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["NoticeBoardRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ]] });
    return NoticeBoardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NoticeBoardModule, { declarations: [_noticeboard_component__WEBPACK_IMPORTED_MODULE_2__["NoticeBoardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _noticeboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["NoticeBoardRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticeBoardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _noticeboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["NoticeBoardRoutingModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
                ],
                declarations: [_noticeboard_component__WEBPACK_IMPORTED_MODULE_2__["NoticeBoardComponent"]],
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
//# sourceMappingURL=Admin-noticeboard-noticeboard-module.js.map