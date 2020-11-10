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
window.__uniConfig = { "window": { "navigationStyle": "custom", "backgroundColor": "#FFFFFF" } };
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('views/global/index', function () {return Vue.extend(__webpack_require__(/*! views/global/index.vue?mpType=page */ 2).default);});
__definePage('views/china/index', function () {return Vue.extend(__webpack_require__(/*! views/china/index.vue?mpType=page */ 14).default);});
__definePage('views/news/index', function () {return Vue.extend(__webpack_require__(/*! views/news/index.vue?mpType=page */ 22).default);});

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
      _c(
        "div",
        { staticClass: _vm._$g(1, "sc"), attrs: { id: "ID1", _i: 1 } },
        [
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
                      _c("img", {
                        staticStyle: { width: "7vw" },
                        attrs: { src: _vm._$g(5, "a-src"), _i: 5 }
                      })
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                    [_c("span", { attrs: { _i: 7 } }, [_vm._v("搜索国家")])],
                    1
                  )
                ],
                1
              ),
              _c(
                "div",
                { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
                [
                  _c(
                    "div",
                    { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } },
                    [
                      _c("img", {
                        staticStyle: { width: "7.2vw" },
                        attrs: { src: _vm._$g(10, "a-src"), _i: 10 }
                      })
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
              staticStyle: { "padding-top": "8vw" },
              attrs: { id: "world_data", _i: 11 }
            },
            [
              _c(
                "div",
                { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                [_c("span", { attrs: { _i: 13 } }, [_vm._v("全球疫情")])],
                1
              ),
              _c(
                "div",
                { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                [
                  _c(
                    "div",
                    {
                      staticClass: _vm._$g(15, "sc"),
                      staticStyle: {
                        "background-image": "linear-gradient(#E8DFFF,#fff)"
                      },
                      attrs: { _i: 15 }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                        [
                          _c("span", { attrs: { _i: 17 } }, [
                            _vm._v("累计确诊")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(18, "sc"),
                          staticStyle: { color: "rgb(123,70,242)" },
                          attrs: { _i: 18 }
                        },
                        [
                          _c("span", { attrs: { _i: 19 } }, [
                            _vm._v("50646963")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(20, "sc"),
                          staticStyle: {
                            "background-color": "rgba(123,70,242,0.1)"
                          },
                          attrs: { _i: 20 }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(21, "sc"),
                              staticStyle: { color: "rgb(123,70,242)" },
                              attrs: { _i: 21 }
                            },
                            [
                              _c("span", { attrs: { _i: 22 } }, [
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
                      staticClass: _vm._$g(23, "sc"),
                      staticStyle: {
                        "background-image": "linear-gradient(#FFD3E6,#fff)"
                      },
                      attrs: { _i: 23 }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(24, "sc"), attrs: { _i: 24 } },
                        [
                          _c("span", { attrs: { _i: 25 } }, [
                            _vm._v("累计死亡")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(26, "sc"),
                          staticStyle: { color: "rgb(231,71,130)" },
                          attrs: { _i: 26 }
                        },
                        [
                          _c("span", { attrs: { _i: 27 } }, [_vm._v("1257384")])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(28, "sc"),
                          staticStyle: {
                            "background-color": "rgba(231,71,130,0.1)"
                          },
                          attrs: { _i: 28 }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(29, "sc"),
                              staticStyle: { color: "rgb(231,71,130)" },
                              attrs: { _i: 29 }
                            },
                            [
                              _c("span", { attrs: { _i: 30 } }, [
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
                      staticClass: _vm._$g(31, "sc"),
                      staticStyle: {
                        "background-image": "linear-gradient(#D6FFDC,#fff)"
                      },
                      attrs: { _i: 31 }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                        [
                          _c("span", { attrs: { _i: 33 } }, [
                            _vm._v("累计治愈")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(34, "sc"),
                          staticStyle: { color: "rgb(40,194,133)" },
                          attrs: { _i: 34 }
                        },
                        [
                          _c("span", { attrs: { _i: 35 } }, [
                            _vm._v("35432796")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(36, "sc"),
                          staticStyle: {
                            "background-color": "rgba(40,194,133,0.1)"
                          },
                          attrs: { _i: 36 }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(37, "sc"),
                              staticStyle: { color: "rgb(40,194,133)" },
                              attrs: { _i: 37 }
                            },
                            [
                              _c("span", { attrs: { _i: 38 } }, [
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
                      staticClass: _vm._$g(39, "sc"),
                      staticStyle: {
                        "background-image": "linear-gradient(#FFF2D5,#fff)"
                      },
                      attrs: { _i: 39 }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
                        [
                          _c("span", { attrs: { _i: 41 } }, [
                            _vm._v("现有确诊")
                          ])
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(42, "sc"),
                          staticStyle: { color: "rgb(255,199,66)" },
                          attrs: { _i: 42 }
                        },
                        [_c("span", { attrs: { _i: 43 } }, [_vm._v("46058")])],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(44, "sc"),
                          staticStyle: {
                            "background-color": "rgba(255,199,66,0.1)"
                          },
                          attrs: { _i: 44 }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(45, "sc"),
                              staticStyle: { color: "rgb(255,199,66)" },
                              attrs: { _i: 45 }
                            },
                            [
                              _c("span", { attrs: { _i: 46 } }, [
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
              attrs: { id: "most_infected", _i: 47 }
            },
            [
              _c(
                "div",
                { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                [_c("span", { attrs: { _i: 49 } }, [_vm._v("各国统计")])],
                1
              ),
              _c(
                "div",
                { staticStyle: { "padding-top": "4vw" }, attrs: { _i: 50 } },
                [
                  _c(
                    "div",
                    { attrs: { id: "list_id", _i: 51 } },
                    [
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(52, "sc"),
                          staticStyle: {
                            width: "25vw",
                            "border-top-left-radius": "1.8vw",
                            "border-bottom-left-radius": "1.8vw"
                          },
                          attrs: { _i: 52 }
                        },
                        [_c("span", { attrs: { _i: 53 } }, [_vm._v("国家")])],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(54, "sc"),
                          staticStyle: { width: "20vw" },
                          attrs: { _i: 54 }
                        },
                        [_c("span", { attrs: { _i: 55 } }, [_vm._v("新增")])],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(56, "sc"),
                          staticStyle: { width: "20vw" },
                          attrs: { _i: 56 }
                        },
                        [_c("span", { attrs: { _i: 57 } }, [_vm._v("累计")])],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(58, "sc"),
                          staticStyle: { width: "20vw" },
                          attrs: { _i: 58 }
                        },
                        [_c("span", { attrs: { _i: 59 } }, [_vm._v("治愈")])],
                        1
                      ),
                      _c(
                        "div",
                        {
                          staticClass: _vm._$g(60, "sc"),
                          staticStyle: {
                            width: "13vw",
                            "border-top-right-radius": "1.8vw",
                            "border-bottom-right-radius": "1.8vw"
                          },
                          attrs: { _i: 60 }
                        },
                        [_c("span", { attrs: { _i: 61 } }, [_vm._v("死亡")])],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "ul",
                    { attrs: { _i: 62 } },
                    [
                      _c(
                        "li",
                        { attrs: { _i: 63 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(64, "sc"),
                              attrs: { _i: 64 },
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
                                  staticClass: _vm._$g(65, "sc"),
                                  attrs: { _i: 65 }
                                },
                                [
                                  _c("span", { attrs: { _i: 66 } }, [
                                    _vm._v("美国")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(67, "sc"),
                                  attrs: { _i: 67 }
                                },
                                [
                                  _c("span", { attrs: { _i: 68 } }, [
                                    _vm._v("135K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(69, "sc"),
                                  attrs: { _i: 69 }
                                },
                                [
                                  _c("span", { attrs: { _i: 70 } }, [
                                    _vm._v("13K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(71, "sc"),
                                  attrs: { _i: 71 }
                                },
                                [
                                  _c("span", { attrs: { _i: 72 } }, [
                                    _vm._v("40K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(73, "sc"),
                                  attrs: { _i: 73 }
                                },
                                [
                                  _c("span", { attrs: { _i: 74 } }, [
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
                        { attrs: { _i: 75 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(76, "sc"),
                              attrs: { _i: 76 }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(77, "sc"),
                                  attrs: { _i: 77 }
                                },
                                [
                                  _c("span", { attrs: { _i: 78 } }, [
                                    _vm._v("美国")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(79, "sc"),
                                  attrs: { _i: 79 }
                                },
                                [
                                  _c("span", { attrs: { _i: 80 } }, [
                                    _vm._v("60K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(81, "sc"),
                                  attrs: { _i: 81 }
                                },
                                [
                                  _c("span", { attrs: { _i: 82 } }, [
                                    _vm._v("4K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(83, "sc"),
                                  attrs: { _i: 83 }
                                },
                                [
                                  _c("span", { attrs: { _i: 84 } }, [
                                    _vm._v("24K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(85, "sc"),
                                  attrs: { _i: 85 }
                                },
                                [
                                  _c("span", { attrs: { _i: 86 } }, [
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
                        { attrs: { _i: 87 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(88, "sc"),
                              attrs: { _i: 88 }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(89, "sc"),
                                  attrs: { _i: 89 }
                                },
                                [
                                  _c("span", { attrs: { _i: 90 } }, [
                                    _vm._v("美国")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(91, "sc"),
                                  attrs: { _i: 91 }
                                },
                                [
                                  _c("span", { attrs: { _i: 92 } }, [
                                    _vm._v("300K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(93, "sc"),
                                  attrs: { _i: 93 }
                                },
                                [
                                  _c("span", { attrs: { _i: 94 } }, [
                                    _vm._v("9K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(95, "sc"),
                                  attrs: { _i: 95 }
                                },
                                [
                                  _c("span", { attrs: { _i: 96 } }, [
                                    _vm._v("18K")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "div",
                                {
                                  staticClass: _vm._$g(97, "sc"),
                                  attrs: { _i: 97 }
                                },
                                [
                                  _c("span", { attrs: { _i: 98 } }, [
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
  name: "Global",
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
exports.push([module.i, "\n.mediaViewInfo {}\n:root {}\n* {\n\tmargin: 0;\n\tpadding: 0;\n}\n.container {\n\tbackground-color: rgba(255, 255, 255, 1);\n\toverflow: hidden;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;\n\tfont-smoothing: antialiased;\n\tcolor: #222;\n}\n.ID1_Class {\n\twidth: 100vw;\n\tmargin: 0 auto;\n\tposition: relative;\n\tpadding-top: 11.733vw;\n\tbackground-color: #fff;\n\t-webkit-box-shadow: 0 0 1.333vw rgba(0, 0, 0, .1);\n\t        box-shadow: 0 0 1.333vw rgba(0, 0, 0, .1);\n\tmin-height: 100%;\n\t-webkit-transform-origin: center top;\n\t        transform-origin: center top;\n}\n.Inf_county_Class {\n\topacity: 0.33;\n}\n.Inf_county {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\tposition: relative;\n\toverflow: visible;\n\twidth: 86vw;\n\theight: 15vw;\n\tmargin-left: 7vw;\n\tborder-bottom: 1px solid #e8e8e8;\n}\n.epidmc_Class {\n\topacity: 0.1;\n}\n.epidmc {\n\tposition: relative;\n\toverflow: visible;\n\twidth: 41.2vw;\n\theight: 38vw;\n\t-webkit-border-radius: 3.5vw;\n\t        border-radius: 3.5vw;\n\tmargin: 0 1.8vw;\n}\n.epidmc_add {\n\tposition: relative;\n\toverflow: visible;\n\twidth: -webkit-fit-content;\n\twidth: fit-content;\n\theight: 7vw;\n\tright: 2vw;\n\ttop: 11vw;\n\t-webkit-border-radius: 4vw;\n\t        border-radius: 4vw;\n\tfloat: right;\n}\n.epidmc_data {\n\tposition: relative;\n\tmargin-left: 6vw;\n\ttop: 8vw;\n\toverflow: visible;\n\twidth: -webkit-fit-content;\n\twidth: fit-content;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-size: 6vw;\n\tfont-weight: 700;\n}\n.epidmc_name {\n\tposition: relative;\n\tmargin-left: 6vw;\n\ttop: 4vw;\n\toverflow: visible;\n\twidth: 21vw;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-style: normal;\n\tfont-size: 4vw;\n\tcolor: rgba(80, 93, 111, 1);\n}\n.data_change {\n\tposition: relative;\n\tmargin: 0 2.8vw;\n\ttop: 0.6vw;\n\toverflow: visible;\n\twidth: -webkit-fit-content;\n\twidth: fit-content;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 4vw;\n}\n.World_Update_Class {\n\tposition: relative;\n\tmargin-left: 7vw;\n\toverflow: visible;\n\twidth: -webkit-fit-content;\n\twidth: fit-content;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 6vw;\n\tcolor: rgba(36, 42, 64, 1);\n}\n.world_list{\n\t    display: -webkit-box;\n\t    display: -webkit-flex;\n\t    display: flex;\n\t    -webkit-flex-wrap: wrap;\n\t            flex-wrap: wrap;\n\t    box-pack: center;\n\t    -webkit-box-pack: center;\n\t    -webkit-justify-content: center;\n\t            justify-content: center;\n\t    box-align: center;\n\t    -webkit-box-align: center;\n\t    -webkit-align-items: center;\n\t            align-items: center;\n\t\tpadding-top: 4vw;\n\t    padding-bottom: 2vw;\n}\n.Most_Infected_Class {\n\tposition: relative;\n\tmargin-left: 7vw;\n\toverflow: visible;\n\twidth: -webkit-fit-content;\n\twidth: fit-content;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 6vw;\n\tcolor: rgba(36, 42, 64, 1);\n}\n#search_div{\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n}\n.search_box_Class {\n\topacity: 0.5;\n}\n.search_box {\n\tposition: relative;\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\toverflow: visible;\n\twidth: 66vw;\n\theight: 14vw;\n\tmargin-left: 7vw;\n\t-webkit-border-radius: 3vw;\n\t        border-radius: 3vw;\n\tbackground-color: rgb(237, 240, 244);\n}\n.search_conditions {\n\tposition: relative;\n\toverflow: visible;\n\twidth: 14vw;\n\theight: 14vw;\n\tmargin-left: 6vw;\n\t-webkit-border-radius: 3vw;\n\t        border-radius: 3vw;\n\tbackground-color: rgb(80, 93, 111);\n}\n.Search_Country_Class {\n\topacity: 0.2;\n\tposition: relative;\n\tmargin-left: 5vw;\n\tmargin-top: 4.5vw;\n\toverflow: visible;\n\twidth: 23vw;\n\twhite-space: nowrap;\n\ttext-align: margin-left;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-size: 4vw;\n\tcolor: rgba(80, 93, 111, 1);\n}\n.filter_major_monotone_Class {\n\tposition: relative;\n\twidth: 6vw;\n\theight: 6vw;\n\tmargin-left: 3.6vw;\n\tmargin-top: 3.6vw;\n\toverflow: visible;\n}\n.conditions_icon {\n\toverflow: visible;\n\tposition: relative;\n\tmargin-left: 0;\n\twidth: 6vw;\n\theight: 6vw;\n\t-webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n\t        transform: matrix(1, 0, 0, 1, 0, 0);\n}\n.search_icon {\n\topacity: 0.2;\n\tposition: relative;\n\twidth: 5vw;\n\theight: 5vw;\n\tmargin-left: 4vw;\n\tmargin-top: 4vw;\n\toverflow: visible;\n}\n.country_name {\n\tposition: relative;\n\tpadding-top: 4.6vw;\n\toverflow: visible;\n\twidth: 25vw;\n\twhite-space: nowrap;\n\ttext-align: center;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-size: 4vw;\n\tcolor: rgb(33, 74, 118);\n}\n.newadd_data {\n\tposition: relative;\n\tpadding-top: 4.6vw;\n\toverflow: visible;\n\twidth: 20vw;\n\twhite-space: nowrap;\n\ttext-align: center;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 4vw;\n\tcolor: rgb(123, 70, 242);\n}\n.infections_data {\n\tposition: relative;\n\tpadding-top: 4.6vw;\n\toverflow: visible;\n\twidth: 20vw;\n\twhite-space: nowrap;\n\ttext-align: center;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 4vw;\n\tcolor: rgb(255, 191, 19);\n}\n.recoveries_data {\n\tposition: relative;\n\tpadding-top: 4.6vw;\n\toverflow: visible;\n\twidth: 20vw;\n\twhite-space: nowrap;\n\ttext-align: center;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 4vw;\n\tcolor: rgb(59, 183, 76);\n}\n.deaths_data {\n\tposition: relative;\n\tpadding-top: 4.6vw;\n\toverflow: visible;\n\twidth: 13vw;\n\twhite-space: nowrap;\n\ttext-align: center;\n\tfont-family: SF Pro Display;\n\tfont-style: normal;\n\tfont-weight: bold;\n\tfont-size: 4vw;\n\tcolor: rgb(246, 104, 166);\n}\n#list_id {\n\tdisplay: -webkit-box;\n\tdisplay: -webkit-flex;\n\tdisplay: flex;\n\tmargin-left: 7vw;\n\tposition: relative;\n\twidth: 86vw;\n}\n.country {\n\tposition: relative;\n\tfont-size: 3.5vw;\n\twidth: -webkit-fit-content;\n\theight: -webkit-fit-content;\n\theight: fit-content;\n\tpadding: 2vw 0;\n\tbackground-color: #eaf3f9;\n\ttext-align: center;\n\tmargin: 0 1px;\n}\n", ""]);
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
      _c(
        "div",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
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
                    [_c("span", { attrs: { _i: 5 } }, [_vm._v("国内疫情")])],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                    [
                      _c(
                        "p",
                        { staticClass: _vm._$g(7, "sc"), attrs: { _i: 7 } },
                        [
                          _vm._v("统计截至"),
                          _c("span", { attrs: { _i: 8 } }, [
                            _vm._v("2020-11-09 21:59:46")
                          ]),
                          _c(
                            "em",
                            { attrs: { _i: 9 } },
                            [
                              _vm._v("更新于"),
                              _c("span", { attrs: { _i: 10 } }, [
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
                    { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(12, "sc"), attrs: { _i: 12 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(13, "sc"),
                              attrs: { _i: 13 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 14 } }, [_vm._v("+50")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(15, "sc"),
                              attrs: { _i: 15 }
                            },
                            [_vm._v("92251")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(16, "sc"),
                              attrs: { _i: 16 }
                            },
                            [_vm._v("累计确诊")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(18, "sc"),
                              attrs: { _i: 18 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 19 } }, [_vm._v("+25")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(20, "sc"),
                              attrs: { _i: 20 }
                            },
                            [_vm._v("86901")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(21, "sc"),
                              attrs: { _i: 21 }
                            },
                            [_vm._v("累计治愈")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(23, "sc"),
                              attrs: { _i: 23 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 24 } }, [_vm._v("0")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(25, "sc"),
                              attrs: { _i: 25 }
                            },
                            [_vm._v("4748")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(26, "sc"),
                              attrs: { _i: 26 }
                            },
                            [_vm._v("累计死亡")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        { staticClass: _vm._$g(27, "sc"), attrs: { _i: 27 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(28, "sc"),
                              attrs: { _i: 28 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 29 } }, [_vm._v("+31")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(30, "sc"),
                              attrs: { _i: 30 }
                            },
                            [_vm._v("602")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(31, "sc"),
                              attrs: { _i: 31 }
                            },
                            [
                              _c("span", { attrs: { _i: 32 } }, [
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
                        { staticClass: _vm._$g(33, "sc"), attrs: { _i: 33 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(34, "sc"),
                              attrs: { _i: 34 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 35 } }, [_vm._v("+9")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(36, "sc"),
                              attrs: { _i: 36 }
                            },
                            [_vm._v("804")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(37, "sc"),
                              attrs: { _i: 37 }
                            },
                            [_vm._v("无症状感染者")]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                        [
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(39, "sc"),
                              attrs: { _i: 39 }
                            },
                            [
                              _vm._v("较上日"),
                              _c("span", { attrs: { _i: 40 } }, [_vm._v("+32")])
                            ],
                            1
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(41, "sc"),
                              attrs: { _i: 41 }
                            },
                            [_vm._v("3603")]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: _vm._$g(42, "sc"),
                              attrs: { _i: 42 }
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
            { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
            [
              _c(
                "div",
                { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                [
                  _c(
                    "span",
                    { staticClass: _vm._$g(45, "sc"), attrs: { _i: 45 } },
                    [_vm._v("各地区统计")]
                  )
                ],
                1
              ),
              _c(
                "div",
                {
                  staticClass: _vm._$g(46, "sc"),
                  attrs: { id: "listWraper", _i: 46 }
                },
                [
                  _c(
                    "table",
                    { attrs: { _i: 47 } },
                    [
                      _c(
                        "thead",
                        { attrs: { _i: 48 } },
                        [
                          _c(
                            "tr",
                            { attrs: { _i: 49 } },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(50, "sc"),
                                  attrs: { _i: 50 }
                                },
                                [
                                  _c("span", { attrs: { _i: 51 } }, [
                                    _vm._v("地区")
                                  ])
                                ],
                                1
                              ),
                              _c("th", { attrs: { _i: 52 } }, [
                                _vm._v("现有确诊")
                              ]),
                              _c("th", { attrs: { _i: 53 } }, [
                                _vm._v("累计确诊")
                              ]),
                              _c("th", { attrs: { _i: 54 } }, [_vm._v("治愈")]),
                              _c("th", { attrs: { _i: 55 } }, [_vm._v("死亡")])
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
                    { attrs: { _i: 56 } },
                    [
                      _c(
                        "tbody",
                        { attrs: { _i: 57 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(58, "sc"),
                              attrs: { _i: 58 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(59, "sc"),
                                  attrs: { _i: 59 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 60 } },
                                    [
                                      _c("span", { attrs: { _i: 61 } }, [
                                        _vm._v("香港")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 62 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 63 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(64, "sc"),
                                      attrs: { _i: 64 }
                                    },
                                    [_vm._v("127")]
                                  ),
                                  _c("p", { attrs: { _i: 65 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(66, "sc"),
                                  attrs: { _i: 66 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(67, "sc"),
                                      attrs: { _i: 67 }
                                    },
                                    [_vm._v("5380")]
                                  ),
                                  _c("p", { attrs: { _i: 68 } }, [
                                    _vm._v("较上日+10")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 69 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(70, "sc"),
                                      attrs: { _i: 70 }
                                    },
                                    [_vm._v("5146")]
                                  ),
                                  _c("p", { attrs: { _i: 71 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 72 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(73, "sc"),
                                      attrs: { _i: 73 }
                                    },
                                    [_vm._v("107")]
                                  ),
                                  _c("p", { attrs: { _i: 74 } })
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
                        { attrs: { _i: 75 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(76, "sc"),
                              attrs: { _i: 76 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(77, "sc"),
                                  attrs: { _i: 77 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 78 } },
                                    [
                                      _c("span", { attrs: { _i: 79 } }, [
                                        _vm._v("上海")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 80 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 81 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(82, "sc"),
                                      attrs: { _i: 82 }
                                    },
                                    [_vm._v("105")]
                                  ),
                                  _c("p", { attrs: { _i: 83 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(84, "sc"),
                                  attrs: { _i: 84 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(85, "sc"),
                                      attrs: { _i: 85 }
                                    },
                                    [_vm._v("1255")]
                                  ),
                                  _c("p", { attrs: { _i: 86 } }, [
                                    _vm._v("较上日+14")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 87 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(88, "sc"),
                                      attrs: { _i: 88 }
                                    },
                                    [_vm._v("1143")]
                                  ),
                                  _c("p", { attrs: { _i: 89 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 90 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(91, "sc"),
                                      attrs: { _i: 91 }
                                    },
                                    [_vm._v("7")]
                                  ),
                                  _c("p", { attrs: { _i: 92 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(93, "sc"),
                              attrs: { _i: 93 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 94 } }, [
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
                        { attrs: { _i: 95 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(96, "sc"),
                              attrs: { _i: 96 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(97, "sc"),
                                  attrs: { _i: 97 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 98 } },
                                    [
                                      _c("span", { attrs: { _i: 99 } }, [
                                        _vm._v("新疆")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 100 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 101 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(102, "sc"),
                                      attrs: { _i: 102 }
                                    },
                                    [_vm._v("59")]
                                  ),
                                  _c("p", { attrs: { _i: 103 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(104, "sc"),
                                  attrs: { _i: 104 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(105, "sc"),
                                      attrs: { _i: 105 }
                                    },
                                    [_vm._v("980")]
                                  ),
                                  _c("p", { attrs: { _i: 106 } }, [
                                    _vm._v("3天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 107 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(108, "sc"),
                                      attrs: { _i: 108 }
                                    },
                                    [_vm._v("918")]
                                  ),
                                  _c("p", { attrs: { _i: 109 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 110 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(111, "sc"),
                                      attrs: { _i: 111 }
                                    },
                                    [_vm._v("3")]
                                  ),
                                  _c("p", { attrs: { _i: 112 } })
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
                        { attrs: { _i: 113 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(114, "sc"),
                              attrs: { _i: 114 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(115, "sc"),
                                  attrs: { _i: 115 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 116 } },
                                    [
                                      _c("span", { attrs: { _i: 117 } }, [
                                        _vm._v("台湾")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 118 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 119 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(120, "sc"),
                                      attrs: { _i: 120 }
                                    },
                                    [_vm._v("45")]
                                  ),
                                  _c("p", { attrs: { _i: 121 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(122, "sc"),
                                  attrs: { _i: 122 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(123, "sc"),
                                      attrs: { _i: 123 }
                                    },
                                    [_vm._v("578")]
                                  ),
                                  _c("p", { attrs: { _i: 124 } }, [
                                    _vm._v("较上日+5")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 125 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(126, "sc"),
                                      attrs: { _i: 126 }
                                    },
                                    [_vm._v("526")]
                                  ),
                                  _c("p", { attrs: { _i: 127 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 128 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(129, "sc"),
                                      attrs: { _i: 129 }
                                    },
                                    [_vm._v("7")]
                                  ),
                                  _c("p", { attrs: { _i: 130 } })
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
                        { attrs: { _i: 131 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(132, "sc"),
                              attrs: { _i: 132 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(133, "sc"),
                                  attrs: { _i: 133 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 134 } },
                                    [
                                      _c("span", { attrs: { _i: 135 } }, [
                                        _vm._v("四川")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 136 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 137 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(138, "sc"),
                                      attrs: { _i: 138 }
                                    },
                                    [_vm._v("43")]
                                  ),
                                  _c("p", { attrs: { _i: 139 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(140, "sc"),
                                  attrs: { _i: 140 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(141, "sc"),
                                      attrs: { _i: 141 }
                                    },
                                    [_vm._v("773")]
                                  ),
                                  _c("p", { attrs: { _i: 142 } }, [
                                    _vm._v("较上日+4")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 143 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(144, "sc"),
                                      attrs: { _i: 144 }
                                    },
                                    [_vm._v("727")]
                                  ),
                                  _c("p", { attrs: { _i: 145 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 146 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(147, "sc"),
                                      attrs: { _i: 147 }
                                    },
                                    [_vm._v("3")]
                                  ),
                                  _c("p", { attrs: { _i: 148 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(149, "sc"),
                              attrs: { _i: 149 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 150 } }, [
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
                        { attrs: { _i: 151 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(152, "sc"),
                              attrs: { _i: 152 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(153, "sc"),
                                  attrs: { _i: 153 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 154 } },
                                    [
                                      _c("span", { attrs: { _i: 155 } }, [
                                        _vm._v("陕西")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 156 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 157 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(158, "sc"),
                                      attrs: { _i: 158 }
                                    },
                                    [_vm._v("41")]
                                  ),
                                  _c("p", { attrs: { _i: 159 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(160, "sc"),
                                  attrs: { _i: 160 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(161, "sc"),
                                      attrs: { _i: 161 }
                                    },
                                    [_vm._v("478")]
                                  ),
                                  _c("p", { attrs: { _i: 162 } }, [
                                    _vm._v("较上日+6")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 163 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(164, "sc"),
                                      attrs: { _i: 164 }
                                    },
                                    [_vm._v("434")]
                                  ),
                                  _c("p", { attrs: { _i: 165 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 166 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(167, "sc"),
                                      attrs: { _i: 167 }
                                    },
                                    [_vm._v("3")]
                                  ),
                                  _c("p", { attrs: { _i: 168 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(169, "sc"),
                              attrs: { _i: 169 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 170 } }, [
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
                        { attrs: { _i: 171 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(172, "sc"),
                              attrs: { _i: 172 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(173, "sc"),
                                  attrs: { _i: 173 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 174 } },
                                    [
                                      _c("span", { attrs: { _i: 175 } }, [
                                        _vm._v("广东")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 176 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 177 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(178, "sc"),
                                      attrs: { _i: 178 }
                                    },
                                    [_vm._v("37")]
                                  ),
                                  _c("p", { attrs: { _i: 179 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(180, "sc"),
                                  attrs: { _i: 180 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(181, "sc"),
                                      attrs: { _i: 181 }
                                    },
                                    [_vm._v("1949")]
                                  ),
                                  _c("p", { attrs: { _i: 182 } }, [
                                    _vm._v("较上日+4")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 183 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(184, "sc"),
                                      attrs: { _i: 184 }
                                    },
                                    [_vm._v("1904")]
                                  ),
                                  _c("p", { attrs: { _i: 185 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 186 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(187, "sc"),
                                      attrs: { _i: 187 }
                                    },
                                    [_vm._v("8")]
                                  ),
                                  _c("p", { attrs: { _i: 188 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(189, "sc"),
                              attrs: { _i: 189 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 190 } }, [
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
                        { attrs: { _i: 191 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(192, "sc"),
                              attrs: { _i: 192 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(193, "sc"),
                                  attrs: { _i: 193 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 194 } },
                                    [
                                      _c("span", { attrs: { _i: 195 } }, [
                                        _vm._v("福建")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 196 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 197 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(198, "sc"),
                                      attrs: { _i: 198 }
                                    },
                                    [_vm._v("36")]
                                  ),
                                  _c("p", { attrs: { _i: 199 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(200, "sc"),
                                  attrs: { _i: 200 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(201, "sc"),
                                      attrs: { _i: 201 }
                                    },
                                    [_vm._v("456")]
                                  ),
                                  _c("p", { attrs: { _i: 202 } }, [
                                    _vm._v("1天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 203 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(204, "sc"),
                                      attrs: { _i: 204 }
                                    },
                                    [_vm._v("419")]
                                  ),
                                  _c("p", { attrs: { _i: 205 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 206 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(207, "sc"),
                                      attrs: { _i: 207 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 208 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(209, "sc"),
                              attrs: { _i: 209 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 210 } }, [
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
                        { attrs: { _i: 211 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(212, "sc"),
                              attrs: { _i: 212 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(213, "sc"),
                                  attrs: { _i: 213 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 214 } },
                                    [
                                      _c("span", { attrs: { _i: 215 } }, [
                                        _vm._v("内蒙古")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 216 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 217 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(218, "sc"),
                                      attrs: { _i: 218 }
                                    },
                                    [_vm._v("32")]
                                  ),
                                  _c("p", { attrs: { _i: 219 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(220, "sc"),
                                  attrs: { _i: 220 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(221, "sc"),
                                      attrs: { _i: 221 }
                                    },
                                    [_vm._v("305")]
                                  ),
                                  _c("p", { attrs: { _i: 222 } }, [
                                    _vm._v("较上日+2")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 223 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(224, "sc"),
                                      attrs: { _i: 224 }
                                    },
                                    [_vm._v("272")]
                                  ),
                                  _c("p", { attrs: { _i: 225 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 226 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(227, "sc"),
                                      attrs: { _i: 227 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 228 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(229, "sc"),
                              attrs: { _i: 229 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 230 } }, [
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
                        { attrs: { _i: 231 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(232, "sc"),
                              attrs: { _i: 232 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(233, "sc"),
                                  attrs: { _i: 233 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 234 } },
                                    [
                                      _c("span", { attrs: { _i: 235 } }, [
                                        _vm._v("天津")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 236 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 237 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(238, "sc"),
                                      attrs: { _i: 238 }
                                    },
                                    [_vm._v("11")]
                                  ),
                                  _c("p", { attrs: { _i: 239 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(240, "sc"),
                                  attrs: { _i: 240 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(241, "sc"),
                                      attrs: { _i: 241 }
                                    },
                                    [_vm._v("277")]
                                  ),
                                  _c("p", { attrs: { _i: 242 } }, [
                                    _vm._v("较上日+2")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 243 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(244, "sc"),
                                      attrs: { _i: 244 }
                                    },
                                    [_vm._v("263")]
                                  ),
                                  _c("p", { attrs: { _i: 245 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 246 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(247, "sc"),
                                      attrs: { _i: 247 }
                                    },
                                    [_vm._v("3")]
                                  ),
                                  _c("p", { attrs: { _i: 248 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(249, "sc"),
                              attrs: { _i: 249 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 250 } }, [
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
                        { attrs: { _i: 251 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(252, "sc"),
                              attrs: { _i: 252 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(253, "sc"),
                                  attrs: { _i: 253 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 254 } },
                                    [
                                      _c("span", { attrs: { _i: 255 } }, [
                                        _vm._v("浙江")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 256 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 257 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(258, "sc"),
                                      attrs: { _i: 258 }
                                    },
                                    [_vm._v("10")]
                                  ),
                                  _c("p", { attrs: { _i: 259 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(260, "sc"),
                                  attrs: { _i: 260 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(261, "sc"),
                                      attrs: { _i: 261 }
                                    },
                                    [_vm._v("1290")]
                                  ),
                                  _c("p", { attrs: { _i: 262 } }, [
                                    _vm._v("1天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 263 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(264, "sc"),
                                      attrs: { _i: 264 }
                                    },
                                    [_vm._v("1279")]
                                  ),
                                  _c("p", { attrs: { _i: 265 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 266 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(267, "sc"),
                                      attrs: { _i: 267 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 268 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(269, "sc"),
                              attrs: { _i: 269 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 270 } }, [
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
                        { attrs: { _i: 271 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(272, "sc"),
                              attrs: { _i: 272 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(273, "sc"),
                                  attrs: { _i: 273 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 274 } },
                                    [
                                      _c("span", { attrs: { _i: 275 } }, [
                                        _vm._v("江苏")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 276 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 277 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(278, "sc"),
                                      attrs: { _i: 278 }
                                    },
                                    [_vm._v("9")]
                                  ),
                                  _c("p", { attrs: { _i: 279 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(280, "sc"),
                                  attrs: { _i: 280 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(281, "sc"),
                                      attrs: { _i: 281 }
                                    },
                                    [_vm._v("675")]
                                  ),
                                  _c("p", { attrs: { _i: 282 } }, [
                                    _vm._v("较上日+1")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 283 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(284, "sc"),
                                      attrs: { _i: 284 }
                                    },
                                    [_vm._v("666")]
                                  ),
                                  _c("p", { attrs: { _i: 285 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 286 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(287, "sc"),
                                      attrs: { _i: 287 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 288 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(289, "sc"),
                              attrs: { _i: 289 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 290 } }, [
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
                        { attrs: { _i: 291 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(292, "sc"),
                              attrs: { _i: 292 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(293, "sc"),
                                  attrs: { _i: 293 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 294 } },
                                    [
                                      _c("span", { attrs: { _i: 295 } }, [
                                        _vm._v("湖北")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 296 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 297 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(298, "sc"),
                                      attrs: { _i: 298 }
                                    },
                                    [_vm._v("8")]
                                  ),
                                  _c("p", { attrs: { _i: 299 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(300, "sc"),
                                  attrs: { _i: 300 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(301, "sc"),
                                      attrs: { _i: 301 }
                                    },
                                    [_vm._v("68147")]
                                  ),
                                  _c("p", { attrs: { _i: 302 } }, [
                                    _vm._v("1天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 303 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(304, "sc"),
                                      attrs: { _i: 304 }
                                    },
                                    [_vm._v("63627")]
                                  ),
                                  _c("p", { attrs: { _i: 305 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 306 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(307, "sc"),
                                      attrs: { _i: 307 }
                                    },
                                    [_vm._v("4512")]
                                  ),
                                  _c("p", { attrs: { _i: 308 } })
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
                        { attrs: { _i: 309 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(310, "sc"),
                              attrs: { _i: 310 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(311, "sc"),
                                  attrs: { _i: 311 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 312 } },
                                    [
                                      _c("span", { attrs: { _i: 313 } }, [
                                        _vm._v("北京")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 314 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 315 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(316, "sc"),
                                      attrs: { _i: 316 }
                                    },
                                    [_vm._v("7")]
                                  ),
                                  _c("p", { attrs: { _i: 317 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(318, "sc"),
                                  attrs: { _i: 318 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(319, "sc"),
                                      attrs: { _i: 319 }
                                    },
                                    [_vm._v("945")]
                                  ),
                                  _c("p", { attrs: { _i: 320 } }, [
                                    _vm._v("4天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 321 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(322, "sc"),
                                      attrs: { _i: 322 }
                                    },
                                    [_vm._v("929")]
                                  ),
                                  _c("p", { attrs: { _i: 323 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 324 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(325, "sc"),
                                      attrs: { _i: 325 }
                                    },
                                    [_vm._v("9")]
                                  ),
                                  _c("p", { attrs: { _i: 326 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(327, "sc"),
                              attrs: { _i: 327 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 328 } }, [
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
                        { attrs: { _i: 329 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(330, "sc"),
                              attrs: { _i: 330 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(331, "sc"),
                                  attrs: { _i: 331 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 332 } },
                                    [
                                      _c("span", { attrs: { _i: 333 } }, [
                                        _vm._v("河南")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 334 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 335 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(336, "sc"),
                                      attrs: { _i: 336 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 337 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(338, "sc"),
                                  attrs: { _i: 338 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(339, "sc"),
                                      attrs: { _i: 339 }
                                    },
                                    [_vm._v("1286")]
                                  ),
                                  _c("p", { attrs: { _i: 340 } }, [
                                    _vm._v("4天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 341 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(342, "sc"),
                                      attrs: { _i: 342 }
                                    },
                                    [_vm._v("1258")]
                                  ),
                                  _c("p", { attrs: { _i: 343 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 344 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(345, "sc"),
                                      attrs: { _i: 345 }
                                    },
                                    [_vm._v("22")]
                                  ),
                                  _c("p", { attrs: { _i: 346 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(347, "sc"),
                              attrs: { _i: 347 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 348 } }, [
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
                        { attrs: { _i: 349 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(350, "sc"),
                              attrs: { _i: 350 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(351, "sc"),
                                  attrs: { _i: 351 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 352 } },
                                    [
                                      _c("span", { attrs: { _i: 353 } }, [
                                        _vm._v("河北")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 354 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 355 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(356, "sc"),
                                      attrs: { _i: 356 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 357 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(358, "sc"),
                                  attrs: { _i: 358 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(359, "sc"),
                                      attrs: { _i: 359 }
                                    },
                                    [_vm._v("373")]
                                  ),
                                  _c("p", { attrs: { _i: 360 } }, [
                                    _vm._v("9天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 361 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(362, "sc"),
                                      attrs: { _i: 362 }
                                    },
                                    [_vm._v("361")]
                                  ),
                                  _c("p", { attrs: { _i: 363 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 364 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(365, "sc"),
                                      attrs: { _i: 365 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 366 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(367, "sc"),
                              attrs: { _i: 367 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 368 } }, [
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
                        { attrs: { _i: 369 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(370, "sc"),
                              attrs: { _i: 370 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(371, "sc"),
                                  attrs: { _i: 371 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 372 } },
                                    [
                                      _c("span", { attrs: { _i: 373 } }, [
                                        _vm._v("山西")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 374 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 375 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(376, "sc"),
                                      attrs: { _i: 376 }
                                    },
                                    [_vm._v("5")]
                                  ),
                                  _c("p", { attrs: { _i: 377 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(378, "sc"),
                                  attrs: { _i: 378 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(379, "sc"),
                                      attrs: { _i: 379 }
                                    },
                                    [_vm._v("218")]
                                  ),
                                  _c("p", { attrs: { _i: 380 } }, [
                                    _vm._v("较上日+1")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 381 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(382, "sc"),
                                      attrs: { _i: 382 }
                                    },
                                    [_vm._v("213")]
                                  ),
                                  _c("p", { attrs: { _i: 383 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 384 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(385, "sc"),
                                      attrs: { _i: 385 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 386 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(387, "sc"),
                              attrs: { _i: 387 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 388 } }, [
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
                        { attrs: { _i: 389 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(390, "sc"),
                              attrs: { _i: 390 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(391, "sc"),
                                  attrs: { _i: 391 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 392 } },
                                    [
                                      _c("span", { attrs: { _i: 393 } }, [
                                        _vm._v("辽宁")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 394 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 395 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(396, "sc"),
                                      attrs: { _i: 396 }
                                    },
                                    [_vm._v("4")]
                                  ),
                                  _c("p", { attrs: { _i: 397 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(398, "sc"),
                                  attrs: { _i: 398 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(399, "sc"),
                                      attrs: { _i: 399 }
                                    },
                                    [_vm._v("285")]
                                  ),
                                  _c("p", { attrs: { _i: 400 } }, [
                                    _vm._v("较上日+1")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 401 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(402, "sc"),
                                      attrs: { _i: 402 }
                                    },
                                    [_vm._v("279")]
                                  ),
                                  _c("p", { attrs: { _i: 403 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 404 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(405, "sc"),
                                      attrs: { _i: 405 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 406 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(407, "sc"),
                              attrs: { _i: 407 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 408 } }, [
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
                        { attrs: { _i: 409 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(410, "sc"),
                              attrs: { _i: 410 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(411, "sc"),
                                  attrs: { _i: 411 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 412 } },
                                    [
                                      _c("span", { attrs: { _i: 413 } }, [
                                        _vm._v("云南")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 414 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 415 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(416, "sc"),
                                      attrs: { _i: 416 }
                                    },
                                    [_vm._v("4")]
                                  ),
                                  _c("p", { attrs: { _i: 417 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(418, "sc"),
                                  attrs: { _i: 418 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(419, "sc"),
                                      attrs: { _i: 419 }
                                    },
                                    [_vm._v("214")]
                                  ),
                                  _c("p", { attrs: { _i: 420 } }, [
                                    _vm._v("3天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 421 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(422, "sc"),
                                      attrs: { _i: 422 }
                                    },
                                    [_vm._v("208")]
                                  ),
                                  _c("p", { attrs: { _i: 423 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 424 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(425, "sc"),
                                      attrs: { _i: 425 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 426 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(427, "sc"),
                              attrs: { _i: 427 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 428 } }, [
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
                        { attrs: { _i: 429 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(430, "sc"),
                              attrs: { _i: 430 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(431, "sc"),
                                  attrs: { _i: 431 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 432 } },
                                    [
                                      _c("span", { attrs: { _i: 433 } }, [
                                        _vm._v("重庆")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 434 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 435 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(436, "sc"),
                                      attrs: { _i: 436 }
                                    },
                                    [_vm._v("3")]
                                  ),
                                  _c("p", { attrs: { _i: 437 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(438, "sc"),
                                  attrs: { _i: 438 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(439, "sc"),
                                      attrs: { _i: 439 }
                                    },
                                    [_vm._v("589")]
                                  ),
                                  _c("p", { attrs: { _i: 440 } }, [
                                    _vm._v("17天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 441 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(442, "sc"),
                                      attrs: { _i: 442 }
                                    },
                                    [_vm._v("580")]
                                  ),
                                  _c("p", { attrs: { _i: 443 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 444 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(445, "sc"),
                                      attrs: { _i: 445 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 446 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(447, "sc"),
                              attrs: { _i: 447 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 448 } }, [
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
                        { attrs: { _i: 449 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(450, "sc"),
                              attrs: { _i: 450 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(451, "sc"),
                                  attrs: { _i: 451 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 452 } },
                                    [
                                      _c("span", { attrs: { _i: 453 } }, [
                                        _vm._v("甘肃")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 454 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 455 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(456, "sc"),
                                      attrs: { _i: 456 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 457 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(458, "sc"),
                                  attrs: { _i: 458 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(459, "sc"),
                                      attrs: { _i: 459 }
                                    },
                                    [_vm._v("180")]
                                  ),
                                  _c("p", { attrs: { _i: 460 } }, [
                                    _vm._v("7天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 461 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(462, "sc"),
                                      attrs: { _i: 462 }
                                    },
                                    [_vm._v("176")]
                                  ),
                                  _c("p", { attrs: { _i: 463 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 464 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(465, "sc"),
                                      attrs: { _i: 465 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 466 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(467, "sc"),
                              attrs: { _i: 467 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 468 } }, [
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
                        { attrs: { _i: 469 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(470, "sc"),
                              attrs: { _i: 470 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(471, "sc"),
                                  attrs: { _i: 471 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 472 } },
                                    [
                                      _c("span", { attrs: { _i: 473 } }, [
                                        _vm._v("山东")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 474 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 475 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(476, "sc"),
                                      attrs: { _i: 476 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 477 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(478, "sc"),
                                  attrs: { _i: 478 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(479, "sc"),
                                      attrs: { _i: 479 }
                                    },
                                    [_vm._v("848")]
                                  ),
                                  _c("p", { attrs: { _i: 480 } }, [
                                    _vm._v("6天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 481 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(482, "sc"),
                                      attrs: { _i: 482 }
                                    },
                                    [_vm._v("839")]
                                  ),
                                  _c("p", { attrs: { _i: 483 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 484 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(485, "sc"),
                                      attrs: { _i: 485 }
                                    },
                                    [_vm._v("7")]
                                  ),
                                  _c("p", { attrs: { _i: 486 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(487, "sc"),
                              attrs: { _i: 487 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 488 } }, [
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
                        { attrs: { _i: 489 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(490, "sc"),
                              attrs: { _i: 490 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(491, "sc"),
                                  attrs: { _i: 491 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 492 } },
                                    [
                                      _c("span", { attrs: { _i: 493 } }, [
                                        _vm._v("湖南")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 494 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 495 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(496, "sc"),
                                      attrs: { _i: 496 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 497 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(498, "sc"),
                                  attrs: { _i: 498 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(499, "sc"),
                                      attrs: { _i: 499 }
                                    },
                                    [_vm._v("1020")]
                                  ),
                                  _c("p", { attrs: { _i: 500 } }, [
                                    _vm._v("8天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 501 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(502, "sc"),
                                      attrs: { _i: 502 }
                                    },
                                    [_vm._v("1015")]
                                  ),
                                  _c("p", { attrs: { _i: 503 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 504 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(505, "sc"),
                                      attrs: { _i: 505 }
                                    },
                                    [_vm._v("4")]
                                  ),
                                  _c("p", { attrs: { _i: 506 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(507, "sc"),
                              attrs: { _i: 507 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 508 } }, [
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
                        { attrs: { _i: 509 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(510, "sc"),
                              attrs: { _i: 510 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(511, "sc"),
                                  attrs: { _i: 511 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 512 } },
                                    [
                                      _c("span", { attrs: { _i: 513 } }, [
                                        _vm._v("黑龙江")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 514 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 515 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(516, "sc"),
                                      attrs: { _i: 516 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 517 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(518, "sc"),
                                  attrs: { _i: 518 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(519, "sc"),
                                      attrs: { _i: 519 }
                                    },
                                    [_vm._v("949")]
                                  ),
                                  _c("p", { attrs: { _i: 520 } }, [
                                    _vm._v("13天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 521 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(522, "sc"),
                                      attrs: { _i: 522 }
                                    },
                                    [_vm._v("935")]
                                  ),
                                  _c("p", { attrs: { _i: 523 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 524 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(525, "sc"),
                                      attrs: { _i: 525 }
                                    },
                                    [_vm._v("13")]
                                  ),
                                  _c("p", { attrs: { _i: 526 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(527, "sc"),
                              attrs: { _i: 527 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 528 } }, [
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
                        { attrs: { _i: 529 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(530, "sc"),
                              attrs: { _i: 530 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(531, "sc"),
                                  attrs: { _i: 531 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 532 } },
                                    [
                                      _c("span", { attrs: { _i: 533 } }, [
                                        _vm._v("澳门")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 534 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 535 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(536, "sc"),
                                      attrs: { _i: 536 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 537 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(538, "sc"),
                                  attrs: { _i: 538 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(539, "sc"),
                                      attrs: { _i: 539 }
                                    },
                                    [_vm._v("46")]
                                  ),
                                  _c("p", { attrs: { _i: 540 } }, [
                                    _vm._v("137天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 541 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(542, "sc"),
                                      attrs: { _i: 542 }
                                    },
                                    [_vm._v("46")]
                                  ),
                                  _c("p", { attrs: { _i: 543 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 544 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(545, "sc"),
                                      attrs: { _i: 545 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 546 } })
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
                        { attrs: { _i: 547 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(548, "sc"),
                              attrs: { _i: 548 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(549, "sc"),
                                  attrs: { _i: 549 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 550 } },
                                    [
                                      _c("span", { attrs: { _i: 551 } }, [
                                        _vm._v("吉林")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 552 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 553 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(554, "sc"),
                                      attrs: { _i: 554 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 555 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(556, "sc"),
                                  attrs: { _i: 556 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(557, "sc"),
                                      attrs: { _i: 557 }
                                    },
                                    [_vm._v("157")]
                                  ),
                                  _c("p", { attrs: { _i: 558 } }, [
                                    _vm._v("105天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 559 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(560, "sc"),
                                      attrs: { _i: 560 }
                                    },
                                    [_vm._v("155")]
                                  ),
                                  _c("p", { attrs: { _i: 561 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 562 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(563, "sc"),
                                      attrs: { _i: 563 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 564 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(565, "sc"),
                              attrs: { _i: 565 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 566 } }, [
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
                        { attrs: { _i: 567 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(568, "sc"),
                              attrs: { _i: 568 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(569, "sc"),
                                  attrs: { _i: 569 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 570 } },
                                    [
                                      _c("span", { attrs: { _i: 571 } }, [
                                        _vm._v("海南")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 572 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 573 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(574, "sc"),
                                      attrs: { _i: 574 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 575 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(576, "sc"),
                                  attrs: { _i: 576 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(577, "sc"),
                                      attrs: { _i: 577 }
                                    },
                                    [_vm._v("171")]
                                  ),
                                  _c("p", { attrs: { _i: 578 } }, [
                                    _vm._v("150天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 579 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(580, "sc"),
                                      attrs: { _i: 580 }
                                    },
                                    [_vm._v("165")]
                                  ),
                                  _c("p", { attrs: { _i: 581 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 582 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(583, "sc"),
                                      attrs: { _i: 583 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 584 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(585, "sc"),
                              attrs: { _i: 585 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 586 } }, [
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
                        { attrs: { _i: 587 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(588, "sc"),
                              attrs: { _i: 588 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(589, "sc"),
                                  attrs: { _i: 589 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 590 } },
                                    [
                                      _c("span", { attrs: { _i: 591 } }, [
                                        _vm._v("宁夏")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 592 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 593 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(594, "sc"),
                                      attrs: { _i: 594 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 595 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(596, "sc"),
                                  attrs: { _i: 596 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(597, "sc"),
                                      attrs: { _i: 597 }
                                    },
                                    [_vm._v("75")]
                                  ),
                                  _c("p", { attrs: { _i: 598 } }, [
                                    _vm._v("250天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 599 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(600, "sc"),
                                      attrs: { _i: 600 }
                                    },
                                    [_vm._v("75")]
                                  ),
                                  _c("p", { attrs: { _i: 601 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 602 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(603, "sc"),
                                      attrs: { _i: 603 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 604 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(605, "sc"),
                              attrs: { _i: 605 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 606 } }, [
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
                        { attrs: { _i: 607 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(608, "sc"),
                              attrs: { _i: 608 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(609, "sc"),
                                  attrs: { _i: 609 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 610 } },
                                    [
                                      _c("span", { attrs: { _i: 611 } }, [
                                        _vm._v("安徽")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 612 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 613 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(614, "sc"),
                                      attrs: { _i: 614 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 615 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(616, "sc"),
                                  attrs: { _i: 616 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(617, "sc"),
                                      attrs: { _i: 617 }
                                    },
                                    [_vm._v("991")]
                                  ),
                                  _c("p", { attrs: { _i: 618 } }, [
                                    _vm._v("214天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 619 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(620, "sc"),
                                      attrs: { _i: 620 }
                                    },
                                    [_vm._v("985")]
                                  ),
                                  _c("p", { attrs: { _i: 621 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 622 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(623, "sc"),
                                      attrs: { _i: 623 }
                                    },
                                    [_vm._v("6")]
                                  ),
                                  _c("p", { attrs: { _i: 624 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(625, "sc"),
                              attrs: { _i: 625 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 626 } }, [
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
                        { attrs: { _i: 627 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(628, "sc"),
                              attrs: { _i: 628 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(629, "sc"),
                                  attrs: { _i: 629 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 630 } },
                                    [
                                      _c("span", { attrs: { _i: 631 } }, [
                                        _vm._v("广西")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 632 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 633 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(634, "sc"),
                                      attrs: { _i: 634 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 635 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(636, "sc"),
                                  attrs: { _i: 636 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(637, "sc"),
                                      attrs: { _i: 637 }
                                    },
                                    [_vm._v("260")]
                                  ),
                                  _c("p", { attrs: { _i: 638 } }, [
                                    _vm._v("36天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 639 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(640, "sc"),
                                      attrs: { _i: 640 }
                                    },
                                    [_vm._v("258")]
                                  ),
                                  _c("p", { attrs: { _i: 641 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 642 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(643, "sc"),
                                      attrs: { _i: 643 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 644 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(645, "sc"),
                              attrs: { _i: 645 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 646 } }, [
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
                        { attrs: { _i: 647 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(648, "sc"),
                              attrs: { _i: 648 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(649, "sc"),
                                  attrs: { _i: 649 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 650 } },
                                    [
                                      _c("span", { attrs: { _i: 651 } }, [
                                        _vm._v("西藏")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 652 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 653 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(654, "sc"),
                                      attrs: { _i: 654 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 655 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(656, "sc"),
                                  attrs: { _i: 656 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(657, "sc"),
                                      attrs: { _i: 657 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 658 } }, [
                                    _vm._v("284天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 659 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(660, "sc"),
                                      attrs: { _i: 660 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 661 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 662 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(663, "sc"),
                                      attrs: { _i: 663 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 664 } })
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
                        { attrs: { _i: 665 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(666, "sc"),
                              attrs: { _i: 666 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(667, "sc"),
                                  attrs: { _i: 667 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 668 } },
                                    [
                                      _c("span", { attrs: { _i: 669 } }, [
                                        _vm._v("江西")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 670 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 671 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(672, "sc"),
                                      attrs: { _i: 672 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 673 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(674, "sc"),
                                  attrs: { _i: 674 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(675, "sc"),
                                      attrs: { _i: 675 }
                                    },
                                    [_vm._v("935")]
                                  ),
                                  _c("p", { attrs: { _i: 676 } }, [
                                    _vm._v("81天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 677 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(678, "sc"),
                                      attrs: { _i: 678 }
                                    },
                                    [_vm._v("934")]
                                  ),
                                  _c("p", { attrs: { _i: 679 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 680 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(681, "sc"),
                                      attrs: { _i: 681 }
                                    },
                                    [_vm._v("1")]
                                  ),
                                  _c("p", { attrs: { _i: 682 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(683, "sc"),
                              attrs: { _i: 683 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 684 } }, [
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
                        { attrs: { _i: 685 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(686, "sc"),
                              attrs: { _i: 686 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(687, "sc"),
                                  attrs: { _i: 687 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 688 } },
                                    [
                                      _c("span", { attrs: { _i: 689 } }, [
                                        _vm._v("青海")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 690 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 691 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(692, "sc"),
                                      attrs: { _i: 692 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 693 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(694, "sc"),
                                  attrs: { _i: 694 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(695, "sc"),
                                      attrs: { _i: 695 }
                                    },
                                    [_vm._v("18")]
                                  ),
                                  _c("p", { attrs: { _i: 696 } }, [
                                    _vm._v("277天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 697 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(698, "sc"),
                                      attrs: { _i: 698 }
                                    },
                                    [_vm._v("18")]
                                  ),
                                  _c("p", { attrs: { _i: 699 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 700 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(701, "sc"),
                                      attrs: { _i: 701 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 702 } })
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
                        { attrs: { _i: 703 } },
                        [
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(704, "sc"),
                              attrs: { _i: 704 }
                            },
                            [
                              _c(
                                "th",
                                {
                                  staticClass: _vm._$g(705, "sc"),
                                  attrs: { _i: 705 }
                                },
                                [
                                  _c(
                                    "p",
                                    { attrs: { _i: 706 } },
                                    [
                                      _c("span", { attrs: { _i: 707 } }, [
                                        _vm._v("贵州")
                                      ])
                                    ],
                                    1
                                  ),
                                  _c("p", { attrs: { _i: 708 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 709 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(710, "sc"),
                                      attrs: { _i: 710 }
                                    },
                                    [_vm._v("0")]
                                  ),
                                  _c("p", { attrs: { _i: 711 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                {
                                  staticClass: _vm._$g(712, "sc"),
                                  attrs: { _i: 712 }
                                },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(713, "sc"),
                                      attrs: { _i: 713 }
                                    },
                                    [_vm._v("147")]
                                  ),
                                  _c("p", { attrs: { _i: 714 } }, [
                                    _vm._v("225天0新增")
                                  ])
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 715 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(716, "sc"),
                                      attrs: { _i: 716 }
                                    },
                                    [_vm._v("145")]
                                  ),
                                  _c("p", { attrs: { _i: 717 } })
                                ],
                                1
                              ),
                              _c(
                                "td",
                                { attrs: { _i: 718 } },
                                [
                                  _c(
                                    "p",
                                    {
                                      staticClass: _vm._$g(719, "sc"),
                                      attrs: { _i: 719 }
                                    },
                                    [_vm._v("2")]
                                  ),
                                  _c("p", { attrs: { _i: 720 } })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _c(
                            "tr",
                            {
                              staticClass: _vm._$g(721, "sc"),
                              attrs: { _i: 721 }
                            },
                            [
                              _c("td", { attrs: { colspan: "6", _i: 722 } }, [
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
                { staticClass: _vm._$g(723, "sc"), attrs: { _i: 723 } },
                [
                  _c("span", { attrs: { _i: 724 } }, [
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
exports.push([module.i, "\n* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n}\nul {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tlist-style: none;\n}\ndd,\n\tdl,\n\tdt,\n\th1,\n\th2,\n\th3,\n\th4,\n\tp {\n\t\tmargin: 0;\n\t\tfont-size: 1em;\n}\n.container {\n\t\tbackground-color: rgba(255, 255, 255, 1);\n\t\toverflow: hidden;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;\n\t\tfont-smoothing: antialiased;\n\t\tfont-size: 4.267vw;\n\t\tcolor: #222;\n}\n.main {\n\t\twidth: 100vw;\n\t\tmargin: 0 auto;\n\t\tposition: relative;\n\t\tpadding-top: 11.733vw;\n\t\tbackground-color: #fff;\n\t\t-webkit-box-shadow: 0 0 1.333vw rgba(0, 0, 0, .1);\n\t\t        box-shadow: 0 0 1.333vw rgba(0, 0, 0, .1);\n\t\tmin-height: 100%;\n\t\t-webkit-transform-origin: center top;\n\t\t        transform-origin: center top;\n}\n.World_Update_Class {\n\t\toverflow: visible;\n\t\twhite-space: nowrap;\n\t\ttext-align: left;\n\t\tfont-family: SF Pro Display;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 6.0vw;\n\t\tpadding: 0 5.333vw;\n\t\tcolor: rgba(36,42,64,1);\n}\n.timeNum {\n\t\tpadding: 4vw 5.333vw;\n\t\tbackground-color: #fff;\n\t\t-webkit-border-radius: 3.2vw;\n\t\t        border-radius: 3.2vw;\n\t\tline-height: 3.733vw;\n\t\tfont-size: 3.2vw;\n\t\tcolor: #737373;\n\t\tposition: relative;\n}\n.timeNum .d span {\n\t\tfont-weight: 500;\n\t\tcolor: #222;\n}\n.timeNum .d em {\n\t\tfont-style: normal;\n}\n.timeNum .d span {\n\t\tfont-weight: 500;\n\t\tcolor: #222;\n}\n.recentNumber {\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: flex;\n\t\t-webkit-flex-wrap: wrap;\n\t\t        flex-wrap: wrap;\n\t\tbox-pack: center;\n\t\t-webkit-box-pack: center;\n\t\t-webkit-justify-content: center;\n\t\t        justify-content: center;\n\t\tbox-align: center;\n\t\t-webkit-box-align: center;\n\t\t-webkit-align-items: center;\n\t\t        align-items: center;\n\t\tpadding-bottom: 6vw;\n}\n.recentNumber .icbar:first-child,.icbar:nth-child(4) {\n\t\t-webkit-border-radius: 2.0vw 0 0 0;\n\t\t        border-radius: 2.0vw 0 0 0;\n}\n.recentNumber .icbar.confirm {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#fde1cf), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #fde1cf, #fdfdfd);\n\t\tbackground-image: linear-gradient( #fde1cf, #fdfdfd);\n}\n.recentNumber .icbar {\n\t\twidth: 29.6vw;\n\t\tmargin: 0 .533vw .533vw 0;\n\t\tpadding: 1.6vw 0 3.2vw;\n\t\tposition: relative;\n\t\ttext-align: center;\n}\n.recentNumber .add {\n\t\tpadding-top: 1.6vw;\n\t\tcolor: #7c7c7c;\n\t\tfont-size: 2.667vw;\n\t\tline-height: 2.667vw;\n\t\theight: 2.667vw;\n\t\tfont-weight: 500;\n}\n.recentNumber .icbar.confirm .add em,\n\t.recentNumber .icbar.confirm .add span,\n\t.recentNumber .icbar.confirm .number {\n\t\tcolor: #be7761;\n}\n.recentNumber .icbar .number {\n\t\tfont-size: 5.867vw;\n\t\tline-height: 5.867vw;\n\t\theight: 5.867vw;\n\t\tfont-weight: 600;\n\t\tpadding-top: 1.6vw;\n}\n.recentNumber .icbar .text {\n\t\tfont-size: 3.2vw;\n\t\theight: 3.2vw;\n\t\tline-height: 3.2vw;\n\t\tcolor: #222;\n\t\tfont-weight: 500;\n\t\tmargin-top: 1.6vw;\n}\n.recentNumber .icbar.heal {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#d3f8e5), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #d3f8e5, #fdfdfd);\n\t\tbackground-image: linear-gradient( #d3f8e5, #fdfdfd);\n}\n.recentNumber .icbar.heal .add em,\n\t.recentNumber .icbar.heal .add span,\n\t.recentNumber .icbar.heal .number {\n\t\tcolor: #178b50;\n}\n.recentNumber .icbar:nth-child(3),.icbar:nth-child(6) {\n\t\t-webkit-border-radius: 0 2.0vw 0 0;\n\t\t        border-radius: 0 2.0vw 0 0;\n}\n.recentNumber .icbar:last-child,\n\t.recentNumber .icbar:nth-child(3) {\n\t\tmargin-right: 0;\n}\n.recentNumber .icbar.dead {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#ffc9ca), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #ffc9ca, #fdfdfd);\n\t\tbackground-image: linear-gradient( #ffc9ca, #fdfdfd);\n}\n.recentNumber .icbar.dead .add em,\n\t.recentNumber .icbar.dead .add span,\n\t.recentNumber .icbar.dead .number {\n\t\tcolor: #b55355;\n}\n.recentNumber .icbar.nowConfirm {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#f1e4fd), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #f1e4fd, #fdfdfd);\n\t\tbackground-image: linear-gradient( #f1e4fd, #fdfdfd);\n}\n.recentNumber .icbar.nowConfirm .add em,\n\t.recentNumber .icbar.nowConfirm .add span,\n\t.recentNumber .icbar.nowConfirm .number {\n\t\tcolor: #a65dad;\n}\n.recentNumber .icbar.nowConfirm .text span {\n\t\tposition: relative;\n\t\tmargin-right: 3.733vw;\n\t\tdisplay: inline-block;\n}\n.recentNumber .icbar.nowSevere {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#f6f8c6), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #f6f8c6, #fdfdfd);\n\t\tbackground-image: linear-gradient( #f6f8c6, #fdfdfd);\n}\n.recentNumber .icbar.nowSevere .add em,\n\t.recentNumber .icbar.nowSevere .add span,\n\t.recentNumber .icbar.nowSevere .number {\n\t\tcolor: #93994d;\n}\n.recentNumber .icbar.import {\n\t\tbackground-image: -webkit-gradient( linear, left top, left bottom, from(#cbe0fa), to(#fdfdfd));\n\t\tbackground-image: -webkit-linear-gradient( #cbe0fa, #fdfdfd);\n\t\tbackground-image: linear-gradient( #cbe0fa, #fdfdfd);\n}\n.recentNumber .icbar.import .add em,\n\t.recentNumber .icbar.import .add span,\n\t.recentNumber .icbar.import .number {\n\t\tcolor: #546fab;\n}\n.chianMapWraper {\n\t\tposition: relative;\n\t\tmargin: 0 0 2.667vw;\n}\n.chinaListWraper .up-tips{\n\t    margin-bottom: 0;\n}\n.tips-yiqing {\n\t    overflow: visible;\n\t    white-space: nowrap;\n\t    text-align: left;\n\t    font-family: SF Pro Display;\n\t    font-style: normal;\n\t    font-weight: normal;\n\t    font-size: 6.0vw;\n\t    padding: 0 5.333vw;\n\t    color: rgba(36,42,64,1);\n}\n.up-tips {\n\t    -webkit-box-sizing: border-box;\n\t            box-sizing: border-box;\n\t    padding: 0 0 0 5.333vw;\n\t    height: 4.8vw;\n\t    line-height: normal;\n\t    color: #222;\n\t    display: -webkit-box;\n\t    display: -webkit-flex;\n\t    display: flex;\n\t    -webkit-box-pack: justify;\n\t    -webkit-justify-content: space-between;\n\t            justify-content: space-between;\n\t    -webkit-box-align: center;\n\t    -webkit-align-items: center;\n\t            align-items: center;\n}\n.up-tips .title {\n\t    display: inline-block;\n\t    position: relative;\n\t\tfont-size: 6.0vw;\n}\n.chinaListWraper .listNav {\n\t    position: fixed;\n\t    left: 0;\n\t    top: 11.2vw;\n\t    right: 0;\n\t    background-color: #f5f5f5;\n\t    z-index: 8;\n}\n.chinaListWraper .listWraper {\n\t    margin: 5vw 5.333vw 0;\n}\n.chinaListWraper table {\n    border: 0;\n    padding: 0;\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n.chinaListWraper tbody {\n\t    line-height: 10.667vw;\n\t    height: 10.667vw;\n\t    font-size: 3.2vw;\n}\n.chinaListWraper thead {\n\t    border-collapse: collapse;\n\t    border-spacing: 0;\n}\n.chinaListWraper thead th {\n\t\theight: 10.667vw;\n\t\ttext-align: center;\n\t\tfont-size: 3.2vw;\n\t\tfont-weight: 400;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tborder: 0;\n\t\tborder-right: 1px solid #fff;\n\t\tbackground-color: #eaf3f9;\n}\n.chinaListWraper table td:first-child, .chinaListWraper table th:first-child {\n\t    width: 20vw;\n}\n.chinaListWraper table th:first-child {\n\t    -webkit-border-top-left-radius: 1.5vw;\n\t            border-top-left-radius: 1.5vw;\n\t\t-webkit-border-bottom-left-radius: 1.5vw;\n\t\t        border-bottom-left-radius: 1.5vw;\n}\n.chinaListWraper table th:last-child {\n\t    -webkit-border-top-right-radius: 1.5vw;\n\t            border-top-right-radius: 1.5vw;\n\t\t-webkit-border-bottom-right-radius: 1.5vw;\n\t\t        border-bottom-right-radius: 1.5vw;\n}\n.chinaListWraper tbody .areaBox {\n\t    font-size: 3.733vw;\n\t\tborder-bottom: 1px solid #f0f0f0;\n}\n.chinaListWraper tbody td p, .chinaListWraper tbody th p {\n\t    line-height: 5.333vw;\n\t    min-height: 5.333vw;\n\t    padding-top: 2.667vw;\n}\n.chinaListWraper tbody td p:last-child, .chinaListWraper tbody th p:last-child {\n\t    line-height: 3.2vw;\n\t    height: 3.2vw;\n\t    min-height: auto;\n\t    font-size: 2.667vw;\n\t    padding: 0 0 2.667vw;\n\t    color: #737373;\n}\n.chinaListWraper table td:nth-child(2), .chinaListWraper table td:nth-child(3), .chinaListWraper table th:nth-child(2), .chinaListWraper table th:nth-child(3) {\n\t    width: 15.467vw;\n}\n.chinaListWraper tbody td {\n\t    text-align: center;\n\t    position: relative;\n\t    border-right: 1px solid #fff;\n}\n.chinaListWraper tbody tr.tip td {\n\t    text-align: left;\n\t    line-height: 4.8vw;\n\t    color: #737373;\n\t    padding: 1.333vw 4.533vw;\n}\n.dataTips {\n\t    color: #737373;\n\t    font-size: 3.2vw;\n\t    height: 3.2vw;\n\t    line-height: 3.2vw;\n\t    margin: 5.333vw 0 0 5.333vw;\n\t    position: relative;\n}\n.dataTips span {\n\t    position: relative;\n\t    display: inline-block;\n\t    padding-right: 4vw;\n}\n.dataTips span:before {\n\t    content: \".\";\n\t    display: block;\n\t    font-size: 0;\n\t    line-height: 0;\n\t    position: absolute;\n\t    right: 0;\n\t    top: 50%;\n\t    -webkit-transform: translateY(-50%);\n\t            transform: translateY(-50%);\n\t    width: 3.2vw;\n\t    height: 3.2vw;\n\t    background: url(//mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/icon_qs.png);\n\t    background-size: 100% 100%;\n}\n", ""]);
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
      _c(
        "div",
        { staticClass: _vm._$g(1, "sc"), attrs: { _i: 1 } },
        [
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
                    {
                      staticClass: _vm._$g(4, "sc"),
                      attrs: { id: "marquee-tab", _i: 4 }
                    },
                    [
                      _c(
                        "ul",
                        {
                          staticClass: _vm._$g(5, "sc"),
                          attrs: { id: "marbox", _i: 5 }
                        },
                        [
                          _c(
                            "li",
                            { staticClass: _vm._$g(6, "sc"), attrs: { _i: 6 } },
                            [
                              _c("a", { attrs: { _i: 7 } }, [
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
            { staticClass: _vm._$g(8, "sc"), attrs: { _i: 8 } },
            [
              _c("p", { staticClass: _vm._$g(9, "sc"), attrs: { _i: 9 } }, [
                _vm._v("新冠肺炎预防须知")
              ]),
              _c(
                "div",
                { staticClass: _vm._$g(10, "sc"), attrs: { _i: 10 } },
                [
                  _c(
                    "div",
                    { staticClass: _vm._$g(11, "sc"), attrs: { _i: 11 } },
                    [
                      _c("img", {
                        staticClass: _vm._$g(12, "sc"),
                        attrs: {
                          src:
                            "https://puui.qpic.cn/vupload/0/1580113954413_67dj6qw9r34.png/0",
                          _i: 12
                        }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(13, "sc"), attrs: { _i: 13 } },
                        [_vm._v("个人清洁")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(14, "sc"), attrs: { _i: 14 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(15, "sc"),
                        attrs: { _i: 15 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(16, "sc"), attrs: { _i: 16 } },
                        [_vm._v("经常保持双手清洁，尤其在触摸口、鼻或眼之前。")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(17, "sc"), attrs: { _i: 17 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(18, "sc"),
                        attrs: { _i: 18 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(19, "sc"), attrs: { _i: 19 } },
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
                    { staticClass: _vm._$g(20, "sc"), attrs: { _i: 20 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(21, "sc"),
                        attrs: { _i: 21 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(22, "sc"), attrs: { _i: 22 } },
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
                    { staticClass: _vm._$g(23, "sc"), attrs: { _i: 23 } },
                    [
                      _c("img", {
                        staticClass: _vm._$g(24, "sc"),
                        attrs: {
                          src:
                            "https://puui.qpic.cn/vupload/0/1580113954413_b3dr1w759hr.png/0",
                          _i: 24
                        }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(25, "sc"), attrs: { _i: 25 } },
                        [_vm._v("尽量避免")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(26, "sc"), attrs: { _i: 26 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(27, "sc"),
                        attrs: { _i: 27 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(28, "sc"), attrs: { _i: 28 } },
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
                    { staticClass: _vm._$g(29, "sc"), attrs: { _i: 29 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(30, "sc"),
                        attrs: { _i: 30 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(31, "sc"), attrs: { _i: 31 } },
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
                    { staticClass: _vm._$g(32, "sc"), attrs: { _i: 32 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(33, "sc"),
                        attrs: { _i: 33 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(34, "sc"), attrs: { _i: 34 } },
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
                    { staticClass: _vm._$g(35, "sc"), attrs: { _i: 35 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(36, "sc"),
                        attrs: { _i: 36 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(37, "sc"), attrs: { _i: 37 } },
                        [_vm._v("切勿进食野味及切勿光顾有提供野味的餐馆。")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(38, "sc"), attrs: { _i: 38 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(39, "sc"),
                        attrs: { _i: 39 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(40, "sc"), attrs: { _i: 40 } },
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
                    { staticClass: _vm._$g(41, "sc"), attrs: { _i: 41 } },
                    [
                      _c("img", {
                        staticClass: _vm._$g(42, "sc"),
                        attrs: {
                          src:
                            "https://puui.qpic.cn/vupload/0/1580113954413_qs8jz3v8m7.png/0",
                          _i: 42
                        }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(43, "sc"), attrs: { _i: 43 } },
                        [_vm._v("尽快就诊")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: _vm._$g(44, "sc"), attrs: { _i: 44 } },
                    [
                      _c("div", {
                        staticClass: _vm._$g(45, "sc"),
                        attrs: { _i: 45 }
                      }),
                      _c(
                        "div",
                        { staticClass: _vm._$g(46, "sc"), attrs: { _i: 46 } },
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
                { staticClass: _vm._$g(47, "sc"), attrs: { _i: 47 } },
                [
                  _c(
                    "div",
                    { staticClass: _vm._$g(48, "sc"), attrs: { _i: 48 } },
                    [
                      _c(
                        "div",
                        { staticClass: _vm._$g(49, "sc"), attrs: { _i: 49 } },
                        [
                          _c("span", { attrs: { _i: 50 } }, [
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
exports.push([module.i, "\n.container {\n\tbackground-color: rgba(255, 255, 255, 1);\n\toverflow: hidden;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: PingFang SC, Helvetica Neue, Helvetica, Arial, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;\n\tfont-smoothing: antialiased;\n\tcolor: #222;\n}\n.main{\n\twidth: 100vw;\n\tmargin: 0 auto;\n\tposition: relative;\n\tpadding-top: 11.733vw;\n\tbackground-color: #fff;\n\t-webkit-box-shadow: 0 0 1.333vw rgba(0, 0, 0, .1);\n\t        box-shadow: 0 0 1.333vw rgba(0, 0, 0, .1);\n\tmin-height: 100%;\n\t-webkit-transform-origin: center top;\n\t        transform-origin: center top;\n}\n.marquee-warp,\n.marquee {\n\t-webkit-border-radius: 3.2vw;\n\t        border-radius: 3.2vw;\n\tposition: relative;\n}\n.marquee-warp {\n\tbackground-color: #fff;\n\tpadding-top: 1px;\n}\n.marquee {\n\twidth: 90.133vw;\n\theight: 10.133vw;\n\tmargin: 4vw auto 0;\n\tpadding: 0 5.333vw;\n\t-webkit-box-sizing: border-box;\n\t        box-sizing: border-box;\n\tbackground: url(https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/marquee-bg-none.png) #f8f8f8 50% no-repeat;\n\tbackground-size: 90.133vw 10.133vw;\n\tfont-size: 4vw;\n\t-webkit-border-radius: 1.6vw;\n\t        border-radius: 1.6vw;\n\tposition: relative;\n}\n.marquee .marquee-tab {\n\tposition: absolute;\n\tcolor: #737373;\n\tleft: 9.733vw;\n\ttop: 50%;\n\t-webkit-transform: translateY(-50%);\n\t        transform: translateY(-50%);\n\twidth: 76vw;\n\tfont-size: 3.2vw;\n\toverflow: hidden;\n\tfont-weight: 400;\n\theight: 4.667vw;\n}\n.marquee .set-box {\n\tposition: absolute;\n\toverflow: hidden;\n}\n.marquee .marquee-tab .li.out {\n\tbackground: none;\n}\n.marquee .marquee-tab .li {\n\theight: 4.667vw;\n\twidth: 76vw;\n\tline-height: 4.667vw;\n\toverflow: hidden;\n\tbackground: url(https://mat1.gtimg.com/news/images/inews/2020/feiyan/18/img/forward.png) 100% no-repeat;\n\tbackground-size: 1.867vw 2.667vw;\n}\n.marquee .marquee-tab .li a {\n\tcolor: #222;\n\ttext-decoration: none;\n\tdisplay: block;\n}\n.p-fanghu {\n    color: #222;\n    font-size: 4.8vw;\n    margin: 5.667vw 0 0;\n    text-align: center;\n    font-weight: 600;\n}\n.fanghu_card {\n    margin: 5.333vw 5.333vw 0;\n    -webkit-border-radius: 1.6vw;\n            border-radius: 1.6vw;\n    background: #f8f8f8;\n    padding: 1.333vw 4vw 5.333vw 5.333vw;\n}\n.fanghu_title_warp {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    padding-top: 4.267vw;\n    padding-bottom: 2.133vw;\n}\n.fanghu_icon {\n    width: 4.267vw;\n    height: 4.267vw;\n}\n.fanghu_title{\n    font-size: 3.733vw;\n    font-weight: 500;\n    margin-left: 2.667vw;\n}\n.fanghu_item {\n    margin-top: 2.133vw;\n    position: relative;\n}\n.fanghu_item_point {\n    width: 1.067vw;\n    height: 1.067vw;\n    background: #005dff;\n    -webkit-border-radius: .533vw;\n            border-radius: .533vw;\n    margin-top: 1.867vw;\n    margin-right: 2.133vw;\n    position: absolute;\n}\n.fanghu_item_text {\n    font-weight: 400;\n    font-size: 3.2vw;\n    line-height: 4.267vw;\n    color: #222;\n    margin-left: 3.2vw;\n}\n.tailWraper.pdBottom {\n    padding-bottom: 26.667vw;\n}\n.tailWraper {\n    padding-top: 5.333vw;\n    padding-bottom: 9.6vw;\n    overflow: hidden;\n}\n.tail {\n    height: 18.667vw;\n    position: relative;\n}\n.tail .open-or-download {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    top: 5.333vw;\n    width: 89.333vw;\n    height: 11.2vw;\n    background: #005dff;\n    -webkit-border-radius: 11.2vw;\n            border-radius: 11.2vw;\n    line-height: 11.2vw;\n    color: #fff;\n    font-size: 3.733vw;\n    text-align: center;\n    font-weight: 500;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.tail .open-or-download .logo {\n    width: 17.067vw;\n    height: 3.733vw;\n    margin-left: 1.6vw;\n}\n.tail .open-or-download .sharp {\n    width: 3.2vw;\n    height: 2.4vw;\n    margin-left: 2.133vw;\n    margin-top: 1px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ })
/******/ ]);