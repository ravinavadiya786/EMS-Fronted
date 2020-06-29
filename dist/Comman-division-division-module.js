(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Comman-division-division-module"],{

/***/ "./src/app/Comman/division/division-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/Comman/division/division-routing.module.ts ***!
  \************************************************************/
/*! exports provided: DivisionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionRoutingModule", function() { return DivisionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _division_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./division.component */ "./src/app/Comman/division/division.component.ts");





var routes = [
    {
        path: '',
        component: _division_component__WEBPACK_IMPORTED_MODULE_2__["DivisionComponent"],
    }
];
var DivisionRoutingModule = /** @class */ (function () {
    function DivisionRoutingModule() {
    }
    DivisionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DivisionRoutingModule });
    DivisionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DivisionRoutingModule_Factory(t) { return new (t || DivisionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DivisionRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DivisionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DivisionRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Comman/division/division.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Comman/division/division.component.ts ***!
  \*******************************************************/
/*! exports provided: DivisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionComponent", function() { return DivisionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");





var DivisionComponent = /** @class */ (function () {
    function DivisionComponent(http) {
        this.http = http;
    }
    DivisionComponent.prototype.fetchstan = function () {
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
                    Division_Name: {
                        title: 'Division Name',
                    },
                    Course_Name: {
                        title: 'Course',
                    },
                    Standard_Name: {
                        title: 'Standard',
                    },
                    Created_On: {
                        title: 'Created On',
                    },
                }
            };
        });
    };
    DivisionComponent.prototype.ngOnInit = function () {
        this.fetchstan();
    };
    DivisionComponent.ɵfac = function DivisionComponent_Factory(t) { return new (t || DivisionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    DivisionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DivisionComponent, selectors: [["app-division"]], decls: 12, vars: 2, consts: [[1, "row", "text-left"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 2, "overflow", "hidden"], [1, "card-title", "text-center"], ["display", "inline", 2, "float", "right"], [1, "ft-refresh-ccw", "font-large-1", "blue-grey", "darken-4", "mr-1", 3, "click"], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], [3, "settings", "source"]], template: function DivisionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All Divisions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DivisionComponent_Template_i_click_7_listener() { return ctx.fetchstan(); });
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
        } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbW1hbi9kaXZpc2lvbi9kaXZpc2lvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
    return DivisionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DivisionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-division',
                templateUrl: './division.component.html',
                styleUrls: ['./division.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Comman/division/division.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Comman/division/division.module.ts ***!
  \****************************************************/
/*! exports provided: DivisionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionModule", function() { return DivisionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _division_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./division-routing.module */ "./src/app/Comman/division/division-routing.module.ts");
/* harmony import */ var _division_division_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../division/division.component */ "./src/app/Comman/division/division.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/auth/token-interceptor.service */ "./src/app/shared/auth/token-interceptor.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/__ivy_ngcc__/fesm5/ng2-smart-table.js");








var DivisionModule = /** @class */ (function () {
    function DivisionModule() {
    }
    DivisionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DivisionModule });
    DivisionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DivisionModule_Factory(t) { return new (t || DivisionModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: app_shared_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptorService"],
                multi: true
            }
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _division_routing_module__WEBPACK_IMPORTED_MODULE_2__["DivisionRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"]
            ]] });
    return DivisionModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DivisionModule, { declarations: [_division_division_component__WEBPACK_IMPORTED_MODULE_3__["DivisionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _division_routing_module__WEBPACK_IMPORTED_MODULE_2__["DivisionRoutingModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DivisionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_division_division_component__WEBPACK_IMPORTED_MODULE_3__["DivisionComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _division_routing_module__WEBPACK_IMPORTED_MODULE_2__["DivisionRoutingModule"],
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
//# sourceMappingURL=Comman-division-division-module.js.map