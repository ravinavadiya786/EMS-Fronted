(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Admin-dashboard-dashbord-module"],{

/***/ "./src/app/Admin/dashboard/dashbord-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/Admin/dashboard/dashbord-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MfacultySubRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MfacultySubRoutingModule", function() { return MfacultySubRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _dashbord_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashbord.component */ "./src/app/Admin/dashboard/dashbord.component.ts");





var routes = [
    {
        path: '',
        component: _dashbord_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
    }
];
var MfacultySubRoutingModule = /** @class */ (function () {
    function MfacultySubRoutingModule() {
    }
    MfacultySubRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MfacultySubRoutingModule });
    MfacultySubRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MfacultySubRoutingModule_Factory(t) { return new (t || MfacultySubRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MfacultySubRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MfacultySubRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfacultySubRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();
var routedComponents = [_dashbord_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]];


/***/ }),

/***/ "./src/app/Admin/dashboard/dashbord.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Admin/dashboard/dashbord.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function DashboardComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Date ? item_r1.Date.substr(0, 10) : "nol");
} }
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.courses = 0;
        this.students = 0;
        this.divisions = 0;
        this.standard = 0;
        this.subject = 0;
        this.faculty = 0;
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Notice_Borad").subscribe(function (data) {
            _this.tbldata = data;
            _this.tbldata = _this.tbldata.sort(function (a, b) {
                return new Date(b.Date).getTime() - new Date(a.Date).getTime();
            });
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Standard").subscribe(function (data) { return _this.standard = data.length; });
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Course").subscribe(function (data) { return _this.courses = data.length; });
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Student").subscribe(function (data) { return _this.students = data.length; });
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Faculty").subscribe(function (data) { return _this.faculty = data.length; });
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Division").subscribe(function (data) { return _this.divisions = data.length; });
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Subject").subscribe(function (data) { return _this.subject = data.length; });
    };
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashbord"]], decls: 83, vars: 11, consts: [[1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-12"], [1, "card", "bg-primary"], [1, "card-content"], [1, "card-body", "pt-2", "pb-0"], [1, "media"], [1, "media-body", "white", "text-left"], [1, "font-large-1", "mb-0"], [1, "media-right", "white", "text-right"], [1, "icon-user", "font-large-1"], ["id", "Widget-line-chart", 1, "height-75", "WidgetlineChart", "WidgetlineChartShadow", "mb-3"], [1, "card", "bg-warning"], [1, "icon-users", "font-large-1"], ["id", "Widget-line-chart2", 1, "height-75", "WidgetlineChart", "WidgetlineChartShadow", "mb-3"], [1, "card", "bg-success"], [1, "icon-graph", "font-large-1"], [1, "card", "bg-danger"], [1, "icon-wallet", "font-large-1"], ["contenteditable", "", 1, "divider", "line", "glow", "m-2", "text-center", "mt-5", "mb-5", "text-info", "text-bold-700"], [4, "ngFor", "ngForOf"], [1, "card", "w-100", "corners", "shadow-z-2"], [1, "card-header"], [1, "card-title", "text-center"], ["aria-expanded", "true", 1, "card-content", "m-0"], [1, "card-body"], [1, "card-text"], [1, "card-footer", "m-0"], [1, "text-muted", "pt-1", "ml-3", "text-warning"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total Students");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total Faculty");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Total Courses");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Total Standards");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Total Divisions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Total Subject");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Recents NoticeBoard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, DashboardComponent_div_81_Template, 12, 3, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "slice");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.students);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.faculty || 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.courses);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.standard);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.divisions);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subject);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](82, 7, ctx.tbldata, 0, 5));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".divider[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.divider[_ngcontent-%COMP%]:before, .divider[_ngcontent-%COMP%]:after {\n  content: \"\";\n  flex: 1;\n}\n\n.line[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 1em -1em;\n}\n\n.line[_ngcontent-%COMP%]:before, .line[_ngcontent-%COMP%]:after {\n  height: 1px;\n  margin: 0 1em;\n}\n\n.glow[_ngcontent-%COMP%]:before, .glow[_ngcontent-%COMP%]:after {\n  height: 6px;\n  -webkit-filter: blur(5px);\n  border-radius: 5px;\n}\n\n.glow[_ngcontent-%COMP%]:before {\n  background: linear-gradient(to right, blue, hotpink);\n}\n\n.glow[_ngcontent-%COMP%]:after {\n  background: linear-gradient(to left, blue, hotpink);\n}\n\n.corners[_ngcontent-%COMP%] {\n  font-family: arial;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 10px;\n  padding-top: 40px;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);\n}\n\n\n\n.corners[_ngcontent-%COMP%]:after, .corners[_ngcontent-%COMP%]:before {\n  background: #e6e6e6;\n  content: '';\n  height: 50px;\n  position: absolute;\n  top: -25px;\n  width: 100px;\n  box-shadow: 0 5px 10px -7px rgba(0, 0, 0, 0.5);\n}\n\n.corners[_ngcontent-%COMP%]:after {\n  left: -50px;\n  transform: rotate(-45deg);\n}\n\n.corners[_ngcontent-%COMP%]:before {\n  right: -50px;\n  transform: rotate(45deg);\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: auto;\n}\n\nngb-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  display: flex !important;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  z-index: -1;\n}\n\n.carousel-item.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  z-index: 10;\n}\n\n.carousel-control-prev[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\n.carousel-control-next[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\n.carousel-indicators[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQWRtaW4vZGFzaGJvYXJkL0c6XFxSYWogRU1TIFByb2plY3RcXEFuZ3VsYXJfRU1TL3NyY1xcYXBwXFxBZG1pblxcZGFzaGJvYXJkXFxkYXNoYm9yZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWRtaW4vZGFzaGJvYXJkL2Rhc2hib3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtBQ0RmOztBREFBO0VBS0ksV0FBVztFQUNYLE9BQU87QUNEWDs7QURJQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUNEbEI7O0FEREE7RUFNSSxXQUFXO0VBQ1gsYUFBYTtBQ0RqQjs7QURLQTtFQUdJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FDSnRCOztBRERBO0VBU0ksb0RBQW9EO0FDSnhEOztBRExBO0VBYUksbURBQW1EO0FDSnZEOztBRE9BO0VBSUUsa0JBQWlCO0VBQUUsZUFBYztFQUFFLGlCQUFnQjtFQUFFLGFBQVk7RUFBRSxpQkFBZ0I7RUFHM0Usd0NBQXNDO0FDSGhEOztBRE1BLGtCQUFBOztBQUNBOztFQUVFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUdKLDhDQUE0QztBQ0h0RDs7QURLQTtFQUNFLFdBQVc7RUFLSCx5QkFBeUI7QUNGbkM7O0FESUE7RUFDRSxZQUFZO0VBS0osd0JBQXdCO0FDRGxDOztBREdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQWE7QUNBZjs7QURHQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FDQWY7O0FER0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQ0FqQjs7QURHQTtFQUNFLGlCQUFpQjtBQ0FuQjs7QURHQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHFEQUFxRDtFQUNyRCxXQUFXO0FDQWI7O0FER0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFdBQVc7QUNBYjs7QURHQTtFQUNHLFdBQVc7QUNBZDs7QURJQTtFQUNHLFdBQVc7QUNEZDs7QURJQTtFQUNFLFdBQVc7QUNEYiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL2Rhc2hib2FyZC9kYXNoYm9yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9zY3NzL2dyYWRpZW50LXZhcmlhYmxlc1wiO1xuXG4uZGl2aWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBmbGV4OiAxO1xuICB9XG59XG4ubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMWVtIC0xZW07XG4gIFxuICAmOmJlZm9yZSxcbiAgJjphZnRlciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAwIDFlbTtcbiAgfVxufVxuXG4uZ2xvdyB7XG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuICBcbiAgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgYmx1ZSwgaG90cGluayk7XG4gIH1cbiAgXG4gICY6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBibHVlLCBob3RwaW5rKTtcbiAgfVxufVxuLmNvcm5lcnMgeyBcbiAgLy8gYmFja2dyb3VuZDogI0ZGRjtcbiAgLy8gbWFyZ2luOiA1MHB4IGF1dG87XG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6YXJpYWw7IGZvbnQtc2l6ZToxNHB4OyBmb250LXdlaWdodDpib2xkOyBwYWRkaW5nOjEwcHg7IHBhZGRpbmctdG9wOjQwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggN3B4IGhzbGEoMCwwJSwwJSwuMik7XG4gICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggN3B4IGhzbGEoMCwwJSwwJSwuMik7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggN3B4IGhzbGEoMCwwJSwwJSwuMik7XG59XG5cbi8qIENvcm5lciBFZmZlY3QgKi9cbi5jb3JuZXJzOmFmdGVyLFxuLmNvcm5lcnM6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgY29udGVudDogJyc7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yNXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCAtN3B4IGhzbGEoMCwwJSwwJSwuNSk7XG4gICAgIC1tb3otYm94LXNoYWRvdzogMCA1cHggMTBweCAtN3B4IGhzbGEoMCwwJSwwJSwuNSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAtN3B4IGhzbGEoMCwwJSwwJSwuNSk7XG59XG4uY29ybmVyczphZnRlciB7XG4gIGxlZnQ6IC01MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cbi5jb3JuZXJzOmJlZm9yZSB7XG4gIHJpZ2h0OiAtNTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxubmdiLWNhcm91c2VsIHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogIGF1dG87XG59XG5cbm5nYi1jYXJvdXNlbCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubmdiLWNhcm91c2VsIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS4ycyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAxLjJzO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmNhcm91c2VsLWl0ZW0uYWN0aXZle1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gICB6LWluZGV4OiAyMDtcbn1cblxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgIHotaW5kZXg6IDIwO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9yc3tcbiAgei1pbmRleDogMjA7XG59XG4vL0xpbmUgQ2hhcnQgMSBDU1MgRW5kc1xuIiwiLmRpdmlkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2aWRlcjpiZWZvcmUsIC5kaXZpZGVyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZmxleDogMTtcbn1cblxuLmxpbmUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDFlbSAtMWVtO1xufVxuXG4ubGluZTpiZWZvcmUsIC5saW5lOmFmdGVyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogMCAxZW07XG59XG5cbi5nbG93OmJlZm9yZSwgLmdsb3c6YWZ0ZXIge1xuICBoZWlnaHQ6IDZweDtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZ2xvdzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsdWUsIGhvdHBpbmspO1xufVxuXG4uZ2xvdzphZnRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBibHVlLCBob3RwaW5rKTtcbn1cblxuLmNvcm5lcnMge1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMCAxcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLyogQ29ybmVyIEVmZmVjdCAqL1xuLmNvcm5lcnM6YWZ0ZXIsXG4uY29ybmVyczpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jb3JuZXJzOmFmdGVyIHtcbiAgbGVmdDogLTUwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuLmNvcm5lcnM6YmVmb3JlIHtcbiAgcmlnaHQ6IC01MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5uZ2ItY2Fyb3VzZWwgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMnMgZWFzZS1pbi1vdXQsIHZpc2liaWxpdHkgMS4ycztcbiAgei1pbmRleDogLTE7XG59XG5cbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgei1pbmRleDogMjA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMge1xuICB6LWluZGV4OiAyMDtcbn1cbiJdfQ== */"] });
    return DashboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashbord',
                templateUrl: './dashbord.component.html',
                styleUrls: ['./dashbord.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Admin/dashboard/dashbord.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Admin/dashboard/dashbord.module.ts ***!
  \****************************************************/
/*! exports provided: DashbordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashbordModule", function() { return DashbordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _dashbord_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashbord.component */ "./src/app/Admin/dashboard/dashbord.component.ts");
/* harmony import */ var _dashbord_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashbord-routing.module */ "./src/app/Admin/dashboard/dashbord-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/auth/token-interceptor.service */ "./src/app/shared/auth/token-interceptor.service.ts");







var DashbordModule = /** @class */ (function () {
    function DashbordModule() {
    }
    DashbordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashbordModule });
    DashbordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashbordModule_Factory(t) { return new (t || DashbordModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptorService"],
                multi: true
            },
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashbord_routing_module__WEBPACK_IMPORTED_MODULE_3__["MfacultySubRoutingModule"],
            ]] });
    return DashbordModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashbordModule, { declarations: [_dashbord_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashbord_routing_module__WEBPACK_IMPORTED_MODULE_3__["MfacultySubRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashbordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashbord_routing_module__WEBPACK_IMPORTED_MODULE_3__["MfacultySubRoutingModule"],
                ],
                declarations: [_dashbord_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptorService"],
                        multi: true
                    },
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=Admin-dashboard-dashbord-module.js.map