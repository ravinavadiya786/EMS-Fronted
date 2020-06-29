(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Comman-timetable-timetable-module"],{

/***/ "./src/app/Comman/timetable/timetable-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Comman/timetable/timetable-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TimetableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableRoutingModule", function() { return TimetableRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _timetable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timetable.component */ "./src/app/Comman/timetable/timetable.component.ts");





var routes = [
    {
        path: '',
        component: _timetable_component__WEBPACK_IMPORTED_MODULE_2__["TimetableComponent"]
    }
];
var TimetableRoutingModule = /** @class */ (function () {
    function TimetableRoutingModule() {
    }
    TimetableRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TimetableRoutingModule });
    TimetableRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TimetableRoutingModule_Factory(t) { return new (t || TimetableRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TimetableRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TimetableRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimetableRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Comman/timetable/timetable.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Comman/timetable/timetable.component.ts ***!
  \*********************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");





var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(http) {
        this.http = http;
    }
    TimetableComponent.prototype.fetchstan = function () {
        var _this = this;
        this.http.get("https://cooing-famous-iguanacolossus.glitch.me/Admin/TimeTable").subscribe(function (data) {
            _this.tbldata = data.map(function (value) {
                return {
                    '_id': value._id,
                    'Standard_Name': value.Std_ID ? value.Std_ID.Name : 'Deleted Record',
                    'Course_Name': value.Course_ID ? value.Course_ID.Course_Name : 'Deleted Record',
                    'Division_Name': value.Division_ID ? value.Division_ID.Division_Name : 'Deleted Record',
                    'Subject_Name': value.Subject_ID ? value.Subject_ID.Sub_Name : 'Deleted Record',
                    'From_Time': value.From_Time,
                    'To_Time': value.To_Time,
                    'Day': value.Day,
                    'Is_Active': value.Is_Active,
                };
            });
            _this.alertsettings = {
                attr: {
                    class: "table table-responsive"
                },
                actions: {
                    add: false,
                    edit: false,
                    delete: false
                },
                columns: {
                    Course_Name: {
                        title: 'Course',
                    },
                    Standard_Name: {
                        title: 'Standard',
                    },
                    Subject_Name: {
                        title: 'Subject',
                    },
                    Division_Name: {
                        title: 'Division'
                    },
                    From_Time: {
                        title: 'From',
                    },
                    To_Time: {
                        title: 'TO',
                    },
                    Day: {
                        title: 'Day',
                    },
                }
            };
        });
    };
    TimetableComponent.prototype.ngOnInit = function () {
        this.fetchstan();
    };
    TimetableComponent.ɵfac = function TimetableComponent_Factory(t) { return new (t || TimetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    TimetableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimetableComponent, selectors: [["app-timetable"]], decls: 12, vars: 2, consts: [[1, "row", "text-left"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "overflow", "hidden"], [1, "card-title", "text-center"], ["display", "inline", 2, "float", "right"], [1, "ft-refresh-ccw", "font-large-1", "blue-grey", "darken-4", "mr-1", 3, "click"], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], [3, "settings", "source"]], template: function TimetableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Time Table ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimetableComponent_Template_i_click_7_listener() { return ctx.fetchstan(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ng2-smart-table", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.alertsettings)("source", ctx.tbldata);
        } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbW1hbi90aW1ldGFibGUvdGltZXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return TimetableComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimetableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timetable',
                templateUrl: './timetable.component.html',
                styleUrls: ['./timetable.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Comman/timetable/timetable.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Comman/timetable/timetable.module.ts ***!
  \******************************************************/
/*! exports provided: TimetableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableModule", function() { return TimetableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _timetable_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timetable-routing.module */ "./src/app/Comman/timetable/timetable-routing.module.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timetable/timetable.component */ "./src/app/Comman/timetable/timetable.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/auth/token-interceptor.service */ "./src/app/shared/auth/token-interceptor.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");








var TimetableModule = /** @class */ (function () {
    function TimetableModule() {
    }
    TimetableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TimetableModule });
    TimetableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TimetableModule_Factory(t) { return new (t || TimetableModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptorService"],
                multi: true
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _timetable_routing_module__WEBPACK_IMPORTED_MODULE_2__["TimetableRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"]
            ]] });
    return TimetableModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TimetableModule, { declarations: [_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_3__["TimetableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _timetable_routing_module__WEBPACK_IMPORTED_MODULE_2__["TimetableRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimetableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_3__["TimetableComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _timetable_routing_module__WEBPACK_IMPORTED_MODULE_2__["TimetableRoutingModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"]
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
//# sourceMappingURL=Comman-timetable-timetable-module.js.map