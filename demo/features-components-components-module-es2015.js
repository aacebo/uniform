(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-components-components-module"],{

/***/ "./src/app/app-routing.resolver.ts":
/*!*****************************************!*\
  !*** ./src/app/app-routing.resolver.ts ***!
  \*****************************************/
/*! exports provided: AppRoutingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingResolver", function() { return AppRoutingResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/toolbar */ "./src/app/features/toolbar/index.ts");




class AppRoutingResolver {
    constructor(toolbarService) {
        this.toolbarService = toolbarService;
    }
    resolve(route) {
        this.toolbarService.setTitle(route.routeConfig.path);
    }
}
AppRoutingResolver.ɵfac = function AppRoutingResolver_Factory(t) { return new (t || AppRoutingResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_features_toolbar__WEBPACK_IMPORTED_MODULE_1__["ToolbarService"])); };
AppRoutingResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppRoutingResolver, factory: AppRoutingResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _features_toolbar__WEBPACK_IMPORTED_MODULE_1__["ToolbarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/components/components-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/components/components-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function() { return ComponentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-routing.resolver */ "./src/app/app-routing.resolver.ts");





const routes = [
    {
        path: 'button',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | button-button-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("button-button-module")]).then(__webpack_require__.bind(null, /*! ./button/button.module */ "./src/app/features/components/button/button.module.ts")).then(m => m.ButtonModule),
    },
    {
        path: 'card',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | card-card-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("card-card-module")]).then(__webpack_require__.bind(null, /*! ./card/card.module */ "./src/app/features/components/card/card.module.ts")).then(m => m.CardModule),
    },
    {
        path: 'icon',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | icon-icon-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("icon-icon-module")]).then(__webpack_require__.bind(null, /*! ./icon/icon.module */ "./src/app/features/components/icon/icon.module.ts")).then(m => m.IconModule),
    },
    {
        path: 'toolbar',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | toolbar-toolbar-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("toolbar-toolbar-module")]).then(__webpack_require__.bind(null, /*! ./toolbar/toolbar.module */ "./src/app/features/components/toolbar/toolbar.module.ts")).then(m => m.ToolbarModule),
    },
    {
        path: 'tooltip',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => __webpack_require__.e(/*! import() | tooltip-tooltip-module */ "tooltip-tooltip-module").then(__webpack_require__.bind(null, /*! ./tooltip/tooltip.module */ "./src/app/features/components/tooltip/tooltip.module.ts")).then(m => m.TooltipModule),
    },
    {
        path: 'popover',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => __webpack_require__.e(/*! import() | popover-popover-module */ "popover-popover-module").then(__webpack_require__.bind(null, /*! ./popover/popover.module */ "./src/app/features/components/popover/popover.module.ts")).then(m => m.PopoverModule),
    },
    {
        path: 'toast',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => __webpack_require__.e(/*! import() | toast-toast-module */ "toast-toast-module").then(__webpack_require__.bind(null, /*! ./toast/toast.module */ "./src/app/features/components/toast/toast.module.ts")).then(m => m.ToastModule),
    },
    {
        path: 'select',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | select-select-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("select-select-module")]).then(__webpack_require__.bind(null, /*! ./select/select.module */ "./src/app/features/components/select/select.module.ts")).then(m => m.SelectModule),
    },
    {
        path: 'input',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | input-input-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("input-input-module")]).then(__webpack_require__.bind(null, /*! ./input/input.module */ "./src/app/features/components/input/input.module.ts")).then(m => m.InputModule),
    },
    {
        path: 'dialog',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => __webpack_require__.e(/*! import() | dialog-dialog-module */ "dialog-dialog-module").then(__webpack_require__.bind(null, /*! ./dialog/dialog.module */ "./src/app/features/components/dialog/dialog.module.ts")).then(m => m.DialogModule),
    },
    {
        path: 'progress',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | progress-progress-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("progress-progress-module")]).then(__webpack_require__.bind(null, /*! ./progress/progress.module */ "./src/app/features/components/progress/progress.module.ts")).then(m => m.ProgressModule),
    },
    {
        path: 'sidenav',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | sidenav-sidenav-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("sidenav-sidenav-module")]).then(__webpack_require__.bind(null, /*! ./sidenav/sidenav.module */ "./src/app/features/components/sidenav/sidenav.module.ts")).then(m => m.SidenavModule),
    },
    {
        path: 'tab',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | tab-tab-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("tab-tab-module")]).then(__webpack_require__.bind(null, /*! ./tab/tab.module */ "./src/app/features/components/tab/tab.module.ts")).then(m => m.TabModule),
    },
    {
        path: 'checkbox',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | checkbox-checkbox-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("checkbox-checkbox-module")]).then(__webpack_require__.bind(null, /*! ./checkbox/checkbox.module */ "./src/app/features/components/checkbox/checkbox.module.ts")).then(m => m.CheckboxModule),
    },
    {
        path: 'slide-toggle',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | slide-toggle-slide-toggle-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("slide-toggle-slide-toggle-module")]).then(__webpack_require__.bind(null, /*! ./slide-toggle/slide-toggle.module */ "./src/app/features/components/slide-toggle/slide-toggle.module.ts")).then(m => m.SlideToggleModule),
    },
    {
        path: 'split',
        resolve: { title: _app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"] },
        loadChildren: () => Promise.all(/*! import() | split-split-module */[__webpack_require__.e("default~button-button-module~card-card-module~checkbox-checkbox-module~icon-icon-module~input-input-~f078d21e"), __webpack_require__.e("split-split-module")]).then(__webpack_require__.bind(null, /*! ./split/split.module */ "./src/app/features/components/split/split.module.ts")).then(m => m.SplitModule),
    },
];
class ComponentsRoutingModule {
}
ComponentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsRoutingModule });
ComponentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsRoutingModule_Factory(t) { return new (t || ComponentsRoutingModule)(); }, providers: [_app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_app_routing_resolver__WEBPACK_IMPORTED_MODULE_2__["AppRoutingResolver"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/components/components.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/components/components.module.ts ***!
  \**********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components-routing.module */ "./src/app/features/components/components-routing.module.ts");




class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsRoutingModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-components-components-module-es2015.js.map