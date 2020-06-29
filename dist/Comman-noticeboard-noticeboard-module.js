(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Comman-noticeboard-noticeboard-module"],{

/***/ "./src/app/Comman/noticeboard/noticeboard-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/Comman/noticeboard/noticeboard-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: NoticeboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeboardRoutingModule", function() { return NoticeboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _noticeboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticeboard.component */ "./src/app/Comman/noticeboard/noticeboard.component.ts");





var routes = [
    {
        path: '',
        component: _noticeboard_component__WEBPACK_IMPORTED_MODULE_2__["NoticeboardComponent"],
    }
];
var NoticeboardRoutingModule = /** @class */ (function () {
    function NoticeboardRoutingModule() {
    }
    NoticeboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NoticeboardRoutingModule });
    NoticeboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NoticeboardRoutingModule_Factory(t) { return new (t || NoticeboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return NoticeboardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NoticeboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticeboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Comman/noticeboard/noticeboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Comman/noticeboard/noticeboard.component.ts ***!
  \*************************************************************/
/*! exports provided: NoticeboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeboardComponent", function() { return NoticeboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function NoticeboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Date);
} }
var NoticeboardComponent = /** @class */ (function () {
    function NoticeboardComponent(http) {
        this.http = http;
    }
    NoticeboardComponent.prototype.fetchstan = function () {
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
    NoticeboardComponent.prototype.ngOnInit = function () {
        this.fetchstan();
    };
    NoticeboardComponent.ɵfac = function NoticeboardComponent_Factory(t) { return new (t || NoticeboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    NoticeboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoticeboardComponent, selectors: [["app-noticeboard"]], decls: 3, vars: 1, consts: [["display", "inline", 2, "text-align", "center", "margin", "10px"], [1, "ft-refresh-ccw", "font-large-1", "blue-grey", "darken-4", "mr-1", 3, "click"], [4, "ngFor", "ngForOf"], [1, "card", "w-100", "shadow-z-2"], [1, "card-header"], [1, "card-title", "text-center"], ["aria-expanded", "true", 1, "card-content", "m-0"], [1, "card-body"], [1, "card-text"], [1, "card-footer", "m-0"], [1, "text-muted", "pt-1", "text-warning"]], template: function NoticeboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NoticeboardComponent_Template_i_click_1_listener() { return ctx.fetchstan(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NoticeboardComponent_div_2_Template, 13, 3, "div", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tbldata);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbW1hbi9ub3RpY2Vib2FyZC9ub3RpY2Vib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return NoticeboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticeboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-noticeboard',
                templateUrl: './noticeboard.component.html',
                styleUrls: ['./noticeboard.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Comman/noticeboard/noticeboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/Comman/noticeboard/noticeboard.module.ts ***!
  \**********************************************************/
/*! exports provided: NoticeboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeboardModule", function() { return NoticeboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _noticeboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticeboard-routing.module */ "./src/app/Comman/noticeboard/noticeboard-routing.module.ts");
/* harmony import */ var _noticeboard_noticeboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../noticeboard/noticeboard.component */ "./src/app/Comman/noticeboard/noticeboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/auth/token-interceptor.service */ "./src/app/shared/auth/token-interceptor.service.ts");







var NoticeboardModule = /** @class */ (function () {
    function NoticeboardModule() {
    }
    NoticeboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NoticeboardModule });
    NoticeboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NoticeboardModule_Factory(t) { return new (t || NoticeboardModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptorService"],
                multi: true
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _noticeboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["NoticeboardRoutingModule"],
            ]] });
    return NoticeboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NoticeboardModule, { declarations: [_noticeboard_noticeboard_component__WEBPACK_IMPORTED_MODULE_3__["NoticeboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _noticeboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["NoticeboardRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticeboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_noticeboard_noticeboard_component__WEBPACK_IMPORTED_MODULE_3__["NoticeboardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _noticeboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["NoticeboardRoutingModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptorService"],
                        multi: true
                    }
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=Comman-noticeboard-noticeboard-module.js.map