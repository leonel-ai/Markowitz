module.exports =

        __NEXT_REGISTER_PAGE('/thanks', function() {
          var comp = 
      webpackJsonp([3],{

/***/ "./pages/thanks.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/thanks")
  

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/thanks.js");


/***/ })

},[2])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=thanks.js.map