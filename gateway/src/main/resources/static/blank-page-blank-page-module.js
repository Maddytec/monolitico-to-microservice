(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blank-page-blank-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/blank-page/blank-page.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/blank-page/blank-page.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/app/layout/blank-page/blank-page-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BlankPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageRoutingModule", function() { return BlankPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blank_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-page.component */ "./src/app/layout/blank-page/blank-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [
    {
        path: '',
        component: _blank_page_component__WEBPACK_IMPORTED_MODULE_2__["BlankPageComponent"]
    }
];
var BlankPageRoutingModule = /** @class */ (function () {
    function BlankPageRoutingModule() {
    }
    BlankPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BlankPageRoutingModule);
    return BlankPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ibGFuay1wYWdlL2JsYW5rLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BlankPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function() { return BlankPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent() {
    }
    BlankPageComponent.prototype.ngOnInit = function () { };
    BlankPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blank-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/blank-page/blank-page.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blank-page.component.scss */ "./src/app/layout/blank-page/blank-page.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.module.ts ***!
  \********************************************************/
/*! exports provided: BlankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageModule", function() { return BlankPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-page-routing.module */ "./src/app/layout/blank-page/blank-page-routing.module.ts");
/* harmony import */ var _blank_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank-page.component */ "./src/app/layout/blank-page/blank-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var BlankPageModule = /** @class */ (function () {
    function BlankPageModule() {
    }
    BlankPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlankPageRoutingModule"]],
            declarations: [_blank_page_component__WEBPACK_IMPORTED_MODULE_3__["BlankPageComponent"]]
        })
    ], BlankPageModule);
    return BlankPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=blank-page-blank-page-module.js.map