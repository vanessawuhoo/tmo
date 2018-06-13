(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"/\">TMØ</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"/\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"/about\">About<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  \r\n  <div class=\"text-content\">\r\n    Need help deciding if you need another palette? <b>TMØ</b> is here to help! \r\n    <br />\r\n    <br />\r\n    Simply upload a photo of the object of indecision, click on a pan, and when the color preview looks correct click the Add button to\r\n    add it to your picked colors. As you add pans <b>TMØ</b> will sort your picked colors so you can look objectively at the product sans distracting packaging and layout.\r\n    <br />\r\n    <br />\r\n    If you feel like the colors are not sorting intuitively, that's totally valid! This app uses a simple algorithm to try and group together \"like\" colors,\r\n    but using computers to sort colors is still a very interesting <a href=\"https://www.alanzucconi.com/2015/09/30/colour-sorting/\">unsolved problem</a>. \r\n    If you have any suggestions on how to improve this algorithm or any other feedback feel free to shoot me a message <a href=\"https://goo.gl/forms/K4IERsWRvFpUSCEP2\">here</a>. \r\n    <br />\r\n    <br />\r\n    <i>\r\n        <b>TMØ</b> is named for a popular pair of acronyms in the online makeup community: TMO/TMI, which stand respectively for Talk Me Out and Talk Me In. \r\n     These abbreviations are often seen on Reddit when users post descriptions of products and their existing collection and ask other users for thoughts on whether the new product is worth it.\r\n     This app is also inspired by a trend that was on \r\n     <a href=\"https://www.reddit.com/r/MakeupAddiction/\">r/MakeupAddiction</a> in January 2018, where users were rearranging palettes in rainbow order and \r\n     noting ways the original layout would obscure dupes and make the product look more appealing to consumers.\r\n    </i>\r\n  </div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-content {\n  margin-top: 75px;\n  margin-left: 20%;\n  margin-right: 20%;\n  font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//https://www.reallyree.com/wp-content/uploads/2018/03/anastasia-soft-glam-eyeshadow-palette-review-2-650x434.jpg


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _color_block_color_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./color-block/color-block.component */ "./src/app/color-block/color-block.component.ts");
/* harmony import */ var _confirm_module_confirm_module_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-module/confirm-module.component */ "./src/app/confirm-module/confirm-module.component.ts");
/* harmony import */ var _picked_colors_picked_colors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./picked-colors/picked-colors.component */ "./src/app/picked-colors/picked-colors.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _color_block_color_block_component__WEBPACK_IMPORTED_MODULE_5__["ColorBlockComponent"],
                _confirm_module_confirm_module_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModuleComponent"],
                _picked_colors_picked_colors_component__WEBPACK_IMPORTED_MODULE_7__["PickedColorsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/color-block/color-block.component.css":
/*!*******************************************************!*\
  !*** ./src/app/color-block/color-block.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 1px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/color-block/color-block.component.html":
/*!********************************************************!*\
  !*** ./src/app/color-block/color-block.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas id=\"myColorBlockCanvas\" title={{hex}}></canvas>\r\n"

/***/ }),

/***/ "./src/app/color-block/color-block.component.ts":
/*!******************************************************!*\
  !*** ./src/app/color-block/color-block.component.ts ***!
  \******************************************************/
/*! exports provided: ColorBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorBlockComponent", function() { return ColorBlockComponent; });
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

var ColorBlockComponent = /** @class */ (function () {
    function ColorBlockComponent(elRef) {
        this.elRef = elRef;
    }
    ColorBlockComponent.prototype.ngOnInit = function () {
    };
    ColorBlockComponent.prototype.ngAfterViewInit = function () {
        this.canvas = this.elRef.nativeElement.querySelector('canvas');
        this.canvas.style.background = this.hex;
    };
    ColorBlockComponent.prototype.setHexColor = function (hex) {
        this.canvas.getContext('2d').fillStyle = hex;
        this.canvas.getContext('2d').fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ColorBlockComponent.prototype, "hex", void 0);
    ColorBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-color-block',
            template: __webpack_require__(/*! ./color-block.component.html */ "./src/app/color-block/color-block.component.html"),
            styles: [__webpack_require__(/*! ./color-block.component.css */ "./src/app/color-block/color-block.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ColorBlockComponent);
    return ColorBlockComponent;
}());



/***/ }),

