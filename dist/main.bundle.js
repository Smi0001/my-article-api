webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: "**", redirectTo: '/login' } //may change this later with 404-page component
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My First Angular App';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__in_memory_data_service__ = __webpack_require__("../../../../../src/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sidebar_sidebar_component__["a" /* SidebarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__in_memory_data_service__["a" /* InMemoryDataService */], { dataEncapsulation: false })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dash-header {\r\n    height: 250px;\r\n    background: rgba(255, 82, 82,0.7) none repeat scroll 0 0;\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    z-index: -99;\r\n}\r\n.welcome-msg {\r\n    color: rgb(215,70,58);\r\n    text-align: center;\r\n}\r\n.dash-div {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 65%;\r\n    background: #fff;\r\n    height: 450px;\r\n    padding: 5px 20px;\r\n}\r\n.dash-div .row-1 {\r\n    width: 100%;\r\n    height: 50%;\r\n}\r\n.dash-div .avatar {\r\n    width: 180px;\r\n    height: 180px;\r\n}\r\n.dash-div .avatar img {\r\n    width: 170px;\r\n    height: 170px;\r\n    box-shadow: 0 0 5px #000;\r\n}\r\n.dash-div .name-div {\r\n    padding-top: 70px;\r\n}\r\n.dash-div .contact-div {\r\n    padding: 10px;\r\n    height: 60px;\r\n}\r\n.dash-div .contact-div .topic {\r\n    box-shadow: 2px 2px 2px 2px #000;\r\n    padding: 3px 10px;\r\n}\r\n.dash-div .row-2 {\r\n    width: 50%;\r\n    height: 45%;\r\n    padding: 0 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dash-header\"></div>\r\n<h1 class=\"center welcome-msg\">Welcome to Dashboard</h1>\r\n<button type=\"button\" class=\"cur-p btn btn-link fr\" (click)=\"logOut()\">Logout</button>\r\n\r\n<div *ngIf=\"userInfo\" class=\"dash-div\">\r\n    <div class=\"row\">\r\n        <div class=\"col col-lg-3 col-md-3\">\r\n            <div class=\"avatar\">\r\n                <img [src]=\"userInfo.avatar\" alt=\"User Image\" class=\"user-img\">\r\n            </div>\r\n            <input class=\"text-display col-md-6 trim input-def-h\" contenteditable=\"true\"\r\n             title=\"{{userInfo.fname}} {{userInfo.lname}}\" value=\"{{userInfo.fname}} {{userInfo.lname}}\" />\r\n        </div>\r\n        <div class=\"name-div col-lg-9 col-md-9 row\">\r\n          <div class=\"col-md-6\">\r\n            <input class=\"text-display large-12 fl trim input-def-h\" title=\"{{userInfo.email}}\" placeholder=\"Enter your Email\" value=\"{{userInfo.email}}\"/>\r\n            <input type=\"password\" class=\"text-display large-12 fl input-def-h\" placeholder=\"* * * * * * * *\" />\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <input class=\"text-display large-12 fl input-def-h\" title=\"{{userInfo.contact}}\" placeholder=\"Enter contact #\" value=\"{{userInfo.contact}}\" />\r\n            <div contenteditable=\"true\" class=\"text-display large-12 fl trim\" title=\"{{userInfo.address}}\" placeholder=\"About yourself\">{{userInfo.address}}</div>\r\n          </div>\r\n        </div>\r\n     </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8 container\">\r\n      <div class=\"col-md-12 title-heading\">\r\n        Recent Activities\r\n      </div>\r\n      <div *ngIf=\"activityList\" class=\"col-md-12 inner-container activity-div\">\r\n        <table  class=\"table table-hover table-bordered\">\r\n          <thead align=\"center\" class=\"thead-default\">\r\n            <tr>\r\n              <th class=\"text-cap\" scope=\"col\">Articles</th>\r\n              <th class=\"text-cap\" scope=\"col\">Updated</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let activity of activityList\" class=\"\">\r\n              <td scope=\"row\">\r\n                {{activity.title}}\r\n              </td>\r\n              <td scope=\"row\">\r\n                {{activity.updatedTime | date: 'medium'}}\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 container\">\r\n      <div class=\"col-md-12 title-heading\">\r\n        New Fetures\r\n      </div>\r\n      <div class=\"col-md-12 inner-container\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(loginService, userService) {
        this.loginService = loginService;
        this.userService = userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (!this.loginService.ifNotLogedInRedirect()) {
            this.getUser();
        }
    };
    DashboardComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUserDetails()
            .then(function (res) {
            console.log(res);
            _this.userInfo = res;
            _this.getActivityList();
        })
            .catch(function (err) { return console.log('No details found : ', err); });
    };
    DashboardComponent.prototype.logOut = function () {
        this.loginService.logOut();
    };
    DashboardComponent.prototype.getActivityList = function () {
        // static activity data
        this.activityList = [
            {
                id: 1,
                title: 'new article',
                createdTime: 1518982022797,
                updatedTime: 1518982025797
            },
            {
                id: 2,
                title: 'Article 2',
                createdTime: 1508982022797,
                updatedTime: 1518982035797
            }
        ];
        // $('#activityList').DataTable({
        //   'ajax': function (data, callback, settings) { callback(activityList); },
        //   'columns': [
        //     { 'data': 'title' },
        //     { 'data': 'updatedTime' }
        //   ],
        //   'order': [[1, 'asc']]
        // });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var credentials = [
            { username: "shammi", password: "password", sessionid: "123456" },
            { username: "shammi1", password: "password", sessionid: "7891011" },
            { username: "shammi3", password: "password", sessionid: "789111" },
            { username: "shammi2", password: "password", sessionid: "121314" }
        ];
        var users = [
            { username: "shammi", email: "shammi@gmail.com", password: "password", fname: "SHAMMI", lname: 'HANS', avatar: '/assets/img/user0.png' },
            { username: "shammi1", email: "shammi1@gmail.com", password: "password", fname: "ABC", lname: 'XYZ', avatar: '/assets/img/user1.png' },
            { username: "shammi3", email: "shammi3@gmail.com", password: "password", fname: "DEF", lname: 'UVW', avatar: '/assets/img/user2.png' },
            { username: "shammi4", email: "shammi4@gmail.com", password: "password", fname: "JKL", lname: 'OPQ', avatar: '/assets/img/user3.png' },
            { username: "shammi2", email: "shamm2@gmail.com", password: "password", fname: "GHI", lname: 'RST', avatar: '/assets/img/user4.png' }
        ];
        return { credentials: credentials, users: users };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.credentialsUrl = 'api/credentials'; // URL to web api
    }
    LoginService.prototype.isLoggedIn = function () {
        return localStorage.getItem('currentUser') ? true : false;
    };
    LoginService.prototype.ifLoggedInRedirect = function () {
        if (this.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
            return true;
        }
    };
    LoginService.prototype.ifNotLogedInRedirect = function () {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login']);
            return true;
        }
    };
    LoginService.prototype.getUserByUsername = function (username, userArray) {
        return userArray.find(function (user) { return user.username == username; });
    };
    LoginService.prototype.matchPassword = function (password) {
        return this.user.password == password ? true : false;
    };
    LoginService.prototype.successLogin = function () {
        var currentUser = {
            username: this.user.username,
            sessionid: this.user.sessionid,
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.router.navigate(['/dashboard']);
        this.log('login success');
    };
    LoginService.prototype.getUserBylogIn = function (username, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.credentialsUrl)
                .subscribe(function (data) {
                _this.user = _this.getUserByUsername(username, data);
                if (_this.user && _this.matchPassword(password)) {
                    _this.successLogin();
                    resolve('success');
                }
                else {
                    reject('error');
                }
            });
        });
        return promise;
    };
    LoginService.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    /* Log a LoginService message */
    LoginService.prototype.log = function (message) {
        console.log('LoginService: ' + message);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-overlay {\r\n    display: block;\r\n}\r\n.login-modal {\r\n    display: block;\r\n    height: 300px;\r\n    width: 450px;\r\n}\r\n.login-modal .modal-content {\r\n    background-color: whitesmoke;\r\n    border: none;\r\n    padding: 35px 100px;\r\n}\r\n.login-modal input {\r\n    margin: 10px 0;\r\n    width: 100%\r\n}\r\n.login-modal .alert {\r\n    font-size: 15px;\r\n}\r\n.form-signin .text-display{\r\n  padding: 2px 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal-overlay login-overlay\"></div>\r\n<div class=\"modal login-modal\">\r\n    <div class=\"modal-content\">\r\n        <form (ngSubmit)=\"onSubmit(loginForm)\" novalidate class=\"form-signin\" #loginForm=\"ngForm\">\r\n            <div *ngIf=\"(errors.error)\" class=\"alert alert-danger\">{{errors.text}}</div>\r\n            <input type=\"text\" name=\"username\" class=\"form-control text-display input-def-h\" placeholder=\"Username\"\r\n             required ngModel [ngClass]=\"{ 'alert-danger': (loginForm.form.dirty && !loginForm.form.value.username)}\"/>\r\n\r\n            <input type=\"password\" name=\"password\" class=\"form-control text-display input-def-h\" placeholder=\"Password\"\r\n            required ngModel [ngClass]=\"{ 'alert-danger': (loginForm.form.dirty && !loginForm.form.value.password)}\"/>\r\n\r\n            <button type=\"submit\" class=\"btn btn-lg btn-outline-primary btn-block\"\r\n             [disabled]=\"!loginForm.form.valid || loginForm.form.pristine\" [ngClass]=\"{'cur-p':loginForm.form.valid}\">Login</button>\r\n\r\n            <button type=\"button\" class=\"cur-p btn btn-link\">Forgot Password?</button>\r\n            <button type=\"button\" class=\"cur-p btn btn-link\">Register</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.errors = { error: false, text: 'Username-Password mismatch' };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errors.error = false;
        this.loginService.ifLoggedInRedirect();
    };
    LoginComponent.prototype.onSubmit = function (loginForm) {
        var _this = this;
        this.errors.error = false;
        var u = loginForm.form.value.username;
        var p = loginForm.form.value.password;
        this.loginService.getUserBylogIn(u, p)
            .then(function (res) { return console.log('response: ', res); })
            .catch(function () { return _this.errors.error = true; });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sideMenu-burger {\r\n  font-size: 30px;\r\n  cursor: pointer;\r\n  margin: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n  <a href=\"#\">About</a>\n  <a href=\"#\">Services</a>\n  <a href=\"#\">Clients</a>\n  <a href=\"#\">Contact</a>\n</div>\n<span id=\"sideMenu\" class=\"sideMenu-burger\" (click)=\"openNav()\">&#9776;</span>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        (function () {
            document.getElementById('mySidenav').addEventListener('click', function (e) {
                e.stopPropagation();
            });
        })();
    };
    SidebarComponent.prototype.openNav = function () {
        document.getElementById('mySidenav').style.width = '250px';
    };
    SidebarComponent.prototype.closeNav = function () {
        document.getElementById('mySidenav').style.width = '0';
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
*/
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'api/users'; // URL to web api
    }
    /** GET users from the server
    getUsers (): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl)
        .pipe(
          tap(users => this.log(`fetched users`)),
          catchError(this.handleError('getUsers', []))
        );
      }
    */
    UserService.prototype.getUserInfoByUsername = function (username, userArray) {
        return userArray.find(function (user) { return user.username == username; });
    };
    UserService.prototype.getUserDetails = function () {
        var _this = this;
        var username = JSON.parse(localStorage.getItem('currentUser')).username;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.usersUrl)
                .subscribe(function (data) {
                _this.userInfo = _this.getUserInfoByUsername(username, data);
                if (_this.userInfo) {
                    resolve(_this.userInfo);
                }
                else {
                    reject('error');
                }
            });
        });
        return promise;
    };
    /** GET user by id. Return `undefined` when id not found
    getUserNo404<Data>(id: number): Observable<User> {
      const url = `${this.usersUrl}/?id=${id}`;
      return this.http.get<User[]>(url)
      .pipe(
        map(Users => Users[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} user id=${id}`);
        }),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
    }
    */
    /** GET User by id. Will 404 if id not found
    getUser(id: number): Observable<User> {
      const url = `${this.usersUrl}/${id}`;
      return this.http.get<User>(url).pipe(
        tap(_ => this.log(`fetched User id=${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
    }
   */
    /* GET Users whose name contains search term
    searchUsers(term: string): Observable<User[]> {
      if (!term.trim()) {
        // if not search term, return empty User array.
        return of([]);
      }
      return this.http.get<User[]>(`api/users/?name=${term}`).pipe(
        tap(_ => this.log(`found users matching "${term}"`)),
        catchError(this.handleError<User[]>('searchUsers', []))
      );
    }
   */
    //////// Save methods //////////
    /** POST: add a new User to the server
    addUser (user: User): Observable<User> {
      return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
        tap((user: User) => this.log(`added User w/ id=${user.id}`)),
        catchError(this.handleError<User>('addUser'))
      );
    }
   */
    /** DELETE: delete the User from the server
    deleteUser (user: User | number): Observable<User> {
      const id = typeof user === 'number' ? user : user.id;
      const url = `${this.usersUrl}/${id}`;
  
      return this.http.delete<User>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted User id=${id}`)),
        catchError(this.handleError<User>('deleteUser'))
      );
    }
   */
    /** PUT: update the User on the server
    updateUser (user: User): Observable<any> {
      return this.http.put(this.usersUrl, user, httpOptions).pipe(
        tap(_ => this.log(`updated user id=${user.id}`)),
        catchError(this.handleError<any>('updateUser'))
      );
    }
   */
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     *
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  
    /** Log a UserService message */
    UserService.prototype.log = function (message) {
        console.log('UserService: ' + message);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map