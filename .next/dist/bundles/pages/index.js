module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "@charset \"UTF-8\";\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n@font-face {\n  font-family: 'Bebas Neue';\n  src: url(/static/fonts/BebasNeue-Regular.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Inter UI';\n  src: url(/static/fonts/Inter-UI-Regular.ttf) format(\"truetype\"); }\nbody {\n  font-family: 'Bebas Neue', Helvetica, sans-serif !important; }\nh1 {\n  letter-spacing: 2.5px !important;\n  margin-bottom: 0;\n  padding-bottom: 12px; }\np {\n  font-size: medium;\n  color: #111517;\n  font-family: 'Inter UI', Arial, sans-serif !important;\n  font-weight: 400 !important;\n  font-size: 16px !important; }\n.period {\n  color: #ff1400; }\n.display-4 {\n  line-height: 56px; }\n.head1 {\n  padding-top: .25em; }\n.action {\n  padding-top: 40%;\n  font-size: 13px !important;\n  margin-bottom: 6px; }\nhr {\n  background-color: #eb1c21;\n  height: 2px;\n  width: 13%;\n  float: left;\n  padding: 0;\n  margin: 0; }\n.top-nav {\n  display: none; }\n.bg-dark {\n  background-color: #eb1c21 !important; }\n.jumbotron {\n  padding-top: 12px;\n  border: none; }\n.container-fluid {\n  padding-left: 0;\n  padding-right: 0;\n  border: none; }\n.container-fluid .row {\n    margin-right: 0;\n    margin-left: 0;\n    color: #111517; }\n.container-fluid .marko-logo {\n    width: 100px;\n    display: block;\n    margin: auto; }\n.container-fluid .section h1, .container-fluid .section h2, .container-fluid .section h3, .container-fluid .section h4, .container-fluid .section h5, .container-fluid .section p {\n    padding-left: 15px;\n    padding-right: 15px; }\n.container-fluid .section iframe {\n    width: 90%;\n    height: 218px;\n    margin: 0 auto; }\n.container-fluid .home-header {\n    margin: 0 auto;\n    width: 100%;\n    padding-top: 12px;\n    z-index: 1030;\n    height: 10px; }\n.container-fluid .home1 {\n    padding-left: 20px; }\n.container-fluid .home1 p {\n      margin-bottom: .5em; }\n.container-fluid .home1 .cta-services {\n      display: none; }\n.container-fluid .home2, .container-fluid .home3, .container-fluid .home4, .container-fluid .home5 {\n    padding-left: 20px;\n    padding-right: 20px; }\n.container-fluid .head2, .container-fluid .head3 {\n    line-height: 44px;\n    font-size: 44px; }\n.container-fluid .options {\n    padding-bottom: 4em;\n    padding-top: 4em; }\n.container-fluid .options .r-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: 160px;\n      margin-top: 10em; }\n.container-fluid .options .r-blob img {\n        width: 200px;\n        opacity: .9; }\n.container-fluid .options .y-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: -50px;\n      margin-top: 18em; }\n.container-fluid .options .y-blob img {\n        width: 162px;\n        opacity: .9; }\n.container-fluid .options .g-blob {\n      display: none; }\n.container-fluid .home3, .container-fluid .home4 {\n    margin-bottom: 5em; }\n.container-fluid .home3 .deco1, .container-fluid .home3 .deco2, .container-fluid .home4 .deco1, .container-fluid .home4 .deco2 {\n      display: none; }\n.container-fluid .home3 h1, .container-fluid .home4 h1 {\n      margin-top: 1.5em;\n      line-height: 44px;\n      font-size: 44px; }\n.container-fluid .home3 .num-line, .container-fluid .home4 .num-line {\n      margin-bottom: 1em;\n      margin-top: 3em;\n      height: 2px;\n      max-width: 2em;\n      background-color: #111; }\n.container-fluid .home3 .num-label, .container-fluid .home4 .num-label {\n      line-height: 1;\n      letter-spacing: .1em;\n      color: #111517;\n      font-size: 13px; }\n.container-fluid .home3 .num-value, .container-fluid .home4 .num-value {\n      font-size: 1.2em;\n      line-height: 1.5;\n      font-weight: 400px;\n      letter-spacing: .03em;\n      color: #111517; }\n.container-fluid .home3 .arrow, .container-fluid .home4 .arrow {\n      display: inline-block;\n      width: 21px;\n      margin-top: -2px; }\n.container-fluid .home3 img, .container-fluid .home4 img {\n      max-width: 100%;\n      vertical-align: middle;\n      display: inline-block;\n      border: 0; }\n.container-fluid .home3 .home-link, .container-fluid .home4 .home-link {\n      position: relative;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: inline-block;\n      margin-top: 2.5em;\n      padding-left: 3em;\n      text-decoration: none;\n      background-color: transparent;\n      -webkit-transition: color 0.4s ease-out 0s;\n      transition: color 0.4s ease-out 0s; }\n.container-fluid .home3 .home-explore, .container-fluid .home4 .home-explore {\n      display: inline-block;\n      margin-right: .2rem;\n      letter-spacing: .05em; }\n.container-fluid .legacy {\n    margin-bottom: 10em;\n    margin-top: 6em;\n    width: 100%; }\n.container-fluid .legacy .text-muted {\n      margin-left: 6em;\n      margin-top: 1em; }\n.container-fluid .legacy .text-muted::before {\n        content: \"———— \"; }\n.container-fluid .legacy .legacy-text {\n      margin-top: 4em;\n      margin-bottom: 6em; }\n.container-fluid .legacy .case-title {\n      margin-bottom: 1em; }\n.container-fluid .cta {\n    text-align: left;\n    background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.45))), url(\"/static/cta.jpg\") no-repeat center center fixed;\n    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.45)), url(\"/static/cta.jpg\") no-repeat center center fixed;\n    background-size: cover;\n    background-attachment: scroll;\n    color: white;\n    height: 622px;\n    padding-top: 23em;\n    padding-left: 15px;\n    text-shadow: 0px .25px .25px #111517; }\n.container-fluid .cta .yellow {\n      color: #ffd100; }\n.container-fluid .cta .orange {\n      color: #de561c; }\n.container-fluid .btn .btn-primary:focus {\n    outline: 0; }\n.container-fluid .img-fluid.banner {\n    height: 412px; }\n#accordion {\n  margin: auto; }\n#accordion .case-action {\n    color: white;\n    letter-spacing: .07em;\n    line-height: 3;\n    padding-left: 1.85em;\n    font-size: 13px !important; }\n#accordion .case-client {\n    color: white;\n    font-family: 'Bebas Neue';\n    font-size: 1.75em;\n    letter-spacing: .07em;\n    line-height: 1;\n    text-align: left;\n    padding: 0; }\n#accordion .card {\n    width: 100%;\n    padding: 0; }\n#accordion .red {\n    background-color: #ff1400;\n    margin-bottom: 1em; }\n#accordion .yellow {\n    background-color: #ffc300;\n    margin-bottom: 1em; }\n#accordion .blue {\n    background-color: #1b126c;\n    margin-bottom: 1em; }\n#accordion .orange {\n    background-color: #de561c; }\n#accordion .btn, #accordion .btn-link, #accordion .btn-link:focus, #accordion .btn-link:hover, #accordion .btn-link:active {\n    text-decoration: none !important;\n    color: #353535 !important;\n    width: 100%;\n    padding-left: 0;\n    padding-top: 10em; }\n#accordion .card-header {\n    border-bottom: none;\n    padding-left: 0; }\n#accordion .card-body p {\n    color: white; }\n.mobile-nav .navbar .mobnav > li {\n  font-size: 5em;\n  padding-right: .3em;\n  line-height: 1;\n  letter-spacing: .045em; }\n.mobile-nav .navbar-toggler {\n  outline: none; }\n.mobile-nav .navbar-dark .navbar-nav .nav-link {\n  color: white; }\n.mobile-nav .nav-icons {\n  height: 20px; }\n.mobile-nav .navbar-brand {\n  margin: 0;\n  padding-left: 15px; }\n#main {\n  background-image: url(\"/static/half-bill.jpg\");\n  background-size: cover;\n  background-attachment: scroll;\n  min-height: 500px;\n  margin-bottom: 0;\n  margin-top: 12%; }\n#main h1, #main p {\n    width: 184px; }\n.num-container {\n  position: relative; }\n.num-container img {\n    width: 80%;\n    display: block;\n    margin: auto; }\n.num-overlay {\n  position: absolute;\n  bottom: 38px; }\n.footer-info {\n  height: auto;\n  padding-bottom: 2.5em; }\n.footer-info #footer {\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-bottom: 1em;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    letter-spacing: .07em; }\n.footer-info #footer h5, .footer-info #footer ul {\n      font-size: 13px; }\n.footer-info #footer ul {\n      margin-top: 2em;\n      padding: 0; }\n.footer-info #footer .footer-socials {\n      list-style-type: none; }\n.footer-info #footer .footer-socials .footer-social {\n        display: inline-block;\n        margin-right: 2em;\n        line-height: 1.6; }\n.footer-info #footer .footer-socials a {\n        text-decoration: none;\n        color: inherit; }\n.footer-info #footer .footer-copyright {\n      text-decoration: none;\n      color: white !important; }\n.footer-info #footer .footer-line {\n      background-color: #eb1c21;\n      height: 2px;\n      width: 75%;\n      float: left;\n      padding: 0;\n      margin: 0; }\n/* services */\n#services-page h1, #services-page p {\n  margin-left: 8px;\n  margin-right: 8px; }\n#services-page #services {\n  background-color: white;\n  height: 70px;\n  padding-top: 12px; }\n#services-page .services-banner {\n  margin-top: 8em;\n  margin-bottom: 10em;\n  position: relative;\n  margin-left: 2em;\n  margin-right: 2em; }\n#services-page .services-banner .cta-services {\n    display: none; }\n#services-page .services-banner img {\n    display: block;\n    margin: 0 auto;\n    height: auto;\n    max-width: 100%; }\n#services-page .services-banner .banner-line {\n    width: 25%;\n    display: inline-block;\n    height: 1px;\n    min-width: 5rem;\n    margin-right: 1em;\n    margin-bottom: .375em;\n    margin-left: 1em;\n    background-color: rgba(27, 27, 28, 0.13); }\n#services-page .services-banner .banner-overlay {\n    position: absolute;\n    bottom: 388px; }\n#services-page .services-banner .banner-overlay h1 {\n      font-size: 24px;\n      line-height: 26px;\n      letter-spacing: .035em; }\n#services-page .services-banner .banner-subtitle {\n    position: absolute;\n    left: 25%;\n    bottom: 37%; }\n#services-page .services-banner .action {\n    padding-top: 50%;\n    font-size: 13px !important;\n    text-align: center;\n    margin-bottom: 6px; }\n#services-page .services-banner hr {\n    margin: 0 auto;\n    padding: auto;\n    float: inherit; }\n#services-page .services-detail {\n  margin-bottom: 3em; }\n#services-page .services-detail a {\n    text-decoration: none;\n    color: #252b7e; }\n#services-page .services-detail .deco1 {\n    display: none; }\n#services-page .services-detail .txt-deco {\n    position: relative;\n    display: block; }\n#services-page .services-detail .txt-deco .deco-line {\n      position: absolute;\n      left: 2em;\n      top: .28em;\n      display: block;\n      width: 3em;\n      height: 2px;\n      background-color: #111517; }\n#services-page .services-detail .txt-deco .deco-label {\n      padding-left: 6em;\n      margin-bottom: 2em;\n      line-height: 1; }\n#services-page .services-detail p {\n    line-height: 1.6;\n    margin-bottom: 1.75em; }\n#services-page .services-detail .o-blob {\n    display: block;\n    position: absolute;\n    z-index: -2;\n    left: 160px;\n    margin-top: 16em; }\n#services-page .services-detail .o-blob img {\n      width: 210px;\n      opacity: .9; }\n#services-page .services-detail .y-blob {\n    display: block;\n    position: absolute;\n    z-index: -2;\n    left: -80px;\n    margin-top: -6em; }\n#services-page .services-detail .y-blob img {\n      width: 200px;\n      opacity: .85; }\n#services-page .services-detail h4 {\n    font-size: 28px;\n    line-height: 36px; }\n#services-page .services-detail ul, #services-page .services-detail li {\n    list-style: none;\n    font-size: 14px;\n    line-height: 22px;\n    font-family: 'Inter UI'; }\n#services-page .questions-grid {\n  margin-bottom: 3em; }\n#services-page .questions-grid a {\n    text-decoration: none;\n    color: #252b7e; }\n#services-page .questions-grid #faq ul, #services-page .questions-grid #faq li {\n    list-style: none;\n    padding-left: .25em;\n    letter-spacing: .03em; }\n#services-page .questions-grid #faq h6 {\n    margin-top: 2.5em;\n    font-size: 12px;\n    letter-spacing: .03em; }\n#services-page .questions-grid #faq .card, #services-page .questions-grid #faq .card-header {\n    background-color: transparent !important;\n    padding: 3em; }\n#services-page .questions-grid #faq .card-body p {\n    font-size: 14px !important;\n    line-height: 22px; }\n#services-page .questions-grid #faq .btn, #services-page .questions-grid #faq .btn-link {\n    color: #111517;\n    text-decoration: none;\n    padding: 0;\n    max-width: 16rem;\n    text-align: left;\n    white-space: normal; }\n#services-page .questions-grid #faq .btn:hover, #services-page .questions-grid #faq .btn:active, #services-page .questions-grid #faq .btn:visited, #services-page .questions-grid #faq .btn-link:hover, #services-page .questions-grid #faq .btn-link:active, #services-page .questions-grid #faq .btn-link:visited {\n      text-decoration: none; }\n#services-page .questions-grid #faq .faq {\n    margin: 0 0 5%;\n    padding: 0;\n    border: 2px solid #f6f6f6; }\n#services-page .questions-grid #faq .faq .case-action {\n      margin-bottom: 2em;\n      line-height: 1.6;\n      font-size: 12px;\n      font-family: 'Inter UI'; }\n#services-page .questions-grid #faq .faq .case-client {\n      max-width: 16rem;\n      margin-bottom: 0;\n      letter-spacing: .045rem;\n      font-family: 'Bebas Neue'; }\n#services-page .questions-grid #faq .faq-line {\n    width: 2em;\n    height: 1px;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    background-color: #f6f6f6;\n    color: #f6f6f6; }\n#services-page .resources-detail {\n  margin-top: 0;\n  padding-top: 0;\n  margin-bottom: 8em; }\n#services-page .resources-detail a {\n    text-decoration: none;\n    color: #252b7e; }\n#services-page .resources-detail .g-blob, #services-page .resources-detail .b-blob {\n    display: none; }\n#services-page .resources-detail .res-info {\n    margin-top: 2em;\n    margin-bottom: 3em;\n    margin-left: 40px;\n    margin-right: 40px; }\n#services-page .resources-detail .res-info .num-line {\n      margin-bottom: 1em;\n      margin-top: 0;\n      height: 2px;\n      max-width: 1em;\n      background-color: #111; }\n#services-page .resources-detail .res-info .num-label {\n      line-height: 1;\n      letter-spacing: .1em;\n      color: #111517;\n      font-size: 13px; }\n#services-page .resources-detail .txt-deco {\n    position: relative;\n    display: block;\n    margin-top: 1em; }\n#services-page .resources-detail .txt-deco .deco-line {\n      position: absolute;\n      left: 3em;\n      top: .28em;\n      display: block;\n      width: 3em;\n      height: 2px;\n      background-color: #111517; }\n#services-page .resources-detail .txt-deco .deco-label {\n      padding-left: 7em;\n      margin-bottom: 6em;\n      line-height: 1; }\n#services-page .resources-detail h3 {\n    padding-left: 40px;\n    padding-right: 40px; }\n#services-page #resources {\n  margin: auto;\n  width: 100%; }\n#services-page #resources .res-action {\n    color: white;\n    letter-spacing: .07em;\n    line-height: 3;\n    padding-left: 1.85em;\n    font-size: 13px !important; }\n#services-page #resources .res-header {\n    color: white;\n    font-family: 'Bebas Neue';\n    font-size: 1.75em;\n    letter-spacing: .07em;\n    line-height: 1;\n    text-align: left;\n    padding: 0; }\n#services-page #resources .card {\n    width: 100%;\n    padding: 0; }\n#services-page #resources .red {\n    background-color: #ff1400;\n    margin-bottom: 1em; }\n#services-page #resources .yellow {\n    background-color: #ffc300;\n    margin-bottom: 1em; }\n#services-page #resources .blue {\n    background-color: #1b126c;\n    margin-bottom: 1em; }\n#services-page #resources .btn, #services-page #resources .btn-link, #services-page #resources .btn-link:focus, #services-page #resources .btn-link:hover, #services-page #resources .btn-link:active {\n    text-decoration: none !important;\n    color: #353535 !important;\n    width: 100%;\n    padding-left: 0;\n    padding-top: 10em; }\n#services-page #resources .card-header {\n    border-bottom: none;\n    padding-left: 0; }\n#services-page #resources .card-body p, #services-page #resources a {\n    color: white;\n    line-height: .75; }\n#contact-page {\n  overflow: hidden; }\n#contact-page h1, #contact-page p {\n    margin-left: 8px;\n    margin-right: 8px; }\n#contact-page #contact {\n    background-color: white;\n    height: 70px;\n    padding-top: 12px; }\n#contact-page .contact-banner {\n    margin-top: 4em;\n    margin-bottom: 1.5em;\n    position: relative;\n    margin-left: 2em;\n    margin-right: 2em; }\n#contact-page .contact-banner img {\n      display: block;\n      margin: 0 auto;\n      height: auto;\n      max-width: 100%; }\n#contact-page .contact-banner .banner-overlay {\n      display: none; }\n#contact-page .contact-main a {\n    text-decoration: none;\n    color: #252b7e; }\n#contact-page .contact-main .contact-clio-desktop {\n    display: none; }\n#contact-page .contact-main .contact-form {\n    padding: 0 2em;\n    margin: 0 auto;\n    line-height: 2; }\n#contact-page .contact-main .contact-form form textarea, #contact-page .contact-main .contact-form form select, #contact-page .contact-main .contact-form form input, #contact-page .contact-main .contact-form form button {\n      outline: none; }\n#contact-page .contact-main .contact-form form label {\n      display: block;\n      margin-bottom: 30px;\n      padding: 0; }\n#contact-page .contact-main .contact-form form input, #contact-page .contact-main .contact-form form textarea {\n      font-family: 'Inter UI';\n      width: 100%;\n      border: 0;\n      border-bottom: 2px solid #111517;\n      padding: 5.5px;\n      font-size: 14px;\n      line-height: 18px;\n      letter-spacing: .01em; }\n#contact-page .contact-main .contact-form form textarea {\n      border: 2px solid #111517;\n      margin-top: 5px; }\n#contact-page .contact-main .contact-form form input[type=radio] {\n      width: initial; }\n#contact-page .contact-main .contact-form form .r-label {\n      display: inline-block;\n      vertical-align: middle;\n      margin: 0;\n      font-size: 16px;\n      letter-spacing: .03em; }\n#contact-page .contact-main .contact-form form .r-divide {\n      display: inline-block;\n      margin-right: 4em; }\n#contact-page .contact-main .contact-form form .f-select {\n      margin-bottom: 1em;\n      text-align: center; }\n#contact-page .contact-main .contact-form form .f-label {\n      font-size: 14px;\n      letter-spacing: .03em;\n      vertical-align: baseline;\n      margin-bottom: 5px; }\n#contact-page .contact-main .contact-form form .f-date {\n      font-size: 14px;\n      padding-left: 22px;\n      text-align: center; }\n#contact-page .contact-main .contact-form form .f-support {\n      font-family: 'Inter UI';\n      font-size: 11px;\n      color: #a7a7a7; }\n#contact-page .contact-main .contact-form form .f-send {\n      font-family: 'Bebas Neue';\n      background-color: #ff7000;\n      font-size: 20px;\n      display: inline-block;\n      padding: 24px 60px;\n      border: 0 solid transparent;\n      border-radius: 0;\n      line-height: 14px;\n      color: white;\n      letter-spacing: .06em; }\n#contact-page .contact-main .contact-form form p {\n      font-size: 14px !important;\n      line-height: 20px;\n      padding: 0;\n      margin: 0;\n      margin-bottom: 30px; }\n#contact-page .contact-main .contact-info {\n    margin-top: 0;\n    margin-bottom: 4em;\n    font-family: 'Inter UI';\n    font-size: 13px;\n    line-height: 20px;\n    margin-left: 2em; }\n#contact-page .contact-main .contact-info ul, #contact-page .contact-main .contact-info li {\n      list-style: none;\n      padding: 0; }\n#contact-page .contact-clio {\n    margin-top: 5em;\n    margin-bottom: 5em; }\n#contact-page .contact-clio .clio-signin {\n      border: 2px solid #f6f6f6;\n      padding: 2em;\n      margin: 0 auto;\n      width: 84%; }\n#contact-page .contact-clio .clio-signin .clio-case {\n        margin-bottom: 1.5em;\n        line-height: 1.6;\n        font-size: 14px;\n        font-family: 'Inter UI'; }\n#contact-page .contact-clio .clio-signin h4 {\n        margin-top: 0;\n        padding: 0;\n        max-width: 16rem;\n        margin-bottom: 0;\n        line-height: 1.1;\n        letter-spacing: .04em; }\n#contact-page .contact-clio .clio-signin a {\n        text-decoration: none;\n        outline: none;\n        color: #252b7e; }\n#contact-page .contact-clio .y-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: -120px;\n      margin-top: -12em; }\n#contact-page .contact-clio .y-blob img {\n        width: 370px;\n        opacity: .9; }\n#contact-page .contact-clio .b-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: 234px;\n      margin-top: 1.5em; }\n#contact-page .contact-clio .b-blob img {\n        width: 140px;\n        opacity: .9; }\n@media (min-width: 576px) {\n  p {\n    line-height: 34px; }\n  .mobile-nav .navbar {\n    padding-left: 0;\n    padding-right: 0; }\n  #main {\n    margin-top: 6%;\n    background: white; }\n    #main h1, #main p {\n      width: 500px; }\n  .head1 {\n    font-size: 52px;\n    line-height: 52px; }\n  .action {\n    display: none; }\n  .row.section iframe {\n    width: 85%;\n    height: 230px;\n    padding: 0;\n    margin: 0 auto; }\n  .container-fluid .home1 {\n    padding: 0;\n    max-width: 600px; }\n  .container-fluid .cta {\n    height: 700px;\n    padding-top: 30em;\n    padding-left: 40px; }\n  .container-fluid .marko-logo {\n    width: 132px; }\n  .container-fluid .home2, .container-fluid .home3, .container-fluid .home4, .container-fluid .home5 {\n    padding-left: 40px;\n    padding-right: 40px; }\n  .container-fluid .options {\n    padding-bottom: 4em;\n    padding-top: 1em; }\n    .container-fluid .options .r-blob {\n      left: 358px;\n      margin-top: 15.5em; }\n  .container-fluid .head2, .container-fluid .head3 {\n    font-size: 56px;\n    line-height: 56px; }\n  .container-fluid .home3 .deco1, .container-fluid .home3 .deco2, .container-fluid .home4 .deco1, .container-fluid .home4 .deco2 {\n    display: block;\n    font-size: 25vw;\n    color: #f6f6f6;\n    position: absolute;\n    left: 60px;\n    z-index: -1;\n    line-height: .8; }\n  .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n    top: 9.95em; }\n  .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n    top: 15.35em; }\n  .container-fluid .home3 h1, .container-fluid .home4 h1 {\n    font-size: 52px;\n    line-height: 52px; }\n  .container-fluid .home3 .home-link, .container-fluid .home4 .home-link {\n    padding-left: 18em; }\n  .container-fluid .home3 .home-explore, .container-fluid .home4 .home-explore {\n    font-size: 22px; }\n  .container-fluid .legacy .text-muted {\n    margin-left: 14em;\n    font-size: 22px; }\n  .container-fluid .legacy .case-title {\n    font-size: 34px;\n    line-height: 34px; }\n  .container-fluid .legacy .num-container img {\n    width: 75%; }\n  .container-fluid .legacy .num-overlay {\n    bottom: 74px; }\n  .container-fluid #accordion .case-action {\n    font-size: 16px !important;\n    line-height: 28px; }\n  .footer-info {\n    padding-bottom: 6em; }\n    .footer-info #footer {\n      padding-left: 40px;\n      padding-right: 40px; }\n      .footer-info #footer h5, .footer-info #footer ul {\n        font-size: 16px;\n        letter-spacing: .09em; }\n      .footer-info #footer .footer-line {\n        width: 50%; }\n  .questions-grid {\n    margin-bottom: 3em; }\n    .questions-grid #faq .btn, .questions-grid #faq .btn-link {\n      max-width: 16rem;\n      text-align: left;\n      white-space: normal; }\n      .questions-grid #faq .btn:hover, .questions-grid #faq .btn:active, .questions-grid #faq .btn:visited, .questions-grid #faq .btn-link:hover, .questions-grid #faq .btn-link:active, .questions-grid #faq .btn-link:visited {\n        text-decoration: none; }\n    .questions-grid #faq .faq {\n      margin: 0 0 5%;\n      padding: 0;\n      border: 2px solid #f6f6f6; }\n      .questions-grid #faq .faq .case-action {\n        margin-bottom: 2em;\n        line-height: 1.6;\n        font-size: 12px; }\n      .questions-grid #faq .faq .case-client {\n        max-width: 16rem;\n        margin-bottom: 0;\n        letter-spacing: .045rem;\n        font-family: 'Bebas Neue'; }\n    .questions-grid #faq .faq-line {\n      width: 2em;\n      height: 1px;\n      margin-top: 1em;\n      margin-bottom: 1em;\n      background-color: #f6f6f6;\n      color: #f6f6f6; }\n    .questions-grid .banner-line {\n      width: 25%;\n      display: inline-block;\n      height: 1px;\n      min-width: 3rem;\n      margin-right: 1em;\n      margin-bottom: .375em;\n      margin-left: 1em;\n      background-color: #eb1c21; }\n    .questions-grid .faq-contact {\n      margin-top: 5em;\n      margin-left: 2em; }\n  /* services */\n  #services-page .services-detail h1, #services-page .services-detail p {\n    margin-left: 12px;\n    margin-right: 12px; }\n  #services-page .services-banner {\n    margin-top: 4em;\n    margin-bottom: 4em; }\n    #services-page .services-banner img {\n      max-width: 30%; }\n    #services-page .services-banner .banner-overlay {\n      bottom: 90px; }\n    #services-page .services-banner .banner-subtitle {\n      bottom: -38%;\n      left: 60%; }\n    #services-page .services-banner .action, #services-page .services-banner hr {\n      display: none; }\n  #services-page .services-detail .o-blob {\n    left: 400px; }\n  #contact-page h1, #contact-page p {\n    margin-left: 12px;\n    margin-right: 12px; }\n  #contact-page .contact-banner img {\n    max-width: 70%; }\n  #contact-page .contact-clio .b-blob {\n    left: 408px;\n    margin-top: -1em; } }\n@media (min-width: 768px) {\n  .mobile-nav {\n    display: none; }\n  .top-nav {\n    display: block; }\n  .navbar .navbar-brand {\n    color: #eb1c21; }\n  .navbar .navbar-nav > li {\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 14px;\n    letter-spacing: .09em; }\n  .navbar-light .navbar-nav .nav-link {\n    color: #111517; }\n  .jumbotron {\n    padding-top: 94px; }\n  .home-header, .services-header {\n    display: none; }\n  #main {\n    background-image: url(\"/static/billboard.jpg\");\n    min-height: 768px;\n    background-size: cover;\n    background-attachment: scroll;\n    margin-bottom: 0;\n    margin-top: 8%; }\n    #main h1, #main p {\n      max-width: 200px; }\n  .action {\n    display: none; }\n  .container-fluid .home1 {\n    max-width: 660px; }\n  .container-fluid .head1 {\n    font-size: 82px;\n    line-height: 82px;\n    margin-top: 0; }\n  .container-fluid .head2, .container-fluid .head3 {\n    font-size: 56px;\n    line-height: 56px; }\n  .container-fluid .options {\n    padding-top: 6em;\n    padding-bottom: 8em; }\n    .container-fluid .options .r-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: 480px;\n      margin-top: 9em; }\n      .container-fluid .options .r-blob img {\n        width: 286px; }\n    .container-fluid .options .y-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: -20px;\n      margin-top: 18em; }\n      .container-fluid .options .y-blob img {\n        width: 286px; }\n  .container-fluid .home3, .container-fluid .home4 {\n    margin-bottom: 10em; }\n    .container-fluid .home3 h1, .container-fluid .home4 h1 {\n      font-size: 52px;\n      line-height: 52px; }\n    .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n      top: 11.2em; }\n    .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n      top: 16.5em; }\n    .container-fluid .home3 .home-link, .container-fluid .home4 .home-link {\n      padding-left: 24em; }\n  .container-fluid .row.section iframe {\n    width: 90%;\n    height: 383px;\n    padding: 0;\n    margin: 0 auto; }\n  .container-fluid .legacy .num-container img {\n    width: 55%; }\n  .footer-info {\n    padding-bottom: 0em; }\n    .footer-info #footer h5, .footer-info #footer ul {\n      font-size: 11px;\n      line-height: 11px; }\n    .footer-info #footer .footer-line {\n      width: 100%; }\n  /* services */\n  #services-page .services-banner {\n    margin-top: 15em;\n    margin-bottom: 22em; }\n    #services-page .services-banner img {\n      max-width: 72%; }\n    #services-page .services-banner .banner-overlay {\n      left: 16%;\n      bottom: 322px; }\n      #services-page .services-banner .banner-overlay h1 {\n        font-size: 22px;\n        line-height: 1.1;\n        letter-spacing: 0; }\n    #services-page .services-banner .banner-subtitle {\n      bottom: -25%;\n      left: 50%; }\n  #services-page .services-detail .head2 {\n    font-size: 48px;\n    line-height: 48px;\n    letter-spacing: 0;\n    margin-left: 14%;\n    margin-top: 1.9em; }\n  #services-page .services-detail .txt-deco {\n    margin-left: 18%;\n    margin-top: 1em; }\n  #services-page .services-detail h4 {\n    margin-top: .75em; }\n  #services-page .services-detail .detail {\n    font-size: 14px !important;\n    line-height: 28px;\n    margin-left: 20%; }\n  #services-page .services-detail ul, #services-page .services-detail li {\n    padding-left: 0;\n    font-size: 12px; }\n  #services-page .services-detail .deco1 {\n    display: block;\n    font-size: 25vw;\n    color: #f6f6f6;\n    position: absolute;\n    left: 60px;\n    z-index: -1;\n    line-height: .8;\n    top: -53%; }\n  #services-page .services-detail .o-blob {\n    margin-top: 8em;\n    left: 350px; }\n    #services-page .services-detail .o-blob img {\n      width: 340px; }\n  #services-page .services-detail .y-blob {\n    left: 600px;\n    margin-top: -18em; }\n    #services-page .services-detail .y-blob img {\n      width: 120px; }\n  #services-page .questions-grid {\n    margin-top: 4em; }\n    #services-page .questions-grid #faq .card-header {\n      padding: 2em; }\n    #services-page .questions-grid #faq .faq .case-action {\n      font-size: 11px; }\n    #services-page .questions-grid #faq .faq .case-client {\n      max-width: 30rem;\n      font-size: 18px;\n      letter-spacing: .02em; }\n    #services-page .questions-grid #faq .card-body p {\n      font-size: 12px !important;\n      line-height: 18px; }\n  #services-page .resources-detail {\n    margin-top: 7em; }\n    #services-page .resources-detail h3 {\n      font-size: 42px;\n      line-height: 42px;\n      margin-left: 4.3em; }\n    #services-page .resources-detail .res-info {\n      margin-left: 14em; }\n    #services-page .resources-detail .txt-deco .deco-line {\n      left: 16em; }\n    #services-page .resources-detail .txt-deco .deco-label {\n      padding-left: 20em; }\n    #services-page .resources-detail .g-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: 30px;\n      margin-top: 6em; }\n      #services-page .resources-detail .g-blob img {\n        width: 160px;\n        opacity: .9; }\n    #services-page .resources-detail .b-blob {\n      display: block;\n      position: absolute;\n      z-index: -3;\n      left: 52px;\n      margin-top: -.5em; }\n      #services-page .resources-detail .b-blob img {\n        width: 200px;\n        opacity: .9; }\n    #services-page .resources-detail #resources {\n      margin-top: 4em; }\n  /* contact */\n  #contact-page h1, #contact-page p {\n    margin-left: 12px;\n    margin-right: 12px; }\n  #contact-page #contact {\n    display: none; }\n  #contact-page .contact-banner {\n    margin-top: 12.5em;\n    margin-bottom: 0; }\n    #contact-page .contact-banner img {\n      min-width: 560px; }\n    #contact-page .contact-banner .banner-overlay {\n      display: block;\n      font-family: 'Inter UI';\n      font-size: 11px;\n      line-height: 11px;\n      margin-bottom: 6em;\n      margin-left: 14em; }\n      #contact-page .contact-banner .banner-overlay .nearby {\n        font-family: 'Bebas Neue';\n        font-size: 20px;\n        line-height: 20px; }\n  #contact-page .contact-main .contact-info {\n    margin-top: 1em;\n    margin-left: 16em;\n    font-size: 11px;\n    line-height: 17px; }\n  #contact-page .contact-main .contact-form {\n    margin-top: 4em; }\n    #contact-page .contact-main .contact-form form .f-select {\n      border: 1px solid #f6f6f6;\n      padding: 2em; }\n      #contact-page .contact-main .contact-form form .f-select .r-label {\n        font-family: 'Inter UI'; }\n    #contact-page .contact-main .contact-form form .split {\n      display: inline-block; }\n  #contact-page .contact-clio {\n    margin-top: 8em;\n    margin-bottom: 8em; }\n    #contact-page .contact-clio .b-blob {\n      left: 522px;\n      margin-top: -1em; }\n      #contact-page .contact-clio .b-blob img {\n        width: 168px; } }\n@media (min-width: 992px) {\n  p {\n    line-height: 32px; }\n  .navbar {\n    padding-left: 2rem;\n    margin-top: 14px; }\n    .navbar .navbar-nav > li {\n      font-size: 15px;\n      line-height: 15px; }\n  .navbar-nav > li {\n    padding-left: 30px;\n    padding-right: 30px; }\n  #main {\n    background-image: url(\"/static/full-bill.jpg\");\n    margin-top: 4%;\n    background-attachment: fixed;\n    max-height: 768px;\n    background-size: contain;\n    background-repeat: no-repeat; }\n    #main h1, #main p {\n      width: 360px; }\n  .container-fluid .home1 {\n    max-width: 960px; }\n    .container-fluid .home1 p {\n      margin-bottom: 1em; }\n    .container-fluid .home1 .cta-services {\n      display: block;\n      position: absolute;\n      font-family: 'Inter UI';\n      font-size: 11px;\n      line-height: 11px;\n      text-decoration: none;\n      color: #252b7e;\n      right: 2.5%;\n      bottom: 6%;\n      z-index: 3;\n      line-height: 1;\n      text-align: right; }\n    .container-fluid .home1 .at-cta {\n      font-family: 'Bebas Neue';\n      font-size: 14px;\n      line-height: 14px; }\n  .container-fluid .home2 h1, .container-fluid .home2 p {\n    width: 600px;\n    padding-left: 100px; }\n  .container-fluid .head1 {\n    font-size: 86px;\n    line-height: 86px; }\n  .container-fluid .head2, .container-fluid .head3 {\n    font-size: 56px;\n    line-height: 56px; }\n  .container-fluid .options {\n    padding-top: 8em; }\n    .container-fluid .options .r-blob {\n      left: 600px;\n      margin-top: 2em; }\n      .container-fluid .options .r-blob img {\n        width: 376px; }\n    .container-fluid .options .y-blob {\n      left: 0px;\n      margin-top: 16em; }\n      .container-fluid .options .y-blob img {\n        width: 296px; }\n    .container-fluid .options .g-blob {\n      display: block;\n      position: absolute;\n      z-index: -3;\n      left: 760px;\n      margin-top: 18em; }\n      .container-fluid .options .g-blob img {\n        width: 200px; }\n  .container-fluid .row.section iframe {\n    width: 92%;\n    height: 531px;\n    padding: 0;\n    margin: 0 auto; }\n  .container-fluid .home3, .container-fluid .home4 {\n    padding-left: 268px; }\n    .container-fluid .home3 h1, .container-fluid .home3 p, .container-fluid .home4 h1, .container-fluid .home4 p {\n      width: 600px; }\n    .container-fluid .home3 h1, .container-fluid .home4 h1 {\n      font-size: 56px;\n      line-height: 56px; }\n    .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n      padding-left: 20px;\n      font-size: 21vw;\n      top: 9.35em; }\n    .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n      padding-left: 20px;\n      font-size: 21vw;\n      top: 15em; }\n  .container-fluid .cta {\n    background-attachment: fixed;\n    height: 600px;\n    padding-top: 21em; }\n    .container-fluid .cta h3 {\n      font-size: 72px;\n      line-height: 72px; }\n  .container-fluid .legacy {\n    margin-top: 8em; }\n    .container-fluid .legacy .text-muted {\n      margin-left: 24em; }\n    .container-fluid .legacy .num-container img {\n      width: 50%; }\n    .container-fluid .legacy .num-overlay {\n      bottom: 64px;\n      left: 100px; }\n    .container-fluid .legacy p {\n      width: 600px;\n      display: block;\n      margin: auto; }\n  .container-fluid #accordion {\n    padding-left: 0em; }\n    .container-fluid #accordion .yellow {\n      margin-right: 1em; }\n      .container-fluid #accordion .yellow:hover {\n        opacity: .9; }\n    .container-fluid #accordion .blue {\n      margin-right: 1em; }\n      .container-fluid #accordion .blue:hover {\n        opacity: .9; }\n    .container-fluid #accordion .red:hover {\n      opacity: .9; }\n    .container-fluid #accordion .orange:hover {\n      opacity: .9; }\n    .container-fluid #accordion .card {\n      padding: 0; }\n    .container-fluid #accordion .card-body p {\n      width: auto; }\n    .container-fluid #accordion .case-action {\n      width: auto; }\n  .footer-info {\n    padding-bottom: 0; }\n    .footer-info #footer {\n      padding-left: 30px;\n      padding-right: 30px; }\n      .footer-info #footer .info {\n        line-height: 1;\n        margin-top: .5em;\n        font-size: 14px; }\n      .footer-info #footer .footer-socials {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: stretch;\n            -ms-flex-align: stretch;\n                align-items: stretch;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n        -webkit-box-flex: 50%;\n            -ms-flex: 50%;\n                flex: 50%;\n        text-align: right;\n        line-height: 1;\n        margin: 0;\n        font-size: 14px; }\n      .footer-info #footer .footer-line {\n        display: none; }\n  /* services */\n  #services-page .services-banner {\n    margin-top: 10em;\n    margin-bottom: 16em; }\n    #services-page .services-banner img {\n      max-width: 56%; }\n    #services-page .services-banner .banner-overlay {\n      bottom: 320px;\n      left: 28%; }\n    #services-page .services-banner .banner-subtitle {\n      left: 45%; }\n    #services-page .services-banner .cta-services {\n      display: block;\n      position: absolute;\n      font-family: 'Inter UI';\n      font-size: 11px;\n      line-height: 11px;\n      text-decoration: none;\n      color: #252b7e;\n      right: 2.5%;\n      bottom: -45%;\n      z-index: 3;\n      line-height: 1;\n      text-align: right; }\n    #services-page .services-banner .at-cta {\n      font-family: 'Bebas Neue';\n      font-size: 14px;\n      line-height: 14px; }\n  #services-page .services-detail .head2 {\n    font-size: 56px;\n    line-height: 56px;\n    letter-spacing: 0;\n    margin-left: 14%;\n    margin-top: 1.9em; }\n  #services-page .services-detail .deco1 {\n    font-size: 14vw;\n    top: -68%; }\n  #services-page .services-detail .detail {\n    font-size: 16px;\n    line-height: 32px; }\n  #services-page .services-detail .o-blob {\n    left: 500px;\n    margin-top: 9em; }\n    #services-page .services-detail .o-blob img {\n      width: 280px; }\n  #services-page .services-detail .y-blob {\n    left: 680px;\n    margin-top: -20em; }\n  #services-page .resources-detail h3 {\n    margin-left: 6em; }\n  #services-page .resources-detail .res-info {\n    margin-left: 18.5em; }\n  #services-page .resources-detail .txt-deco {\n    margin-top: 2em; }\n    #services-page .resources-detail .txt-deco .deco-line {\n      left: 18.25em; }\n    #services-page .resources-detail .txt-deco .deco-label {\n      padding-left: 22.25em; }\n  #services-page .resources-detail .b-blob {\n    margin-top: -3em;\n    left: 80px; }\n    #services-page .resources-detail .b-blob img {\n      width: 260px; }\n  #services-page .questions-grid #faq .faq .case-client {\n    font-size: 16px;\n    line-height: 32px;\n    letter-spacing: .03em; }\n  /* contact */\n  #contact-page .contact-banner {\n    margin-top: 11em;\n    margin-bottom: 1em; }\n    #contact-page .contact-banner img {\n      min-width: 800px; }\n    #contact-page .contact-banner .banner-overlay {\n      font-size: 13px;\n      line-height: 13px; }\n      #contact-page .contact-banner .banner-overlay .nearby {\n        font-size: 24px;\n        line-height: 24px; }\n  #contact-page .contact-main {\n    margin-bottom: 8em; }\n    #contact-page .contact-main .contact-info {\n      margin-left: 0;\n      font-size: 13px;\n      line-height: 19px; }\n      #contact-page .contact-main .contact-info ul {\n        margin-left: 14em; }\n    #contact-page .contact-main .contact-form {\n      margin-top: 0; }\n      #contact-page .contact-main .contact-form form .f-select .r-label {\n        font-size: 14px; }\n    #contact-page .contact-main .contact-clio-desktop {\n      display: block;\n      margin-right: 3em; }\n      #contact-page .contact-main .contact-clio-desktop .clio-signin {\n        border: 2px solid #f6f6f6;\n        padding: 1em;\n        margin: 0 auto;\n        margin-top: 3em;\n        width: 84%; }\n        #contact-page .contact-main .contact-clio-desktop .clio-signin .clio-case {\n          margin-bottom: 1.5em;\n          line-height: 1.6;\n          font-size: 14px;\n          font-family: 'Inter UI'; }\n        #contact-page .contact-main .contact-clio-desktop .clio-signin h4 {\n          margin-top: 0;\n          padding: 0;\n          max-width: 16rem;\n          margin-bottom: 0;\n          line-height: 1.1;\n          letter-spacing: .04em; }\n        #contact-page .contact-main .contact-clio-desktop .clio-signin a {\n          text-decoration: none;\n          outline: none;\n          color: #252b7e; }\n      #contact-page .contact-main .contact-clio-desktop .g-blob {\n        display: block;\n        position: absolute;\n        z-index: -2;\n        left: 140px;\n        margin-top: -18em; }\n        #contact-page .contact-main .contact-clio-desktop .g-blob img {\n          width: 370px;\n          opacity: .9; }\n      #contact-page .contact-main .contact-clio-desktop .y-blob {\n        left: 522px;\n        margin-top: 2em; }\n        #contact-page .contact-main .contact-clio-desktop .y-blob img {\n          width: 280px; }\n      #contact-page .contact-main .contact-clio-desktop .r-blob {\n        display: block;\n        position: absolute;\n        z-index: -2;\n        left: 180px;\n        margin-top: 14em; }\n        #contact-page .contact-main .contact-clio-desktop .r-blob img {\n          width: 128px;\n          opacity: .9; }\n  #contact-page .contact-clio {\n    display: none; } }\n@media (min-width: 1200px) {\n  #main {\n    margin-top: 3em;\n    width: 100%;\n    height: auto;\n    background-size: contain;\n    background-repeat: no-repeat; }\n    #main .head1 {\n      font-size: 104px;\n      line-height: 104px; }\n    #main h1, #main p {\n      width: 400px; }\n  .container-fluid .home1 {\n    max-width: 1000px; }\n  .container-fluid .cta {\n    padding-left: 80px;\n    height: 600px; }\n  .container-fluid .marko-logo {\n    width: 150px; }\n  .container-fluid .home2 h1, .container-fluid .home2 p {\n    padding-left: 220px;\n    min-width: 1000px; }\n  .container-fluid .options {\n    padding-bottom: 10em;\n    padding-top: 8em; }\n    .container-fluid .options .r-blob {\n      left: 780px; }\n      .container-fluid .options .r-blob img {\n        width: 420px; }\n    .container-fluid .options .y-blob {\n      left: 40px; }\n      .container-fluid .options .y-blob img {\n        width: 320px; }\n    .container-fluid .options .g-blob {\n      left: 960px; }\n      .container-fluid .options .g-blob img {\n        width: 220px; }\n  .container-fluid .home3, .container-fluid .home4 {\n    padding-left: 400px;\n    padding-bottom: 6em;\n    padding-top: 5em; }\n    .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n      top: 9.5em;\n      font-size: 18vw; }\n    .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n      font-size: 18vw;\n      top: 15.8em; }\n  .container-fluid .row.section iframe {\n    width: 85%;\n    height: 576px;\n    margin: 0 auto; }\n  .container-fluid .legacy {\n    padding-top: 4em; }\n    .container-fluid .legacy .num-container img {\n      width: 48%; }\n    .container-fluid .legacy .text-muted {\n      margin-left: 28em; }\n    .container-fluid .legacy p {\n      padding-bottom: 6em; }\n  .container-fluid #accordion .btn, .container-fluid #accordion .btn-link, .container-fluid #accordion .btn-link:focus, .container-fluid #accordion .btn-link:hover, .container-fluid #accordion .btn-link:active {\n    margin-bottom: 0;\n    overflow: hidden; }\n  .container-fluid #accordion .case-action {\n    padding-bottom: 0; }\n  .container-fluid #accordion .card-body p {\n    padding-bottom: 0em; }\n  /* services */\n  #services-page .services-banner img {\n    max-width: 42%; }\n  #services-page .services-detail .deco1 {\n    top: -75%; }\n  #services-page .services-detail .o-blob {\n    left: 700px;\n    margin-top: 8em; }\n  #services-page .services-detail .y-blob {\n    left: 900px; }\n  #services-page .resources-detail h3 {\n    margin-left: 7.5em;\n    font-size: 56px;\n    line-height: 56px; }\n  #services-page .resources-detail .res-info {\n    margin-left: 26em;\n    font-size: 18px;\n    line-height: 18px; }\n  #services-page .resources-detail .txt-deco .deco-line {\n    left: 29em; }\n  #services-page .resources-detail .txt-deco .deco-label {\n    padding-left: 33em; }\n  #services-page .resources-detail .b-blob {\n    left: 200px; }\n  #services-page .resources-detail .g-blob {\n    left: 120px; }\n  /* contact */\n  #contact-page .contact-banner img {\n    min-width: 1080px; }\n  #contact-page .contact-main .contact-clio-desktop .g-blob {\n    left: 200px; }\n  #contact-page .contact-main .contact-clio-desktop .y-blob {\n    margin-top: 6em; }\n  #contact-page .contact-main .contact-clio-desktop .r-blob {\n    margin-top: 8em;\n    left: 222px; } }\n@media (min-width: 1300px) {\n  .action {\n    padding-top: 40vh; }\n  .container-fluid .home1 {\n    max-width: 1200px; }\n  .container-fluid .home2 h1, .container-fluid .home2 p {\n    padding-left: 300px;\n    min-width: 1000px; }\n  .container-fluid .options .y-blob {\n    left: 80px; }\n  .container-fluid .options .r-blob {\n    left: 780px; }\n  .container-fluid .options .g-blob {\n    left: 960px; }\n  .container-fluid .row.section iframe {\n    width: 82%; }\n  .container-fluid .home3, .container-fluid .home4 {\n    padding-left: 420px; }\n    .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n      top: 8.9em; }\n    .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n      top: 14.7em; }\n  .container-fluid .cta {\n    padding-top: 20em;\n    width: 100%; }\n    .container-fluid .cta h3 {\n      font-size: 72px;\n      line-height: 72px; }\n  .container-fluid .legacy .num-overlay {\n    left: 200px;\n    bottom: 76px; }\n  /* services */\n  #services-page .services-banner {\n    margin-top: 12em; }\n    #services-page .services-banner img {\n      max-width: 45%; }\n    #services-page .services-banner .banner-overlay {\n      bottom: 22em; }\n    #services-page .services-banner .cta-services {\n      bottom: -40%; } }\n";
})();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);






