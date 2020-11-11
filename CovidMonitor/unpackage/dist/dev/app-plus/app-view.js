/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/main.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! uni-pages?{"type":"view"} */ 1);

function initView() {
  function injectStyles(context) {


  }
  typeof injectStyles === 'function' && injectStyles();

  UniViewJSBridge.publishHandler('webviewReady');
}
if (typeof plus !== 'undefined') {
  initView();
} else {
  document.addEventListener('plusready', initView);
}

/***/ }),
/* 1 */
/*!*************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/pages.json?{"type":"view"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
window.__uniConfig = { "window": { "navigationStyle": "custom", "backgroundColor": "#FFFFFF", "navigationBarTextStyle": "black" } };
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('views/global/index', function () {return Vue.extend(__webpack_require__(/*! views/global/index.vue?mpType=page */ 2).default);});
__definePage('views/china/index', function () {return Vue.extend(__webpack_require__(/*! views/china/index.vue?mpType=page */ 14).default);});
__definePage('views/news/index', function () {return Vue.extend(__webpack_require__(/*! views/news/index.vue?mpType=page */ 22).default);});
__definePage('views/global/country', function () {return Vue.extend(__webpack_require__(/*! views/global/country.vue?mpType=page */ 30).default);});

/***/ }),
/* 2 */
/*!*********************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/index.vue?mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5967a1c5_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5967a1c5&mpType=page */ 3);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 7);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5967a1c5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5967a1c5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_5967a1c5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "views/global/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/*!***************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/index.vue?vue&type=template&id=5967a1c5&mpType=page ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_5967a1c5_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=5967a1c5&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_5967a1c5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_5967a1c5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_5967a1c5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_5967a1c5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/index.vue?vue&type=template&id=5967a1c5&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("v-uni-view", { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } }),
      _c(
        "div",
        { attrs: { id: "search_div", _i: 2 } },
        [
          _c(
            "div",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "div",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [
                  _c("v-uni-image", {
                    staticStyle: { width: "6vw", height: "6vw" },
                    attrs: { src: "/static/icon/search.png", _i: 5 }
                  })
                ],
                1
              ),
              _c("v-uni-input", {
                staticClass: _vm._$g(6, "sc"),
                attrs: { placeholder: "搜索国家", _i: 6 }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        { staticClass: _vm._$g(7, "sc"), attrs: { id: "ID1", _i: 7 } },
        [
          _c(
            "div",
            {
              staticStyle: { "padding-top": "8vw" },
              attrs: { id: "world_data", _i: 8 }
            },
            [
              _c(
                "div",
                { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                [_c("span", { attrs: { _i: 10 } }, [_vm._v("全球疫情")])],
                1
              ),
              _c(
                "div",
                { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                [
                  _c(
                    "div",
                    {
                      staticClass: _vm._$g(12, "sc"),
                      staticStyle: {
                        "background-image": "linear-gradient(#E8DFFF,#fff)"
                      },
                      attrs: { _i: 12 }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                        [
                          _c("span", { attrs: { _i: 14 } }, [
                            _vm._v("累计确诊")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(15, "sc"),
                          staticStyle: { color: "rgb(123,70,242)" },
                          attrs: { _i: 15 }
                        },
                        [
                          _c("span", { attrs: { _i: 16 } }, [
                            _vm._v("50646963")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(17, "sc"),
                          staticStyle: {
                            "background-color": "rgba(123,70,242,0.1)"
                          },
                          attrs: { _i: 17 }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(18, "sc"),
                              staticStyle: { color: "rgb(123,70,242)" },
                              attrs: { _i: 18 }
                            },
                            [
                              _c("span", { attrs: { _i: 19 } }, [
                                _vm._v("+580451")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    {
                      staticClass: _vm._$g(20, "sc"),
                      staticStyle: {
                        "background-image": "linear-gradient(#FFD3E6,#fff)"
                      },
                      attrs: { _i: 20 }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                        [
                          _c("span", { attrs: { _i: 22 } }, [
                            _vm._v("累计死亡")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(23, "sc"),
                          staticStyle: { color: "rgb(231,71,130)" },
                          attrs: { _i: 23 }
                        },
                        [
                          _c("span", { attrs: { _i: 24 } }, [_vm._v("1257384")])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(25, "sc"),
                          staticStyle: {
                            "background-color": "rgba(231,71,130,0.1)"
                          },
                          attrs: { _i: 25 }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(26, "sc"),
                              staticStyle: { color: "rgb(231,71,130)" },
                              attrs: { _i: 26 }
                            },
                            [
                              _c("span", { attrs: { _i: 27 } }, [
                                _vm._v("+6880")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    {
                      staticClass: _vm._$g(28, "sc"),
                      staticStyle: {
                        "background-image": "linear-gradient(#D6FFDC,#fff)"
                      },
                      attrs: { _i: 28 }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                        [
                          _c("span", { attrs: { _i: 30 } }, [
                            _vm._v("累计治愈")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(31, "sc"),
                          staticStyle: { color: "rgb(40,194,133)" },
                          attrs: { _i: 31 }
                        },
                        [
                          _c("span", { attrs: { _i: 32 } }, [
                            _vm._v("35432796")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(33, "sc"),
                          staticStyle: {
                            "background-color": "rgba(40,194,133,0.1)"
                          },
                          attrs: { _i: 33 }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(34, "sc"),
                              staticStyle: { color: "rgb(40,194,133)" },
                              attrs: { _i: 34 }
                            },
                            [
                              _c("span", { attrs: { _i: 35 } }, [
                                _vm._v("+257218")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    {
                      staticClass: _vm._$g(36, "sc"),
                      staticStyle: {
                        "background-image": "linear-gradient(#FFF2D5,#fff)"
                      },
                      attrs: { _i: 36 }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                        [
                          _c("span", { attrs: { _i: 38 } }, [
                            _vm._v("现有确诊")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(39, "sc"),
                          staticStyle: { color: "rgb(255,199,66)" },
                          attrs: { _i: 39 }
                        },
                        [_c("span", { attrs: { _i: 40 } }, [_vm._v("46058")])],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(41, "sc"),
                          staticStyle: {
                            "background-color": "rgba(255,199,66,0.1)"
                          },
                          attrs: { _i: 41 }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(42, "sc"),
                              staticStyle: { color: "rgb(255,199,66)" },
                              attrs: { _i: 42 }
                            },
                            [
                              _c("span", { attrs: { _i: 43 } }, [
                                _vm._v("+644")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "div",
            {
              staticStyle: { "padding-top": "2vw" },
              attrs: { id: "most_infected", _i: 44 }
            },
            [
              _c(
                "div",
                { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
                [_c("span", { attrs: { _i: 46 } }, [_vm._v("各国统计")])],
                1
              ),
              _c(
                "div",
                { staticStyle: { "padding-top": "4vw" }, attrs: { _i: 47 } },
                [
                  _c(
                    "div",
                    { attrs: { id: "list_id", _i: 48 } },
                    [
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(49, "sc"),
                          staticStyle: {
                            width: "25vw",
                            "border-top-left-radius": "1.8vw",
                            "border-bottom-left-radius": "1.8vw"
                          },
                          attrs: { _i: 49 }
                        },
                        [_c("span", { attrs: { _i: 50 } }, [_vm._v("国家")])],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(51, "sc"),
                          staticStyle: { width: "20vw" },
                          attrs: { _i: 51 }
                        },
                        [_c("span", { attrs: { _i: 52 } }, [_vm._v("新增")])],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(53, "sc"),
                          staticStyle: { width: "20vw" },
                          attrs: { _i: 53 }
                        },
                        [_c("span", { attrs: { _i: 54 } }, [_vm._v("累计")])],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(55, "sc"),
                          staticStyle: { width: "20vw" },
                          attrs: { _i: 55 }
                        },
                        [_c("span", { attrs: { _i: 56 } }, [_vm._v("治愈")])],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(57, "sc"),
                          staticStyle: {
                            width: "13vw",
                            "border-top-right-radius": "1.8vw",
                            "border-bottom-right-radius": "1.8vw"
                          },
                          attrs: { _i: 57 }
                        },
                        [_c("span", { attrs: { _i: 58 } }, [_vm._v("死亡")])],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "ul",
                    { attrs: { _i: 59 } },
                    [
                      _c(
                        "li",
                        { attrs: { _i: 60 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(61, "sc"),
                              attrs: { _i: 61 },
                              on: {
                                click: function($event) {
                                  return _vm.$handleViewEvent($event)
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(62, "sc"),
                                  attrs: { _i: 62 }
                                },
                                [
                                  _c("span", { attrs: { _i: 63 } }, [
                                    _vm._v("美国")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(64, "sc"),
                                  attrs: { _i: 64 }
                                },
                                [
                                  _c("span", { attrs: { _i: 65 } }, [
                                    _vm._v("135K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(66, "sc"),
                                  attrs: { _i: 66 }
                                },
                                [
                                  _c("span", { attrs: { _i: 67 } }, [
                                    _vm._v("13K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(68, "sc"),
                                  attrs: { _i: 68 }
                                },
                                [
                                  _c("span", { attrs: { _i: 69 } }, [
                                    _vm._v("40K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(70, "sc"),
                                  attrs: { _i: 70 }
                                },
                                [
                                  _c("span", { attrs: { _i: 71 } }, [
                                    _vm._v("6K")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "li",
                        { attrs: { _i: 72 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(73, "sc"),
                              attrs: { _i: 73 }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(74, "sc"),
                                  attrs: { _i: 74 }
                                },
                                [
                                  _c("span", { attrs: { _i: 75 } }, [
                                    _vm._v("美国")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(76, "sc"),
                                  attrs: { _i: 76 }
                                },
                                [
                                  _c("span", { attrs: { _i: 77 } }, [
                                    _vm._v("60K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(78, "sc"),
                                  attrs: { _i: 78 }
                                },
                                [
                                  _c("span", { attrs: { _i: 79 } }, [
                                    _vm._v("4K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(80, "sc"),
                                  attrs: { _i: 80 }
                                },
                                [
                                  _c("span", { attrs: { _i: 81 } }, [
                                    _vm._v("24K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(82, "sc"),
                                  attrs: { _i: 82 }
                                },
                                [
                                  _c("span", { attrs: { _i: 83 } }, [
                                    _vm._v("4K")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "li",
                        { attrs: { _i: 84 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(85, "sc"),
                              attrs: { _i: 85 }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(86, "sc"),
                                  attrs: { _i: 86 }
                                },
                                [
                                  _c("span", { attrs: { _i: 87 } }, [
                                    _vm._v("美国")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(88, "sc"),
                                  attrs: { _i: 88 }
                                },
                                [
                                  _c("span", { attrs: { _i: 89 } }, [
                                    _vm._v("300K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(90, "sc"),
                                  attrs: { _i: 90 }
                                },
                                [
                                  _c("span", { attrs: { _i: 91 } }, [
                                    _vm._v("9K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(92, "sc"),
                                  attrs: { _i: 92 }
                                },
                                [
                                  _c("span", { attrs: { _i: 93 } }, [
                                    _vm._v("18K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(94, "sc"),
                                  attrs: { _i: 94 }
                                },
                                [
                                  _c("span", { attrs: { _i: 95 } }, [
                                    _vm._v("8K")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 6);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 7 */
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 8);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("f35ab84a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 9 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.mediaViewInfo {}\n:root {}\n* {\n\tmargin: 0;\n\tpadding: 0;\n}\n.container {\n\tbackground-color: rgba(255, 255, 255, 1);\n\toverflow: hidden;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;\n\tfont-smoothing: antialiased;\n\tcolor: #222;\n}\n.status_bar {\n    height: var(--status-bar-height);\n    width: 100%;\n    background-color: #fff;\n    position: fixed;\n    z-index: 999;\n}\n.ID1_Class {\n\twidth: 100vw;\n\tmargin: 0 auto;\n\tposition: relative;\n\tpadding-top: 20vw;\n\tbackground-color: #fff;\n\tmin-height: 100%;\n\t-webkit-transform-origin: center top;\n\t        transform-origin: center top;\n}\n.Inf_county_Class {\n\topacity: 0.33;\n}\n.Inf_county {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\tposition: relative;\n\toverflow: visible;\n\twidth: 86vw;\n\theight: 15vw;\n\tmargin-left: 7vw;\n\tborder-bottom: 1px solid #e8e8e8;\n}\n.epidmc_Class {\n\topacity: 0.1;\n}\n.epidmc {\n\tposition: relative;\n\toverflow: visible;\n\twidth: 41.2vw;\n\theight: 38vw;\n\t-webkit-border-radius: 3.5vw;\n\t        border-radius: 3.5vw;\n\tmargin: 0 1.8vw;\n}\n.epidmc_add {\n\tposition: relative;\n\toverflow: visible;\n\twidth: -webkit-fit-content;\n\twidth: fit-content;\n\theight: 7vw;\n\tright: 2vw;\n\ttop: 11vw;\n\t-webkit-border-radius: 4vw;\n\t        border-radius: 4vw;\n\tfloat: right;\n}\n.epidmc_data {\n\tposition: relative;\n\tmargin-left: 6vw;\n\ttop: 8vw;\n\toverflow: visible;\n\twidth: -webkit-fit-content;\n\twidth: fit-content;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-size: 6vw;\n\tfont-weight: 700;\n}\n.epidmc_name {\n\tposition: relative;\n\tmargin-left: 6vw;\n\ttop: 4vw;\n\toverflow: visible;\n\twidth: 21vw;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-style: normal;\n\tfont-size: 4vw;\n\tcolor: rgba(80, 93, 111, 1);\n}\n.data_change {\n\tposition: relative;\n\tmargin: 0 2.8vw;\n\ttop: 0.6vw;\n\toverflow: visible;\n\twidth: -webkit-fit-content;\n\twidth: fit-content;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 4vw;\n}\n.World_Update_Class {\n\tposition: relative;\n\tmargin-left: 7vw;\n\toverflow: visible;\n\twidth: -webkit-fit-content;\n\twidth: fit-content;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 6vw;\n\tcolor: rgba(36, 42, 64, 1);\n}\n.world_list{\n\t    display: -webkit-box;\n\t    display: -webkit-flex;\n\t    display: flex;\n\t    -webkit-flex-wrap: wrap;\n\t            flex-wrap: wrap;\n\t    box-pack: center;\n\t    -webkit-box-pack: center;\n\t    -webkit-justify-content: center;\n\t            justify-content: center;\n\t    box-align: center;\n\t    -webkit-box-align: center;\n\t    -webkit-align-items: center;\n\t            align-items: center;\n\t\tpadding-top: 4vw;\n\t    padding-bottom: 2vw;\n}\n.Most_Infected_Class {\n\tposition: relative;\n\tmargin-left: 7vw;\n\toverflow: visible;\n\twidth: -webkit-fit-content;\n\twidth: fit-content;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 6vw;\n\tcolor: rgba(36, 42, 64, 1);\n}\n#search_div{\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\tposition: fixed;\n\ttop: var(--status-bar-height);\n\tmargin: 0 7vw;\n\tpadding: 5vw 0;\n\twidth: 86vw;\n\tborder-bottom: 1px solid #e8e8e8;\n\tbackground-color: #fff;\n\tz-index: 999;\n}\n.search_box_Class {\n\topacity: 0.5;\n}\n.search_box {\n\tposition: relative;\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\toverflow: visible;\n\twidth: 100vw;\n\theight: 10vw;\n\t-webkit-border-radius: 3vw;\n\t        border-radius: 3vw;\n\tbackground-color: rgb(237, 240, 244);\n}\n.Search_Country_Class {\n\topacity: 0.5;\n\tposition: relative;\n\tmargin-left: 3vw;\n\tmargin-top: 2.2vw;\n\toverflow: visible;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 4vw;\n\tcolor: rgba(112, 132, 156, 1.0);\n}\n.search_icon {\n\topacity: 0.2;\n\tposition: relative;\n\tmargin-left: 3vw;\n\tmargin-top: 2vw;\n\toverflow: visible;\n}\n.country_name {\n\tposition: relative;\n\tpadding-top: 4.6vw;\n\toverflow: visible;\n\twidth: 25vw;\n\twhite-space: nowrap;\n\ttext-align: center;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-size: 4vw;\n\tcolor: rgb(33, 74, 118);\n}\n.newadd_data {\n\tposition: relative;\n\tpadding-top: 4.6vw;\n\toverflow: visible;\n\twidth: 20vw;\n\twhite-space: nowrap;\n\ttext-align: center;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 4vw;\n\tcolor: rgb(123, 70, 242);\n}\n.infections_data {\n\tposition: relative;\n\tpadding-top: 4.6vw;\n\toverflow: visible;\n\twidth: 20vw;\n\twhite-space: nowrap;\n\ttext-align: center;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 4vw;\n\tcolor: rgb(255, 191, 19);\n}\n.recoveries_data {\n\tposition: relative;\n\tpadding-top: 4.6vw;\n\toverflow: visible;\n\twidth: 20vw;\n\twhite-space: nowrap;\n\ttext-align: center;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 4vw;\n\tcolor: rgb(59, 183, 76);\n}\n.deaths_data {\n\tposition: relative;\n\tpadding-top: 4.6vw;\n\toverflow: visible;\n\twidth: 13vw;\n\twhite-space: nowrap;\n\ttext-align: center;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 4vw;\n\tcolor: rgb(246, 104, 166);\n}\n#list_id {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\tmargin-left: 7vw;\n\tposition: relative;\n\twidth: 86vw;\n}\n.country {\n\tposition: relative;\n\tfont-size: 3.5vw;\n\twidth: -webkit-fit-content;\n\theight: -webkit-fit-content;\n\theight: fit-content;\n\tpadding: 2vw 0;\n\tbackground-color: #eaf3f9;\n\ttext-align: center;\n\tmargin: 0 1px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 10 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 11 */
/*!********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ 12);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : processCss(obj.css) // fixed by xxxxxx

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = processCss(obj.css) // fixed by xxxxxx
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}

//fixed by xxxxxx
var UPX_RE = /\b([+-]?\d+(\.\d+)?)[r|u]px\b/g
var VAR_STATUS_BAR_HEIGHT = /var\(--status-bar-height\)/gi
var VAR_WINDOW_TOP = /var\(--window-top\)/gi
var VAR_WINDOW_BOTTOM = /var\(--window-bottom\)/gi
var VAR_WINDOW_LEFT = /var\(--window-left\)/gi
var VAR_WINDOW_RIGHT = /var\(--window-right\)/gi

var statusBarHeight = false
function processCss(css) {
	if (!uni.canIUse('css.var')) { //不支持 css 变量
    if (statusBarHeight === false) {
      statusBarHeight = plus.navigator.getStatusbarHeight()
    }
		var offset = {
            statusBarHeight: statusBarHeight,
            top: window.__WINDOW_TOP || 0,
            bottom: window.__WINDOW_BOTTOM || 0
        }
		css = css.replace(VAR_STATUS_BAR_HEIGHT, offset.statusBarHeight + 'px')
			.replace(VAR_WINDOW_TOP, offset.top + 'px')
			.replace(VAR_WINDOW_BOTTOM, offset.bottom + 'px')
            .replace(VAR_WINDOW_LEFT, '0px')
            .replace(VAR_WINDOW_RIGHT, '0px')
	}
  return css.replace(/\{[\s\S]+?\}/g, function (css) {
    return css.replace(UPX_RE, function (a, b) {
      return uni.upx2px(b) + 'px'
    })
  })
}


/***/ }),
/* 12 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/listToStyles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 14 */
/*!********************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/china/index.vue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b350c6aa_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b350c6aa&mpType=page */ 15);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 17);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 19);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b350c6aa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b350c6aa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_b350c6aa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "views/china/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/china/index.vue?vue&type=template&id=b350c6aa&mpType=page ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_b350c6aa_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=b350c6aa&mpType=page */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_b350c6aa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_b350c6aa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_b350c6aa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_b350c6aa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 16 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/china/index.vue?vue&type=template&id=b350c6aa&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("v-uni-view", { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } }),
      _c(
        "div",
        { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
        [
          _c(
            "div",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "div",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [
                  _c(
                    "div",
                    { staticClass: _vm._$g(5, "sc"), attrs: { _i: 5 } },
                    [_c("span", { attrs: { _i: 6 } }, [_vm._v("国内疫情")])],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                    [
                      _c(
                        "p",
                        { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                        [
                          _vm._v("统计截至"),
                          _c("span", { attrs: { _i: 9 } }, [
                            _vm._v("2020-11-09 21:59:46")
                          ]),
                          _c(
                            "em",
                            { attrs: { _i: 10 } },
                            [
                              _vm._v("更新于"),
                              _c("span", { attrs: { _i: 11 } }, [
                                _vm._v("45分钟")
                              ]),
                              _vm._v("前")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(14, "sc"),
                              attrs: { _i: 14 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 15 } }, [_vm._v("+50")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(16, "sc"),
                              attrs: { _i: 16 }
                            },
                            [_vm._v("92251")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(17, "sc"),
                              attrs: { _i: 17 }
                            },
                            [_vm._v("累计确诊")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(19, "sc"),
                              attrs: { _i: 19 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 20 } }, [_vm._v("+25")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(21, "sc"),
                              attrs: { _i: 21 }
                            },
                            [_vm._v("86901")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(22, "sc"),
                              attrs: { _i: 22 }
                            },
                            [_vm._v("累计治愈")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(24, "sc"),
                              attrs: { _i: 24 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 25 } }, [_vm._v("0")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(26, "sc"),
                              attrs: { _i: 26 }
                            },
                            [_vm._v("4748")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(27, "sc"),
                              attrs: { _i: 27 }
                            },
                            [_vm._v("累计死亡")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(29, "sc"),
                              attrs: { _i: 29 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 30 } }, [_vm._v("+31")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(31, "sc"),
                              attrs: { _i: 31 }
                            },
                            [_vm._v("602")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(32, "sc"),
                              attrs: { _i: 32 }
                            },
                            [
                              _c("span", { attrs: { _i: 33 } }, [
                                _vm._v("现有确诊")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(35, "sc"),
                              attrs: { _i: 35 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 36 } }, [_vm._v("+9")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(37, "sc"),
                              attrs: { _i: 37 }
                            },
                            [_vm._v("804")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(38, "sc"),
                              attrs: { _i: 38 }
                            },
                            [_vm._v("无症状感染者")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(40, "sc"),
                              attrs: { _i: 40 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 41 } }, [_vm._v("+32")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(42, "sc"),
                              attrs: { _i: 42 }
                            },
                            [_vm._v("3603")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(43, "sc"),
                              attrs: { _i: 43 }
                            },
                            [_vm._v("境外输入")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "div",
            { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
            [
              _c(
                "div",
                { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
                [
                  _c(
                    "span",
                    { staticClass: _vm._$g(46, "sc"), attrs: { _i: 46 } },
                    [_vm._v("各地区统计")]
                  )
                ],
                1
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$g(47, "sc"),
                  attrs: { id: "listWraper", _i: 47 }
                },
                [
                  _c(
                    "table",
                    { attrs: { _i: 48 } },
                    [
                      _c(
                        "thead",
                        { attrs: { _i: 49 } },
                        [
                          _c(
                            "tr",
                            { attrs: { _i: 50 } },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(51, "sc"),
                                  attrs: { _i: 51 }
                                },
                                [
                                  _c("span", { attrs: { _i: 52 } }, [
                                    _vm._v("地区")
                                  ])
                                ],
                                1
                              ),
                              _c("th", { attrs: { _i: 53 } }, [
                                _vm._v("现有确诊")
                              ]),
                              _c("th", { attrs: { _i: 54 } }, [
                                _vm._v("累计确诊")
                              ]),
                              _c("th", { attrs: { _i: 55 } }, [_vm._v("治愈")]),
                              _c("th", { attrs: { _i: 56 } }, [_vm._v("死亡")])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "table",
                    { attrs: { _i: 57 } },
                    [
                      _c(
                        "tbody",
                        { attrs: { _i: 58 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(59, "sc"),
                              attrs: { _i: 59 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(60, "sc"),
                                  attrs: { _i: 60 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 61 } },
                                    [
                                      _c("span", { attrs: { _i: 62 } }, [
                                        _vm._v("香港")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 63 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 64 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(65, "sc"),
                                      attrs: { _i: 65 }
                                    },
                                    [_vm._v("127")]
                                  ),
                                  _c("p", { attrs: { _i: 66 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(67, "sc"),
                                  attrs: { _i: 67 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(68, "sc"),
                                      attrs: { _i: 68 }
                                    },
                                    [_vm._v("5380")]
                                  ),
                                  _c("p", { attrs: { _i: 69 } }, [
                                    _vm._v("较上日+10")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 70 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(71, "sc"),
                                      attrs: { _i: 71 }
                                    },
                                    [_vm._v("5146")]
                                  ),
                                  _c("p", { attrs: { _i: 72 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 73 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(74, "sc"),
                                      attrs: { _i: 74 }
                                    },
                                    [_vm._v("107")]
                                  ),
                                  _c("p", { attrs: { _i: 75 } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 76 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(77, "sc"),
                              attrs: { _i: 77 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(78, "sc"),
                                  attrs: { _i: 78 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 79 } },
                                    [
                                      _c("span", { attrs: { _i: 80 } }, [
                                        _vm._v("上海")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 81 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 82 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(83, "sc"),
                                      attrs: { _i: 83 }
                                    },
                                    [_vm._v("105")]
                                  ),
                                  _c("p", { attrs: { _i: 84 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(85, "sc"),
                                  attrs: { _i: 85 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(86, "sc"),
                                      attrs: { _i: 86 }
                                    },
                                    [_vm._v("1255")]
                                  ),
                                  _c("p", { attrs: { _i: 87 } }, [
                                    _vm._v("较上日+14")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 88 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(89, "sc"),
                                      attrs: { _i: 89 }
                                    },
                                    [_vm._v("1143")]
                                  ),
                                  _c("p", { attrs: { _i: 90 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 91 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(92, "sc"),
                                      attrs: { _i: 92 }
                                    },
                                    [_vm._v("7")]
                                  ),
                                  _c("p", { attrs: { _i: 93 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(94, "sc"),
                              attrs: { _i: 94 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 95 } }, [
                                _vm._v("上海累计报告境外输入确诊病例912例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 96 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(97, "sc"),
                              attrs: { _i: 97 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(98, "sc"),
                                  attrs: { _i: 98 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 99 } },
                                    [
                                      _c("span", { attrs: { _i: 100 } }, [
                                        _vm._v("新疆")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 101 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 102 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(103, "sc"),
                                      attrs: { _i: 103 }
                                    },
                                    [_vm._v("59")]
                                  ),
                                  _c("p", { attrs: { _i: 104 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(105, "sc"),
                                  attrs: { _i: 105 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(106, "sc"),
                                      attrs: { _i: 106 }
                                    },
                                    [_vm._v("980")]
                                  ),
                                  _c("p", { attrs: { _i: 107 } }, [
                                    _vm._v("3天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 108 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(109, "sc"),
                                      attrs: { _i: 109 }
                                    },
                                    [_vm._v("918")]
                                  ),
                                  _c("p", { attrs: { _i: 110 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 111 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(112, "sc"),
                                      attrs: { _i: 112 }
                                    },
                                    [_vm._v("3")]
                                  ),
                                  _c("p", { attrs: { _i: 113 } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 114 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(115, "sc"),
                              attrs: { _i: 115 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(116, "sc"),
                                  attrs: { _i: 116 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 117 } },
                                    [
                                      _c("span", { attrs: { _i: 118 } }, [
                                        _vm._v("台湾")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 119 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 120 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(121, "sc"),
                                      attrs: { _i: 121 }
                                    },
                                    [_vm._v("45")]
                                  ),
                                  _c("p", { attrs: { _i: 122 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(123, "sc"),
                                  attrs: { _i: 123 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(124, "sc"),
                                      attrs: { _i: 124 }
                                    },
                                    [_vm._v("578")]
                                  ),
                                  _c("p", { attrs: { _i: 125 } }, [
                                    _vm._v("较上日+5")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 126 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(127, "sc"),
                                      attrs: { _i: 127 }
                                    },
                                    [_vm._v("526")]
                                  ),
                                  _c("p", { attrs: { _i: 128 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 129 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(130, "sc"),
                                      attrs: { _i: 130 }
                                    },
                                    [_vm._v("7")]
                                  ),
                                  _c("p", { attrs: { _i: 131 } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 132 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(133, "sc"),
                              attrs: { _i: 133 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(134, "sc"),
                                  attrs: { _i: 134 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 135 } },
                                    [
                                      _c("span", { attrs: { _i: 136 } }, [
                                        _vm._v("四川")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 137 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 138 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(139, "sc"),
                                      attrs: { _i: 139 }
                                    },
                                    [_vm._v("43")]
                                  ),
                                  _c("p", { attrs: { _i: 140 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(141, "sc"),
                                  attrs: { _i: 141 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(142, "sc"),
                                      attrs: { _i: 142 }
                                    },
                                    [_vm._v("773")]
                                  ),
                                  _c("p", { attrs: { _i: 143 } }, [
                                    _vm._v("较上日+4")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 144 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(145, "sc"),
                                      attrs: { _i: 145 }
                                    },
                                    [_vm._v("727")]
                                  ),
                                  _c("p", { attrs: { _i: 146 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 147 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(148, "sc"),
                                      attrs: { _i: 148 }
                                    },
                                    [_vm._v("3")]
                                  ),
                                  _c("p", { attrs: { _i: 149 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(150, "sc"),
                              attrs: { _i: 150 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 151 } }, [
                                _vm._v("四川累计报告232例境外输入病例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 152 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(153, "sc"),
                              attrs: { _i: 153 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(154, "sc"),
                                  attrs: { _i: 154 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 155 } },
                                    [
                                      _c("span", { attrs: { _i: 156 } }, [
                                        _vm._v("陕西")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 157 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 158 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(159, "sc"),
                                      attrs: { _i: 159 }
                                    },
                                    [_vm._v("41")]
                                  ),
                                  _c("p", { attrs: { _i: 160 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(161, "sc"),
                                  attrs: { _i: 161 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(162, "sc"),
                                      attrs: { _i: 162 }
                                    },
                                    [_vm._v("478")]
                                  ),
                                  _c("p", { attrs: { _i: 163 } }, [
                                    _vm._v("较上日+6")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 164 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(165, "sc"),
                                      attrs: { _i: 165 }
                                    },
                                    [_vm._v("434")]
                                  ),
                                  _c("p", { attrs: { _i: 166 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 167 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(168, "sc"),
                                      attrs: { _i: 168 }
                                    },
                                    [_vm._v("3")]
                                  ),
                                  _c("p", { attrs: { _i: 169 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(170, "sc"),
                              attrs: { _i: 170 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 171 } }, [
                                _vm._v("陕西累计报告境外输入确诊病例233例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 172 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(173, "sc"),
                              attrs: { _i: 173 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(174, "sc"),
                                  attrs: { _i: 174 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 175 } },
                                    [
                                      _c("span", { attrs: { _i: 176 } }, [
                                        _vm._v("广东")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 177 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 178 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(179, "sc"),
                                      attrs: { _i: 179 }
                                    },
                                    [_vm._v("37")]
                                  ),
                                  _c("p", { attrs: { _i: 180 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(181, "sc"),
                                  attrs: { _i: 181 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(182, "sc"),
                                      attrs: { _i: 182 }
                                    },
                                    [_vm._v("1949")]
                                  ),
                                  _c("p", { attrs: { _i: 183 } }, [
                                    _vm._v("较上日+4")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 184 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(185, "sc"),
                                      attrs: { _i: 185 }
                                    },
                                    [_vm._v("1904")]
                                  ),
                                  _c("p", { attrs: { _i: 186 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 187 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(188, "sc"),
                                      attrs: { _i: 188 }
                                    },
                                    [_vm._v("8")]
                                  ),
                                  _c("p", { attrs: { _i: 189 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(190, "sc"),
                              attrs: { _i: 190 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 191 } }, [
                                _vm._v("广东省累计报告境外输入病例553例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 192 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(193, "sc"),
                              attrs: { _i: 193 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(194, "sc"),
                                  attrs: { _i: 194 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 195 } },
                                    [
                                      _c("span", { attrs: { _i: 196 } }, [
                                        _vm._v("福建")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 197 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 198 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(199, "sc"),
                                      attrs: { _i: 199 }
                                    },
                                    [_vm._v("36")]
                                  ),
                                  _c("p", { attrs: { _i: 200 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(201, "sc"),
                                  attrs: { _i: 201 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(202, "sc"),
                                      attrs: { _i: 202 }
                                    },
                                    [_vm._v("456")]
                                  ),
                                  _c("p", { attrs: { _i: 203 } }, [
                                    _vm._v("1天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 204 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(205, "sc"),
                                      attrs: { _i: 205 }
                                    },
                                    [_vm._v("419")]
                                  ),
                                  _c("p", { attrs: { _i: 206 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 207 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(208, "sc"),
                                      attrs: { _i: 208 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 209 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(210, "sc"),
                              attrs: { _i: 210 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 211 } }, [
                                _vm._v("福建省累计报告境外输入确诊病例160例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 212 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(213, "sc"),
                              attrs: { _i: 213 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(214, "sc"),
                                  attrs: { _i: 214 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 215 } },
                                    [
                                      _c("span", { attrs: { _i: 216 } }, [
                                        _vm._v("内蒙古")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 217 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 218 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(219, "sc"),
                                      attrs: { _i: 219 }
                                    },
                                    [_vm._v("32")]
                                  ),
                                  _c("p", { attrs: { _i: 220 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(221, "sc"),
                                  attrs: { _i: 221 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(222, "sc"),
                                      attrs: { _i: 222 }
                                    },
                                    [_vm._v("305")]
                                  ),
                                  _c("p", { attrs: { _i: 223 } }, [
                                    _vm._v("较上日+2")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 224 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(225, "sc"),
                                      attrs: { _i: 225 }
                                    },
                                    [_vm._v("272")]
                                  ),
                                  _c("p", { attrs: { _i: 226 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 227 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(228, "sc"),
                                      attrs: { _i: 228 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 229 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(230, "sc"),
                              attrs: { _i: 230 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 231 } }, [
                                _vm._v(
                                  "内蒙古自治区累计报告境外输入确诊病例228例。"
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 232 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(233, "sc"),
                              attrs: { _i: 233 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(234, "sc"),
                                  attrs: { _i: 234 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 235 } },
                                    [
                                      _c("span", { attrs: { _i: 236 } }, [
                                        _vm._v("天津")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 237 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 238 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(239, "sc"),
                                      attrs: { _i: 239 }
                                    },
                                    [_vm._v("11")]
                                  ),
                                  _c("p", { attrs: { _i: 240 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(241, "sc"),
                                  attrs: { _i: 241 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(242, "sc"),
                                      attrs: { _i: 242 }
                                    },
                                    [_vm._v("277")]
                                  ),
                                  _c("p", { attrs: { _i: 243 } }, [
                                    _vm._v("较上日+2")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 244 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(245, "sc"),
                                      attrs: { _i: 245 }
                                    },
                                    [_vm._v("263")]
                                  ),
                                  _c("p", { attrs: { _i: 246 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 247 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(248, "sc"),
                                      attrs: { _i: 248 }
                                    },
                                    [_vm._v("3")]
                                  ),
                                  _c("p", { attrs: { _i: 249 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(250, "sc"),
                              attrs: { _i: 250 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 251 } }, [
                                _vm._v("天津市累计报告境外输入确诊病例139例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 252 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(253, "sc"),
                              attrs: { _i: 253 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(254, "sc"),
                                  attrs: { _i: 254 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 255 } },
                                    [
                                      _c("span", { attrs: { _i: 256 } }, [
                                        _vm._v("浙江")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 257 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 258 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(259, "sc"),
                                      attrs: { _i: 259 }
                                    },
                                    [_vm._v("10")]
                                  ),
                                  _c("p", { attrs: { _i: 260 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(261, "sc"),
                                  attrs: { _i: 261 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(262, "sc"),
                                      attrs: { _i: 262 }
                                    },
                                    [_vm._v("1290")]
                                  ),
                                  _c("p", { attrs: { _i: 263 } }, [
                                    _vm._v("1天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 264 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(265, "sc"),
                                      attrs: { _i: 265 }
                                    },
                                    [_vm._v("1279")]
                                  ),
                                  _c("p", { attrs: { _i: 266 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 267 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(268, "sc"),
                                      attrs: { _i: 268 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 269 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(270, "sc"),
                              attrs: { _i: 270 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 271 } }, [
                                _vm._v("浙江累计报告境外输入确诊病例71例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 272 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(273, "sc"),
                              attrs: { _i: 273 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(274, "sc"),
                                  attrs: { _i: 274 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 275 } },
                                    [
                                      _c("span", { attrs: { _i: 276 } }, [
                                        _vm._v("江苏")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 277 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 278 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(279, "sc"),
                                      attrs: { _i: 279 }
                                    },
                                    [_vm._v("9")]
                                  ),
                                  _c("p", { attrs: { _i: 280 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(281, "sc"),
                                  attrs: { _i: 281 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(282, "sc"),
                                      attrs: { _i: 282 }
                                    },
                                    [_vm._v("675")]
                                  ),
                                  _c("p", { attrs: { _i: 283 } }, [
                                    _vm._v("较上日+1")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 284 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(285, "sc"),
                                      attrs: { _i: 285 }
                                    },
                                    [_vm._v("666")]
                                  ),
                                  _c("p", { attrs: { _i: 286 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 287 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(288, "sc"),
                                      attrs: { _i: 288 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 289 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(290, "sc"),
                              attrs: { _i: 290 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 291 } }, [
                                _vm._v("江苏累计报告境外输入确诊病例44例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 292 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(293, "sc"),
                              attrs: { _i: 293 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(294, "sc"),
                                  attrs: { _i: 294 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 295 } },
                                    [
                                      _c("span", { attrs: { _i: 296 } }, [
                                        _vm._v("湖北")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 297 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 298 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(299, "sc"),
                                      attrs: { _i: 299 }
                                    },
                                    [_vm._v("8")]
                                  ),
                                  _c("p", { attrs: { _i: 300 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(301, "sc"),
                                  attrs: { _i: 301 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(302, "sc"),
                                      attrs: { _i: 302 }
                                    },
                                    [_vm._v("68147")]
                                  ),
                                  _c("p", { attrs: { _i: 303 } }, [
                                    _vm._v("1天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 304 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(305, "sc"),
                                      attrs: { _i: 305 }
                                    },
                                    [_vm._v("63627")]
                                  ),
                                  _c("p", { attrs: { _i: 306 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 307 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(308, "sc"),
                                      attrs: { _i: 308 }
                                    },
                                    [_vm._v("4512")]
                                  ),
                                  _c("p", { attrs: { _i: 309 } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 310 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(311, "sc"),
                              attrs: { _i: 311 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(312, "sc"),
                                  attrs: { _i: 312 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 313 } },
                                    [
                                      _c("span", { attrs: { _i: 314 } }, [
                                        _vm._v("北京")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 315 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 316 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(317, "sc"),
                                      attrs: { _i: 317 }
                                    },
                                    [_vm._v("7")]
                                  ),
                                  _c("p", { attrs: { _i: 318 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(319, "sc"),
                                  attrs: { _i: 319 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(320, "sc"),
                                      attrs: { _i: 320 }
                                    },
                                    [_vm._v("945")]
                                  ),
                                  _c("p", { attrs: { _i: 321 } }, [
                                    _vm._v("4天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 322 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(323, "sc"),
                                      attrs: { _i: 323 }
                                    },
                                    [_vm._v("929")]
                                  ),
                                  _c("p", { attrs: { _i: 324 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 325 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(326, "sc"),
                                      attrs: { _i: 326 }
                                    },
                                    [_vm._v("9")]
                                  ),
                                  _c("p", { attrs: { _i: 327 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(328, "sc"),
                              attrs: { _i: 328 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 329 } }, [
                                _vm._v(
                                  "北京累计报告境外输入确诊病例186例。\n\t\t\t\t\t\t\t\t北京卫健委未明确治愈病例和死亡病例的归属分区，北京分区现有确诊数据暂无法获取。"
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 330 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(331, "sc"),
                              attrs: { _i: 331 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(332, "sc"),
                                  attrs: { _i: 332 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 333 } },
                                    [
                                      _c("span", { attrs: { _i: 334 } }, [
                                        _vm._v("河南")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 335 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 336 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(337, "sc"),
                                      attrs: { _i: 337 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 338 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(339, "sc"),
                                  attrs: { _i: 339 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(340, "sc"),
                                      attrs: { _i: 340 }
                                    },
                                    [_vm._v("1286")]
                                  ),
                                  _c("p", { attrs: { _i: 341 } }, [
                                    _vm._v("4天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 342 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(343, "sc"),
                                      attrs: { _i: 343 }
                                    },
                                    [_vm._v("1258")]
                                  ),
                                  _c("p", { attrs: { _i: 344 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 345 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(346, "sc"),
                                      attrs: { _i: 346 }
                                    },
                                    [_vm._v("22")]
                                  ),
                                  _c("p", { attrs: { _i: 347 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(348, "sc"),
                              attrs: { _i: 348 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 349 } }, [
                                _vm._v("河南累计报告13例境外输入型病例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 350 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(351, "sc"),
                              attrs: { _i: 351 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(352, "sc"),
                                  attrs: { _i: 352 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 353 } },
                                    [
                                      _c("span", { attrs: { _i: 354 } }, [
                                        _vm._v("河北")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 355 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 356 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(357, "sc"),
                                      attrs: { _i: 357 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 358 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(359, "sc"),
                                  attrs: { _i: 359 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(360, "sc"),
                                      attrs: { _i: 360 }
                                    },
                                    [_vm._v("373")]
                                  ),
                                  _c("p", { attrs: { _i: 361 } }, [
                                    _vm._v("9天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 362 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(363, "sc"),
                                      attrs: { _i: 363 }
                                    },
                                    [_vm._v("361")]
                                  ),
                                  _c("p", { attrs: { _i: 364 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 365 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(366, "sc"),
                                      attrs: { _i: 366 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 367 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(368, "sc"),
                              attrs: { _i: 368 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 369 } }, [
                                _vm._v("河北累计报告境外输入确诊病例34例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 370 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(371, "sc"),
                              attrs: { _i: 371 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(372, "sc"),
                                  attrs: { _i: 372 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 373 } },
                                    [
                                      _c("span", { attrs: { _i: 374 } }, [
                                        _vm._v("山西")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 375 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 376 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(377, "sc"),
                                      attrs: { _i: 377 }
                                    },
                                    [_vm._v("5")]
                                  ),
                                  _c("p", { attrs: { _i: 378 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(379, "sc"),
                                  attrs: { _i: 379 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(380, "sc"),
                                      attrs: { _i: 380 }
                                    },
                                    [_vm._v("218")]
                                  ),
                                  _c("p", { attrs: { _i: 381 } }, [
                                    _vm._v("较上日+1")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 382 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(383, "sc"),
                                      attrs: { _i: 383 }
                                    },
                                    [_vm._v("213")]
                                  ),
                                  _c("p", { attrs: { _i: 384 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 385 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(386, "sc"),
                                      attrs: { _i: 386 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 387 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(388, "sc"),
                              attrs: { _i: 388 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 389 } }, [
                                _vm._v("山西省累计报告境外输入确诊病例84例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 390 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(391, "sc"),
                              attrs: { _i: 391 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(392, "sc"),
                                  attrs: { _i: 392 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 393 } },
                                    [
                                      _c("span", { attrs: { _i: 394 } }, [
                                        _vm._v("辽宁")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 395 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 396 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(397, "sc"),
                                      attrs: { _i: 397 }
                                    },
                                    [_vm._v("4")]
                                  ),
                                  _c("p", { attrs: { _i: 398 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(399, "sc"),
                                  attrs: { _i: 399 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(400, "sc"),
                                      attrs: { _i: 400 }
                                    },
                                    [_vm._v("285")]
                                  ),
                                  _c("p", { attrs: { _i: 401 } }, [
                                    _vm._v("较上日+1")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 402 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(403, "sc"),
                                      attrs: { _i: 403 }
                                    },
                                    [_vm._v("279")]
                                  ),
                                  _c("p", { attrs: { _i: 404 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 405 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(406, "sc"),
                                      attrs: { _i: 406 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 407 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(408, "sc"),
                              attrs: { _i: 408 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 409 } }, [
                                _vm._v("辽宁累计报告境外输入病例61例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 410 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(411, "sc"),
                              attrs: { _i: 411 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(412, "sc"),
                                  attrs: { _i: 412 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 413 } },
                                    [
                                      _c("span", { attrs: { _i: 414 } }, [
                                        _vm._v("云南")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 415 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 416 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(417, "sc"),
                                      attrs: { _i: 417 }
                                    },
                                    [_vm._v("4")]
                                  ),
                                  _c("p", { attrs: { _i: 418 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(419, "sc"),
                                  attrs: { _i: 419 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(420, "sc"),
                                      attrs: { _i: 420 }
                                    },
                                    [_vm._v("214")]
                                  ),
                                  _c("p", { attrs: { _i: 421 } }, [
                                    _vm._v("3天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 422 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(423, "sc"),
                                      attrs: { _i: 423 }
                                    },
                                    [_vm._v("208")]
                                  ),
                                  _c("p", { attrs: { _i: 424 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 425 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(426, "sc"),
                                      attrs: { _i: 426 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 427 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(428, "sc"),
                              attrs: { _i: 428 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 429 } }, [
                                _vm._v("云南省累计报告境外输入确诊病例40例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 430 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(431, "sc"),
                              attrs: { _i: 431 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(432, "sc"),
                                  attrs: { _i: 432 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 433 } },
                                    [
                                      _c("span", { attrs: { _i: 434 } }, [
                                        _vm._v("重庆")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 435 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 436 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(437, "sc"),
                                      attrs: { _i: 437 }
                                    },
                                    [_vm._v("3")]
                                  ),
                                  _c("p", { attrs: { _i: 438 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(439, "sc"),
                                  attrs: { _i: 439 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(440, "sc"),
                                      attrs: { _i: 440 }
                                    },
                                    [_vm._v("589")]
                                  ),
                                  _c("p", { attrs: { _i: 441 } }, [
                                    _vm._v("17天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 442 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(443, "sc"),
                                      attrs: { _i: 443 }
                                    },
                                    [_vm._v("580")]
                                  ),
                                  _c("p", { attrs: { _i: 444 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 445 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(446, "sc"),
                                      attrs: { _i: 446 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 447 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(448, "sc"),
                              attrs: { _i: 448 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 449 } }, [
                                _vm._v("重庆市累计报告境外输入确诊病例13例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 450 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(451, "sc"),
                              attrs: { _i: 451 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(452, "sc"),
                                  attrs: { _i: 452 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 453 } },
                                    [
                                      _c("span", { attrs: { _i: 454 } }, [
                                        _vm._v("甘肃")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 455 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 456 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(457, "sc"),
                                      attrs: { _i: 457 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 458 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(459, "sc"),
                                  attrs: { _i: 459 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(460, "sc"),
                                      attrs: { _i: 460 }
                                    },
                                    [_vm._v("180")]
                                  ),
                                  _c("p", { attrs: { _i: 461 } }, [
                                    _vm._v("7天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 462 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(463, "sc"),
                                      attrs: { _i: 463 }
                                    },
                                    [_vm._v("176")]
                                  ),
                                  _c("p", { attrs: { _i: 464 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 465 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(466, "sc"),
                                      attrs: { _i: 466 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 467 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(468, "sc"),
                              attrs: { _i: 468 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 469 } }, [
                                _vm._v("甘肃累计报告境外输入确诊病例88例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 470 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(471, "sc"),
                              attrs: { _i: 471 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(472, "sc"),
                                  attrs: { _i: 472 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 473 } },
                                    [
                                      _c("span", { attrs: { _i: 474 } }, [
                                        _vm._v("山东")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 475 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 476 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(477, "sc"),
                                      attrs: { _i: 477 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 478 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(479, "sc"),
                                  attrs: { _i: 479 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(480, "sc"),
                                      attrs: { _i: 480 }
                                    },
                                    [_vm._v("848")]
                                  ),
                                  _c("p", { attrs: { _i: 481 } }, [
                                    _vm._v("6天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 482 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(483, "sc"),
                                      attrs: { _i: 483 }
                                    },
                                    [_vm._v("839")]
                                  ),
                                  _c("p", { attrs: { _i: 484 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 485 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(486, "sc"),
                                      attrs: { _i: 486 }
                                    },
                                    [_vm._v("7")]
                                  ),
                                  _c("p", { attrs: { _i: 487 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(488, "sc"),
                              attrs: { _i: 488 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 489 } }, [
                                _vm._v("山东累计报告境外输入确诊病例71例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 490 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(491, "sc"),
                              attrs: { _i: 491 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(492, "sc"),
                                  attrs: { _i: 492 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 493 } },
                                    [
                                      _c("span", { attrs: { _i: 494 } }, [
                                        _vm._v("湖南")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 495 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 496 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(497, "sc"),
                                      attrs: { _i: 497 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 498 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(499, "sc"),
                                  attrs: { _i: 499 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(500, "sc"),
                                      attrs: { _i: 500 }
                                    },
                                    [_vm._v("1020")]
                                  ),
                                  _c("p", { attrs: { _i: 501 } }, [
                                    _vm._v("8天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 502 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(503, "sc"),
                                      attrs: { _i: 503 }
                                    },
                                    [_vm._v("1015")]
                                  ),
                                  _c("p", { attrs: { _i: 504 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 505 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(506, "sc"),
                                      attrs: { _i: 506 }
                                    },
                                    [_vm._v("4")]
                                  ),
                                  _c("p", { attrs: { _i: 507 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(508, "sc"),
                              attrs: { _i: 508 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 509 } }, [
                                _vm._v("湖南省累计报告境外输入确诊病例2例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 510 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(511, "sc"),
                              attrs: { _i: 511 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(512, "sc"),
                                  attrs: { _i: 512 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 513 } },
                                    [
                                      _c("span", { attrs: { _i: 514 } }, [
                                        _vm._v("黑龙江")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 515 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 516 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(517, "sc"),
                                      attrs: { _i: 517 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 518 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(519, "sc"),
                                  attrs: { _i: 519 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(520, "sc"),
                                      attrs: { _i: 520 }
                                    },
                                    [_vm._v("949")]
                                  ),
                                  _c("p", { attrs: { _i: 521 } }, [
                                    _vm._v("13天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 522 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(523, "sc"),
                                      attrs: { _i: 523 }
                                    },
                                    [_vm._v("935")]
                                  ),
                                  _c("p", { attrs: { _i: 524 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 525 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(526, "sc"),
                                      attrs: { _i: 526 }
                                    },
                                    [_vm._v("13")]
                                  ),
                                  _c("p", { attrs: { _i: 527 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(528, "sc"),
                              attrs: { _i: 528 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 529 } }, [
                                _vm._v(
                                  "黑龙江省累计报告境外输入确诊病例388例。"
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 530 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(531, "sc"),
                              attrs: { _i: 531 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(532, "sc"),
                                  attrs: { _i: 532 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 533 } },
                                    [
                                      _c("span", { attrs: { _i: 534 } }, [
                                        _vm._v("澳门")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 535 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 536 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(537, "sc"),
                                      attrs: { _i: 537 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 538 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(539, "sc"),
                                  attrs: { _i: 539 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(540, "sc"),
                                      attrs: { _i: 540 }
                                    },
                                    [_vm._v("46")]
                                  ),
                                  _c("p", { attrs: { _i: 541 } }, [
                                    _vm._v("137天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 542 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(543, "sc"),
                                      attrs: { _i: 543 }
                                    },
                                    [_vm._v("46")]
                                  ),
                                  _c("p", { attrs: { _i: 544 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 545 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(546, "sc"),
                                      attrs: { _i: 546 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 547 } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 548 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(549, "sc"),
                              attrs: { _i: 549 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(550, "sc"),
                                  attrs: { _i: 550 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 551 } },
                                    [
                                      _c("span", { attrs: { _i: 552 } }, [
                                        _vm._v("吉林")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 553 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 554 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(555, "sc"),
                                      attrs: { _i: 555 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 556 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(557, "sc"),
                                  attrs: { _i: 557 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(558, "sc"),
                                      attrs: { _i: 558 }
                                    },
                                    [_vm._v("157")]
                                  ),
                                  _c("p", { attrs: { _i: 559 } }, [
                                    _vm._v("105天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 560 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(561, "sc"),
                                      attrs: { _i: 561 }
                                    },
                                    [_vm._v("155")]
                                  ),
                                  _c("p", { attrs: { _i: 562 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 563 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(564, "sc"),
                                      attrs: { _i: 564 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 565 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(566, "sc"),
                              attrs: { _i: 566 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 567 } }, [
                                _vm._v("吉林累计报告境外输入确诊病例19例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 568 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(569, "sc"),
                              attrs: { _i: 569 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(570, "sc"),
                                  attrs: { _i: 570 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 571 } },
                                    [
                                      _c("span", { attrs: { _i: 572 } }, [
                                        _vm._v("海南")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 573 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 574 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(575, "sc"),
                                      attrs: { _i: 575 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 576 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(577, "sc"),
                                  attrs: { _i: 577 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(578, "sc"),
                                      attrs: { _i: 578 }
                                    },
                                    [_vm._v("171")]
                                  ),
                                  _c("p", { attrs: { _i: 579 } }, [
                                    _vm._v("150天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 580 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(581, "sc"),
                                      attrs: { _i: 581 }
                                    },
                                    [_vm._v("165")]
                                  ),
                                  _c("p", { attrs: { _i: 582 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 583 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(584, "sc"),
                                      attrs: { _i: 584 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 585 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(586, "sc"),
                              attrs: { _i: 586 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 587 } }, [
                                _vm._v("海南省累计报告境外输入确诊病例2例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 588 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(589, "sc"),
                              attrs: { _i: 589 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(590, "sc"),
                                  attrs: { _i: 590 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 591 } },
                                    [
                                      _c("span", { attrs: { _i: 592 } }, [
                                        _vm._v("宁夏")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 593 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 594 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(595, "sc"),
                                      attrs: { _i: 595 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 596 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(597, "sc"),
                                  attrs: { _i: 597 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(598, "sc"),
                                      attrs: { _i: 598 }
                                    },
                                    [_vm._v("75")]
                                  ),
                                  _c("p", { attrs: { _i: 599 } }, [
                                    _vm._v("250天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 600 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(601, "sc"),
                                      attrs: { _i: 601 }
                                    },
                                    [_vm._v("75")]
                                  ),
                                  _c("p", { attrs: { _i: 602 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 603 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(604, "sc"),
                                      attrs: { _i: 604 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 605 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(606, "sc"),
                              attrs: { _i: 606 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 607 } }, [
                                _vm._v(
                                  "宁夏累计确诊病例中包含3名境外输入型病例。"
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 608 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(609, "sc"),
                              attrs: { _i: 609 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(610, "sc"),
                                  attrs: { _i: 610 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 611 } },
                                    [
                                      _c("span", { attrs: { _i: 612 } }, [
                                        _vm._v("安徽")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 613 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 614 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(615, "sc"),
                                      attrs: { _i: 615 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 616 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(617, "sc"),
                                  attrs: { _i: 617 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(618, "sc"),
                                      attrs: { _i: 618 }
                                    },
                                    [_vm._v("991")]
                                  ),
                                  _c("p", { attrs: { _i: 619 } }, [
                                    _vm._v("214天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 620 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(621, "sc"),
                                      attrs: { _i: 621 }
                                    },
                                    [_vm._v("985")]
                                  ),
                                  _c("p", { attrs: { _i: 622 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 623 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(624, "sc"),
                                      attrs: { _i: 624 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 625 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(626, "sc"),
                              attrs: { _i: 626 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 627 } }, [
                                _vm._v("安徽省累计报告境外输入确诊病例1例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 628 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(629, "sc"),
                              attrs: { _i: 629 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(630, "sc"),
                                  attrs: { _i: 630 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 631 } },
                                    [
                                      _c("span", { attrs: { _i: 632 } }, [
                                        _vm._v("广西")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 633 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 634 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(635, "sc"),
                                      attrs: { _i: 635 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 636 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(637, "sc"),
                                  attrs: { _i: 637 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(638, "sc"),
                                      attrs: { _i: 638 }
                                    },
                                    [_vm._v("260")]
                                  ),
                                  _c("p", { attrs: { _i: 639 } }, [
                                    _vm._v("36天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 640 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(641, "sc"),
                                      attrs: { _i: 641 }
                                    },
                                    [_vm._v("258")]
                                  ),
                                  _c("p", { attrs: { _i: 642 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 643 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(644, "sc"),
                                      attrs: { _i: 644 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 645 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(646, "sc"),
                              attrs: { _i: 646 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 647 } }, [
                                _vm._v("广西累计报告境外输入确诊病例8例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 648 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(649, "sc"),
                              attrs: { _i: 649 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(650, "sc"),
                                  attrs: { _i: 650 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 651 } },
                                    [
                                      _c("span", { attrs: { _i: 652 } }, [
                                        _vm._v("西藏")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 653 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 654 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(655, "sc"),
                                      attrs: { _i: 655 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 656 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(657, "sc"),
                                  attrs: { _i: 657 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(658, "sc"),
                                      attrs: { _i: 658 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 659 } }, [
                                    _vm._v("284天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 660 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(661, "sc"),
                                      attrs: { _i: 661 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 662 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 663 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(664, "sc"),
                                      attrs: { _i: 664 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 665 } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 666 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(667, "sc"),
                              attrs: { _i: 667 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(668, "sc"),
                                  attrs: { _i: 668 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 669 } },
                                    [
                                      _c("span", { attrs: { _i: 670 } }, [
                                        _vm._v("江西")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 671 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 672 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(673, "sc"),
                                      attrs: { _i: 673 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 674 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(675, "sc"),
                                  attrs: { _i: 675 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(676, "sc"),
                                      attrs: { _i: 676 }
                                    },
                                    [_vm._v("935")]
                                  ),
                                  _c("p", { attrs: { _i: 677 } }, [
                                    _vm._v("81天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 678 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(679, "sc"),
                                      attrs: { _i: 679 }
                                    },
                                    [_vm._v("934")]
                                  ),
                                  _c("p", { attrs: { _i: 680 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 681 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(682, "sc"),
                                      attrs: { _i: 682 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 683 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(684, "sc"),
                              attrs: { _i: 684 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 685 } }, [
                                _vm._v("江西累计报告境外输入病例5例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 686 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(687, "sc"),
                              attrs: { _i: 687 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(688, "sc"),
                                  attrs: { _i: 688 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 689 } },
                                    [
                                      _c("span", { attrs: { _i: 690 } }, [
                                        _vm._v("青海")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 691 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 692 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(693, "sc"),
                                      attrs: { _i: 693 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 694 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(695, "sc"),
                                  attrs: { _i: 695 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(696, "sc"),
                                      attrs: { _i: 696 }
                                    },
                                    [_vm._v("18")]
                                  ),
                                  _c("p", { attrs: { _i: 697 } }, [
                                    _vm._v("277天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 698 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(699, "sc"),
                                      attrs: { _i: 699 }
                                    },
                                    [_vm._v("18")]
                                  ),
                                  _c("p", { attrs: { _i: 700 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 701 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(702, "sc"),
                                      attrs: { _i: 702 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 703 } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c(
                        "tbody",
                        { attrs: { _i: 704 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(705, "sc"),
                              attrs: { _i: 705 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(706, "sc"),
                                  attrs: { _i: 706 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 707 } },
                                    [
                                      _c("span", { attrs: { _i: 708 } }, [
                                        _vm._v("贵州")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 709 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 710 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(711, "sc"),
                                      attrs: { _i: 711 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 712 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(713, "sc"),
                                  attrs: { _i: 713 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(714, "sc"),
                                      attrs: { _i: 714 }
                                    },
                                    [_vm._v("147")]
                                  ),
                                  _c("p", { attrs: { _i: 715 } }, [
                                    _vm._v("225天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 716 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(717, "sc"),
                                      attrs: { _i: 717 }
                                    },
                                    [_vm._v("145")]
                                  ),
                                  _c("p", { attrs: { _i: 718 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 719 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(720, "sc"),
                                      attrs: { _i: 720 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 721 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(722, "sc"),
                              attrs: { _i: 722 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 723 } }, [
                                _vm._v("贵州累计报告境外输入确诊病例1例。")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "div",
                { staticClass: _vm._$g(724, "sc"), attrs: { _i: 724 } },
                [
                  _c("span", { attrs: { _i: 725 } }, [
                    _vm._v("数据来源：各地卫健委每日公开数据")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/china/index.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 18);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/china/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 19 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/china/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 20);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/china/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("bdd4b996", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 21 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/china/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n}\nul {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tlist-style: none;\n}\ndd,\n\tdl,\n\tdt,\n\th1,\n\th2,\n\th3,\n\th4,\n\tp {\n\t\tmargin: 0;\n\t\tfont-size: 1em;\n}\n.container {\n\t\tbackground-color: rgba(255, 255, 255, 1);\n\t\toverflow: hidden;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;\n\t\tfont-smoothing: antialiased;\n\t\tfont-size: 4.267vw;\n\t\tcolor: #222;\n}\n.status_bar {\n\t      height: var(--status-bar-height);\n\t      width: 100%;\n\t\t  background-color: #fff;\n\t\t  position: fixed;\n\t\t  z-index: 999;\n}\n#search_div{\n\t \tdisplay: -webkit-box;\n\t \tdisplay: -webkit-flex;\n\t \tdisplay: flex;\n\t \tposition: fixed;\n\t\ttop: var(--status-bar-height);\n\t \twidth: 100vw;\n\t\tpadding: 5vw 0;\n\t \tborder-bottom: 1px solid #e8e8e8;\n\t \tbackground-color: #fff;\n\t \tz-index: 999;\n}\n.search_box_Class {\n\t \topacity: 0.5;\n}\n.search_box {\n\t \tposition: relative;\n\t \tdisplay: -webkit-box;\n\t \tdisplay: -webkit-flex;\n\t \tdisplay: flex;\n\t \toverflow: visible;\n\t\tmargin: 0 5.3vw;;\n\t \twidth: 89.4vw;\n\t \theight: 10vw;\n\t \t-webkit-border-radius: 3vw;\n\t \t        border-radius: 3vw;\n\t \tbackground-color: rgb(237, 240, 244);\n}\n.Search_Country_Class {\n\t \topacity: 0.5;\n\t \tposition: relative;\n\t \tmargin-left: 3vw;\n\t \tmargin-top: 2.2vw;\n\t \toverflow: visible;\n\t \twhite-space: nowrap;\n\t \ttext-align: margin-left;\n\t \tfont-family: SF Pro Display;\n\t \tfont-style: normal;\n\t \tfont-weight: normal;\n\t \tfont-size: 4vw;\n\t \tcolor: rgba(112, 132, 156, 1.0);\n}\n.search_icon {\n\t \topacity: 0.2;\n\t \tposition: relative;\n\t \tmargin-left: 3vw;\n\t \tmargin-top: 2vw;\n\t \toverflow: visible;\n}\n.main {\n\t\twidth: 100vw;\n\t\tmargin: 0 auto;\n\t\tposition: relative;\n\t\tpadding-top: 12vw;\n\t\tbackground-color: #fff;\n\t\tmin-height: 100%;\n\t\t-webkit-transform-origin: center top;\n\t\t        transform-origin: center top;\n}\n.World_Update_Class {\n\t\toverflow: visible;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: SF Pro Display;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 6.0vw;\n\t\tpadding: 0 5.333vw;\n\t\tcolor: rgba(36,42,64,1);\n}\n.timeNum {\n\t\tpadding: 4vw 5.333vw;\n\t\tbackground-color: #fff;\n\t\t-webkit-border-radius: 3.2vw;\n\t\t        border-radius: 3.2vw;\n\t\tline-height: 3.733vw;\n\t\tfont-size: 3.2vw;\n\t\tcolor: #737373;\n\t\tposition: relative;\n}\n.timeNum .d span {\n\t\tfont-weight: 500;\n\t\tcolor: #222;\n}\n.timeNum .d em {\n\t\tfont-style: normal;\n}\n.timeNum .d span {\n\t\tfont-weight: 500;\n\t\tcolor: #222;\n}\n.recentNumber {\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: flex;\n\t\t-webkit-flex-wrap: wrap;\n\t\t        flex-wrap: wrap;\n\t\tbox-pack: center;\n\t\t-webkit-box-pack: center;\n\t\t-webkit-justify-content: center;\n\t\t        justify-content: center;\n\t\tbox-align: center;\n\t\t-webkit-box-align: center;\n\t\t-webkit-align-items: center;\n\t\t        align-items: center;\n\t\tpadding-bottom: 6vw;\n}\n.recentNumber .icbar:first-child,.icbar:nth-child(4) {\n\t\t-webkit-border-radius: 2.0vw 0 0 0;\n\t\t        border-radius: 2.0vw 0 0 0;\n}\n.recentNumber .icbar.confirm {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#fde1cf), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #fde1cf, #fdfdfd);\n\t\tbackground-image: linear-gradient( #fde1cf, #fdfdfd);\n}\n.recentNumber .icbar {\n\t\twidth: 29.6vw;\n\t\tmargin: 0 .533vw .533vw 0;\n\t\tpadding: 1.6vw 0 3.2vw;\n\t\tposition: relative;\n\t\ttext-align: center;\n}\n.recentNumber .add {\n\t\tpadding-top: 1.6vw;\n\t\tcolor: #7c7c7c;\n\t\tfont-size: 2.667vw;\n\t\tline-height: 2.667vw;\n\t\theight: 2.667vw;\n\t\tfont-weight: 500;\n}\n.recentNumber .icbar.confirm .add em,\n\t.recentNumber .icbar.confirm .add span,\n\t.recentNumber .icbar.confirm .number {\n\t\tcolor: #be7761;\n}\n.recentNumber .icbar .number {\n\t\tfont-size: 5.867vw;\n\t\tline-height: 5.867vw;\n\t\theight: 5.867vw;\n\t\tfont-weight: 600;\n\t\tpadding-top: 1.6vw;\n}\n.recentNumber .icbar .text {\n\t\tfont-size: 3.2vw;\n\t\theight: 3.2vw;\n\t\tline-height: 3.2vw;\n\t\tcolor: #222;\n\t\tfont-weight: 500;\n\t\tmargin-top: 1.6vw;\n}\n.recentNumber .icbar.heal {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#d3f8e5), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #d3f8e5, #fdfdfd);\n\t\tbackground-image: linear-gradient( #d3f8e5, #fdfdfd);\n}\n.recentNumber .icbar.heal .add em,\n\t.recentNumber .icbar.heal .add span,\n\t.recentNumber .icbar.heal .number {\n\t\tcolor: #178b50;\n}\n.recentNumber .icbar:nth-child(3),.icbar:nth-child(6) {\n\t\t-webkit-border-radius: 0 2.0vw 0 0;\n\t\t        border-radius: 0 2.0vw 0 0;\n}\n.recentNumber .icbar:last-child,\n\t.recentNumber .icbar:nth-child(3) {\n\t\tmargin-right: 0;\n}\n.recentNumber .icbar.dead {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#ffc9ca), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #ffc9ca, #fdfdfd);\n\t\tbackground-image: linear-gradient( #ffc9ca, #fdfdfd);\n}\n.recentNumber .icbar.dead .add em,\n\t.recentNumber .icbar.dead .add span,\n\t.recentNumber .icbar.dead .number {\n\t\tcolor: #b55355;\n}\n.recentNumber .icbar.nowConfirm {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#f1e4fd), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #f1e4fd, #fdfdfd);\n\t\tbackground-image: linear-gradient( #f1e4fd, #fdfdfd);\n}\n.recentNumber .icbar.nowConfirm .add em,\n\t.recentNumber .icbar.nowConfirm .add span,\n\t.recentNumber .icbar.nowConfirm .number {\n\t\tcolor: #a65dad;\n}\n.recentNumber .icbar.nowConfirm .text span {\n\t\tposition: relative;\n\t\tmargin-right: 3.733vw;\n\t\tdisplay: inline-block;\n}\n.recentNumber .icbar.nowSevere {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#f6f8c6), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #f6f8c6, #fdfdfd);\n\t\tbackground-image: linear-gradient( #f6f8c6, #fdfdfd);\n}\n.recentNumber .icbar.nowSevere .add em,\n\t.recentNumber .icbar.nowSevere .add span,\n\t.recentNumber .icbar.nowSevere .number {\n\t\tcolor: #93994d;\n}\n.recentNumber .icbar.import {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#cbe0fa), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #cbe0fa, #fdfdfd);\n\t\tbackground-image: linear-gradient( #cbe0fa, #fdfdfd);\n}\n.recentNumber .icbar.import .add em,\n\t.recentNumber .icbar.import .add span,\n\t.recentNumber .icbar.import .number {\n\t\tcolor: #546fab;\n}\n.chianMapWraper {\n\t\tposition: relative;\n\t\tmargin: 0 0 2.667vw;\n}\n.chinaListWraper .up-tips{\n\t    margin-bottom: 0;\n}\n.tips-yiqing {\n\t    overflow: visible;\n\t    white-space: nowrap;\n\t    text-align: left;\n\t    font-family: SF Pro Display;\n\t    font-style: normal;\n\t    font-weight: normal;\n\t    font-size: 6.0vw;\n\t    padding: 0 5.333vw;\n\t    color: rgba(36,42,64,1);\n}\n.up-tips {\n\t    -webkit-box-sizing: border-box;\n\t            box-sizing: border-box;\n\t    padding: 0 0 0 5.333vw;\n\t    height: 4.8vw;\n\t    line-height: normal;\n\t    color: #222;\n\t    display: -webkit-box;\n\t    display: -webkit-flex;\n\t    display: flex;\n\t    -webkit-box-pack: justify;\n\t    -webkit-justify-content: space-between;\n\t            justify-content: space-between;\n\t    -webkit-box-align: center;\n\t    -webkit-align-items: center;\n\t            align-items: center;\n}\n.up-tips .title {\n\t    display: inline-block;\n\t    position: relative;\n\t\tfont-size: 6.0vw;\n}\n.chinaListWraper .listNav {\n\t    position: fixed;\n\t    left: 0;\n\t    top: 11.2vw;\n\t    right: 0;\n\t    background-color: #f5f5f5;\n\t    z-index: 8;\n}\n.chinaListWraper .listWraper {\n\t    margin: 5vw 5.333vw 0;\n}\n.chinaListWraper table {\n    border: 0;\n    padding: 0;\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n.chinaListWraper tbody {\n\t    line-height: 10.667vw;\n\t    height: 10.667vw;\n\t    font-size: 3.2vw;\n}\n.chinaListWraper thead {\n\t    border-collapse: collapse;\n\t    border-spacing: 0;\n}\n.chinaListWraper thead th {\n\t\theight: 10.667vw;\n\t\ttext-align: center;\n\t\tfont-size: 3.2vw;\n\t\tfont-weight: 400;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tborder: 0;\n\t\tborder-right: 1px solid #fff;\n\t\tbackground-color: #eaf3f9;\n}\n.chinaListWraper table td:first-child, .chinaListWraper table th:first-child {\n\t    width: 20vw;\n}\n.chinaListWraper table th:first-child {\n\t    -webkit-border-top-left-radius: 1.5vw;\n\t            border-top-left-radius: 1.5vw;\n\t\t-webkit-border-bottom-left-radius: 1.5vw;\n\t\t        border-bottom-left-radius: 1.5vw;\n}\n.chinaListWraper table th:last-child {\n\t    -webkit-border-top-right-radius: 1.5vw;\n\t            border-top-right-radius: 1.5vw;\n\t\t-webkit-border-bottom-right-radius: 1.5vw;\n\t\t        border-bottom-right-radius: 1.5vw;\n}\n.chinaListWraper tbody .areaBox {\n\t    font-size: 3.733vw;\n\t\tborder-bottom: 1px solid #f0f0f0;\n}\n.chinaListWraper tbody td p, .chinaListWraper tbody th p {\n\t    line-height: 5.333vw;\n\t    min-height: 5.333vw;\n\t    padding-top: 2.667vw;\n}\n.chinaListWraper tbody td p:last-child, .chinaListWraper tbody th p:last-child {\n\t    line-height: 3.2vw;\n\t    height: 3.2vw;\n\t    min-height: auto;\n\t    font-size: 2.667vw;\n\t    padding: 0 0 2.667vw;\n\t    color: #737373;\n}\n.chinaListWraper table td:nth-child(2), .chinaListWraper table td:nth-child(3), .chinaListWraper table th:nth-child(2), .chinaListWraper table th:nth-child(3) {\n\t    width: 15.467vw;\n}\n.chinaListWraper tbody td {\n\t    text-align: center;\n\t    position: relative;\n\t    border-right: 1px solid #fff;\n}\n.chinaListWraper tbody tr.tip td {\n\t    text-align: left;\n\t    line-height: 4.8vw;\n\t    color: #737373;\n\t    padding: 1.333vw 4.533vw;\n}\n.dataTips {\n\t    color: #737373;\n\t    font-size: 3.2vw;\n\t    height: 3.2vw;\n\t    line-height: 3.2vw;\n\t    margin: 5.333vw 0 0 5.333vw;\n\t    position: relative;\n}\n.dataTips span {\n\t    position: relative;\n\t    display: inline-block;\n\t    padding-right: 4vw;\n}\n.dataTips span:before {\n\t    content: \".\";\n\t    display: block;\n\t    font-size: 0;\n\t    line-height: 0;\n\t    position: absolute;\n\t    right: 0;\n\t    top: 50%;\n\t    -webkit-transform: translateY(-50%);\n\t            transform: translateY(-50%);\n\t    width: 3.2vw;\n\t    height: 3.2vw;\n\t    background: url(//mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/icon_qs.png);\n\t    background-size: 100% 100%;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 22 */
/*!*******************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/news/index.vue?mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_78165296_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=78165296&mpType=page */ 23);
/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 27);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_78165296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_78165296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_78165296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "views/news/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 23 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/news/index.vue?vue&type=template&id=78165296&mpType=page ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_78165296_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=template&id=78165296&mpType=page */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_78165296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_78165296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_78165296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_template_id_78165296_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/news/index.vue?vue&type=template&id=78165296&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("v-uni-view", { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } }),
      _c(
        "div",
        { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
        [
          _c(
            "div",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [
              _c(
                "div",
                { staticClass: _vm._$g(4, "sc"), attrs: { _i: 4 } },
                [
                  _c(
                    "div",
                    {
                      staticClass: _vm._$g(5, "sc"),
                      attrs: { id: "marquee-tab", _i: 5 }
                    },
                    [
                      _c(
                        "ul",
                        {
                          staticClass: _vm._$g(6, "sc"),
                          attrs: { id: "marbox", _i: 6 }
                        },
                        [
                          _c(
                            "li",
                            { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                            [
                              _c("a", { attrs: { _i: 8 } }, [
                                _vm._v("上海报告新增本土确诊病例1例")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "div",
            { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
            [
              _c("p", { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } }, [
                _vm._v("新冠肺炎预防须知")
              ]),
              _c(
                "div",
                { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                [
                  _c(
                    "div",
                    { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                    [
                      _c("img", {
                        staticClass: _vm._$g(13, "sc"),
                        attrs: {
                          src:
                            "https://puui.qpic.cn/vupload/0/1580113954413_67dj6qw9r34.png/0",
                          _i: 13
                        }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                        [_vm._v("个人清洁")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(15, "sc"), attrs: { _i: 15 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(16, "sc"),
                        attrs: { _i: 16 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                        [_vm._v("经常保持双手清洁，尤其在触摸口、鼻或眼之前。")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(18, "sc"), attrs: { _i: 18 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(19, "sc"),
                        attrs: { _i: 19 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                        [
                          _vm._v(
                            "经常用洗手液和清水清洗双手，搓手最少20秒，并用纸巾擦干。"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(21, "sc"), attrs: { _i: 21 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(22, "sc"),
                        attrs: { _i: 22 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                        [
                          _vm._v(
                            "打喷嚏或咳嗽时应用纸巾掩盖口鼻，把用过的纸巾弃置于有盖垃圾箱内，然后彻底清洁双手。"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                    [
                      _c("img", {
                        staticClass: _vm._$g(25, "sc"),
                        attrs: {
                          src:
                            "https://puui.qpic.cn/vupload/0/1580113954413_b3dr1w759hr.png/0",
                          _i: 25
                        }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
                        [_vm._v("尽量避免")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(28, "sc"),
                        attrs: { _i: 28 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                        [
                          _vm._v(
                            "减少前往人流密集的场所。如不可避免，应戴上外科口罩。"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(30, "sc"), attrs: { _i: 30 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(31, "sc"),
                        attrs: { _i: 31 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                        [
                          _vm._v(
                            "避免到访医院。如有必要到访医院，应佩戴外科口罩及时刻注重个人和手部卫生。"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(34, "sc"),
                        attrs: { _i: 34 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
                        [
                          _vm._v(
                            "避免接触动物（包括野味）、禽鸟或其粪便；避免到海鲜、活禽市场或农场。"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(36, "sc"), attrs: { _i: 36 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(37, "sc"),
                        attrs: { _i: 37 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                        [_vm._v("切勿进食野味及切勿光顾有提供野味的餐馆。")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(39, "sc"), attrs: { _i: 39 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(40, "sc"),
                        attrs: { _i: 40 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                        [
                          _vm._v(
                            "注意食物安全和卫生，避免进食或饮用生或未熟透的动物产品，包括奶类、蛋类和肉类。"
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(42, "sc"), attrs: { _i: 42 } },
                    [
                      _c("img", {
                        staticClass: _vm._$g(43, "sc"),
                        attrs: {
                          src:
                            "https://puui.qpic.cn/vupload/0/1580113954413_qs8jz3v8m7.png/0",
                          _i: 43
                        }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                        [_vm._v("尽快就诊")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(46, "sc"),
                        attrs: { _i: 46 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(47, "sc"), attrs: { _i: 47 } },
                        [
                          _vm._v(
                            "如有身体不适，特别是有发烧或咳嗽，应戴上外科口罩并尽快就诊。"
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "div",
                { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                [
                  _c(
                    "div",
                    { staticClass: _vm._$g(49, "sc"), attrs: { _i: 49 } },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(50, "sc"), attrs: { _i: 50 } },
                        [
                          _c("span", { attrs: { _i: 51 } }, [
                            _vm._v("前往国家卫健委了解更多疫情动态")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/news/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=script&lang=js&mpType=page */ 26);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/news/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 27 */
/*!***************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/news/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 28);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_index_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/news/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./index.vue?vue&type=style&index=0&lang=css&mpType=page */ 29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("5ea0824b", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 29 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/news/index.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.container {\n\tbackground-color: rgba(255, 255, 255, 1);\n\toverflow: hidden;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;\n\tfont-smoothing: antialiased;\n\tcolor: #222;\n}\n.status_bar {\n    height: var(--status-bar-height);\n    width: 100%;\n    background-color: #fff;\n    position: fixed;\n    z-index: 999;\n}\n.main{\n\twidth: 100vw;\n\tmargin: 0 auto;\n\tposition: relative;\n\tpadding-top: 11.733vw;\n\tbackground-color: #fff;\n\t-webkit-box-shadow: 0 0 1.333vw rgba(0, 0, 0, .1);\n\t        box-shadow: 0 0 1.333vw rgba(0, 0, 0, .1);\n\tmin-height: 100%;\n\t-webkit-transform-origin: center top;\n\t        transform-origin: center top;\n}\n.marquee-warp,\n.marquee {\n\t-webkit-border-radius: 3.2vw;\n\t        border-radius: 3.2vw;\n\tposition: relative;\n}\n.marquee-warp {\n\tbackground-color: #fff;\n\tpadding-top: 1px;\n}\n.marquee {\n\twidth: 90.133vw;\n\theight: 10.133vw;\n\tmargin: 4vw auto 0;\n\tpadding: 0 5.333vw;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\tbackground: url(https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/marquee-bg-none.png) #f8f8f8 50% no-repeat;\n\tbackground-size: 90.133vw 10.133vw;\n\tfont-size: 4vw;\n\t-webkit-border-radius: 1.6vw;\n\t        border-radius: 1.6vw;\n\tposition: relative;\n}\n.marquee .marquee-tab {\n\tposition: absolute;\n\tcolor: #737373;\n\tleft: 9.733vw;\n\ttop: 50%;\n\t-webkit-transform: translateY(-50%);\n\t        transform: translateY(-50%);\n\twidth: 76vw;\n\tfont-size: 3.2vw;\n\toverflow: hidden;\n\tfont-weight: 400;\n\theight: 4.667vw;\n}\n.marquee .set-box {\n\tposition: absolute;\n\toverflow: hidden;\n}\n.marquee .marquee-tab .li.out {\n\tbackground: none;\n}\n.marquee .marquee-tab .li {\n\theight: 4.667vw;\n\twidth: 76vw;\n\tline-height: 4.667vw;\n\toverflow: hidden;\n\tbackground: url(https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/forward.png) 100% no-repeat;\n\tbackground-size: 1.867vw 2.667vw;\n}\n.marquee .marquee-tab .li a {\n\tcolor: #222;\n\ttext-decoration: none;\n\tdisplay: block;\n}\n.p-fanghu {\n    color: #222;\n    font-size: 4.8vw;\n    margin: 5.667vw 0 0;\n    text-align: center;\n    font-weight: 600;\n}\n.fanghu_card {\n    margin: 5.333vw 5.333vw 0;\n    -webkit-border-radius: 1.6vw;\n            border-radius: 1.6vw;\n    background: #f8f8f8;\n    padding: 1.333vw 4vw 5.333vw 5.333vw;\n}\n.fanghu_title_warp {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    padding-top: 4.267vw;\n    padding-bottom: 2.133vw;\n}\n.fanghu_icon {\n    width: 4.267vw;\n    height: 4.267vw;\n}\n.fanghu_title{\n    font-size: 3.733vw;\n    font-weight: 500;\n    margin-left: 2.667vw;\n}\n.fanghu_item {\n    margin-top: 2.133vw;\n    position: relative;\n}\n.fanghu_item_point {\n    width: 1.067vw;\n    height: 1.067vw;\n    background: #005dff;\n    -webkit-border-radius: .533vw;\n            border-radius: .533vw;\n    margin-top: 1.867vw;\n    margin-right: 2.133vw;\n    position: absolute;\n}\n.fanghu_item_text {\n    font-weight: 400;\n    font-size: 3.2vw;\n    line-height: 4.267vw;\n    color: #222;\n    margin-left: 3.2vw;\n}\n.tailWraper.pdBottom {\n    padding-bottom: 26.667vw;\n}\n.tailWraper {\n    padding-top: 5.333vw;\n    padding-bottom: 9.6vw;\n    overflow: hidden;\n}\n.tail {\n    height: 18.667vw;\n    position: relative;\n}\n.tail .open-or-download {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    top: 5.333vw;\n    width: 89.333vw;\n    height: 11.2vw;\n    background: #005dff;\n    -webkit-border-radius: 11.2vw;\n            border-radius: 11.2vw;\n    line-height: 11.2vw;\n    color: #fff;\n    font-size: 3.733vw;\n    text-align: center;\n    font-weight: 500;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.tail .open-or-download .logo {\n    width: 17.067vw;\n    height: 3.733vw;\n    margin-left: 1.6vw;\n}\n.tail .open-or-download .sharp {\n    width: 3.2vw;\n    height: 2.4vw;\n    margin-left: 2.133vw;\n    margin-top: 1px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 30 */
/*!***********************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/country.vue?mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _country_vue_vue_type_template_id_79cc9c6e_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country.vue?vue&type=template&id=79cc9c6e&mpType=page */ 31);
/* harmony import */ var _country_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.vue?vue&type=script&lang=js&mpType=page */ 33);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _country_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _country_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _country_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country.vue?vue&type=style&index=0&lang=css&mpType=page */ 35);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _country_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _country_vue_vue_type_template_id_79cc9c6e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _country_vue_vue_type_template_id_79cc9c6e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _country_vue_vue_type_template_id_79cc9c6e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "views/global/country.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 31 */
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/country.vue?vue&type=template&id=79cc9c6e&mpType=page ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_template_id_79cc9c6e_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./country.vue?vue&type=template&id=79cc9c6e&mpType=page */ 32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_template_id_79cc9c6e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_template_id_79cc9c6e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_template_id_79cc9c6e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_template_id_79cc9c6e_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 32 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/country.vue?vue&type=template&id=79cc9c6e&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-uni-view",
    { staticClass: _vm._$g(0, "sc"), attrs: { _i: 0 } },
    [
      _c("v-uni-view", { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } }),
      _c(
        "div",
        { staticClass: _vm._$g(2, "sc"), attrs: { _i: 2 } },
        [
          _c(
            "div",
            { staticClass: _vm._$g(3, "sc"), attrs: { _i: 3 } },
            [_c("span", { attrs: { _i: 4 } }, [_vm._v("印度")])],
            1
          ),
          _c(
            "div",
            { attrs: { _i: 5 } },
            [
              _c(
                "div",
                {
                  staticClass: _vm._$g(6, "sc"),
                  attrs: { "data-v-5d650fc0": "", _i: 6 }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: _vm._$g(7, "sc"),
                      attrs: { "data-v-5d650fc0": "", _i: 7 }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: _vm._$g(8, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 8 }
                        },
                        [
                          _vm._v("较上日"),
                          _c(
                            "span",
                            {
                              staticClass: _vm._$g(9, "sc"),
                              attrs: { "data-v-5d650fc0": "", _i: 9 }
                            },
                            [_vm._v("+87156")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(10, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 10 }
                        },
                        [_vm._v("3712054")]
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(11, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 11 }
                        },
                        [_vm._v("现有确诊")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    {
                      staticClass: _vm._$g(12, "sc"),
                      attrs: { "data-v-5d650fc0": "", _i: 12 }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: _vm._$g(13, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 13 }
                        },
                        [
                          _vm._v("较上日"),
                          _c(
                            "span",
                            {
                              staticClass: _vm._$g(14, "sc"),
                              attrs: { "data-v-5d650fc0": "", _i: 14 }
                            },
                            [_vm._v("+135574")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(15, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 15 }
                        },
                        [_vm._v("10559184")]
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(16, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 16 }
                        },
                        [_vm._v("累计确诊")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    {
                      staticClass: _vm._$g(17, "sc"),
                      attrs: { "data-v-5d650fc0": "", _i: 17 }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: _vm._$g(18, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 18 }
                        },
                        [
                          _vm._v("较上日"),
                          _c(
                            "span",
                            {
                              staticClass: _vm._$g(19, "sc"),
                              attrs: { "data-v-5d650fc0": "", _i: 19 }
                            },
                            [_vm._v("+48721")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(20, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 20 }
                        },
                        [_vm._v("6601331")]
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(21, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 21 }
                        },
                        [_vm._v("累计治愈")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    {
                      staticClass: _vm._$g(22, "sc"),
                      attrs: { "data-v-5d650fc0": "", _i: 22 }
                    },
                    [
                      _c(
                        "p",
                        {
                          staticClass: _vm._$g(23, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 23 }
                        },
                        [
                          _vm._v("较上日"),
                          _c(
                            "span",
                            {
                              staticClass: _vm._$g(24, "sc"),
                              attrs: { "data-v-5d650fc0": "", _i: 24 }
                            },
                            [_vm._v("+1351")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(25, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 25 }
                        },
                        [_vm._v("245799")]
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(26, "sc"),
                          attrs: { "data-v-5d650fc0": "", _i: 26 }
                        },
                        [_vm._v("累计死亡")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 33 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/country.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./country.vue?vue&type=script&lang=js&mpType=page */ 34);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/country.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =

{

  data: function data() {
    return {
      wxsProps: {} };

  },
  components: {} };exports.default = _default;

/***/ }),
/* 35 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/country.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./country.vue?vue&type=style&index=0&lang=css&mpType=page */ 36);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_app_vue_style_loader_index_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_view_style_js_country_vue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/country.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!./country.vue?vue&type=style&index=0&lang=css&mpType=page */ 37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/app-vue-style-loader/lib/addStylesClient.js */ 11).default
var update = add("471b58a3", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 37 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/view/style.js!C:/Users/Lenovo/Desktop/github/team_6/CovidMonitor/views/global/country.vue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ 10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n* {\n\tmargin: 0;\n\tpadding: 0;\n}\nul {\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n}\ndd,\ndl,\ndt,\nh1,\nh2,\nh3,\nh4,\np {\n\tmargin: 0;\n\tfont-size: 1em;\n}\n.container {\n\tbackground-color: rgba(255, 255, 255, 1);\n\toverflow: hidden;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;\n\tfont-smoothing: antialiased;\n\tfont-size: 4.267vw;\n\tcolor: #222;\n}\n.status_bar {\n\theight: var(--status-bar-height);\n\twidth: 100%;\n\tbackground-color: #fff;\n\tposition: fixed;\n\tz-index: 999;\n}\n.recentNumber {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\t-webkit-flex-wrap: wrap;\n\t        flex-wrap: wrap;\n\tbox-pack: center;\n\t-webkit-box-pack: center;\n\t-webkit-justify-content: center;\n\t        justify-content: center;\n\tbox-align: center;\n\t-webkit-box-align: center;\n\t-webkit-align-items: center;\n\t        align-items: center;\n\tpadding-bottom: 6vw;\n}\n.recentNumber .icbar:first-child,\n.icbar:nth-child(4) {\n\t-webkit-border-radius: 2.0vw 0 0 0;\n\t        border-radius: 2.0vw 0 0 0;\n}\n.recentNumber .icbar.confirm {\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(#fde1cf), to(#fdfdfd));\n\tbackground-image: -webkit-linear-gradient(#fde1cf, #fdfdfd);\n\tbackground-image: linear-gradient(#fde1cf, #fdfdfd);\n}\n.recentNumber .icbar {\n\twidth: 29.6vw;\n\tmargin: 0 .533vw .533vw 0;\n\tpadding: 1.6vw 0 3.2vw;\n\tposition: relative;\n\ttext-align: center;\n}\n.recentNumber .add {\n\tpadding-top: 1.6vw;\n\tcolor: #7c7c7c;\n\tfont-size: 2.667vw;\n\tline-height: 2.667vw;\n\theight: 2.667vw;\n\tfont-weight: 500;\n}\n.recentNumber .icbar.confirm .add em,\n.recentNumber .icbar.confirm .add span,\n.recentNumber .icbar.confirm .number {\n\tcolor: #be7761;\n}\n.recentNumber .icbar .number {\n\tfont-size: 5.867vw;\n\tline-height: 5.867vw;\n\theight: 5.867vw;\n\tfont-weight: 600;\n\tpadding-top: 1.6vw;\n}\n.recentNumber .icbar .text {\n\tfont-size: 3.2vw;\n\theight: 3.2vw;\n\tline-height: 3.2vw;\n\tcolor: #222;\n\tfont-weight: 500;\n\tmargin-top: 1.6vw;\n}\n.recentNumber .icbar.heal {\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(#d3f8e5), to(#fdfdfd));\n\tbackground-image: -webkit-linear-gradient(#d3f8e5, #fdfdfd);\n\tbackground-image: linear-gradient(#d3f8e5, #fdfdfd);\n}\n.recentNumber .icbar.heal .add em,\n.recentNumber .icbar.heal .add span,\n.recentNumber .icbar.heal .number {\n\tcolor: #178b50;\n}\n.recentNumber .icbar:nth-child(3),\n.icbar:nth-child(6) {\n\t-webkit-border-radius: 0 2.0vw 0 0;\n\t        border-radius: 0 2.0vw 0 0;\n}\n.recentNumber .icbar:last-child,\n.recentNumber .icbar:nth-child(3) {\n\tmargin-right: 0;\n}\n.recentNumber .icbar.dead {\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(#ffc9ca), to(#fdfdfd));\n\tbackground-image: -webkit-linear-gradient(#ffc9ca, #fdfdfd);\n\tbackground-image: linear-gradient(#ffc9ca, #fdfdfd);\n}\n.recentNumber .icbar.dead .add em,\n.recentNumber .icbar.dead .add span,\n.recentNumber .icbar.dead .number {\n\tcolor: #b55355;\n}\n.recentNumber .icbar.nowConfirm {\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(#f1e4fd), to(#fdfdfd));\n\tbackground-image: -webkit-linear-gradient(#f1e4fd, #fdfdfd);\n\tbackground-image: linear-gradient(#f1e4fd, #fdfdfd);\n}\n.recentNumber .icbar.nowConfirm .add em,\n.recentNumber .icbar.nowConfirm .add span,\n.recentNumber .icbar.nowConfirm .number {\n\tcolor: #a65dad;\n}\n.recentNumber .icbar.nowConfirm .text span {\n\tposition: relative;\n\tmargin-right: 3.733vw;\n\tdisplay: inline-block;\n}\n.recentNumber .icbar.nowSevere {\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(#f6f8c6), to(#fdfdfd));\n\tbackground-image: -webkit-linear-gradient(#f6f8c6, #fdfdfd);\n\tbackground-image: linear-gradient(#f6f8c6, #fdfdfd);\n}\n.recentNumber .icbar.nowSevere .add em,\n.recentNumber .icbar.nowSevere .add span,\n.recentNumber .icbar.nowSevere .number {\n\tcolor: #93994d;\n}\n.recentNumber .icbar.import {\n\tbackground-image: -webkit-gradient(linear, left top, left bottom, from(#cbe0fa), to(#fdfdfd));\n\tbackground-image: -webkit-linear-gradient(#cbe0fa, #fdfdfd);\n\tbackground-image: linear-gradient(#cbe0fa, #fdfdfd);\n}\n.recentNumber .icbar.import .add em,\n.recentNumber .icbar.import .add span,\n.recentNumber .icbar.import .number {\n\tcolor: #546fab;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ })
/******/ ]);