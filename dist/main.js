/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/css/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/css/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*Corpo*/\\r\\n.body{\\r\\n    margin:0;\\r\\n    padding: 0;\\r\\n \\r\\n    background-color: brown;\\r\\n}\\r\\n\\r\\n\\r\\n.titulo{\\r\\n    margin-top: 50px;\\r\\n    color:rgb(255, 255, 255);\\r\\n    font-size: 30px;\\r\\n    text-align: center;\\r\\n}\\r\\n/* Formulários*/\\r\\n\\r\\n.form-container{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width:80%;\\r\\n    background-color: rgba(168, 170, 70, 0.8);\\r\\n    margin:auto;\\r\\n}\\r\\n\\r\\nlabel{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    font-size: 20px;\\r\\n    color: white;\\r\\n    \\r\\n    \\r\\n}\\r\\n\\r\\ninput{\\r\\n    width:250px;\\r\\n    height:30px;\\r\\n    margin:10px;\\r\\n}\\r\\n\\r\\n/*Design Tabela */\\r\\n\\r\\ntable{\\r\\n    margin:auto;\\r\\n    width:80%;\\r\\n    border-collapse:collapse;\\r\\n}\\r\\n.thead-line{\\r\\n    background-color: rgb(22, 22, 22);\\r\\n    height: 50px;\\r\\n    \\r\\n}\\r\\n.tbody-line{\\r\\n    background-color: rgba(233, 233, 233,0.8); \\r\\n    \\r\\n \\r\\n}\\r\\n\\r\\n\\r\\n.th-title{    \\r\\n    color:rgb(231, 233, 232);\\r\\n    font-size: 20px;\\r\\n    font-weight: lighter;\\r\\n    text-align: left;\\r\\n    padding:5px;\\r\\n    text-overflow: ellipsis;\\r\\n    \\r\\n    \\r\\n    \\r\\n    \\r\\n}\\r\\n\\r\\n.td-content{\\r\\n    color:rgb(39, 36, 36);\\r\\n    font-size: 20px;\\r\\n    font-weight: lighter;\\r\\n    text-align: left;\\r\\n    text-overflow: ellipsis;\\r\\n    padding:8px;\\r\\n    margin:4px;\\r\\n    \\r\\n        \\r\\n}\\r\\n\\r\\n\\r\\n/* Links e botoes*/\\r\\n\\r\\n.button-link{\\r\\n    width:200px;\\r\\n    height: 25px;\\r\\n    background-color: rgb(0, 113, 128);\\r\\n    padding:8px;\\r\\n    color: white;\\r\\n    text-align: right;\\r\\n    text-decoration: none;\\r\\n    font-size: 20px;\\r\\n    \\r\\n}\\r\\n\\r\\n.button-link:hover{\\r\\n    background-color: rgb(40, 104, 112);\\r\\n \\r\\n}\\r\\n\\r\\n.btn-tab{     \\r\\n    width:150px;\\r\\n    color: black;\\r\\n    text-align: center;    \\r\\n    \\r\\n    \\r\\n}\\r\\n\\r\\n.btn-tab:hover{\\r\\n    cursor: pointer;\\r\\n    background-color:  rgb(0, 113, 128);   \\r\\n    \\r\\n} \\r\\n\\r\\n.link{\\r\\n    text-decoration: none;\\r\\n    font-size: 20px;\\r\\n    color: black;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://listalivros/./assets/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://listalivros/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./assets/css/index.css":
/*!******************************!*\
  !*** ./assets/css/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./assets/css/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://listalivros/./assets/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://listalivros/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./router.js":
/*!*******************!*\
  !*** ./router.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_componentes_views_tabela_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/componentes/views/tabela.js */ \"./src/componentes/views/tabela.js\");\n/* harmony import */ var _src_componentes_controllers_cadastro_componente_cadastro_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/componentes/controllers/cadastro/componente-cadastro.js */ \"./src/componentes/controllers/cadastro/componente-cadastro.js\");\n\r\n\r\n\r\n// const container = document.querySelector('[data-container]');\r\n\r\n// const rotas = {\r\n//     \"/\":home,\r\n//     \"/cadastro\": cadastro,\r\n// }\r\n\r\n// const navegacao = pathname => {\r\n//     window.history.pushState({},pathname,window.location.origin+pathname)\r\n//     container.innerHTML=\"\";\r\n\r\n//     const iniciarRota = rotas[window.location.pathname]\r\n\r\n//     container.appendChild(iniciarRota());\r\n// }\r\n\r\n// export{\r\n//     navegacao,\r\n// }\r\n\r\nfunction init(){\r\n    \r\n    window.addEventListener('hashchange',()=>{\r\n        container.innerHTML=\"\";\r\n        switch(window.location.hash){\r\n            \r\n            case \"\":\r\n                container.appendChild((0,_src_componentes_views_tabela_js__WEBPACK_IMPORTED_MODULE_0__.default)());                \r\n                break;\r\n                \r\n            case \"#cadastro\":\r\n                container.appendChild((0,_src_componentes_controllers_cadastro_componente_cadastro_js__WEBPACK_IMPORTED_MODULE_1__.default)());                \r\n                break;\r\n\r\n            default:\r\n                container.appendChild((0,_src_componentes_views_tabela_js__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n                break;\r\n        }\r\n\r\n    })\r\n}\r\n\r\nwindow.addEventListener(\"load\",()=>{\r\n    container.appendChild((0,_src_componentes_views_tabela_js__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n    init();\r\n})\r\n\r\n\n\n//# sourceURL=webpack://listalivros/./router.js?");

