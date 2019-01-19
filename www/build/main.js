webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MembersPage = /** @class */ (function () {
    function MembersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var usernamez = navParams.get('username');
        var firstNamez = navParams.get('firstName');
        var lastNamez = navParams.get('lastName');
        console.log(usernamez);
        console.log(firstNamez);
        console.log(lastNamez);
        //this.memberUsername = 'member';
    }
    MembersPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad MembersPage');
        //console.log(this.navParams.get('lastName'));
        this.myUsername = this.navParams.get('username');
        this.myFirstName = this.navParams.get('firstName');
        this.myLastName = this.navParams.get('lastName');
    };
    MembersPage.prototype.logOut = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    MembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-members',template:/*ion-inline-start:"/opt/lampp/htdocs/cc-act/src/pages/members/members.html"*/'<!--\n  Generated template for the MembersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n  	<ion-title>\n      Members Page\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <!-- start of grid -->\n  <ion-grid>\n    <!-- start of row -->\n    <ion-row justify-content-center align-items-center>\n      <!-- start of columns -->\n      <ion-col col-sm-12 col-md-12 col-lg-12 class="welcome">\n        <h1>Welcome to the Assessment App, {{myUsername}}...</h1>        \n      </ion-col>\n\n      <ion-col col-8 col-md-8 col-lg-8>\n        <ion-list inset class="info-table">\n          <ion-item>\n            <ion-label>User Name: </ion-label>\n            <ion-input type="text" disabled="true" value="{{myUsername}}" text-center></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>First Name: </ion-label>\n            <ion-input type="text" disabled="true" value="{{myFirstName}}" text-center></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Last Name: </ion-label>\n            <ion-input type="text" disabled="true" value="{{myLastName}}" text-center></ion-input>\n          </ion-item>\n        </ion-list>        \n        <button ion-button round block (click)="logOut()">Logout</button>\n      </ion-col>\n      <!-- end of columns -->\n    </ion-row> <!-- end of row -->\n  </ion-grid> <!-- end of grid -->\n</ion-content>\n'/*ion-inline-end:"/opt/lampp/htdocs/cc-act/src/pages/members/members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MembersPage);
    return MembersPage;
}());

