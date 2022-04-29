/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg.jpeg */ "./src/img/bg.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/GitHub.png */ "./src/img/GitHub.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ava.jpeg */ "./src/img/ava.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --blackBg: rgb(0, 0, 0, 0.65);\n}\n\nbody {\n  margin: 0;\n  font-family: 'Quicksand', sans-serif;\n  overflow-y: scroll;\n}\n\n.container {\n  width: 100%;\n  display: grid;\n  grid-template-rows: 150px auto 50px;\n  grid-template-areas:\n    \"header\"\n    \"bodyContent\"\n    \"footer\";\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-attachment: fixed;\n  background-size: cover;\n  gap: 20px;\n}\n\n.head {\n  grid-area: header;\n  background-color: var(--blackBg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.logo {\n  font-family: 'Ms Madi', cursive;\n  color: white;\n  margin-top: 10px;\n  font-size: 3.5rem;\n}\n\n.nav {\n  color: white;\n  font-size: 1.3rem;\n  display: flex;\n  gap: 10px;\n  font-family: 'Quicksand', sans-serif;\n  transition: transform 0.3s;\n}\n\n.nav>* {\n  transition: transform 0.3s;\n  padding: 10px;\n}\n\n.nav>*:hover {\n  cursor: pointer;\n  transform: translateY(-10%);\n}\n\n.nav>*.selected {\n  border-bottom: 2px white solid;\n  box-sizing: border-box;\n}\n\n\n.bodyContent {\n  grid-area: bodyContent;\n  min-height: calc(100vh - 240px);\n  display: flex;\n  justify-content: center;\n}\n\n.footer {\n  grid-area: footer;\n  background-color: var(--blackBg);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.copyText {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer a {\n  text-decoration: none;\n  color: white;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  transition: 0.3s;\n}\n\n.footer a:hover {\n  opacity: 0.5;\n  transition: 0.3s;\n  transform: rotate(360deg);\n}\n\n.contentField {\n  background-color: var(--blackBg);\n  width: min(700px);\n  min-height: 100px;\n  transition: 1s;\n  border-radius: 3px;\n}\n\n.mainPage {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  padding: 20px;\n  align-items: center;\n  height: 90%;\n}\n\n.mainImg {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: 250px 250px;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  justify-self: center;\n}\n\n.mainText {\n  color: white;\n  font-size: 1.3rem;\n}\n\n.cards {\n  padding: 20px;\n  color: white;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n\n.card {\n  background-color: var(--blackBg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 30px;\n  transition: 0.5s;\n  border-radius: 3px;\n}\n\n.card:hover {\n  background-color: rgba(135, 135, 135, 0.5);\n  transition: 0.5s;\n}\n\n.card img {\n  width: 150px;\n}\n\n.card>div {\n  font-size: 1.5rem;\n}\n\n.card>div:last-child {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.contactsData {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  padding: 20px;\n  align-items: center;\n}\n\n.contactsData img {\n  width: 90%;\n  margin-top: 10px;\n  border-radius: 3px;\n}\n\n.contactsData p {\n  margin: 5px;\n}\n\n.centerContentField {\n  display: flex;\n  align-items: center;\n}\n\n.contentField * {\n  transition: opacity 1s;\n}\n\n.contentField.hidden *{\n  opacity: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,6BAA6B;AAC/B;;AAEA;EACE,SAAS;EACT,oCAAoC;EACpC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mCAAmC;EACnC;;;YAGU;EACV,yDAAsC;EACtC,4BAA4B;EAC5B,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,oCAAoC;EACpC,0BAA0B;AAC5B;;AAEA;EACE,0BAA0B;EAC1B,aAAa;AACf;;AAEA;EACE,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,8BAA8B;EAC9B,sBAAsB;AACxB;;;AAGA;EACE,sBAAsB;EACtB,+BAA+B;EAC/B,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,gCAAgC;EAChC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,yDAAyC;EACzC,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;EACjB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,yDAAuC;EACvC,4BAA4B;EAC5B,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');\n\n:root {\n  --blackBg: rgb(0, 0, 0, 0.65);\n}\n\nbody {\n  margin: 0;\n  font-family: 'Quicksand', sans-serif;\n  overflow-y: scroll;\n}\n\n.container {\n  width: 100%;\n  display: grid;\n  grid-template-rows: 150px auto 50px;\n  grid-template-areas:\n    \"header\"\n    \"bodyContent\"\n    \"footer\";\n  background-image: url('./img/bg.jpeg');\n  background-attachment: fixed;\n  background-size: cover;\n  gap: 20px;\n}\n\n.head {\n  grid-area: header;\n  background-color: var(--blackBg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.logo {\n  font-family: 'Ms Madi', cursive;\n  color: white;\n  margin-top: 10px;\n  font-size: 3.5rem;\n}\n\n.nav {\n  color: white;\n  font-size: 1.3rem;\n  display: flex;\n  gap: 10px;\n  font-family: 'Quicksand', sans-serif;\n  transition: transform 0.3s;\n}\n\n.nav>* {\n  transition: transform 0.3s;\n  padding: 10px;\n}\n\n.nav>*:hover {\n  cursor: pointer;\n  transform: translateY(-10%);\n}\n\n.nav>*.selected {\n  border-bottom: 2px white solid;\n  box-sizing: border-box;\n}\n\n\n.bodyContent {\n  grid-area: bodyContent;\n  min-height: calc(100vh - 240px);\n  display: flex;\n  justify-content: center;\n}\n\n.footer {\n  grid-area: footer;\n  background-color: var(--blackBg);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.copyText {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer a {\n  text-decoration: none;\n  color: white;\n  background-image: url('./img/GitHub.png');\n  background-size: cover;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  transition: 0.3s;\n}\n\n.footer a:hover {\n  opacity: 0.5;\n  transition: 0.3s;\n  transform: rotate(360deg);\n}\n\n.contentField {\n  background-color: var(--blackBg);\n  width: min(700px);\n  min-height: 100px;\n  transition: 1s;\n  border-radius: 3px;\n}\n\n.mainPage {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  padding: 20px;\n  align-items: center;\n  height: 90%;\n}\n\n.mainImg {\n  background-image: url('./img/ava.jpeg');\n  background-repeat: no-repeat;\n  background-size: 250px 250px;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  justify-self: center;\n}\n\n.mainText {\n  color: white;\n  font-size: 1.3rem;\n}\n\n.cards {\n  padding: 20px;\n  color: white;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n\n.card {\n  background-color: var(--blackBg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 30px;\n  transition: 0.5s;\n  border-radius: 3px;\n}\n\n.card:hover {\n  background-color: rgba(135, 135, 135, 0.5);\n  transition: 0.5s;\n}\n\n.card img {\n  width: 150px;\n}\n\n.card>div {\n  font-size: 1.5rem;\n}\n\n.card>div:last-child {\n  text-align: center;\n  font-size: 1rem;\n}\n\n.contactsData {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  padding: 20px;\n  align-items: center;\n}\n\n.contactsData img {\n  width: 90%;\n  margin-top: 10px;\n  border-radius: 3px;\n}\n\n.contactsData p {\n  margin: 5px;\n}\n\n.centerContentField {\n  display: flex;\n  align-items: center;\n}\n\n.contentField * {\n  transition: opacity 1s;\n}\n\n.contentField.hidden *{\n  opacity: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_map_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/map.jpeg */ "./src/img/map.jpeg");


