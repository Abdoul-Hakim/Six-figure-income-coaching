function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _unsubscribe_unsubscribe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./unsubscribe/unsubscribe.component */
    "./src/app/unsubscribe/unsubscribe.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: 'unsubscribe',
      component: _unsubscribe_unsubscribe_component__WEBPACK_IMPORTED_MODULE_2__["UnsubscribeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'ClientApp';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 0,
      consts: [["href", "https://www.flaticon.com/free-icon/dollar_845665", "title", "Kiranshastry"], ["href", "https://www.flaticon.com/", "title", "Flaticon"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Icons made by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Kiranshastry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " from ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " www.flaticon.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n[_nghost-%COMP%] {\n  display: grid;\n  grid-template-rows: 10% 85% 5%;\n  grid-template-columns: 100%;\n  height: 100%;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   app-header[_ngcontent-%COMP%] {\n  grid-row: 1;\n  grid-column: 1;\n}\n\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  grid-row: 2;\n  grid-column: 1;\n}\n\n[_nghost-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 98%;\n  height: 35%;\n}\n\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  background-color: #0174A9;\n  color: #20B8FE;\n  width: 100%;\n  font-size: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-row: 3;\n  grid-column: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNZWdhcG9ydFxcUHJvamVjdHNcXFNpeC1maWd1cmUtaW5jb21lLWNvYWNoaW5nXFxDbGllbnRBcHAvc3JjXFxzdHlsZWhlbHBlclxcZWxlbWVudEZvcm1hdHRlci5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xcTWVnYXBvcnRcXFByb2plY3RzXFxTaXgtZmlndXJlLWluY29tZS1jb2FjaGluZ1xcQ2xpZW50QXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QUNMQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURRRjs7QUNORTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FEUUo7O0FDTEU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBRE9KOztBQ0pFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QURNSjs7QUNIRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBREtKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSwgYTphY3RpdmUsIGE6dmlzaXRlZCwgYTpob3ZlcntcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiIsImEsIGE6YWN0aXZlLCBhOnZpc2l0ZWQsIGE6aG92ZXIge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDg1JSA1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgYXBwLWhlYWRlciB7XG4gIGdyaWQtcm93OiAxO1xuICBncmlkLWNvbHVtbjogMTtcbn1cbjpob3N0IG1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtcm93OiAyO1xuICBncmlkLWNvbHVtbjogMTtcbn1cbjpob3N0IHZpZGVvIHtcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiAzNSU7XG59XG46aG9zdCBmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3NEE5O1xuICBjb2xvcjogIzIwQjhGRTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1yb3c6IDM7XG4gIGdyaWQtY29sdW1uOiAxO1xufSIsIkBpbXBvcnQgJy4uL3N0eWxlaGVscGVyL2VsZW1lbnRGb3JtYXR0ZXIuc2Nzcyc7XHJcblxyXG46aG9zdHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDg1JSA1JTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBhcHAtaGVhZGVye1xyXG4gICAgZ3JpZC1yb3c6IDE7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICB9XHJcblxyXG4gIG1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgfVxyXG5cclxuICB2aWRlb3tcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICB9XHJcblxyXG4gIGZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTc0QTk7XHJcbiAgICBjb2xvcjogIzIwQjhGRTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXJvdzogMztcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modal/modal.component */
    "./src/app/modal/modal.component.ts");
    /* harmony import */


    var _unsubscribe_unsubscribe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./unsubscribe/unsubscribe.component */
    "./src/app/unsubscribe/unsubscribe.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _unsubscribe_unsubscribe_component__WEBPACK_IMPORTED_MODULE_10__["UnsubscribeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _unsubscribe_unsubscribe_component__WEBPACK_IMPORTED_MODULE_10__["UnsubscribeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container"], [1, "m-0"], [1, "divider"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Six figures income coaching");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }
      },
      styles: [".m-0[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.p-0[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.mp-0[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #0174A9;\n  height: 100%;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #FFF;\n  font-weight: bold;\n  font-size: 2em;\n}\n\n[_nghost-%COMP%]   .divider[_ngcontent-%COMP%] {\n  height: 10%;\n  width: 100%;\n  background-color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcTWVnYXBvcnRcXFByb2plY3RzXFxTaXgtZmlndXJlLWluY29tZS1jb2FjaGluZ1xcQ2xpZW50QXBwL3NyY1xcc3R5bGVoZWxwZXJcXGJveGhlbHBlci5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFVzZXJzXFxNZWdhcG9ydFxcUHJvamVjdHNcXFNpeC1maWd1cmUtaW5jb21lLWNvYWNoaW5nXFxDbGllbnRBcHAvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QUNUQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FEWUY7O0FDVkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURZSjs7QUNURTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURXSjs7QUNSRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QURVSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS0we1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnAtMHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubXAtMHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuIiwiLm0tMCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnAtMCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tcC0wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTc0QTk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBoMSB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyZW07XG59XG46aG9zdCAuZGl2aWRlciB7XG4gIGhlaWdodDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZWhlbHBlci9ib3hoZWxwZXInO1xyXG5cclxuOmhvc3R7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTc0QTk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGgxe1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuXHJcbiAgLmRpdmlkZXJ7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../modal/modal.component */
    "./src/app/modal/modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _services_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/link.service */
    "./src/app/services/link.service.ts");
    /* harmony import */


    var _services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/modal.service */
    "./src/app/services/modal.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(dialog, linkProvider, modalStateProvider) {
        _classCallCheck(this, HomeComponent);

        this.dialog = dialog;
        this.linkProvider = linkProvider;
        this.modalStateProvider = modalStateProvider;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]);

            _this.modalStateProvider.updateModalState(true);
          }, 1500);
          this.linkProvider.currentLink.subscribe(function (link) {
            return _this.link = link;
          });
          this.modalStateProvider.currentModalState.subscribe(function (state) {
            if (!state) {
              _this.dialog.closeAll();
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_link_service__WEBPACK_IMPORTED_MODULE_3__["LinkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 10,
      vars: 1,
      consts: [["controls", ""], ["src", "../assets/video/trailer_v1.mp4", "type", "video/mp4"], [3, "href"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check out how this guy makes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "$1,000,000+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " while traveling the world!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "video", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Get your exclusive training!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n[_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-right: 5%;\n  text-align: center;\n  margin-top: 5%;\n  font-size: 1.8em;\n}\n\n[_nghost-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 98%;\n  height: 35%;\n}\n\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #20B8FE;\n  color: #E8E9EB;\n  height: 10%;\n  font-size: 1.5em;\n  width: 90%;\n  border-radius: 5px;\n  border: 2px solid #20B8FE;\n  margin-top: 2%;\n}\n\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border-color: #E8E9EB;\n}\n\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n@media only screen and (max-width: 450px) {\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n}\n\n@media only screen and (min-width: 700px) {\n  [_nghost-%COMP%]   video[_ngcontent-%COMP%] {\n    max-width: 65%;\n    height: 33%;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    max-width: 50%;\n    margin-top: 2.5%;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (orientation: landscape) {\n  [_nghost-%COMP%]   video[_ngcontent-%COMP%] {\n    max-width: 46%;\n    height: 50%;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    max-width: 50%;\n  }\n}\n\n@media only screen and (min-width: 1000px) and (orientation: portrait) {\n  [_nghost-%COMP%]   video[_ngcontent-%COMP%] {\n    max-width: 65%;\n    height: 30%;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    max-width: 50%;\n  }\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 2.5%;\n  }\n}\n\n@media screen and (min-width: 1300px) {\n  [_nghost-%COMP%]   video[_ngcontent-%COMP%] {\n    max-width: 46%;\n    height: 50%;\n  }\n  [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n    max-width: 40%;\n  }\n  [_nghost-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 2.5%;\n    margin-bottom: 1%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXE1lZ2Fwb3J0XFxQcm9qZWN0c1xcU2l4LWZpZ3VyZS1pbmNvbWUtY29hY2hpbmdcXENsaWVudEFwcC9zcmNcXHN0eWxlaGVscGVyXFxlbGVtZW50Rm9ybWF0dGVyLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXE1lZ2Fwb3J0XFxQcm9qZWN0c1xcU2l4LWZpZ3VyZS1pbmNvbWUtY29hY2hpbmdcXENsaWVudEFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBQ0xBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEUUY7O0FDTkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRFFKOztBQ05FO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QURRSjs7QUNORTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRFFKOztBQ05FO0VBQ0UscUJBQUE7QURRSjs7QUNORTtFQUNFLDBCQUFBO0FEUUo7O0FDSEU7RUFFRTtJQUNFLGVBQUE7RURJSjtBQUNGOztBQ0RFO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsV0FBQTtFREdKO0VDREU7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7RURHSjtBQUNGOztBQ0FFO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsV0FBQTtFREVKO0VDQUU7SUFDRSxjQUFBO0VERUo7QUFDRjs7QUNDRTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7RURDSjtFQ0NFO0lBQ0UsY0FBQTtFRENKO0VDQ0U7SUFDRSxtQkFBQTtFRENKO0FBQ0Y7O0FDRUU7RUFDRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VEQUo7RUNHRTtJQUNFLGNBQUE7RURESjtFQ0dFO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFRERKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLCBhOmFjdGl2ZSwgYTp2aXNpdGVkLCBhOmhvdmVye1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuIiwiYSwgYTphY3RpdmUsIGE6dmlzaXRlZCwgYTpob3ZlciB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgaDIge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG59XG46aG9zdCB2aWRlbyB7XG4gIHdpZHRoOiA5OCU7XG4gIGhlaWdodDogMzUlO1xufVxuOmhvc3QgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwQjhGRTtcbiAgY29sb3I6ICNFOEU5RUI7XG4gIGhlaWdodDogMTAlO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB3aWR0aDogOTAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMEI4RkU7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuOmhvc3QgYnV0dG9uOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogI0U4RTlFQjtcbn1cbjpob3N0IHNwYW4ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgOmhvc3QgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgOmhvc3QgdmlkZW8ge1xuICAgIG1heC13aWR0aDogNjUlO1xuICAgIGhlaWdodDogMzMlO1xuICB9XG4gIDpob3N0IGJ1dHRvbiB7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogMi41JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICA6aG9zdCB2aWRlbyB7XG4gICAgbWF4LXdpZHRoOiA0NiU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cbiAgOmhvc3QgYnV0dG9uIHtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIDpob3N0IHZpZGVvIHtcbiAgICBtYXgtd2lkdGg6IDY1JTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgfVxuICA6aG9zdCBidXR0b24ge1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG4gIDpob3N0IGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjUlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgOmhvc3QgdmlkZW8ge1xuICAgIG1heC13aWR0aDogNDYlO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG4gIDpob3N0IGJ1dHRvbiB7XG4gICAgbWF4LXdpZHRoOiA0MCU7XG4gIH1cbiAgOmhvc3QgaDIge1xuICAgIG1hcmdpbi10b3A6IDIuNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZWhlbHBlci9lbGVtZW50Rm9ybWF0dGVyLnNjc3MnO1xyXG5cclxuOmhvc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgaDJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gIH1cclxuICB2aWRlb3tcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwQjhGRTtcclxuICAgIGNvbG9yOiAjRThFOUVCO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMEI4RkU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICB9XHJcbiAgYnV0dG9uOmFjdGl2ZXtcclxuICAgIGJvcmRlci1jb2xvcjogI0U4RTlFQjtcclxuICB9XHJcbiAgc3BhbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcblxyXG4gICAgYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICB2aWRlb3tcclxuICAgICAgbWF4LXdpZHRoOiA2NSU7XHJcbiAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkge1xyXG4gICAgdmlkZW97XHJcbiAgICAgIG1heC13aWR0aDogNDYlO1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkge1xyXG4gICAgdmlkZW97XHJcbiAgICAgIG1heC13aWR0aDogNjUlO1xyXG4gICAgICBoZWlnaHQ6IDMwJTtcclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMi41JTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMDBweCl7XHJcbiAgICB2aWRlb3tcclxuICAgICAgbWF4LXdpZHRoOiA0NiU7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbntcclxuICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICBoMntcclxuICAgICAgbWFyZ2luLXRvcDoyLjUlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _services_link_service__WEBPACK_IMPORTED_MODULE_3__["LinkService"]
        }, {
          type: _services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modal/modal.component.ts":
  /*!******************************************!*\
    !*** ./src/app/modal/modal.component.ts ***!
    \******************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/modal.service */
    "./src/app/services/modal.service.ts");
    /* harmony import */


    var _services_smtp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/smtp.service */
    "./src/app/services/smtp.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ModalComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Get your ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FREE COPY");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " of this online income method");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ModalComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "THANK YOU");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " for downloading this document");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "You will get your email in few seconds. (You may need to check your spam)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModalComponent_mat_error_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent(modalStateProvider, smtpProvider) {
        _classCallCheck(this, ModalComponent);

        this.modalStateProvider = modalStateProvider;
        this.smtpProvider = smtpProvider;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.confirmation = false;
        this.confirmed = true;
        this.emailError = false;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "confirm",
        value: function confirm() {
          var _this2 = this;

          var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (this.text.match(pattern) !== null) {
            this.confirmation = true;
            this.smtpProvider.sendSubscribe(this.text);
            setTimeout(function () {
              _this2.modalStateProvider.updateModalState(false);
            }, 2500);
          } else {
            this.emailError = true;
          }
        }
      }, {
        key: "inputChange",
        value: function inputChange(e) {
          this.text = e.target.value;
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_smtp_service__WEBPACK_IMPORTED_MODULE_3__["SmtpService"]));
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["app-modal"]],
      decls: 13,
      vars: 4,
      consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["src", "../../assets/images/image.png", "alt", "Find out how this guy makes 1,000,000+ while travelling the world"], ["formGroup", "contactForm"], ["formControlName", "userEmail", "matInput", "", "placeholder", "youremail@example.com", "type", "email", "ngModel", "", "email", "", "required", "", 3, "errorStateMatcher", "change"], [4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalComponent_ng_container_0_Template, 6, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_ng_template_1_Template, 6, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Write your Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ModalComponent_Template_input_change_9_listener($event) {
            return ctx.inputChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalComponent_mat_error_10_Template, 2, 0, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_11_listener() {
            return ctx.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Get it NOW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmation === false)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.emailError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailError);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 0px;\n}\n\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #0174A9 !important;\n}\n\n[_nghost-%COMP%]   picture[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n[_nghost-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  border-color: #0174A9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvQzpcXFVzZXJzXFxNZWdhcG9ydFxcUHJvamVjdHNcXFNpeC1maWd1cmUtaW5jb21lLWNvYWNoaW5nXFxDbGllbnRBcHAvc3JjXFxzdHlsZWhlbHBlclxcZWxlbWVudEZvcm1hdHRlci5zY3NzIiwic3JjL2FwcC9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kYWwvQzpcXFVzZXJzXFxNZWdhcG9ydFxcUHJvamVjdHNcXFNpeC1maWd1cmUtaW5jb21lLWNvYWNoaW5nXFxDbGllbnRBcHAvc3JjXFxhcHBcXG1vZGFsXFxtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBQ0pFO0VBQ0UsV0FBQTtBRE9KOztBQ0pFO0VBQ0UsZUFBQTtBRE1KOztBQ0hFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FES0o7O0FDRkU7RUFDRSxXQUFBO0FESUo7O0FDREU7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7QURHSjs7QUNBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FERUo7O0FDQ0U7RUFDRSxnQ0FBQTtBRENKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLCBhOmFjdGl2ZSwgYTp2aXNpdGVkLCBhOmhvdmVye1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuIiwiYSwgYTphY3RpdmUsIGE6dmlzaXRlZCwgYTpob3ZlciB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbjpob3N0IGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbjpob3N0IG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG46aG9zdCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTc0QTkgIWltcG9ydGFudDtcbn1cbjpob3N0IHBpY3R1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBib3JkZXItY29sb3I6ICMwMTc0QTkgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZWhlbHBlci9lbGVtZW50Rm9ybWF0dGVyLnNjc3MnO1xyXG5cclxuOmhvc3R7XHJcbiAgZm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE3NEE5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBwaWN0dXJle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBib3JkZXItY29sb3I6ICAjMDE3NEE5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal',
          templateUrl: './modal.component.html',
          styleUrls: ['./modal.component.scss']
        }]
      }], function () {
        return [{
          type: _services_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]
        }, {
          type: _services_smtp_service__WEBPACK_IMPORTED_MODULE_3__["SmtpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/link.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/link.service.ts ***!
    \******************************************/

  /*! exports provided: LinkService */

  /***/
  function srcAppServicesLinkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkService", function () {
      return LinkService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LinkService = /*#__PURE__*/function () {
      function LinkService() {
        _classCallCheck(this, LinkService);

        this.currentLink = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('https://www.digistore24.com/redir/300124/Prithvik/');
      }

      _createClass(LinkService, [{
        key: "updateLink",
        value: function updateLink(newLink) {
          this.currentLink.next(newLink);
        }
      }]);

      return LinkService;
    }();

    LinkService.ɵfac = function LinkService_Factory(t) {
      return new (t || LinkService)();
    };

    LinkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LinkService,
      factory: LinkService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/modal.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/modal.service.ts ***!
    \*******************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppServicesModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ModalService = /*#__PURE__*/function () {
      function ModalService() {
        _classCallCheck(this, ModalService);

        this.modalState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentModalState = this.modalState.asObservable();
      }

      _createClass(ModalService, [{
        key: "updateModalState",
        value: function updateModalState(state) {
          this.modalState.next(state);
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)();
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/smtp.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/smtp.service.ts ***!
    \******************************************/

  /*! exports provided: SmtpService */

  /***/
  function srcAppServicesSmtpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SmtpService", function () {
      return SmtpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../assets/js/smtp.js */
    "./src/assets/js/smtp.js");
    /* harmony import */


    var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_2__);

    var SmtpService = /*#__PURE__*/function () {
      function SmtpService() {
        _classCallCheck(this, SmtpService);
      }

      _createClass(SmtpService, [{
        key: "sendSubscribe",
        value: function sendSubscribe(email) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    Email.send({
                      Host: 'smtp.elasticemail.com',
                      Username: 'kichuprithvik@gmail.com',
                      Password: '40112FDD1FFE340C82973EAA84C4BDACF6FA',
                      To: email,
                      From: 'kichuprithvik@gmail.com',
                      Subject: 'A new client has registred',
                      Body: "<p>A new client with the email ".concat(email, " has registred!!!<p>")
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "sendUnsubscribe",
        value: function sendUnsubscribe(email) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    Email.send({
                      Host: 'smtp.elasticemail.com',
                      Username: 'kichuprithvik@gmail.com',
                      Password: '40112FDD1FFE340C82973EAA84C4BDACF6FA',
                      To: 'kichuprithvik@gmail.com',
                      From: 'kichuprithvik@gmail.com',
                      Subject: 'Client has unsubscribed',
                      Body: "<p>The client with the email ".concat(email, " has unsubscribed!<p>") + '<p>Send him no more emails.</p>'
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }]);

      return SmtpService;
    }();

    SmtpService.ɵfac = function SmtpService_Factory(t) {
      return new (t || SmtpService)();
    };

    SmtpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SmtpService,
      factory: SmtpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SmtpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/unsubscribe/unsubscribe.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/unsubscribe/unsubscribe.component.ts ***!
    \******************************************************/

  /*! exports provided: UnsubscribeComponent */

  /***/
  function srcAppUnsubscribeUnsubscribeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnsubscribeComponent", function () {
      return UnsubscribeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_smtp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/smtp.service */
    "./src/app/services/smtp.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function UnsubscribeComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure you want to leave?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You'll miss increadible opportunities to get rich and have a successfull career!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnsubscribeComponent_ng_template_0_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.unsubscription(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnsubscribeComponent_ng_template_0_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.unsubscription(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "No");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UnsubscribeComponent_ng_template_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Good Bye!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your unsubscription has been confirmed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UnsubscribeComponent_ng_template_1_ng_template_1_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please enter a valid email address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UnsubscribeComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter your email to confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Write your Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UnsubscribeComponent_ng_template_1_ng_template_1_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.inputChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UnsubscribeComponent_ng_template_1_ng_template_1_mat_error_7_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnsubscribeComponent_ng_template_1_ng_template_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.confirm(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx_r8.emailError);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.emailError);
      }
    }

    function UnsubscribeComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UnsubscribeComponent_ng_template_1_ng_template_0_Template, 5, 0, "ng-template", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnsubscribeComponent_ng_template_1_ng_template_1_Template, 11, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }

      if (rf & 2) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.confirmation === true)("ngIfElse", _r7);
      }
    }

    var UnsubscribeComponent = /*#__PURE__*/function () {
      function UnsubscribeComponent(router, smtpProvider) {
        _classCallCheck(this, UnsubscribeComponent);

        this.router = router;
        this.smtpProvider = smtpProvider;
        this.confirmed = true;
        this.emailError = false;
        this.response = true;
        this.confirmation = false;
      }

      _createClass(UnsubscribeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "unsubscription",
        value: function unsubscription(answer) {
          if (answer) {
            this.response = false;
          } else {
            this.router.navigate(['/home']);
          }
        }
      }, {
        key: "confirm",
        value: function confirm(answer) {
          var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (this.text.match(pattern) !== null) {
            this.confirmation = answer;
            this.confirmation = true;
            this.smtpProvider.sendUnsubscribe(this.text);
          } else {
            this.emailError = true;
          }
        }
      }, {
        key: "inputChange",
        value: function inputChange(e) {
          this.text = e.target.value;
        }
      }]);

      return UnsubscribeComponent;
    }();

    UnsubscribeComponent.ɵfac = function UnsubscribeComponent_Factory(t) {
      return new (t || UnsubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_smtp_service__WEBPACK_IMPORTED_MODULE_2__["SmtpService"]));
    };

    UnsubscribeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnsubscribeComponent,
      selectors: [["app-unsubscribe"]],
      decls: 3,
      vars: 2,
      consts: [[3, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "container"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["noConfirmation", ""], ["formControlName", "userEmail", "matInput", "", "placeholder", "youremail@example.com", "type", "email", "ngModel", "", "email", "", "required", "", 3, "errorStateMatcher", "change"], [4, "ngIf"], [1, "container-single"]],
      template: function UnsubscribeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UnsubscribeComponent_ng_template_0_Template, 10, 0, "ng-template", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnsubscribeComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.response === true)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 5%;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  text-align: center;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(50%, 50%));\n  grid-template-rows: 100%;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #20B8FE;\n  color: #E8E9EB;\n  height: 10%;\n  font-size: 1.5em;\n  border-radius: 5px;\n  border: 2px solid #20B8FE;\n  margin-top: 2%;\n  width: 80%;\n  height: 100%;\n  display: flex;\n  justify-self: center;\n  align-self: center;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:active {\n  border-color: white;\n  outline: none;\n}\n[_nghost-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  outline: none;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .container-single[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5zdWJzY3JpYmUvQzpcXFVzZXJzXFxNZWdhcG9ydFxcUHJvamVjdHNcXFNpeC1maWd1cmUtaW5jb21lLWNvYWNoaW5nXFxDbGllbnRBcHAvc3JjXFxhcHBcXHVuc3Vic2NyaWJlXFx1bnN1YnNjcmliZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdW5zdWJzY3JpYmUvdW5zdWJzY3JpYmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKO0FERUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURHRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMERBQUE7RUFDQSx3QkFBQTtBQ0RKO0FESUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRko7QURLRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQ0hKO0FETUU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNKSjtBRE9FO0VBQ0UsV0FBQTtBQ0xKO0FEUUU7RUFDRSxXQUFBO0FDTko7QURTRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3Vuc3Vic2NyaWJlL3Vuc3Vic2NyaWJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogNSU7XHJcblxyXG4gIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNTAlLCA1MCUpKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMEI4RkU7XHJcbiAgICBjb2xvcjogI0U4RTlFQjtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMEI4RkU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBidXR0b246YWN0aXZle1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBidXR0b246Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIGlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci1zaW5nbGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNSU7XG59XG46aG9zdCBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IHAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCAuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDUwJSwgNTAlKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcbn1cbjpob3N0IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMEI4RkU7XG4gIGNvbG9yOiAjRThFOUVCO1xuICBoZWlnaHQ6IDEwJTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjBCOEZFO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IGJ1dHRvbjphY3RpdmUge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xufVxuOmhvc3QgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbjpob3N0IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNvbnRhaW5lci1zaW5nbGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnsubscribeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-unsubscribe',
          templateUrl: './unsubscribe.component.html',
          styleUrls: ['./unsubscribe.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_smtp_service__WEBPACK_IMPORTED_MODULE_2__["SmtpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/js/smtp.js":
  /*!*******************************!*\
    !*** ./src/assets/js/smtp.js ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function srcAssetsJsSmtpJs(module, exports) {
    /* SmtpJS.com - v3.0.0 */
    var Email = {
      send: function send(a) {
        return new Promise(function (n, e) {
          a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
          var t = JSON.stringify(a);
          Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
            n(e);
          });
        });
      },
      ajaxPost: function ajaxPost(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
          var e = a.responseText;
          null != t && t(e);
        }, a.send(n);
      },
      ajax: function ajax(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function () {
          var e = t.responseText;
          null != n && n(e);
        }, t.send();
      },
      createCORSRequest: function createCORSRequest(e, n) {
        var t = new XMLHttpRequest();
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest()).open(e, n) : t = null, t;
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Megaport\Projects\Six-figure-income-coaching\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map