var MobileNav = function MobileNav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'mobile-nav' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a } }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'nav',
      { className: 'navbar fixed-bottom navbar-dark bg-dark' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'navbar-brand', href: 'mailto:staff@thetrafficticketman.com?subject=Let\'s talk.' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'nav-icons', src: '/static/contact-w.png' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'navbar-brand', href: 'https://app.clio.com/session/new', target: '_blank' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'nav-icons', src: '/static/clio-w.png' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'navbar-brand', href: '/contact' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'nav-icons', src: '/static/add-w.png' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'navbar-brand', href: 'tel:713-521-7568' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'nav-icons', src: '/static/call-w.png' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbar' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'collapse navbar-collapse justify-content-stretch', id: 'navbar' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'navbar-nav text-right ml-auto mr-auto mobnav' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/' },
              'Home'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/services' },
              'Services'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/contact' },
              'Contact'
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (MobileNav);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);






var Nav = function Nav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'top-nav' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a } }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'nav',
      { className: 'navbar fixed-top navbar-expand-md navbar-light' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'navbar-brand', href: '/' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/mlaw.svg', alt: 'logo', className: 'img-fluid marko-logo' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbar' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'collapse navbar-collapse justify-content-stretch', id: 'navbar' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'navbar-nav ml-auto' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/services' },
              'Services'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/contact' },
              'Contact'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: 'https://app.clio.com/session/new', target: '_blank' },
              'Clio Login'
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_reveal_Fade__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_reveal_Fade___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_reveal_Fade__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_index_scss__);