/***/ "./src/app/confirm-module/confirm-module.component.html":
/*!**************************************************************!*\
  !*** ./src/app/confirm-module/confirm-module.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"confirm-module\">\r\n    <app-color-block [hex]=\"hex\"></app-color-block>\r\n    <p><b><mark>{{hex}}</mark></b></p>\r\n    <button id=\"addButton\" class=\"btn btn-outline-dark\" (click)=\"addColorToList()\">Add</button>\r\n</div>"

/***/ }),

/***/ "./src/app/confirm-module/confirm-module.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/confirm-module/confirm-module.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".confirm-module {\n  min-width: 100px; }\n  .confirm-module mark {\n    background-color: #dee1e5;\n    color: black;\n    padding-left: 5px;\n    padding-right: 5px; }\n  .confirm-module p {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/confirm-module/confirm-module.component.ts":
/*!************************************************************!*\
  !*** ./src/app/confirm-module/confirm-module.component.ts ***!
  \************************************************************/
/*! exports provided: ConfirmModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModuleComponent", function() { return ConfirmModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_block_color_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color-block/color-block.component */ "./src/app/color-block/color-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmModuleComponent = /** @class */ (function () {
    function ConfirmModuleComponent() {
        this.addColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfirmModuleComponent.prototype.ngOnInit = function () {
    };
    ConfirmModuleComponent.prototype.setHexColor = function (hex) {
        this.hex = hex.toUpperCase();
        this.colorBlock.setHexColor(hex);
    };
    ConfirmModuleComponent.prototype.disableButton = function () {
        document.getElementById("addButton").disabled = true;
    };
    ConfirmModuleComponent.prototype.enableButton = function () {
        document.getElementById("addButton").disabled = false;
    };
    ConfirmModuleComponent.prototype.addColorToList = function () {
        this.addColor.emit(this.hex);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ConfirmModuleComponent.prototype, "hex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfirmModuleComponent.prototype, "addColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_color_block_color_block_component__WEBPACK_IMPORTED_MODULE_1__["ColorBlockComponent"]),
        __metadata("design:type", _color_block_color_block_component__WEBPACK_IMPORTED_MODULE_1__["ColorBlockComponent"])
    ], ConfirmModuleComponent.prototype, "colorBlock", void 0);
    ConfirmModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-module',
            template: __webpack_require__(/*! ./confirm-module.component.html */ "./src/app/confirm-module/confirm-module.component.html"),
            styles: [__webpack_require__(/*! ./confirm-module.component.scss */ "./src/app/confirm-module/confirm-module.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmModuleComponent);
    return ConfirmModuleComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"/\">TMØ</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"/\">Home<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"/about\">About</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  \r\n  <div class=\"centered-content\">\r\n      <span class=\"upload-bar\">\r\n        <span class=\"upload\">Upload an image:</span>\r\n        <label class=\"btn btn-outline-dark\" style=\"margin-bottom: 0\">\r\n            Browse&hellip; \r\n            <input id=\"myInput\" type=\"file\" style=\"display: none;\" accept=\"image/*\" multiple=\"false\">\r\n        </label>\r\n      </span>\r\n      <div class=\"color-picker\">\r\n          <canvas id=\"myCanvas\" width=\"0\" height=\"0\"></canvas>\r\n          <app-confirm-module [hex]=\"hex\" (addColor)=\"addColorToList($event)\"></app-confirm-module>\r\n      </div>\r\n      <app-picked-colors></app-picked-colors>\r\n  </div>\r\n  <img id=\"hiddenImage\" class=\"hidden-image\" src=''>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered-content {\n  margin-top: 40px;\n  text-align: center;\n  display: flex;\n  align-content: center;\n  flex-direction: column; }\n  .centered-content input {\n    max-width: 500px;\n    margin-left: auto;\n    margin-right: auto; }\n  .hidden-image {\n  visibility: hidden;\n  position: absolute !important;\n  top: -9999px !important;\n  left: -9999px !important; }\n  canvas {\n  border: 1px solid black;\n  margin-top: 40px;\n  margin-left: auto; }\n  app-confirm-module {\n  margin-right: auto;\n  margin-top: 200px;\n  margin-left: 30px; }\n  .color-picker {\n  max-height: 700px;\n  display: flex;\n  flex-direction: row; }\n  .upload-bar .upload {\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _confirm_module_confirm_module_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-module/confirm-module.component */ "./src/app/confirm-module/confirm-module.component.ts");
/* harmony import */ var _picked_colors_picked_colors_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../picked-colors/picked-colors.component */ "./src/app/picked-colors/picked-colors.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.inputContents = '';
        this.pictureUrl = '';
        this.widthMultiplier = 1;
        this.heightMultiplier = 1;
        this.hex = '#000000';
        this.lastClick = { 'x': 0, 'y': 0 };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileInput = document.getElementById('myInput');
        this.canvas = document.getElementById('myCanvas');
        this.canvas.height = 650;
        this.canvas.width = 650;
        this.hiddenImage = document.getElementById('hiddenImage');
        this.confirmModule.disableButton();
        this.canvas.addEventListener('click', function (e) {
            _this.getColor((e.pageX - _this.canvas.offsetLeft) * _this.widthMultiplier, (e.pageY - _this.canvas.offsetTop) * _this.heightMultiplier);
            _this.lastClick.x = (e.pageX - _this.canvas.offsetLeft) * _this.widthMultiplier;
            _this.lastClick.y = (e.pageY - _this.canvas.offsetTop) * _this.heightMultiplier;
            _this.confirmModule.enableButton();
        });
        this.fileInput.addEventListener('change', function (e) {
            _this.getPicture();
        });
        this.context = this.canvas.getContext('2d');
    };
    HomeComponent.prototype.getPicture = function () {
        var _this = this;
        var selectedFile = this.fileInput.files[0];
        var reader = new FileReader();
        var loading = true;
        reader.addEventListener("load", function (e) {
            _this.setSource(reader.result);
            _this.hiddenImage.addEventListener('load', function (e) {
                _this.drawCanvas();
            });
        });
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        }
    };
    HomeComponent.prototype.setSource = function (result) {
        this.hiddenImage.src = result;
    };
    HomeComponent.prototype.drawCanvas = function () {
        this.pickedColors.clear();
        this.canvas.width = 650;
        this.canvas.height = 650;
        if (this.hiddenImage.height >= this.hiddenImage.width) {
            this.hiddenImage.style.height = '650px';
            this.hiddenImage.style.width = 'auto';
            this.context.drawImage(this.hiddenImage, (650 - this.hiddenImage.width) / 2, 0, this.hiddenImage.width, this.hiddenImage.height);
        }
        else {
            this.hiddenImage.style.width = '650px';
            this.hiddenImage.style.height = 'auto';
            this.context.drawImage(this.hiddenImage, 0, 0, this.hiddenImage.width, this.hiddenImage.height);
        }
    };
    HomeComponent.prototype.getColor = function (x, y) {
        var data = this.context.getImageData(x, y, 1, 1).data;
        var hex = '#' + this.rgbToHex(data[0]) + this.rgbToHex(data[1]) + this.rgbToHex(data[2]);
        this.confirmModule.setHexColor(hex);
    };
    HomeComponent.prototype.rgbToHex = function (rgb) {
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    ;
    HomeComponent.prototype.addColorToList = function (hex) {
        this.context.fillStyle = 'black';
        this.context.beginPath();
        this.context.arc(this.lastClick.x, this.lastClick.y, 3, 0, 2 * Math.PI);
        this.context.fill();
        this.context.fillStyle = 'white';
        this.context.beginPath();
        this.context.arc(this.lastClick.x, this.lastClick.y, 2, 0, 2 * Math.PI);
        this.context.fill();
        this.pickedColors.addColorToList(hex);
        this.confirmModule.disableButton();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_confirm_module_confirm_module_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmModuleComponent"]),
        __metadata("design:type", _confirm_module_confirm_module_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmModuleComponent"])
    ], HomeComponent.prototype, "confirmModule", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_picked_colors_picked_colors_component__WEBPACK_IMPORTED_MODULE_2__["PickedColorsComponent"]),
        __metadata("design:type", _picked_colors_picked_colors_component__WEBPACK_IMPORTED_MODULE_2__["PickedColorsComponent"])
    ], HomeComponent.prototype, "pickedColors", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/picked-colors/picked-colors.component.css":
