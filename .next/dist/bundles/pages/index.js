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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/accordion.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);


var _jsxFileName = '/Users/leonelaguzman/Documents/Clients/Markowitz/marko18/components/accordion.js';




var Accordion = function Accordion() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'accordion', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { 'class': 'card', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { 'class': 'card-header', id: 'headingOne', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { 'class': 'mb-0', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { 'class': 'btn btn-link', 'data-toggle': 'collapse', 'data-target': '#collapseOne', 'aria-expanded': 'true', 'aria-controls': 'collapseOne', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              'The Out-of-Towner'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'collapseOne', 'class': 'collapse show', 'aria-labelledby': 'headingOne', 'data-parent': '#accordion', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { 'class': 'card-body', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            'Anim pariatur cliche reprehenderit, enim upidatat skateboard dolor. Brunch 3 wolf moon tempor, sunt aliquarigin coffee nuiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher em accusamus labore sustainable VHS.'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { 'class': 'card', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { 'class': 'card-header', id: 'headingTwo', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { 'class': 'mb-0', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { 'class': 'btn btn-link collapsed', 'data-toggle': 'collapse', 'data-target': '#collapseTwo', 'aria-expanded': 'false', 'aria-controls': 'collapseTwo', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              'The Teen Driver'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'collapseTwo', 'class': 'collapse', 'aria-labelledby': 'headingTwo', 'data-parent': '#accordion', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { 'class': 'card-body', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            'Anim pariatur cliche reprehenderit, enim upidatat skateboard dolor. Brunch 3 wolf moon tempor, sunt aliquarigin coffee nuiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher em accusamus labore sustainable VHS.'
          ),
          '          '
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { 'class': 'card', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { 'class': 'card-header', id: 'headingThree', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h5',
          { 'class': 'mb-0', __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { 'class': 'btn btn-link collapsed', 'data-toggle': 'collapse', 'data-target': '#collapseThree', 'aria-expanded': 'false', 'aria-controls': 'collapseThree', __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              'The Daily Commuter'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'collapseThree', 'class': 'collapse', 'aria-labelledby': 'headingThree', 'data-parent': '#accordion', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { 'class': 'card-body', __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            'Anim pariatur cliche reprehenderit, enim upidatat skateboard dolor. Brunch 3 wolf moon tempor, sunt aliquarigin coffee nuiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher em accusamus labore sustainable VHS.'
          ),
          '          '
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Accordion);

/***/ }),

/***/ "./components/mobileNav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);


var _jsxFileName = '/Users/leonelaguzman/Documents/Clients/Markowitz/marko18/components/mobileNav.js';




var MobileNav = function MobileNav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'mobile-nav', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a }, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'nav',
      { className: 'navbar fixed-bottom navbar-dark bg-dark', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'navbar-brand', href: '/contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'nav-icons', src: '/static/contact-w.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'navbar-brand', href: 'https://app.clio.com/session/new', target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'nav-icons', src: '/static/clio-w.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'navbar-brand', href: '/contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'nav-icons', src: '/static/add-w.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'navbar-brand', href: 'tel:3372400858', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'nav-icons', src: '/static/call-w.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbar', __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'collapse navbar-collapse justify-content-stretch', id: 'navbar', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'navbar-nav text-right ml-auto mr-auto mobnav', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              'Home'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/services', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              'Services'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/faq', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              },
              'FAQ'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/contact', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
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

/***/ "./components/navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);


var _jsxFileName = '/Users/leonelaguzman/Documents/Clients/Markowitz/marko18/components/navigation.js';




var Nav = function Nav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'top-nav', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a }, __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'nav',
      { className: 'navbar navbar-expand-md navbar-light', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'navbar-brand', href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        'Markowitz Law'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbar', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'collapse navbar-collapse justify-content-stretch', id: 'navbar', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'navbar-nav ml-auto mr-auto', __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/services', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                }
              },
              'Services'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/faq', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                }
              },
              'FAQ'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/contact', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              'Contact'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { className: 'form-inline my-2 my-lg-0', __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { className: 'btn btn-outline-dark my-2 my-sm-0', type: 'submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            'Clio Sign-in'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_mobileNav__ = __webpack_require__("./components/mobileNav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navigation__ = __webpack_require__("./components/navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_accordion__ = __webpack_require__("./components/accordion.js");


var _jsxFileName = '/Users/leonelaguzman/Documents/Clients/Markowitz/marko18/pages/index.js';








var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'container-fluid', __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'Markowitz Law'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: 'TBD', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'keywords', content: 'TBD', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'author', content: 'Markowitz Law', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_2__styles_index_scss___default.a }, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_mobileNav__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_navigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'jumbotron jumbotron-fluid', id: 'main', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/mlaw.svg', alt: 'logo', className: 'img-fluid marko-logo', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'display-5', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            'Traffic court sucks. Period.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'lead', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          'Let the experts fight on your behalf.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row section options', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'display-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        'You have options. Choose wisely.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        'Gone are the days where you have to spend hours sitting in court just to pay hefty court fees or be assigned defensive driving.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        'At Markowitz Law, you have the option to let our attorneys fight for you or with you in court.'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row section', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', { width: '420', height: '400', src: 'https://www.youtube.com/embed/H8NExnW8fNM?rel=0&controls=0&showinfo=0',
        frameBorder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'display-5 pt-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          },
          '01. \u2014 Court Valet'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'lead', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        'If you have a busy schedule and prefer to have our team fight for you in court on your behalf, Court Valet (proxy) is the best option for you.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'text-muted pb-4', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        '* court attendance not required'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row section', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', { width: '420', height: '400', src: 'https://www.youtube.com/embed/jZ5zgDhmjYg?rel=0&controls=0&showinfo=0',
        frameBorder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'display-5 pt-3', __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          '02. \u2014 Ticket Defense'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'lead', __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        },
        'If your schedule is flexible and you prefer to attend court with one of our lawyers, Ticket Defense is the best option for you.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'text-muted pb-4', __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        },
        '* court attendance required'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'cta', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        { className: 'display-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        'Save time and energy.',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }),
        'Get started on your case today.'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'section legacy', __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        { className: 'display-5', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          'Our Legacy'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h5',
        { className: 'text-muted', __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        },
        'Est. 1993'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'pt-2 pb-2', __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        },
        'For more than 20 years, Markowitz Law has consistently delivered legal solutions, convenient alternatives, and unparalleled value to Houstonians. We\u2019ve earned our reputation as one of the city\u2019s top firms through our highly-experienced attorneys and our 96.6% traffic ticket dismissal rate.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_accordion__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/index.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Playfair+Display:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Gothic+A1:400,700\");\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\nbody {\n  font-family: 'Playfair Display'; }\np {\n  font-size: medium;\n  color: black;\n  font-family: 'Gothic A1', sans-serif; }\n.top-nav {\n  display: none; }\n.bg-dark {\n  background-color: #eb1c21 !important; }\n.container-fluid {\n  padding-left: 0;\n  padding-right: 0; }\n.container-fluid .row {\n    margin-right: 0;\n    margin-left: 0;\n    color: #353535; }\n.container-fluid .marko-logo {\n    width: 200px; }\n.container-fluid .section h1, .container-fluid .section h2, .container-fluid .section h3, .container-fluid .section h4, .container-fluid .section h5, .container-fluid .section p {\n    padding-left: 15px;\n    padding-right: 15px; }\n.container-fluid .options {\n    padding-top: 1.5em;\n    padding-bottom: 2em;\n    background-color: #141440;\n    color: white; }\n.container-fluid .options p {\n      color: white; }\n.container-fluid .legacy {\n    padding-bottom: 5em;\n    padding-top: 2em;\n    width: 100%; }\n.container-fluid .cta {\n    text-align: left;\n    background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.45))), url(\"/static/cta.jpg\") no-repeat center center fixed;\n    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.45)), url(\"/static/cta.jpg\") no-repeat center center fixed;\n    background-size: cover;\n    color: white;\n    height: 500px;\n    padding-top: 22em;\n    padding-left: 15px; }\n.container-fluid .btn .btn-primary:focus {\n    outline: 0; }\n.container-fluid .img-fluid.banner {\n    height: 412px; }\n#accordion .btn, #accordion .btn-link, #accordion .btn-link:focus, #accordion .btn-link:hover, #accordion .btn-link:active {\n  text-decoration: none !important;\n  color: #353535 !important; }\n#accordion .card-header {\n  background-color: white;\n  border-bottom: none; }\n.mobile-nav .navbar .mobnav > li {\n  font-size: 2.5em;\n  padding-right: .5em;\n  line-height: 1.25em; }\n.mobile-nav .navbar-dark .navbar-nav .nav-link {\n  color: white; }\n.mobile-nav .nav-icons {\n  height: 20px; }\n.mobile-nav .navbar-brand {\n  margin: 0;\n  padding-left: 15px; }\n#main {\n  background-image: url(\"/static/half-bill.jpg\");\n  background-size: cover;\n  min-height: 686px;\n  margin-bottom: 0; }\n#main h1, #main p {\n    color: #353535;\n    width: 184px; }\n@media (min-width: 768px) {\n  .mobile-nav {\n    display: none; }\n  .top-nav {\n    display: block; }\n  .navbar .navbar-brand {\n    color: maroon; }\n  .navbar .navbar-nav > li {\n    padding-left: 20px;\n    padding-right: 20px; } }\n@media (min-width: 992px) {\n  .navbar-nav > li {\n    padding-left: 30px;\n    padding-right: 30px; } }\n";
})();

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map