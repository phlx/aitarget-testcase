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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<div class=\"container\">\n  <header>\n    <div class=\"logo\">\n      <img [src]=\"sources.logo\" alt=\"logo\" />\n    </div>\n    <div class=\"heading\">\n      <h1>ООО «Ромашка»</h1>\n    </div>\n    <mat-progress-spinner *ngIf=\"loading\"\n        class=\"spinner\"\n        color=\"primary\"\n        diameter=\"40\"\n        mode=\"indeterminate\">\n    </mat-progress-spinner>\n  </header>\n\n  <mat-divider></mat-divider>\n\n  <section>\n    <aside class=\"sidebar\">\n      <mat-nav-list>\n        <a mat-list-item>\n          <mat-icon mat-list-icon>attach_money</mat-icon>\n          <h4 mat-line>Финансы</h4>\n        </a>\n\n        <a mat-list-item active>\n          <h4 mat-line subitem>Перевести в FB</h4>\n        </a>\n\n        <a mat-list-item>\n          <h4 mat-line subitem>Выписать счёт</h4>\n        </a>\n\n        <a mat-list-item>\n          <mat-icon mat-list-icon>forum</mat-icon>\n          <h4 mat-line>Сообщения</h4>\n        </a>\n\n        <a mat-list-item>\n          <mat-icon mat-list-icon>access_time</mat-icon>\n          <h4 mat-line>Статистика</h4>\n        </a>\n\n        <a mat-list-item>\n          <mat-icon mat-list-icon>account_box</mat-icon>\n          <h4 mat-line>Профиль</h4>\n        </a>\n\n        <mat-divider></mat-divider>\n\n        <a mat-list-item>\n          <mat-icon mat-list-icon>live_help</mat-icon>\n          <h4 mat-line>Вопросы и ответы</h4>\n        </a>\n\n        <mat-divider></mat-divider>\n\n        <a mat-list-item>\n          <img mat-list-icon [src]=\"sources.facebook_icon\" alt=\"fb\"/>\n          <h4 mat-line>Кабинет FB</h4>\n        </a>\n      </mat-nav-list>\n    </aside>\n\n    <mat-divider [vertical]=\"true\"></mat-divider>\n\n    <article class=\"main\">\n      <div class=\"heading\">\n        <h3>Увеличить лимит в Facebook</h3>\n      </div>\n\n      <form class=\"theform\" (ngSubmit)=\"onSubmit()\">\n        <p>Укажите сумму, на которую нужно увеличить лимит:</p>\n\n        <mat-form-field class=\"limit\">\n          <input matInput\n                 name=\"limit\"\n                 type=\"number\"\n                 placeholder=\"Лимит\"\n                 value=\"\"\n                 autocomplete=\"off\"\n                 [formControl]=\"limitFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"limitFormControl.hasError('required')\" class=\"error\">\n            Значение <strong>не заполнено</strong>\n          </mat-error>\n          <mat-error *ngIf=\"limitFormControl.hasError('min')\" class=\"error\">\n            Значение должно быть <strong>положительным</strong> числом\n          </mat-error>\n        </mat-form-field>\n\n        <button mat-raised-button color=\"primary\" class=\"submit\" [disabled]=\"loading || limitFormControl.invalid\">\n          Перевод\n        </button>\n      </form>\n    </article>\n  </section>\n</div>\n\n<!--\n<router-outlet></router-outlet>\n-->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-flow: column nowrap;\n  align-content: stretch;\n  height: 100%;\n  min-width: 600px; }\n  .container header {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center; }\n  .container header .logo {\n      height: 80px; }\n  .container header .logo img {\n        width: 80px;\n        height: 80px; }\n  .container header .heading {\n      padding-left: 64px; }\n  .container header .spinner {\n      position: absolute;\n      right: 20px; }\n  .container section {\n    display: flex;\n    flex-flow: row nowrap;\n    height: calc(100% - 80px); }\n  .container section .sidebar {\n      flex-grow: 1; }\n  .container section .sidebar [active] {\n        color: #7c25fd; }\n  .container section .sidebar [subitem] {\n        margin-left: 80px; }\n  .container section .sidebar [mat-list-icon] {\n        color: #7c25fd; }\n  .container section .main {\n      flex-grow: 4;\n      padding: 20px; }\n  .container section .main .submit {\n        margin-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXG1hY2hpbmVzXFxzaXRlc1xcYWl0YXJnZXQtdGVzdGNhc2VcXGNsaWVudC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBTGxCO0lBVUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQVp2QjtNQWVNLFlBUmdCLEVBQUE7RUFQdEI7UUFrQlEsV0FYYztRQVlkLFlBWmMsRUFBQTtFQVB0QjtNQXdCTSxrQkFBa0IsRUFBQTtFQXhCeEI7TUE0Qk0sa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQTdCakI7SUFrQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix5QkFBc0MsRUFBQTtFQXBDMUM7TUF5Q00sWUFBWSxFQUFBO0VBekNsQjtRQTRDUSxjQU44QixFQUFBO0VBdEN0QztRQWdEUSxpQkFBaUIsRUFBQTtFQWhEekI7UUFvRFEsY0FkOEIsRUFBQTtFQXRDdEM7TUF5RE0sWUFBWTtNQUNaLGFBQWEsRUFBQTtFQTFEbkI7UUE2RFEsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogNjAwcHg7XG5cbiAgJGhlYWRlci1oZWlnaHQ6IDgwcHg7XG5cbiAgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5sb2dvIHtcbiAgICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAkaGVhZGVyLWhlaWdodDtcbiAgICAgICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZGluZyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XG4gICAgfVxuXG4gICAgLnNwaW5uZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAjeyRoZWFkZXItaGVpZ2h0fSk7XG5cbiAgICAkbWFpbi1jb2xvcjogcmdiYSgxMjQsIDM3LCAyNTMsIDEpO1xuXG4gICAgLnNpZGViYXIge1xuICAgICAgZmxleC1ncm93OiAxO1xuXG4gICAgICBbYWN0aXZlXSB7XG4gICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgW3N1Yml0ZW1dIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgICB9XG5cbiAgICAgIFttYXQtbGlzdC1pY29uXSB7XG4gICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbiB7XG4gICAgICBmbGV4LWdyb3c6IDQ7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAuc3VibWl0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: MyErrorStateMatcher, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/backend.service */ "./src/services/backend.service.ts");