/*!***********************************************************!*\
  !*** ./src/app/picked-colors/picked-colors.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picked-colors {\r\n    text-align: left;\r\n    max-width: 1038px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 50px;\r\n}"

/***/ }),

/***/ "./src/app/picked-colors/picked-colors.component.html":
/*!************************************************************!*\
  !*** ./src/app/picked-colors/picked-colors.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"picked-colors\">\r\n  <app-color-block *ngFor=\"let color of sortedColors\" [hex]=\"color\" tag=\"picked-color-blocks\"></app-color-block>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/picked-colors/picked-colors.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/picked-colors/picked-colors.component.ts ***!
  \**********************************************************/
/*! exports provided: PickedColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickedColorsComponent", function() { return PickedColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sc_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sc-color */ "./node_modules/sc-color/lib/surfacecurve-color.js");
/* harmony import */ var sc_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sc_color__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PickedColorsComponent = /** @class */ (function () {
    function PickedColorsComponent() {
    }
    PickedColorsComponent.prototype.ngOnInit = function () {
        this.pickedColors = new Set([]);
        this.originColor = '';
    };
    PickedColorsComponent.prototype.addColorToList = function (hex) {
        this.pickedColors.push(hex);
        //finding an origin color
        var value = Number.POSITIVE_INFINITY;
        for (var _i = 0, _a = this.pickedColors; _i < _a.length; _i++) {
            var color = _a[_i];
            var distance = this.colorDistanceFormula(color, '#FFFFFF');
            if (distance < value) {
                value = distance;
                this.originColor = color;
            }
        }
        this.sortedColors = [];
        this.sortPickedColors(this.originColor, this.sortedColors, this.pickedColors.slice());
    };
    PickedColorsComponent.prototype.sortPickedColors = function (origin, sorted, unsorted) {
        if (unsorted.length === 1) {
            sorted.push(unsorted[0]);
            return;
        }
        //remove the origin from the unsorted list
        unsorted.splice(unsorted.indexOf(origin), 1);
        sorted.push(origin);
        //iterate through array to find the distances from origin to all other points
        var distances = {};
        for (var _i = 0, unsorted_1 = unsorted; _i < unsorted_1.length; _i++) {
            var color = unsorted_1[_i];
            distances[color] = this.colorDistanceFormula(origin, color);
        }
        //find the shortest color and distance
        var key = "";
        var value = Number.POSITIVE_INFINITY;
        for (var d in distances) {
            if (distances[d] < value) {
                value = distances[d];
                key = d;
            }
        }
        this.sortPickedColors(key, sorted, unsorted);
    };
    PickedColorsComponent.prototype.colorDistanceFormula = function (hexA, hexB) {
        var a = sc_color__WEBPACK_IMPORTED_MODULE_1__(hexA), b = sc_color__WEBPACK_IMPORTED_MODULE_1__(hexB);
        var red = a.red() - b.red(), green = a.green() - b.green(), blue = a.blue() - b.blue();
        return Math.sqrt(red * red + green * green + blue * blue);
    };
    PickedColorsComponent.prototype.clear = function () {
        this.pickedColors = [];
        this.sortedColors = [];
    };
    PickedColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-picked-colors',
            template: __webpack_require__(/*! ./picked-colors.component.html */ "./src/app/picked-colors/picked-colors.component.html"),
            styles: [__webpack_require__(/*! ./picked-colors.component.css */ "./src/app/picked-colors/picked-colors.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PickedColorsComponent);
    return PickedColorsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\tmo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map