const contacts = (function() {
  const contactsData = document.createElement('div');
  contactsData.classList.add('contactsData');

  const phone = document.createElement('p');
  phone.textContent = '📱 +1 (999) 123-45-67';

  const address = document.createElement('p');
  address.textContent = '🏣 26110 Jewett Pl Calcium, New York(NY), 13616';

  const map = document.createElement('img');
  map.src = _img_map_jpeg__WEBPACK_IMPORTED_MODULE_0__;

  contactsData.appendChild(phone);
  contactsData.appendChild(address);
  contactsData.appendChild(map);

  return { contactsData };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contacts);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const home = (function() {
  const mainPage = document.createElement('div');
  mainPage.classList.add('mainPage');

  const mainImg = document.createElement('div');
  mainImg.classList.add('mainImg');
  mainPage.appendChild(mainImg);

  const mainText = document.createElement('div');
  mainText.classList.add('mainText');
  mainText.innerHTML = 'Hungry? Then why don’t you treat yourself tonight to one of our delicious takeaways – order now www.link.com<br><br>We have been making the best pizzas since 1384'
  mainPage.appendChild(mainText);

  return { mainPage };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_pizzas_salsiccia_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pizzas/salsiccia.png */ "./src/img/pizzas/salsiccia.png");
/* harmony import */ var _img_pizzas_gamberi_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/pizzas/gamberi.png */ "./src/img/pizzas/gamberi.png");
/* harmony import */ var _img_pizzas_pepe_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/pizzas/pepe.png */ "./src/img/pizzas/pepe.png");
/* harmony import */ var _img_pizzas_disgustoso_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/pizzas/disgustoso.png */ "./src/img/pizzas/disgustoso.png");
/* harmony import */ var _img_pizzas_colorato_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/pizzas/colorato.png */ "./src/img/pizzas/colorato.png");
/* harmony import */ var _img_pizzas_pomodoro_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/pizzas/pomodoro.png */ "./src/img/pizzas/pomodoro.png");
/* harmony import */ var _img_pizzas_crema_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/pizzas/crema.png */ "./src/img/pizzas/crema.png");
/* harmony import */ var _img_pizzas_carne_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/pizzas/carne.png */ "./src/img/pizzas/carne.png");