/***/ }),

/***/ "./src/componentes/api/api.js":
/*!************************************!*\
  !*** ./src/componentes/api/api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDados\": () => (/* binding */ getDados),\n/* harmony export */   \"postDados\": () => (/* binding */ postDados),\n/* harmony export */   \"excluiDados\": () => (/* binding */ excluiDados),\n/* harmony export */   \"pegaDadosEdicao\": () => (/* binding */ pegaDadosEdicao),\n/* harmony export */   \"editaDados\": () => (/* binding */ editaDados)\n/* harmony export */ });\nfunction getDados(){\r\n  \r\n    return fetch(\"http://127.0.0.1:8000/livros/\",{\r\n      method:'GET',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n        'Authorization':'Basic '+ window.btoa('Raul:iluvatar96')\r\n        },          \r\n                 \r\n    })\r\n    .then(resp=>resp.json())\r\n}\r\n\r\n\r\nfunction postDados(titulo, autor, editora, valor){\r\n  \r\n    return fetch(\"http://127.0.0.1:8000/livros/\",{\r\n        method:'POST',\r\n        headers: {\r\n        'Content-Type': 'application/json',\r\n        'Authorization':'Basic '+ window.btoa('Raul:iluvatar96')\r\n        },  \r\n        body: JSON.stringify({\r\n            titulo_livro:titulo,\r\n            autor_livro:autor,\r\n            editora_livro:editora,\r\n            valor_livro:valor\r\n        })        \r\n                 \r\n    })\r\n    .then(resp=>resp.json())\r\n}\r\n\r\nfunction excluiDados(id){\r\n  \r\n    return fetch(`http://127.0.0.1:8000/livros/${id}`,{\r\n        method:'DELETE',\r\n        headers: {\r\n        'Content-Type': 'application/json',\r\n        'Authorization':'Basic '+ window.btoa('Raul:iluvatar96')\r\n        },                              \r\n    })\r\n    \r\n}\r\n\r\nfunction pegaDadosEdicao(id){\r\n    return fetch(`http://127.0.0.1:8000/livros/${id}/`,{\r\n        method:'GET',\r\n        headers: {\r\n        'Content-Type': 'application/json',\r\n        'Authorization':'Basic '+ window.btoa('Raul:iluvatar96')\r\n        }, \r\n                          \r\n    })\r\n    .then(resp=>resp.json())\r\n    .then(res=>res)\r\n}\r\n\r\n\r\nfunction editaDados(titulo, autor, editora, valor, id){\r\n  \r\n    return fetch(`http://127.0.0.1:8000/livros/${id}/`,{\r\n        method:'PUT',\r\n        headers: {\r\n        'Content-Type': 'application/json',\r\n        'Authorization':'Basic '+ window.btoa('Raul:iluvatar96')\r\n        },  \r\n        body: JSON.stringify({\r\n            titulo_livro:titulo,\r\n            autor_livro:autor,\r\n            editora_livro:editora,\r\n            valor_livro:valor\r\n        })        \r\n                 \r\n    })\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://listalivros/./src/componentes/api/api.js?");

/***/ }),

/***/ "./src/componentes/controllers/cadastro/cadastro.js":
/*!**********************************************************!*\
  !*** ./src/componentes/controllers/cadastro/cadastro.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"novoLivro\": () => (/* binding */ novoLivro)\n/* harmony export */ });\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/api.js */ \"./src/componentes/api/api.js\");\n\r\n\r\nfunction novoLivro(form){\r\n    form.addEventListener('submit',e=>{\r\n\r\n    \r\n        e.preventDefault();\r\n    \r\n        const titulo = document.querySelector('[data-titulo]').value;\r\n        const autor = document.querySelector('[data-autor]').value;\r\n        const editora = document.querySelector('[data-editora]').value;\r\n        const valor = document.querySelector('[data-valor]').value;\r\n    \r\n        (0,_api_api_js__WEBPACK_IMPORTED_MODULE_0__.postDados)(titulo,autor,editora,valor);\r\n       \r\n    \r\n        \r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://listalivros/./src/componentes/controllers/cadastro/cadastro.js?");