var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'footer', className: 'container-fluid' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_reveal_Fade___default.a,
      { bottom: true, delay: 400 },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h5',
        { className: 'text-muted info' },
        'Markowitz Law'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h5',
        { className: 'text-muted info' },
        'Proudly headquartered in Houston, TX'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { className: 'footer-line' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: 'footer-socials' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'footer-social' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://www.facebook.com/HighwayLawyers/', target: '_blank' },
            'facebook'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'footer-social' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://www.linkedin.com/in/scott-markowitz-7a5a805', target: '_blank' },
            'linkedin'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'footer-social' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://www.yelp.com/biz/markowitz-law-firm-houston', target: '_blank' },
            'yelp'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'footer-social' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://www.avvo.com/attorneys/77057-tx-scott-markowitz-204768/write_review.html', target: '_blank' },
            'avvo'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(2);
var Fade__default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./styles/index.scss
var styles = __webpack_require__(1);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// EXTERNAL MODULE: ./components/mobileNav.js
var mobileNav = __webpack_require__(4);

// EXTERNAL MODULE: ./components/navigation.js
var navigation = __webpack_require__(5);

// CONCATENATED MODULE: ./components/accordion.js





var accordion_Accordion = function Accordion() {
  return external__react__default.a.createElement(
    'div',
    { id: 'accordion', className: 'row' },
    external__react__default.a.createElement(
      'div',
      { className: 'col col-lg-6' },
      external__react__default.a.createElement(
        Fade__default.a,
        { bottom: true },
        external__react__default.a.createElement(
          'div',
          { className: 'card yellow col-lg-12' },
          external__react__default.a.createElement(
            'div',
            { className: 'card-header', id: 'headingOne' },
            external__react__default.a.createElement(
              'p',
              { className: 'mb-0 case-action' },
              'Resolve',
              external__react__default.a.createElement(
                'button',
                { className: 'btn btn-link', 'data-toggle': 'collapse', 'data-target': '#collapseOne', 'aria-expanded': 'true', 'aria-controls': 'collapseOne' },
                external__react__default.a.createElement(
                  'h4',
                  { className: 'case-client' },
                  'Out-of-Towner'
                )
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            { id: 'collapseOne', className: 'collapse', 'aria-labelledby': 'headingOne', 'data-parent': '#accordion' },
            external__react__default.a.createElement(
              'div',
              { className: 'card-body' },
              external__react__default.a.createElement(
                'p',
                null,
                'What do you do when you get a traffic ticket in a city hundreds of miles away from home? Easy\u2014submit your case to Markowitz Law. Our Court Valet service allows us to represent and fight for you in court while you rest easy back home, no flights necessary.'
              )
            )
          )
        )
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'col col-lg-6' },
      external__react__default.a.createElement(
        Fade__default.a,
        { bottom: true },
        external__react__default.a.createElement(
          'div',
          { className: 'card red col-lg-12' },
          external__react__default.a.createElement(
            'div',
            { className: 'card-header', id: 'headingTwo' },
            external__react__default.a.createElement(
              'p',
              { className: 'mb-0 case-action' },
              'Dismiss',
              external__react__default.a.createElement(
                'button',
                { className: 'btn btn-link collapsed', 'data-toggle': 'collapse', 'data-target': '#collapseTwo', 'aria-expanded': 'false', 'aria-controls': 'collapseTwo' },
                external__react__default.a.createElement(
                  'h4',
                  { className: 'case-client' },
                  'Teen Driver'
                )
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            { id: 'collapseTwo', className: 'collapse', 'aria-labelledby': 'headingTwo', 'data-parent': '#accordion' },
            external__react__default.a.createElement(
              'div',
              { className: 'card-body' },
              external__react__default.a.createElement(
                'p',
                null,
                'Your teen\u2019s first traffic ticket can mean high anxiety and even higher insurance rates for the whole family. We\u2019ve all been new to the rules of the road, and Markowitz Law can help parents and teens understand the law.'
              )
            )
          )
        )
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'col col-lg-6' },
      external__react__default.a.createElement(
        Fade__default.a,
        { bottom: true },
        external__react__default.a.createElement(
          'div',
          { className: 'card blue col-lg-12' },
          external__react__default.a.createElement(
            'div',
            { className: 'card-header', id: 'headingThree' },
            external__react__default.a.createElement(
              'p',
              { className: 'mb-0 case-action' },
              'Reduce',
              external__react__default.a.createElement(
                'button',
                { className: 'btn btn-link collapsed', 'data-toggle': 'collapse', 'data-target': '#collapseThree', 'aria-expanded': 'false', 'aria-controls': 'collapseThree' },
                external__react__default.a.createElement(
                  'h4',
                  { className: 'case-client' },
                  'Daily Commuter'
                )
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            { id: 'collapseThree', className: 'collapse', 'aria-labelledby': 'headingThree', 'data-parent': '#accordion' },
            external__react__default.a.createElement(
              'div',
              { className: 'card-body' },
              external__react__default.a.createElement(
                'p',
                null,
                'It\'s a race out there, and even the best of us can miss a red light, roll a stop sign, or exceed the posted speed limit. Sound familiar? The law never stops, and that can leave a lot of room for traffic violations.'
              )
            )
          )
        )
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'col col-lg-6' },
      external__react__default.a.createElement(
        Fade__default.a,
        { bottom: true },
        external__react__default.a.createElement(
          'div',
          { className: 'card orange col-lg-12' },
          external__react__default.a.createElement(
            'div',
            { className: 'card-header', id: 'headingFour' },
            external__react__default.a.createElement(
              'p',
              { className: 'mb-0 case-action' },
              'Recover',
              external__react__default.a.createElement(
                'button',
                { className: 'btn btn-link collapsed', 'data-toggle': 'collapse', 'data-target': '#collapseFour', 'aria-expanded': 'false', 'aria-controls': 'collapseFour' },
                external__react__default.a.createElement(
                  'h4',
                  { className: 'case-client' },
                  'Commercial Trucker'
                )
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            { id: 'collapseFour', className: 'collapse', 'aria-labelledby': 'headingFour', 'data-parent': '#accordion' },
            external__react__default.a.createElement(
              'div',
              { className: 'card-body' },
              external__react__default.a.createElement(
                'p',
                null,
                'You\u2019ve already got valuable cargo to transport. The last thing you need to worry about is a compromised CDL. Markowitz Law is highly experienced in fighting to lessen the severity of your case, so you can get back on the road again, worry-free.'
              )
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ var accordion = (accordion_Accordion);
// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/index.js


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var pages_Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        { className: 'container-fluid' },
        external__react__default.a.createElement(
          head__default.a,
          null,
          external__react__default.a.createElement(
            'title',
            null,
            'Markowitz Law'
          ),
          external__react__default.a.createElement('meta', { name: 'description', content: 'TBD' }),
          external__react__default.a.createElement('meta', { name: 'keywords', content: 'TBD' }),
          external__react__default.a.createElement('meta', { name: 'author', content: 'Markowitz Law' }),
          external__react__default.a.createElement('style', { dangerouslySetInnerHTML: { __html: styles_default.a } })
        ),
        external__react__default.a.createElement(mobileNav["a" /* default */], null),
        external__react__default.a.createElement(navigation["a" /* default */], null),
        external__react__default.a.createElement(
          Fade__default.a,
          { bottom: true, delay: 500 },
          external__react__default.a.createElement(
            'div',
            { className: 'home-header' },
            external__react__default.a.createElement('img', { src: '/static/mlaw.svg', alt: 'logo', className: 'img-fluid marko-logo' })
          )
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'jumbotron jumbotron-fluid', id: 'main' },
          external__react__default.a.createElement(
            'div',
            { className: 'container home1' },
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement(
                'h1',
                { className: 'display-4 head1' },
                external__react__default.a.createElement(
                  'b',
                  null,
                  'Traffic court sucks, ',
                  external__react__default.a.createElement(
                    'span',
                    { className: 'period' },
                    'Period.'
                  )
                )
              )
            ),
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 510 },
              external__react__default.a.createElement(
                'p',
                { className: 'lead' },
                'Everyone has a story.',
                external__react__default.a.createElement('br', null),
                'Tell us yours.'
              )
            ),
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 520 },
              external__react__default.a.createElement(
                'p',
                { className: 'action' },
                'Scroll'
              ),
              external__react__default.a.createElement('hr', null),
              external__react__default.a.createElement(
                'a',
                { className: 'cta-services', href: '/contact' },
                'Let\'s Get To Work \xA0\xA0',
                external__react__default.a.createElement(
                  'span',
                  { className: 'at-cta' },
                  '@'
                )
              )
            )
          )
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'row section options home2' },
          external__react__default.a.createElement(
            Fade__default.a,
            { bottom: true, delay: 500 },
            external__react__default.a.createElement(
              'h1',
              { className: 'display-5 head2' },
              'You have options.',
              external__react__default.a.createElement('br', null),
              'Choose wisely.'
            )
          ),
          external__react__default.a.createElement(
            Fade__default.a,
            { bottom: true, delay: 500 },
            external__react__default.a.createElement(
              'div',
              { className: 'r-blob' },
              external__react__default.a.createElement('img', { src: '/static/elements/r-blob.gif', alt: '' })
            ),
            external__react__default.a.createElement(
              'div',
              { className: 'y-blob' },
              external__react__default.a.createElement('img', { src: '/static/elements/y-blob.gif', alt: '' })
            ),
            external__react__default.a.createElement(
              'div',
              { className: 'g-blob' },
              external__react__default.a.createElement('img', { src: '/static/elements/g-blob.gif', alt: '' })
            )
          ),
          external__react__default.a.createElement(
            Fade__default.a,
            { bottom: true, delay: 500 },
            external__react__default.a.createElement(
              'p',
              null,
              'Sitting in court for hours just to pay hefty fees and get ordered into defensive driving is no longer your only option when fighting a traffic ticket.'
            ),
            external__react__default.a.createElement(
              'p',
              null,
              'At Markowitz Law, you can choose convenience over convention. Whether you choose to fight the ticket in court with a Markowitz trial attorney or opt for a more refined "court valet" service, we go to court to help you through the process.'
            ),
            external__react__default.a.createElement(
              'p',
              null,
              'See which route may be best for you below.'
            )
          )
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'row section' },
          external__react__default.a.createElement(
            Fade__default.a,
            { bottom: true, delay: 500 },
            external__react__default.a.createElement('iframe', { src: 'https://www.youtube.com/embed/H8NExnW8fNM?rel=0&controls=0&showinfo=0',
              frameBorder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true })
          ),
          external__react__default.a.createElement(
            'div',
            { className: 'home3' },
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement('div', { className: 'num-line' }),
              external__react__default.a.createElement(
                'div',
                { className: 'num-label' },
                'NO.'
              ),
              external__react__default.a.createElement(
                'div',
                { className: 'num-value' },
                '01'
              )
            ),
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement(
                'h1',
                { className: 'display-5' },
                external__react__default.a.createElement(
                  'b',
                  null,
                  'Court Valet'
                )
              )
            ),
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement(
                'div',
                { className: 'deco1' },
                'SAVE',
                external__react__default.a.createElement('br', null),
                'YOUR',
                external__react__default.a.createElement('br', null),
                'TIME'
              )
            ),
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement(
                'p',
                { className: 'lead' },
                'If your schedule is hectic and sacrificing uncertain hours in traffic court is out of the question, consider our Court Valet service. Court Valet may be the turnkey solution to your ticket problem.'
              ),
              external__react__default.a.createElement(
                'a',
                { className: 'home-link', href: '/services' },
                external__react__default.a.createElement(
                  'h5',
                  { className: 'text-muted home-explore' },
                  'EXPLORE YOUR OPTIONS '
                ),
                external__react__default.a.createElement('img', { className: 'arrow', src: '/static/arrow-right.svg', alt: '' })
              )
            )
          )
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'row section' },
          external__react__default.a.createElement(
            Fade__default.a,
            { bottom: true, delay: 500 },
            external__react__default.a.createElement('iframe', { src: 'https://www.youtube.com/embed/jZ5zgDhmjYg?rel=0&controls=0&showinfo=0',
              frameBorder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true })
          ),
          external__react__default.a.createElement(
            'div',
            { className: 'home4' },
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement('div', { className: 'num-line' }),
              external__react__default.a.createElement(
                'div',
                { className: 'num-label' },
                'NO.'
              ),
              external__react__default.a.createElement(
                'div',
                { className: 'num-value' },
                '02'
              )
            ),
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement(
                'h1',
                { className: 'display-5' },
                external__react__default.a.createElement(
                  'b',
                  null,
                  'Ticket Defense'
                )
              )
            ),
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement(
                'div',
                { className: 'deco2' },
                'SAVE',
                external__react__default.a.createElement('br', null),
                'YOUR',
                external__react__default.a.createElement('br', null),
                'ENERGY'
              )
            ),
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement(
                'p',
                { className: 'lead' },
                'If your schedule is flexible and you prefer to attend court, contact us. Ticket Defense may be the best option for you.'
              ),
              external__react__default.a.createElement(
                'a',
                { className: 'home-link', href: '/services' },
                external__react__default.a.createElement(
                  'h5',
                  { className: 'text-muted home-explore' },
                  'EXPLORE YOUR OPTIONS '
                ),
                external__react__default.a.createElement('img', { className: 'arrow', src: '/static/arrow-right.svg', alt: '' })
              )
            )
          )
        ),
        external__react__default.a.createElement(
          Fade__default.a,
          { bottom: true, delay: 500 },
          external__react__default.a.createElement(
            'div',
            { className: 'cta' },
            external__react__default.a.createElement(
              'h3',
              { className: 'display-4' },
              'Save ',
              external__react__default.a.createElement(
                'span',
                { className: 'orange' },
                'time'
              ),
              external__react__default.a.createElement('br', null),
              'Save ',
              external__react__default.a.createElement(
                'span',
                { className: 'yellow' },
                'energy'
              ),
              external__react__default.a.createElement('br', null),
              'Submit your case today'
            )
          )
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'section legacy home5' },
          external__react__default.a.createElement(
            'div',
            { className: 'num-container' },
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement('img', { className: 'img-responsive', src: '/static/25.svg', alt: '' })
            ),
            external__react__default.a.createElement(
              Fade__default.a,
              { bottom: true, delay: 500 },
              external__react__default.a.createElement(
                'div',
                { className: 'num-overlay' },
                external__react__default.a.createElement(
                  'h3',
                  { className: 'display-4 head3' },
                  external__react__default.a.createElement(
                    'b',
                    null,
                    'Our Legacy'
                  )
                )
              )
            )
          ),
          external__react__default.a.createElement(
            Fade__default.a,
            { bottom: true, delay: 500 },
            external__react__default.a.createElement(
              'h5',
              { className: 'text-muted' },
              ' \xA0\xA0\xA0\xA0\xA0 Est. 1993'
            )
          ),
          external__react__default.a.createElement(
            Fade__default.a,
            { bottom: true, delay: 500 },
            external__react__default.a.createElement(
              'p',
              { className: 'legacy-text' },
              'For more than 25 years, Markowitz Law has consistently strived to deliver legal solutions to Texas residents and its visitors. We\'ve earned our reputation with our clients for a results-driven practice model.'
            )
          ),
          external__react__default.a.createElement(
            Fade__default.a,
            { bottom: true, delay: 500 },
            external__react__default.a.createElement(
              'h4',
              { className: 'case-title' },
              'How We Can Help You'
            )
          ),
          external__react__default.a.createElement(accordion, null)
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'footer-info' },
          external__react__default.a.createElement(footer["a" /* default */], null)
        )
      );
    }
  }]);

  return Home;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ })
/******/ ]);