const menu = (function() {
  const pizzas = [
    {
      name: 'Salsiccia',
      ingredients: 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',
      url: _img_pizzas_salsiccia_png__WEBPACK_IMPORTED_MODULE_0__
    },
    {
      name: 'Gamberi',
      ingredients: 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
      url: _img_pizzas_gamberi_png__WEBPACK_IMPORTED_MODULE_1__
    },
    {
      name: 'Pepe',
      ingredients: 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil',
      url: _img_pizzas_pepe_png__WEBPACK_IMPORTED_MODULE_2__
    },
    {
      name: 'Disgustoso',
      ingredients: 'Tomato sauce, Bacon, Pineapple, Olives, Basil',
      url: _img_pizzas_disgustoso_png__WEBPACK_IMPORTED_MODULE_3__
    },
    {
      name: 'Colorato',
      ingredients: 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil',
      url: _img_pizzas_colorato_png__WEBPACK_IMPORTED_MODULE_4__
    },
    {
      name: 'Pomodoro',
      ingredients: 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',
      url: _img_pizzas_pomodoro_png__WEBPACK_IMPORTED_MODULE_5__
    },
    {
      name: 'Crema',
      ingredients: 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil',
      url: _img_pizzas_crema_png__WEBPACK_IMPORTED_MODULE_6__
    },
    {
      name: 'Carne',
      ingredients: 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',
      url: _img_pizzas_carne_png__WEBPACK_IMPORTED_MODULE_7__
    }
  ];

  const cards = document.createElement('div');
  cards.classList.add('cards');

  pizzas.forEach(element => {
    const card = document.createElement('div');
    card.classList.add('card');

    const pizzaImg = document.createElement('img');
    pizzaImg.src = element.url;
    pizzaImg.alt = `${element.name} icon`;
    card.appendChild(pizzaImg);

    const pizzaName = document.createElement('div');
    pizzaName.textContent = element.name;
    card.appendChild(pizzaName);

    const pizzaIngredients = document.createElement('div');
    pizzaIngredients.textContent = element.ingredients;
    card.appendChild(pizzaIngredients);

    cards.appendChild(card);
  })

  return { cards };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/img/GitHub.png":
/*!****************************!*\
  !*** ./src/img/GitHub.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5de0643bf1bbf77878ff.png";

/***/ }),

/***/ "./src/img/ava.jpeg":
/*!**************************!*\
  !*** ./src/img/ava.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94eddb1fee1ef31f640d.jpeg";

/***/ }),

/***/ "./src/img/bg.jpeg":
/*!*************************!*\
  !*** ./src/img/bg.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "73d98e1e70f7620f2d12.jpeg";

/***/ }),

/***/ "./src/img/map.jpeg":
/*!**************************!*\
  !*** ./src/img/map.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb33f0c0780c85b21359.jpeg";

/***/ }),

/***/ "./src/img/pizzas/carne.png":
/*!**********************************!*\
  !*** ./src/img/pizzas/carne.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8bf9bfdca8c5e63f3aa.png";

/***/ }),

/***/ "./src/img/pizzas/colorato.png":
/*!*************************************!*\
  !*** ./src/img/pizzas/colorato.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16638ff23489422a5d03.png";

/***/ }),

/***/ "./src/img/pizzas/crema.png":
/*!**********************************!*\
  !*** ./src/img/pizzas/crema.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7f675715f467c0f08f3.png";

/***/ }),

/***/ "./src/img/pizzas/disgustoso.png":
/*!***************************************!*\
  !*** ./src/img/pizzas/disgustoso.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34362ada84919363d765.png";

/***/ }),

/***/ "./src/img/pizzas/gamberi.png":
/*!************************************!*\
  !*** ./src/img/pizzas/gamberi.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39cec0b6bfec797325ef.png";

/***/ }),

/***/ "./src/img/pizzas/pepe.png":
/*!*********************************!*\
  !*** ./src/img/pizzas/pepe.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c8c231f8597e0da675e.png";

/***/ }),

/***/ "./src/img/pizzas/pomodoro.png":
/*!*************************************!*\
  !*** ./src/img/pizzas/pomodoro.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1896a43718b529295942.png";

/***/ }),