/***/ }),

/***/ "./src/componentes/controllers/cadastro/componente-cadastro.js":
/*!*********************************************************************!*\
  !*** ./src/componentes/controllers/cadastro/componente-cadastro.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cadastro)\n/* harmony export */ });\n/* harmony import */ var _cadastro_cadastro_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cadastro/cadastro.js */ \"./src/componentes/controllers/cadastro/cadastro.js\");\n\r\n\r\n\r\nfunction cadastro(){\r\n   \r\n    const form = document.createElement('form');\r\n\r\n    form.innerHTML = `\r\n        <div class=\"form-container\">\r\n            <label>\r\n                Titulo: \r\n                <input type=\"text\" data-titulo placeholder=\"Titulo do livro\"/>\r\n            </label>\r\n            <label>\r\n                Autor: \r\n                <input type=\"text\" data-autor placeholder=\"Autor do livro\"/>\r\n            </label>\r\n            <label>\r\n                Editora: \r\n                <input type=\"text\" data-editora placeholder=\"Editora do livro\"/>\r\n            </label>\r\n            <label>\r\n                Valor: \r\n                <input type=\"text\" data-valor placeholder=\"Valor do livro\"/>\r\n            </label>\r\n            <input type=\"submit\" value=\"Adicionar\"/>\r\n        </div>\r\n    `\r\n    ;(0,_cadastro_cadastro_js__WEBPACK_IMPORTED_MODULE_0__.novoLivro)(form);\r\n\r\n    return form;\r\n}\r\n\r\n\r\n    \r\n\r\n\r\n \n\n//# sourceURL=webpack://listalivros/./src/componentes/controllers/cadastro/componente-cadastro.js?");

/***/ }),

/***/ "./src/componentes/views/tabela.js":
/*!*****************************************!*\
  !*** ./src/componentes/views/tabela.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api.js */ \"./src/componentes/api/api.js\");\n/* harmony import */ var _assets_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/css/index.css */ \"./assets/css/index.css\");\n\r\n\r\n\r\n\r\nfunction Home(){\r\n  \r\n  const tabela = document.createElement('table');\r\n  const thead = document.createElement('thead');  \r\n\r\n  thead.innerHTML = `\r\n  \r\n      <tr class=\"thead-line\">\r\n        <th scope=\"col\" class=\"th-title\">Livro</th>\r\n        <th scope=\"col\" class=\"th-title\">Autor</th>\r\n        <th scope=\"col\" class=\"th-title\">Editora</th>\r\n        <th scope=\"col\" class=\"th-title\">Valor</th>\r\n        <th scope=\"col\" class=\"th-title\"></th>\r\n        <th scope=\"col\" class=\"th-title\">\r\n            <a class=\"button-link\" href=\"#cadastro\">\r\n                Novo Livro\r\n            </a>\r\n        </th>\r\n      </tr>\r\n  `\r\n\r\n\r\n  ;(0,_api_api_js__WEBPACK_IMPORTED_MODULE_0__.getDados)().then(livros=>{\r\n    livros.forEach(livro=>{\r\n      const tbody = document.createElement('tbody');\r\n\r\n      tbody.innerHTML = `\r\n          <tr class=\"tbody-line\">\r\n            <td class=\"td-content\">${livro.titulo_livro}</td>\r\n            <td class=\"td-content\">${livro.autor_livro}</td>\r\n            <td class=\"td-content\">${livro.editora_livro}</td>\r\n            <td class=\"td-content\">${livro.valor_livro}</td>\r\n                    \r\n            <td class=\"td-content btn-tab\">        \r\n                  <a class=\"link\" href=\"/edita?id=${livro.id}\">\r\n                    Editar        \r\n                  </a>\r\n            </td>\r\n            <td class=\"td-content btn-tab\" onclick=\"exclui(${livro.id})\">        \r\n              Excluir        \r\n            </td>\r\n          </tr>\r\n        `\r\n        tabela.appendChild(tbody); \r\n        return tbody;\r\n    })\r\n  })\r\n\r\n  tabela.appendChild(thead);\r\n   \r\n\r\n  return tabela;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://listalivros/./src/componentes/views/tabela.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./router.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;