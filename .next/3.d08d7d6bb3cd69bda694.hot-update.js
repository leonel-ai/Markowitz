webpackHotUpdate(3,{

/***/ "./styles/index.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display:400,700\");/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css *//* Document\n   ========================================================================== *//**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */html {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}/* Sections\n   ========================================================================== *//**\n * Remove the margin in all browsers (opinionated).\n */body {\n  margin: 0;\n}/**\n * Add the correct display in IE 9-.\n */article,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */h1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}/* Grouping content\n   ========================================================================== *//**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */figcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}/**\n * Add the correct margin in IE 8.\n */figure {\n  margin: 1em 40px;\n}/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */hr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */pre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}/* Text-level semantics\n   ========================================================================== *//**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */a {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */abbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */b,\nstrong {\n  font-weight: inherit;\n}/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */b,\nstrong {\n  font-weight: bolder;\n}/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */code,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}/**\n * Add the correct font style in Android 4.3-.\n */dfn {\n  font-style: italic;\n}/**\n * Add the correct background and color in IE 9-.\n */mark {\n  background-color: #ff0;\n  color: #000;\n}/**\n * Add the correct font size in all browsers.\n */small {\n  font-size: 80%;\n}/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */sub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}sub {\n  bottom: -0.25em;\n}sup {\n  top: -0.5em;\n}/* Embedded content\n   ========================================================================== *//**\n * Add the correct display in IE 9-.\n */audio,\nvideo {\n  display: inline-block;\n}/**\n * Add the correct display in iOS 4-7.\n */audio:not([controls]) {\n  display: none;\n  height: 0;\n}/**\n * Remove the border on images inside links in IE 10-.\n */img {\n  border-style: none;\n}/**\n * Hide the overflow in IE.\n */svg:not(:root) {\n  overflow: hidden;\n}/* Forms\n   ========================================================================== *//**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */button,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */button,\ninput { /* 1 */\n  overflow: visible;\n}/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */button,\nselect { /* 1 */\n  text-transform: none;\n}/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */button,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}/**\n * Remove the inner border and padding in Firefox.\n */button::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}/**\n * Restore the focus styles unset by the previous rule.\n */button:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}/**\n * Correct the padding in Firefox.\n */fieldset {\n  padding: 0.35em 0.75em 0.625em;\n}/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */legend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */progress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}/**\n * Remove the default vertical scrollbar in IE.\n */textarea {\n  overflow: auto;\n}/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}/* Interactive\n   ========================================================================== *//*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */details, /* 1 */\nmenu {\n  display: block;\n}/*\n * Add the correct display in all browsers.\n */summary {\n  display: list-item;\n}/* Scripting\n   ========================================================================== *//**\n * Add the correct display in IE 9-.\n */canvas {\n  display: inline-block;\n}/**\n * Add the correct display in IE.\n */template {\n  display: none;\n}/* Hidden\n   ========================================================================== *//**\n * Add the correct display in IE 10-.\n */[hidden] {\n  display: none;\n}body {\n  font-family: 'Playfair Display'; }p {\n  font-size: large;\n  color: black; }.top-nav {\n  display: none; }.bg-dark {\n  background-color: #eb1c21 !important; }.container-fluid {\n  padding-left: 0;\n  padding-right: 0; }.container-fluid .row {\n    margin-right: 0;\n    margin-left: 0;\n    height: 600px;\n    color: #353535; }.container-fluid .marko-logo {\n    width: 200px; }.container-fluid .section {\n    min-height: 700px;\n    border-top: 20px solid #eb1c21; }.container-fluid .section h1, .container-fluid .section p {\n      padding-left: 15px;\n      padding-right: 15px; }.container-fluid .img-fluid.banner {\n    height: 412px; }.mobile-nav .navbar .mobnav > li {\n  font-size: 2.5em;\n  padding-right: .5em;\n  line-height: 1.25em; }.mobile-nav .navbar-dark .navbar-nav .nav-link {\n  color: white; }.mobile-nav .nav-icons {\n  height: 20px; }.mobile-nav .navbar-brand {\n  margin: 0;\n  padding-left: 15px; }#main {\n  background-image: url(\"/static/bill.jpg\");\n  background-size: cover;\n  min-height: 686px;\n  margin-bottom: 0; }#main h1, #main p {\n    color: #353535;\n    width: 212px; }#main .container {\n    position: absolute; }#main-about {\n  background-color: #ffd100;\n  min-height: 342px; }@media (min-width: 768px) {\n  .mobile-nav {\n    display: none; }\n  .top-nav {\n    display: block; }\n  .navbar .navbar-brand {\n    color: maroon; }\n  .navbar .navbar-nav > li {\n    padding-left: 20px;\n    padding-right: 20px; } }@media (min-width: 992px) {\n  .navbar-nav > li {\n    padding-left: 30px;\n    padding-right: 30px; } }\n";
})();

/***/ })

})
//# sourceMappingURL=3.d08d7d6bb3cd69bda694.hot-update.js.map