/***/ "./src/img/pizzas/salsiccia.png":
/*!**************************************!*\
  !*** ./src/img/pizzas/salsiccia.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f1a48a94a2ff7cfbbe3.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






(function() {
  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.classList.add('container')
  content.appendChild(container);

  const head = document.createElement('div');
  head.classList.add('head')
  container.appendChild(head);

  const bodyContent = document.createElement('div');
  bodyContent.classList.add('bodyContent')
  container.appendChild(bodyContent);

  const footer = document.createElement('div');
  footer.classList.add('footer')
  container.appendChild(footer);

  const logo = document.createElement('div');
  logo.textContent = 'Great Pizza';
  logo.classList.add('logo');
  head.appendChild(logo);

  const nav = document.createElement('div');
  nav.classList.add('nav');
  head.appendChild(nav);

  const homeBtn = document.createElement('div');
  homeBtn.classList.add('homeBtn');
  homeBtn.textContent = 'Home';
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement('div');
  menuBtn.classList.add('menuBtn');
  menuBtn.textContent = 'Menu';
  nav.appendChild(menuBtn);

  const contactBtn = document.createElement('div');
  contactBtn.textContent = 'Contact';
  nav.appendChild(contactBtn);

  const footerText = document.createElement('div');
  footerText.innerHTML = '<div class="copyText">Crafted by iamEvgen in 2022</div>';
  footer.appendChild(footerText);

  const footerLogo = document.createElement('div');
  footerLogo.innerHTML = '<a href="https://github.com/iamEvgen" target="_blank"></a>'
  footer.appendChild(footerLogo);

  const contentField = document.createElement('div');
  contentField.classList.add('contentField');
  bodyContent.appendChild(contentField);

  const homePageSelect = function() {
    homeBtn.classList.add('selected');
    menuBtn.classList.remove('selected');
    contactBtn.classList.remove('selected');
    contentField.classList.add('hidden');
    contentField.innerHTML = '';
    contentField.appendChild(_home__WEBPACK_IMPORTED_MODULE_1__["default"].mainPage);
    contentField.classList.add('centerContentField');
    setTimeout(() => {contentField.classList.remove('hidden');}, 1);
  };
  
  const menuPageSelect = function() {
    homeBtn.classList.remove('selected');
    menuBtn.classList.add('selected');
    contactBtn.classList.remove('selected');
    contentField.classList.add('hidden');
    contentField.innerHTML = '';
    contentField.classList.remove('centerContentField');
    contentField.appendChild(_menu__WEBPACK_IMPORTED_MODULE_2__["default"].cards);
    setTimeout(() => {contentField.classList.remove('hidden');}, 1);
  };

  const contactPageSelect = function() {
    homeBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');
    contactBtn.classList.add('selected');
    contentField.classList.add('hidden');
    contentField.innerHTML = '';
    contentField.classList.remove('centerContentField');
    contentField.appendChild(_contact__WEBPACK_IMPORTED_MODULE_3__["default"].contactsData);
    setTimeout(() => {contentField.classList.remove('hidden');}, 1);
  };

  homePageSelect();

  homeBtn.addEventListener('click', homePageSelect);
  menuBtn.addEventListener('click', menuPageSelect);
  contactBtn.addEventListener('click', contactPageSelect);
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVHQUFnQztBQUM1RSw0Q0FBNEMsNkdBQW1DO0FBQy9FLDRDQUE0Qyx5R0FBaUM7QUFDN0UsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxSEFBcUg7QUFDckgsZ0lBQWdJO0FBQ2hJLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsaURBQWlELGtDQUFrQyxHQUFHLFVBQVUsY0FBYyx5Q0FBeUMsdUJBQXVCLEdBQUcsZ0JBQWdCLGdCQUFnQixrQkFBa0Isd0NBQXdDLDhFQUE4RSxzRUFBc0UsaUNBQWlDLDJCQUEyQixjQUFjLEdBQUcsV0FBVyxzQkFBc0IscUNBQXFDLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsV0FBVyxvQ0FBb0MsaUJBQWlCLHFCQUFxQixzQkFBc0IsR0FBRyxVQUFVLGlCQUFpQixzQkFBc0Isa0JBQWtCLGNBQWMseUNBQXlDLCtCQUErQixHQUFHLFlBQVksK0JBQStCLGtCQUFrQixHQUFHLGtCQUFrQixvQkFBb0IsZ0NBQWdDLEdBQUcscUJBQXFCLG1DQUFtQywyQkFBMkIsR0FBRyxvQkFBb0IsMkJBQTJCLG9DQUFvQyxrQkFBa0IsNEJBQTRCLEdBQUcsYUFBYSxzQkFBc0IscUNBQXFDLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsZUFBZSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGVBQWUsMEJBQTBCLGlCQUFpQixzRUFBc0UsMkJBQTJCLGdCQUFnQixpQkFBaUIsMEJBQTBCLHFCQUFxQixHQUFHLHFCQUFxQixpQkFBaUIscUJBQXFCLDhCQUE4QixHQUFHLG1CQUFtQixxQ0FBcUMsc0JBQXNCLHNCQUFzQixtQkFBbUIsdUJBQXVCLEdBQUcsZUFBZSxrQkFBa0IsbUNBQW1DLGNBQWMsa0JBQWtCLHdCQUF3QixnQkFBZ0IsR0FBRyxjQUFjLHNFQUFzRSxpQ0FBaUMsaUNBQWlDLGlCQUFpQixrQkFBa0IsdUJBQXVCLHlCQUF5QixHQUFHLGVBQWUsaUJBQWlCLHNCQUFzQixHQUFHLFlBQVksa0JBQWtCLGlCQUFpQixrQkFBa0IsZ0VBQWdFLGNBQWMsR0FBRyxXQUFXLHFDQUFxQyxrQkFBa0IsMkJBQTJCLHdCQUF3QixjQUFjLGtCQUFrQixxQkFBcUIsdUJBQXVCLEdBQUcsaUJBQWlCLCtDQUErQyxxQkFBcUIsR0FBRyxlQUFlLGlCQUFpQixHQUFHLGVBQWUsc0JBQXNCLEdBQUcsMEJBQTBCLHVCQUF1QixvQkFBb0IsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsa0JBQWtCLHdCQUF3QixHQUFHLHVCQUF1QixlQUFlLHFCQUFxQix1QkFBdUIsR0FBRyxxQkFBcUIsZ0JBQWdCLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0IsR0FBRyxxQkFBcUIsMkJBQTJCLEdBQUcsMkJBQTJCLGVBQWUsR0FBRyxPQUFPLGdGQUFnRixZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLHNHQUFzRywwRkFBMEYsV0FBVyxrQ0FBa0MsR0FBRyxVQUFVLGNBQWMseUNBQXlDLHVCQUF1QixHQUFHLGdCQUFnQixnQkFBZ0Isa0JBQWtCLHdDQUF3Qyw4RUFBOEUsMkNBQTJDLGlDQUFpQywyQkFBMkIsY0FBYyxHQUFHLFdBQVcsc0JBQXNCLHFDQUFxQyxrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLFdBQVcsb0NBQW9DLGlCQUFpQixxQkFBcUIsc0JBQXNCLEdBQUcsVUFBVSxpQkFBaUIsc0JBQXNCLGtCQUFrQixjQUFjLHlDQUF5QywrQkFBK0IsR0FBRyxZQUFZLCtCQUErQixrQkFBa0IsR0FBRyxrQkFBa0Isb0JBQW9CLGdDQUFnQyxHQUFHLHFCQUFxQixtQ0FBbUMsMkJBQTJCLEdBQUcsb0JBQW9CLDJCQUEyQixvQ0FBb0Msa0JBQWtCLDRCQUE0QixHQUFHLGFBQWEsc0JBQXNCLHFDQUFxQyxpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsY0FBYyxHQUFHLGVBQWUsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxlQUFlLDBCQUEwQixpQkFBaUIsOENBQThDLDJCQUEyQixnQkFBZ0IsaUJBQWlCLDBCQUEwQixxQkFBcUIsR0FBRyxxQkFBcUIsaUJBQWlCLHFCQUFxQiw4QkFBOEIsR0FBRyxtQkFBbUIscUNBQXFDLHNCQUFzQixzQkFBc0IsbUJBQW1CLHVCQUF1QixHQUFHLGVBQWUsa0JBQWtCLG1DQUFtQyxjQUFjLGtCQUFrQix3QkFBd0IsZ0JBQWdCLEdBQUcsY0FBYyw0Q0FBNEMsaUNBQWlDLGlDQUFpQyxpQkFBaUIsa0JBQWtCLHVCQUF1Qix5QkFBeUIsR0FBRyxlQUFlLGlCQUFpQixzQkFBc0IsR0FBRyxZQUFZLGtCQUFrQixpQkFBaUIsa0JBQWtCLGdFQUFnRSxjQUFjLEdBQUcsV0FBVyxxQ0FBcUMsa0JBQWtCLDJCQUEyQix3QkFBd0IsY0FBYyxrQkFBa0IscUJBQXFCLHVCQUF1QixHQUFHLGlCQUFpQiwrQ0FBK0MscUJBQXFCLEdBQUcsZUFBZSxpQkFBaUIsR0FBRyxlQUFlLHNCQUFzQixHQUFHLDBCQUEwQix1QkFBdUIsb0JBQW9CLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsaUJBQWlCLGtCQUFrQix3QkFBd0IsR0FBRyx1QkFBdUIsZUFBZSxxQkFBcUIsdUJBQXVCLEdBQUcscUJBQXFCLGdCQUFnQixHQUFHLHlCQUF5QixrQkFBa0Isd0JBQXdCLEdBQUcscUJBQXFCLDJCQUEyQixHQUFHLDJCQUEyQixlQUFlLEdBQUcsbUJBQW1CO0FBQ3o4UTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2hCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvQzs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksMENBQU07O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3RCdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJtQztBQUNKO0FBQ047QUFDWTtBQUNKO0FBQ0E7QUFDTjtBQUNBOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzREFBWTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvREFBVTtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpREFBTztBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1REFBYTtBQUN4QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxREFBVztBQUN0QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxREFBVztBQUN0QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrREFBUTtBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrREFBUTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsY0FBYztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSCxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvRW5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ0s7QUFDQTtBQUNNOzs7QUFHaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQWE7QUFDMUM7QUFDQSxzQkFBc0IseUNBQXlDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtREFBVTtBQUN2QyxzQkFBc0IseUNBQXlDO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDZEQUFvQjtBQUNqRCxzQkFBc0IseUNBQXlDO0FBQy9EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovLzEwLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vMTAtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8xMC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLzEwLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzEwLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8xMC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vMTAtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8xMC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMTAtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLzEwLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLzEwLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLzEwLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovLzEwLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovLzEwLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovLzEwLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8xMC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMTAtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8xMC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8xMC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8xMC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8xMC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vMTAtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLzEwLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmcuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL0dpdEh1Yi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9hdmEuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TXMrTWFkaSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ibGFja0JnOiByZ2IoMCwgMCwgMCwgMC42NSk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggYXV0byA1MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlclxcXCJcXG4gICAgXFxcImJvZHlDb250ZW50XFxcIlxcbiAgICBcXFwiZm9vdGVyXFxcIjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmhlYWQge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0JnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6ICdNcyBNYWRpJywgY3Vyc2l2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXG59XFxuXFxuLm5hdj4qIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLm5hdj4qOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcXG59XFxuXFxuLm5hdj4qLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCB3aGl0ZSBzb2xpZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi5ib2R5Q29udGVudCB7XFxuICBncmlkLWFyZWE6IGJvZHlDb250ZW50O1xcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDI0MHB4KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQmcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmNvcHlUZXh0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5cXG4uY29udGVudEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQmcpO1xcbiAgd2lkdGg6IG1pbig3MDBweCk7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHRyYW5zaXRpb246IDFzO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubWFpblBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5tYWluSW1nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAyNTBweCAyNTBweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm1haW5UZXh0IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tCZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjUpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmNhcmQgaW1nIHtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLmNhcmQ+ZGl2IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY2FyZD5kaXY6bGFzdC1jaGlsZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jb250YWN0c0RhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3RzRGF0YSBpbWcge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5jb250YWN0c0RhdGEgcCB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLmNlbnRlckNvbnRlbnRGaWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnRGaWVsZCAqIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxufVxcblxcbi5jb250ZW50RmllbGQuaGlkZGVuICp7XFxuICBvcGFjaXR5OiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztFQUNULG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1DQUFtQztFQUNuQzs7O1lBR1U7RUFDVix5REFBc0M7RUFDdEMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsU0FBUztFQUNULG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7OztBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHlEQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5REFBdUM7RUFDdkMsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1zK01hZGkmZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tYmxhY2tCZzogcmdiKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IGF1dG8gNTBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgIFxcXCJib2R5Q29udGVudFxcXCJcXG4gICAgXFxcImZvb3RlclxcXCI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2JnLmpwZWcnKTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZCB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQmcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LWZhbWlseTogJ01zIE1hZGknLCBjdXJzaXZlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbn1cXG5cXG4ubmF2Pioge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubmF2Pio6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbn1cXG5cXG4ubmF2Piouc2VsZWN0ZWQge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHdoaXRlIHNvbGlkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLmJvZHlDb250ZW50IHtcXG4gIGdyaWQtYXJlYTogYm9keUNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjQwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2tCZyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29weVRleHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvR2l0SHViLnBuZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbn1cXG5cXG4uY29udGVudEZpZWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrQmcpO1xcbiAgd2lkdGg6IG1pbig3MDBweCk7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHRyYW5zaXRpb246IDFzO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubWFpblBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbi5tYWluSW1nIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvYXZhLmpwZWcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDI1MHB4IDI1MHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubWFpblRleHQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5jYXJkcyB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFja0JnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuNSk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uY2FyZCBpbWcge1xcbiAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uY2FyZD5kaXYge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jYXJkPmRpdjpsYXN0LWNoaWxkIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNvbnRhY3RzRGF0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdHNEYXRhIGltZyB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmNvbnRhY3RzRGF0YSBwIHtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uY2VudGVyQ29udGVudEZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudEZpZWxkICoge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG59XFxuXFxuLmNvbnRlbnRGaWVsZC5oaWRkZW4gKntcXG4gIG9wYWNpdHk6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFwSW1nIGZyb20gJy4vaW1nL21hcC5qcGVnJztcblxuY29uc3QgY29udGFjdHMgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRhY3RzRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0c0RhdGEuY2xhc3NMaXN0LmFkZCgnY29udGFjdHNEYXRhJyk7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBob25lLnRleHRDb250ZW50ID0gJ/Cfk7EgKzEgKDk5OSkgMTIzLTQ1LTY3JztcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ/Cfj6MgMjYxMTAgSmV3ZXR0IFBsIENhbGNpdW0sIE5ldyBZb3JrKE5ZKSwgMTM2MTYnO1xuXG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBtYXAuc3JjID0gbWFwSW1nO1xuXG4gIGNvbnRhY3RzRGF0YS5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIGNvbnRhY3RzRGF0YS5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgY29udGFjdHNEYXRhLmFwcGVuZENoaWxkKG1hcCk7XG5cbiAgcmV0dXJuIHsgY29udGFjdHNEYXRhIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0czsiLCJjb25zdCBob21lID0gKGZ1bmN0aW9uKCkge1xuICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdtYWluUGFnZScpO1xuXG4gIGNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkltZy5jbGFzc0xpc3QuYWRkKCdtYWluSW1nJyk7XG4gIG1haW5QYWdlLmFwcGVuZENoaWxkKG1haW5JbWcpO1xuXG4gIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5UZXh0LmNsYXNzTGlzdC5hZGQoJ21haW5UZXh0Jyk7XG4gIG1haW5UZXh0LmlubmVySFRNTCA9ICdIdW5ncnk/IFRoZW4gd2h5IGRvbuKAmXQgeW91IHRyZWF0IHlvdXJzZWxmIHRvbmlnaHQgdG8gb25lIG9mIG91ciBkZWxpY2lvdXMgdGFrZWF3YXlzIOKAkyBvcmRlciBub3cgd3d3LmxpbmsuY29tPGJyPjxicj5XZSBoYXZlIGJlZW4gbWFraW5nIHRoZSBiZXN0IHBpenphcyBzaW5jZSAxMzg0J1xuICBtYWluUGFnZS5hcHBlbmRDaGlsZChtYWluVGV4dCk7XG5cbiAgcmV0dXJuIHsgbWFpblBhZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiaW1wb3J0IHNhbHNpY2NpYUltZyBmcm9tICcuL2ltZy9waXp6YXMvc2Fsc2ljY2lhLnBuZyc7XG5pbXBvcnQgZ2FtYmVyaUltZyBmcm9tICcuL2ltZy9waXp6YXMvZ2FtYmVyaS5wbmcnO1xuaW1wb3J0IHBlcGVJbWcgZnJvbSAnLi9pbWcvcGl6emFzL3BlcGUucG5nJztcbmltcG9ydCBkaXNndXN0b3NvSW1nIGZyb20gJy4vaW1nL3Bpenphcy9kaXNndXN0b3NvLnBuZyc7XG5pbXBvcnQgY29sb3JhdG9JbWcgZnJvbSAnLi9pbWcvcGl6emFzL2NvbG9yYXRvLnBuZyc7XG5pbXBvcnQgcG9tb2Rvcm9JbWcgZnJvbSAnLi9pbWcvcGl6emFzL3BvbW9kb3JvLnBuZyc7XG5pbXBvcnQgY3JlbWFJbWcgZnJvbSAnLi9pbWcvcGl6emFzL2NyZW1hLnBuZyc7XG5pbXBvcnQgY2FybmVJbWcgZnJvbSAnLi9pbWcvcGl6emFzL2Nhcm5lLnBuZyc7XG5cbmNvbnN0IG1lbnUgPSAoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHBpenphcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU2Fsc2ljY2lhJyxcbiAgICAgIGluZ3JlZGllbnRzOiAnVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgSG9tZW1hZGUgc2F1c2FnZSwgR2FybGljLCBCYXNpbCcsXG4gICAgICB1cmw6IHNhbHNpY2NpYUltZ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0dhbWJlcmknLFxuICAgICAgaW5ncmVkaWVudHM6ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wcywgRmV0YSBjaGVlc2UsIE9saXZlcywgQmFzaWwnLFxuICAgICAgdXJsOiBnYW1iZXJpSW1nXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUGVwZScsXG4gICAgICBpbmdyZWRpZW50czogJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBDaGlsbGkgZmxha2VzLCBPbGl2ZXMsIEJhc2lsJyxcbiAgICAgIHVybDogcGVwZUltZ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Rpc2d1c3Rvc28nLFxuICAgICAgaW5ncmVkaWVudHM6ICdUb21hdG8gc2F1Y2UsIEJhY29uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWwnLFxuICAgICAgdXJsOiBkaXNndXN0b3NvSW1nXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ29sb3JhdG8nLFxuICAgICAgaW5ncmVkaWVudHM6ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgT25pb24sIFBlcHBlciwgQ2hhbXBpZ25vbnMsIEJhc2lsJyxcbiAgICAgIHVybDogY29sb3JhdG9JbWdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQb21vZG9ybycsXG4gICAgICBpbmdyZWRpZW50czogJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIE9uaW9uLCBGZXRhIGNoZWVzZSwgQ2hpbGxpJyxcbiAgICAgIHVybDogcG9tb2Rvcm9JbWdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDcmVtYScsXG4gICAgICBpbmdyZWRpZW50czogJ1doaXRlIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcHMsIFNhbG1vbiwgUGluZWFwcGxlLCBPbGl2ZXMsIEJhc2lsJyxcbiAgICAgIHVybDogY3JlbWFJbWdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDYXJuZScsXG4gICAgICBpbmdyZWRpZW50czogJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBIb21lbWFkZSBzYXVzYWdlLCBCYWNvbiwgR2FybGljLCBQZXBwZXIsIENoaWxsaScsXG4gICAgICB1cmw6IGNhcm5lSW1nXG4gICAgfVxuICBdO1xuXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRzLmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG5cbiAgcGl6emFzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgY29uc3QgcGl6emFJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwaXp6YUltZy5zcmMgPSBlbGVtZW50LnVybDtcbiAgICBwaXp6YUltZy5hbHQgPSBgJHtlbGVtZW50Lm5hbWV9IGljb25gO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocGl6emFJbWcpO1xuXG4gICAgY29uc3QgcGl6emFOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGl6emFOYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQocGl6emFOYW1lKTtcblxuICAgIGNvbnN0IHBpenphSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaXp6YUluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gZWxlbWVudC5pbmdyZWRpZW50cztcbiAgICBjYXJkLmFwcGVuZENoaWxkKHBpenphSW5ncmVkaWVudHMpO1xuXG4gICAgY2FyZHMuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIH0pXG5cbiAgcmV0dXJuIHsgY2FyZHMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZC5jbGFzc0xpc3QuYWRkKCdoZWFkJylcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWQpO1xuXG4gIGNvbnN0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvZHlDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2JvZHlDb250ZW50JylcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHlDb250ZW50KTtcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9nby50ZXh0Q29udGVudCA9ICdHcmVhdCBQaXp6YSc7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICBoZWFkLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gIGhlYWQuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnaG9tZUJ0bicpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21lbnVCdG4nKTtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyVGV4dC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImNvcHlUZXh0XCI+Q3JhZnRlZCBieSBpYW1FdmdlbiBpbiAyMDIyPC9kaXY+JztcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gIGNvbnN0IGZvb3RlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyTG9nby5pbm5lckhUTUwgPSAnPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pYW1FdmdlblwiIHRhcmdldD1cIl9ibGFua1wiPjwvYT4nXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMb2dvKTtcblxuICBjb25zdCBjb250ZW50RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRGaWVsZCcpO1xuICBib2R5Q29udGVudC5hcHBlbmRDaGlsZChjb250ZW50RmllbGQpO1xuXG4gIGNvbnN0IGhvbWVQYWdlU2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgY29udGVudEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbnRlbnRGaWVsZC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50RmllbGQuYXBwZW5kQ2hpbGQoaG9tZS5tYWluUGFnZSk7XG4gICAgY29udGVudEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2NlbnRlckNvbnRlbnRGaWVsZCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge2NvbnRlbnRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTt9LCAxKTtcbiAgfTtcbiAgXG4gIGNvbnN0IG1lbnVQYWdlU2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgY29udGVudEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbnRlbnRGaWVsZC5pbm5lckhUTUwgPSAnJztcbiAgICBjb250ZW50RmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnY2VudGVyQ29udGVudEZpZWxkJyk7XG4gICAgY29udGVudEZpZWxkLmFwcGVuZENoaWxkKG1lbnUuY2FyZHMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge2NvbnRlbnRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTt9LCAxKTtcbiAgfTtcblxuICBjb25zdCBjb250YWN0UGFnZVNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGNvbnRlbnRGaWVsZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb250ZW50RmllbGQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29udGVudEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2NlbnRlckNvbnRlbnRGaWVsZCcpO1xuICAgIGNvbnRlbnRGaWVsZC5hcHBlbmRDaGlsZChjb250YWN0LmNvbnRhY3RzRGF0YSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7Y29udGVudEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO30sIDEpO1xuICB9O1xuXG4gIGhvbWVQYWdlU2VsZWN0KCk7XG5cbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWVQYWdlU2VsZWN0KTtcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVQYWdlU2VsZWN0KTtcbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRhY3RQYWdlU2VsZWN0KTtcbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9