//# sourceMappingURL=members.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.Register = function () {
        var _this = this;
        var link = 'http://cashcart-assessment.herokuapp.com/authenticate.php';
        var myData = JSON.stringify({
            username: this.username.value
        });
        var loadingDisplay = this.loadingCtrl.create({
            content: 'please wait...',
        });
        if (this.username.value == "" || this.password.value == "" || this.cPassword.value == "" || this.firstName == "" || this.lastName.value == "") {
            var alertDisplay = this.alertCtrl.create({
                title: 'All fields are required to complete this process',
                subTitle: 'Please check your input and try again',
                buttons: ['Dismiss']
            });
            alertDisplay.present();
        }
        else {
            if (this.password.value == this.cPassword.value) {
                loadingDisplay.present().then(function () {
                    _this.http.post(link, myData)
                        .subscribe(function (data) {
                        _this.response = JSON.parse(data["_body"]);
                        loadingDisplay.dismiss();
                        if (_this.response !== "match") {
                            var regLink = 'http://cashcart-assessment.herokuapp.com/register.php';
                            var userData = JSON.stringify({
                                username: _this.username.value,
                                password: _this.password.value,
                                firstName: _this.firstName.value,
                                lastName: _this.lastName.value
                            });
                            _this.http.post(regLink, userData)
                                .subscribe(function (data) {
                                _this.regResult = JSON.parse(data["_body"]);
                                if (_this.regResult !== "success") {
                                    var alertDisplay2 = _this.alertCtrl.create({
                                        title: 'Something went wrong',
                                        subTitle: 'Registration failed',
                                        buttons: ['Dismiss']
                                    });
                                    alertDisplay2.present();
                                }
                                else {
                                    var alertDisplay2 = _this.alertCtrl.create({
                                        title: 'Success',
                                        subTitle: 'Registration successful',
                                        buttons: ['Dismiss']
                                    });
                                    alertDisplay2.present();
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                                }
                            });
                        }
                    });
                }, function (error) {
                    console.log('error ajax');
                });
            }
            else {
                var alertDisplay = this.alertCtrl.create({
                    title: 'All fields are required to complete this process',
                    subTitle: 'Password does not match',
                    buttons: ['Dismiss']
                });
                alertDisplay.present();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cPassword"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "cPassword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("firstName"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "firstName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("lastName"),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "lastName", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/opt/lampp/htdocs/cc-act/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Register\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <!-- start of grid -->\n  <ion-grid>\n    <!-- start of row -->\n    <ion-row justify-content-center align-items-center>\n      <!-- columns -->\n      <ion-col col-5 col-md-5 col-lg-5 text-center>\n        <h1>Register <ion-icon name="person"></ion-icon></h1>\n      </ion-col>\n      <ion-col col-8 col-md-8 col-lg-8 text-center>\n        <!-- start of list -->\n        <ion-list no-line>\n          <ion-item>\n            <ion-input round type="text" placeholder="Enter desired username" #username></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input round type="password" placeholder="Enter Your Password Here" #password></ion-input>\n            <span>{{passwordErr}}</span>\n          </ion-item>\n          <ion-item>\n            <ion-input round type="password" placeholder="Confirm Password" #cPassword></ion-input>\n            <span>{{cpasswordErr}}</span>\n          </ion-item>\n          <ion-item>\n            <ion-input round type="text" placeholder="First Name" #firstName></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input round type="text" placeholder="Last Name" #lastName></ion-input>\n          </ion-item>\n        </ion-list> <!-- end of list -->\n        <button ion-button round outline block (click)="Register()">Register</button>\n      </ion-col>\n      <!-- end of columns -->\n    </ion-row> <!-- end of row -->\n  </ion-grid> <!-- end of grid -->\n</ion-content>\n'/*ion-inline-end:"/opt/lampp/htdocs/cc-act/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/members/members.module": [
		272,
		1
	],
	"../pages/register/register.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_members_members__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_members_members__["a" /* MembersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/members/members.module#MembersPageModule', name: 'MembersPage', segment: 'members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_members_members__["a" /* MembersPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/opt/lampp/htdocs/cc-act/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/opt/lampp/htdocs/cc-act/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__members_members__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
    }
    HomePage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.logIn = function () {
        var _this = this;
        var link = 'http://cashcart-assessment.herokuapp.com/authenticate.php';
        var loadingDisplay = this.loadingCtrl.create({
            content: 'please wait...',
        });
        if (this.username.value === "" || this.password.value === "") {
            var alertDisplay = this.alertCtrl.create({
                title: 'All fields are required to complete this process',
                subTitle: 'Please check your username and password',
                buttons: ['Dismiss']
            });
            alertDisplay.present();
        }
        else {
            loadingDisplay.present().then(function () {
                var myData = JSON.stringify({ username: _this.username.value, password: _this.password.value });
                _this.http.post(link, myData)
                    .subscribe(function (data) {
                    _this.response = JSON.parse(data["_body"]);
                    //console.log(this.response);
                    //console.log(this.response['username']);
                    loadingDisplay.dismiss();
                    if (_this.response !== "wrong password") {
                        //console.log(this.response['firstName']);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__members_members__["a" /* MembersPage */], {
                            username: _this.response['username'],
                            firstName: _this.response['firstName'],
                            lastName: _this.response['lastName']
                        });
                    }
                    else {
                        //console.log('wrong pass');
                        var alertDisplay = _this.alertCtrl.create({
                            title: 'Login Failed',
                            subTitle: 'Invalid login credentials',
                            buttons: ['Dismiss']
                        });
                        alertDisplay.present();
                    }
                }, function (error) {
                    console.log("error");
                });
            });
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("username"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("password"),
        __metadata("design:type", Object)
    ], HomePage.prototype, "password", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/opt/lampp/htdocs/cc-act/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- start of grid -->\n  <ion-grid>\n    <!-- start of row -->\n    <ion-row justify-content-center align-items-center>\n      <!-- columns -->\n      <ion-col col-5 col-md-5 col-lg-5 text-center>\n        <h1>Assessment App <ion-icon name="person"></ion-icon></h1>\n      </ion-col>\n\n      <ion-col col-8 col-md-8 col-lg-8 text-center>\n        <!-- start of list -->\n        <ion-list no-lines>\n          <ion-item>\n            <ion-input round type="text" placeholder="Username" #username></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input round type="password" placeholder="Password" #password></ion-input>\n          </ion-item>\n          <button ion-button round block (click)="logIn()">Sign In</button>\n          <button ion-button round outline block (click)="signUp()">Register</button>\n        </ion-list> <!-- end of list -->     \n      </ion-col>\n      <!-- end of columns -->\n    </ion-row> <!-- end of row -->\n  </ion-grid> <!-- end of grid -->\n</ion-content>\n'/*ion-inline-end:"/opt/lampp/htdocs/cc-act/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map