/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent(http, snackBar, backendService, cookieService) {
        this.http = http;
        this.snackBar = snackBar;
        this.backendService = backendService;
        this.cookieService = cookieService;
        this.title = 'Aitarget test case';
        this.cookieKey = 'facebook_ad_limit';
        this.loading = false;
        this.limit = 0;
        this.sources = {
            logo: '/assets/aitarget_logo.png',
            facebook_icon: '/assets/facebook_icon.svg'
        };
        this.limitFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    AppComponent.prototype.reportError = function (e) {
        console.error(e);
        var config = { horizontalPosition: 'right', verticalPosition: 'top', panelClass: 'snack-error' };
        this.snackBar.open((e.error || { error: e.message }).error, 'close', config);
    };
    AppComponent.prototype.hasLimitInCookies = function () {
        return this.cookieService.check(this.cookieKey);
    };
    AppComponent.prototype.getLimitFromCookies = function () {
        return Number(this.cookieService.get(this.cookieKey));
    };
    AppComponent.prototype.setLimitToCookies = function (limit) {
        this.cookieService.set(this.cookieKey, limit, 1);
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, e_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, 5, 6]);
                        this.loading = true;
                        if (!this.hasLimitInCookies()) return [3 /*break*/, 1];
                        this.limit = this.getLimitFromCookies();
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.backendService.getLimit()];
                    case 2:
                        _a.limit = _b.sent();
                        this.setLimitToCookies(this.limit);
                        _b.label = 3;
                    case 3:
                        setTimeout(function () { return _this.limitFormControl.setValue(_this.limit); }, 0);
                        return [3 /*break*/, 6];
                    case 4:
                        e_1 = _b.sent();
                        this.reportError(e_1);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, 3, 4]);
                        this.loading = true;
                        _a = this;
                        return [4 /*yield*/, this.backendService.postLimit(this.limitFormControl.value)];
                    case 1:
                        _a.limit = _b.sent();
                        this.limitFormControl.setValue(this.limit);
                        this.setLimitToCookies(this.limit);
                        return [3 /*break*/, 4];
                    case 2:
                        e_2 = _b.sent();
                        this.reportError(e_2);
                        return [3 /*break*/, 4];
                    case 3:
                        this.loading = false;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_backend_service__WEBPACK_IMPORTED_MODULE_6__["BackendService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/backend.service.ts":
/*!*****************************************!*\
  !*** ./src/services/backend.service.ts ***!
  \*****************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BackendService = /** @class */ (function () {
    function BackendService(http) {
        this.http = http;
        this.baseUrl = document.location.hostname === 'localhost'
            ? (document.location.protocol === 'http:' ? 'http://localhost:8080' : 'https://localhost:8443')
            : '';
        this.defaultHeaders = { accept: 'application/json' };
    }
    BackendService.prototype.getLimit = function () {
        var options = { headers: this.defaultHeaders };
        return this.http.get(this.baseUrl + "/limit", options)
            .toPromise()
            .then(function (response) { return response.data.limit; });
    };
    BackendService.prototype.postLimit = function (limit) {
        var data = { data: { limit: limit } };
        var options = { headers: Object.assign({}, this.defaultHeaders, { 'content-type': 'application/json' }) };
        return this.http.post(this.baseUrl + "/limit", data, options)
            .toPromise()
            .then(function (response) { return response.data.limit; });
    };
    BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\machines\sites\aitarget-testcase\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map