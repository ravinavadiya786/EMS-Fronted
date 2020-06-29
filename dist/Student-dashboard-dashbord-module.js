(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Student-dashboard-dashbord-module"],{

/***/ "./src/app/Student/dashboard/dashbord-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Student/dashboard/dashbord-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MfacultySubRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MfacultySubRoutingModule", function() { return MfacultySubRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _dashbord_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashbord.component */ "./src/app/Student/dashboard/dashbord.component.ts");





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

/***/ "./src/app/Student/dashboard/dashbord.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Student/dashboard/dashbord.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");






function DashboardComponent_ngb_carousel_32_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var image_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r3);
} }
function DashboardComponent_ngb_carousel_32_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_ngb_carousel_32_1_ng_template_0_Template, 2, 2, "ng-template", 20);
} }
function DashboardComponent_ngb_carousel_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ngb_carousel_32_1_Template, 1, 0, undefined, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", true)("showNavigationIndicators", true)("keyboard", true)("pauseOnHover", true)("wrap", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
function DashboardComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.Desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.Date ? item_r6.Date.substr(0, 10) : "nol");
} }
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.images = [700, 533, 807, 124].map(function (n) { return "https://picsum.photos/id/" + n + "/900/500"; });
        this.divisions = 0;
        this.subject = 0;
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Notice_Borad").subscribe(function (data) {
            _this.noticeboardData = data;
            _this.noticeboardData = _this.noticeboardData.sort(function (a, b) {
                return new Date(b.Date).getTime() - new Date(a.Date).getTime();
            });
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Division").subscribe(function (data) { return _this.divisions = data.length; });
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/Subject").subscribe(function (data) { return _this.subject = data.length; });
    };
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashbord"]], decls: 39, vars: 8, consts: [[1, "row"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-12"], [1, "card", "bg-danger"], [1, "card-content"], [1, "card-body", "pt-2", "pb-0"], [1, "media"], [1, "media-body", "white", "text-left"], [1, "font-large-1", "mb-0"], [1, "media-right", "white", "text-right"], [1, "icon-wallet", "font-large-1"], ["id", "Widget-line-chart2", 1, "height-75", "WidgetlineChart", "WidgetlineChartShadow", "mb-3"], [1, "card", "bg-primary"], [1, "card", 2, "margin", "auto"], [1, "card-header", "border-bottom"], [1, "card-title", "text-center"], [1, "card-body", "text-center"], ["interval", "2000", 3, "showNavigationArrows", "showNavigationIndicators", "keyboard", "pauseOnHover", "wrap", 4, "ngIf"], ["contenteditable", "", 1, "divider", "line", "glow", "m-2", "text-center", "mt-5", "mb-5", "text-info", "text-bold-700"], [4, "ngFor", "ngForOf"], ["interval", "2000", 3, "showNavigationArrows", "showNavigationIndicators", "keyboard", "pauseOnHover", "wrap"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], [3, "src", "alt"], [1, "card", "w-100", "corners", "shadow-z-2"], [1, "card-header"], ["aria-expanded", "true", 1, "card-content", "m-0"], [1, "card-body"], [1, "card-text"], [1, "card-footer", "m-0"], [1, "text-muted", "pt-1", "ml-3", "text-warning"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total Divisions");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total Subject");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Events");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DashboardComponent_ngb_carousel_32_Template, 2, 6, "ngb-carousel", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Recents NoticeBoard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DashboardComponent_div_35_Template, 12, 3, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "slice");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.divisions);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subject);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](36, 4, ctx.noticeboardData, 0, 5));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".divider[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.divider[_ngcontent-%COMP%]:before, .divider[_ngcontent-%COMP%]:after {\n  content: \"\";\n  flex: 1;\n}\n\n.line[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 1em -1em;\n}\n\n.line[_ngcontent-%COMP%]:before, .line[_ngcontent-%COMP%]:after {\n  height: 1px;\n  margin: 0 1em;\n}\n\n.glow[_ngcontent-%COMP%]:before, .glow[_ngcontent-%COMP%]:after {\n  height: 6px;\n  -webkit-filter: blur(5px);\n  border-radius: 5px;\n}\n\n.glow[_ngcontent-%COMP%]:before {\n  background: linear-gradient(to right, blue, hotpink);\n}\n\n.glow[_ngcontent-%COMP%]:after {\n  background: linear-gradient(to left, blue, hotpink);\n}\n\n.corners[_ngcontent-%COMP%] {\n  font-family: arial;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 10px;\n  padding-top: 40px;\n  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);\n}\n\n\n\n.corners[_ngcontent-%COMP%]:after, .corners[_ngcontent-%COMP%]:before {\n  background: #e6e6e6;\n  content: '';\n  height: 50px;\n  position: absolute;\n  top: -25px;\n  width: 100px;\n  box-shadow: 0 5px 10px -7px rgba(0, 0, 0, 0.5);\n}\n\n.corners[_ngcontent-%COMP%]:after {\n  left: -50px;\n  transform: rotate(-45deg);\n}\n\n.corners[_ngcontent-%COMP%]:before {\n  right: -50px;\n  transform: rotate(45deg);\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: auto;\n}\n\nngb-carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  outline: none;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  display: flex !important;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 1.2s ease-in-out, visibility 1.2s;\n  z-index: -1;\n}\n\n.carousel-item.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  z-index: 10;\n}\n\n.carousel-control-prev[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\n.carousel-control-next[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n\n.carousel-indicators[_ngcontent-%COMP%] {\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU3R1ZGVudC9kYXNoYm9hcmQvRzpcXFJhaiBFTVMgUHJvamVjdFxcQW5ndWxhcl9FTVMvc3JjXFxhcHBcXFN0dWRlbnRcXGRhc2hib2FyZFxcZGFzaGJvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1N0dWRlbnQvZGFzaGJvYXJkL2Rhc2hib3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBYTtBQ0RmOztBREFBO0VBS0ksV0FBVztFQUNYLE9BQU87QUNEWDs7QURJQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUNEbEI7O0FEREE7RUFNSSxXQUFXO0VBQ1gsYUFBYTtBQ0RqQjs7QURLQTtFQUdJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FDSnRCOztBRERBO0VBU0ksb0RBQW9EO0FDSnhEOztBRExBO0VBYUksbURBQW1EO0FDSnZEOztBRE9BO0VBSUUsa0JBQWlCO0VBQUUsZUFBYztFQUFFLGlCQUFnQjtFQUFFLGFBQVk7RUFBRSxpQkFBZ0I7RUFHM0Usd0NBQXNDO0FDSGhEOztBRE1BLGtCQUFBOztBQUNBOztFQUVFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUdKLDhDQUE0QztBQ0h0RDs7QURLQTtFQUNFLFdBQVc7RUFLSCx5QkFBeUI7QUNGbkM7O0FESUE7RUFDRSxZQUFZO0VBS0osd0JBQXdCO0FDRGxDOztBREdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQWE7QUNBZjs7QURHQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FDQWY7O0FER0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQ0FqQjs7QURHQTtFQUNFLGlCQUFpQjtBQ0FuQjs7QURHQTtFQUNFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHFEQUFxRDtFQUNyRCxXQUFXO0FDQWI7O0FER0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFdBQVc7QUNBYjs7QURHQTtFQUNHLFdBQVc7QUNBZDs7QURJQTtFQUNHLFdBQVc7QUNEZDs7QURJQTtFQUNFLFdBQVc7QUNEYiIsImZpbGUiOiJzcmMvYXBwL1N0dWRlbnQvZGFzaGJvYXJkL2Rhc2hib3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL3Njc3MvZ3JhZGllbnQtdmFyaWFibGVzXCI7XG5cbi5kaXZpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbi5saW5lIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxZW0gLTFlbTtcbiAgXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IDAgMWVtO1xuICB9XG59XG5cbi5nbG93IHtcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGhlaWdodDogNnB4O1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAmOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBibHVlLCBob3RwaW5rKTtcbiAgfVxuICBcbiAgJjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGJsdWUsIGhvdHBpbmspO1xuICB9XG59XG4uY29ybmVycyB7IFxuICAvLyBiYWNrZ3JvdW5kOiAjRkZGO1xuICAvLyBtYXJnaW46IDUwcHggYXV0bztcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTphcmlhbDsgZm9udC1zaXplOjE0cHg7IGZvbnQtd2VpZ2h0OmJvbGQ7IHBhZGRpbmc6MTBweDsgcGFkZGluZy10b3A6NDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA3cHggaHNsYSgwLDAlLDAlLC4yKTtcbiAgICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCA3cHggaHNsYSgwLDAlLDAlLC4yKTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCA3cHggaHNsYSgwLDAlLDAlLC4yKTtcbn1cblxuLyogQ29ybmVyIEVmZmVjdCAqL1xuLmNvcm5lcnM6YWZ0ZXIsXG4uY29ybmVyczpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICBjb250ZW50OiAnJztcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IC03cHggaHNsYSgwLDAlLDAlLC41KTtcbiAgICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IC03cHggaHNsYSgwLDAlLDAlLC41KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IC03cHggaHNsYSgwLDAlLDAlLC41KTtcbn1cbi5jb3JuZXJzOmFmdGVyIHtcbiAgbGVmdDogLTUwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuLmNvcm5lcnM6YmVmb3JlIHtcbiAgcmlnaHQ6IC01MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5uZ2ItY2Fyb3VzZWwge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAgYXV0bztcbn1cblxubmdiLWNhcm91c2VsIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uY2Fyb3VzZWwtaW5uZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjJzIGVhc2UtaW4tb3V0LCB2aXNpYmlsaXR5IDEuMnM7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uY2Fyb3VzZWwtaXRlbS5hY3RpdmV7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgIHotaW5kZXg6IDIwO1xufVxuXG5cbi5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgei1pbmRleDogMjA7XG59XG5cbi5jYXJvdXNlbC1pbmRpY2F0b3Jze1xuICB6LWluZGV4OiAyMDtcbn1cbi8vTGluZSBDaGFydCAxIENTUyBFbmRzXG4iLCIuZGl2aWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXZpZGVyOmJlZm9yZSwgLmRpdmlkZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmbGV4OiAxO1xufVxuXG4ubGluZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMWVtIC0xZW07XG59XG5cbi5saW5lOmJlZm9yZSwgLmxpbmU6YWZ0ZXIge1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAwIDFlbTtcbn1cblxuLmdsb3c6YmVmb3JlLCAuZ2xvdzphZnRlciB7XG4gIGhlaWdodDogNnB4O1xuICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5nbG93OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgYmx1ZSwgaG90cGluayk7XG59XG5cbi5nbG93OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGJsdWUsIGhvdHBpbmspO1xufVxuXG4uY29ybmVycyB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDFweCA3cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiAwIDFweCA3cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKiBDb3JuZXIgRWZmZWN0ICovXG4uY29ybmVyczphZnRlcixcbi5jb3JuZXJzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggMTBweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNvcm5lcnM6YWZ0ZXIge1xuICBsZWZ0OiAtNTBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uY29ybmVyczpiZWZvcmUge1xuICByaWdodDogLTUwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbm5nYi1jYXJvdXNlbCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubmdiLWNhcm91c2VsIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS4ycyBlYXNlLWluLW91dCwgdmlzaWJpbGl0eSAxLjJzO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICB6LWluZGV4OiAyMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gIHotaW5kZXg6IDIwO1xufVxuIl19 */"] });
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

/***/ "./src/app/Student/dashboard/dashbord.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Student/dashboard/dashbord.module.ts ***!
  \******************************************************/
/*! exports provided: DashbordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashbordModule", function() { return DashbordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _dashbord_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashbord.component */ "./src/app/Student/dashboard/dashbord.component.ts");
/* harmony import */ var _dashbord_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashbord-routing.module */ "./src/app/Student/dashboard/dashbord-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/auth/token-interceptor.service */ "./src/app/shared/auth/token-interceptor.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");






// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


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
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ]] });
    return DashbordModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashbordModule, { declarations: [_dashbord_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashbord_routing_module__WEBPACK_IMPORTED_MODULE_3__["MfacultySubRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashbordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashbord_routing_module__WEBPACK_IMPORTED_MODULE_3__["MfacultySubRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
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
//# sourceMappingURL=Student-dashboard-dashbord-module.js.map