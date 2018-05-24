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
    { id: 'accordion', className: 'row', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'col col-lg-6', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'card yellow col-lg-12', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'card-header', id: 'headingOne', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'mb-0 case-action', __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            'Resolve',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'btn btn-link', 'data-toggle': 'collapse', 'data-target': '#collapseOne', 'aria-expanded': 'true', 'aria-controls': 'collapseOne', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                { className: 'case-client', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  }
                },
                'Out-of-Towner'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'collapseOne', className: 'collapse', 'aria-labelledby': 'headingOne', 'data-parent': '#accordion', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-body', __source: {
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
              'What do you do when you get a traffic ticket in a city hundreds of miles away from home? Easy\u2014submit your case to Markowitz. Our Court Valet service allows us to represent and fight for you in court while you rest easy back home, no flights necessary.'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'col col-lg-6', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'card red col-lg-12', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'card-header', id: 'headingTwo', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'mb-0 case-action', __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            'Dismiss',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'btn btn-link collapsed', 'data-toggle': 'collapse', 'data-target': '#collapseTwo', 'aria-expanded': 'false', 'aria-controls': 'collapseTwo', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                { className: 'case-client', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                'Teen Driver'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'collapseTwo', className: 'collapse', 'aria-labelledby': 'headingTwo', 'data-parent': '#accordion', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-body', __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              'Your teen\u2019s first traffic ticket can mean high anxiety and even higher insurance rates for the whole family. We\u2019ve all been new to the rules of the road, but our team of lawyers are veterans when it comes to second chances and ticket dismissals for young drivers. '
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'col col-lg-6', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'card blue col-lg-12', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'card-header', id: 'headingThree', __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'mb-0 case-action', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            'Reduce',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'btn btn-link collapsed', 'data-toggle': 'collapse', 'data-target': '#collapseThree', 'aria-expanded': 'false', 'aria-controls': 'collapseThree', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                { className: 'case-client', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                'Daily Commuter'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'collapseThree', className: 'collapse', 'aria-labelledby': 'headingThree', 'data-parent': '#accordion', __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-body', __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                }
              },
              'Racing past red lights, running stop signs, and speeding down the highway to clock in on time. Sound familiar? Driving to and from work can leave a lot of room for traffic violations. Luckily, we\u2019re well-versed in getting cases dismissed and keeping driving records clean.'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'col col-lg-6', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'card orange col-lg-12', __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'card-header', id: 'headingFour', __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            { className: 'mb-0 case-action', __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            'Recover',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: 'btn btn-link collapsed', 'data-toggle': 'collapse', 'data-target': '#collapseFour', 'aria-expanded': 'false', 'aria-controls': 'collapseFour', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h4',
                { className: 'case-client', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                'Commercial Trucker'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'collapseFour', className: 'collapse', 'aria-labelledby': 'headingFour', 'data-parent': '#accordion', __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card-body', __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                }
              },
              'You\u2019ve already got valuable cargo to transport. The last thing you need to worry about is a compromised CDL. We specialize in case dismissal for commercial drivers, so you can get back on the road again, worry-free.'
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Accordion);

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);


var _jsxFileName = '/Users/leonelaguzman/Documents/Clients/Markowitz/marko18/components/footer.js';




var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { id: 'footer', className: 'container-fluid', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h5',
      { className: 'text-muted info', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      'Markowitz Law'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h5',
      { className: 'text-muted info', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      'Proudly headquartered in Houston, TX'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { className: 'footer-line', __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: 'footer-socials', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'footer-social', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: 'https://www.facebook.com/HighwayLawyers/', target: '_blank', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          'facebook'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'footer-social', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: 'https://www.linkedin.com/in/scott-markowitz-7a5a805', target: '_blank', __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          'linkedin'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'footer-social', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: 'https://www.yelp.com/biz/markowitz-law-firm-houston', target: '_blank', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          'yelp'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'footer-social', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: 'https://www.avvo.com/attorneys/77057-tx-scott-markowitz-204768/write_review.html', target: '_blank', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          'avvo'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

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
                lineNumber: 34
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/faq', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              'FAQ'
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
              { className: 'nav-link', href: '/contact', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
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
      { className: 'navbar fixed-top navbar-expand-md navbar-light', __source: {
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/mlaw.svg', alt: 'logo', className: 'img-fluid marko-logo', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbar', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'collapse navbar-collapse justify-content-stretch', id: 'navbar', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'navbar-nav ml-auto', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/services', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                }
              },
              'Services'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/faq', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              'FAQ'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: '/contact', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                }
              },
              'Contact'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            { className: 'nav-item', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'nav-link', href: 'https://app.clio.com/session/new', target: '_blank', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer__ = __webpack_require__("./components/footer.js");


var _jsxFileName = '/Users/leonelaguzman/Documents/Clients/Markowitz/marko18/pages/index.js';









var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'container-fluid', __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        'Markowitz Law'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: 'TBD', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'keywords', content: 'TBD', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'author', content: 'Markowitz Law', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_2__styles_index_scss___default.a }, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_mobileNav__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_navigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'jumbotron jumbotron-fluid', id: 'main', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container home1', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/mlaw.svg', alt: 'logo', className: 'img-fluid marko-logo', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'display-4 head1', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
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
            'Traffic court sucks. Period.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'lead', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          'Let the experts fight on your behalf.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'action', __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          'Scroll'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row section options home2', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        { className: 'display-5 head2', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        'You have options.',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }),
        'Choose wisely.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'r-blob', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/elements/r-blob.gif', alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'y-blob', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/elements/y-blob.gif', alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'g-blob', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/elements/g-blob.gif', alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        'Gone are the days where you have to spend hours sitting in court just to pay hefty fees and be assigned defensive driving. At Markowitz Law, you have the option to let our attorneys fight ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          'for'
        ),
        ' you or ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          'with'
        ),
        ' you in court to get the results you want.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        },
        'See which route is best for you, below.'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row section', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', { width: '420', height: '300', src: 'https://www.youtube.com/embed/H8NExnW8fNM?rel=0&controls=0&showinfo=0',
        frameBorder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'home3', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'num-line', __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'num-label', __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          'NO.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'num-value', __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          '01'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'display-5', __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            'Court Valet'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'deco1', __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          'SAVE',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }),
          'YOUR',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }),
          'TIME'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'lead', __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          'If your schedule is not as flexible and you prefer to have one of our attorneys represent you in court on your behalf, Court Valet may be the best option for you.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'home-link', href: '/services', __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h5',
            { className: 'text-muted home-explore', __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            'EXPLORE YOUR OPTIONS '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'arrow', src: '/static/arrow-right.svg', alt: '', __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row section', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', { width: '420', height: '300', src: 'https://www.youtube.com/embed/jZ5zgDhmjYg?rel=0&controls=0&showinfo=0',
        frameBorder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'home4', __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'num-line', __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'num-label', __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          },
          'NO.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'num-value', __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          },
          '02'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'display-5', __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            'Ticket Defense'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'deco2', __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          },
          'SAVE',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }),
          'YOUR',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }),
          'ENERGY'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          { className: 'lead', __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          },
          'If your schedule is flexible and you prefer to attend court with one of our lawyers, Ticket Defense is the best option for you.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'home-link', href: '/services', __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h5',
            { className: 'text-muted home-explore', __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              }
            },
            'EXPLORE YOUR OPTIONS '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'arrow', src: '/static/arrow-right.svg', alt: '', __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          })
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'cta', __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h3',
        { className: 'display-4', __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        },
        'Save ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'orange', __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          },
          'time'
        ),
        '.',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }),
        'Save ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'yellow', __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          },
          'energy'
        ),
        '.',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }),
        'Submit your case today.'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'section legacy home5', __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'num-container', __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: '/static/20.svg', alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'num-overlay', __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            { className: 'display-4 head3', __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 100
                }
              },
              'Our Legacy'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h5',
        { className: 'text-muted', __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        },
        ' \xA0\xA0\xA0\xA0\xA0 Est. 1993'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'legacy-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        },
        'For more than 20 years, Markowitz Law has consistently delivered legal solutions and unparalleled value to Texas residents and its visitors. We\u2019ve earned our reputation as a top-performing firm through our experienced attorneys and results-driven practice model.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h4',
        { className: 'case-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        },
        'How We Can Help You'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_accordion__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'footer-info', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
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

  module.exports = "@charset \"UTF-8\";\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n@font-face {\n  font-family: 'Bebas Neue';\n  src: url(/static/fonts/BebasNeue-Regular.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Inter UI';\n  src: url(/static/fonts/Inter-UI-Regular.ttf) format(\"truetype\"); }\nbody {\n  font-family: 'Bebas Neue' !important; }\nh1 {\n  letter-spacing: 2.5px !important;\n  margin-bottom: 0;\n  padding-bottom: 12px; }\np {\n  font-size: medium;\n  color: #111517;\n  font-family: 'Inter UI', Arial, sans-serif !important;\n  font-weight: 400 !important;\n  font-size: 16px !important; }\n.display-4 {\n  line-height: 56px; }\n.head1 {\n  padding-top: .5em; }\n.head2, .head3 {\n  line-height: 46px;\n  font-size: 2.8em; }\n.action {\n  padding-top: 53%;\n  font-size: 13px !important;\n  margin-bottom: 6px; }\nhr {\n  background-color: #eb1c21;\n  height: 2px;\n  width: 13%;\n  float: left;\n  padding: 0;\n  margin: 0; }\n.top-nav {\n  display: none; }\n.bg-dark {\n  background-color: #eb1c21 !important; }\n.jumbotron {\n  padding-top: 12px;\n  border: none; }\n.container-fluid {\n  padding-left: 0;\n  padding-right: 0;\n  border: none; }\n.container-fluid .row {\n    margin-right: 0;\n    margin-left: 0;\n    color: #111517; }\n.container-fluid .marko-logo {\n    width: 100px;\n    display: block;\n    margin: auto; }\n.container-fluid .section h1, .container-fluid .section h2, .container-fluid .section h3, .container-fluid .section h4, .container-fluid .section h5, .container-fluid .section p {\n    padding-left: 15px;\n    padding-right: 15px; }\n.container-fluid .home1 {\n    padding-left: 20px; }\n.container-fluid .home1 img {\n      left: 25%; }\n.container-fluid .home2, .container-fluid .home3, .container-fluid .home4, .container-fluid .home5 {\n    padding-left: 20px;\n    padding-right: 20px; }\n.container-fluid .options {\n    padding-bottom: 4em;\n    padding-top: 2em; }\n.container-fluid .options .r-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: 160px;\n      margin-top: 10em; }\n.container-fluid .options .r-blob img {\n        width: 200px;\n        opacity: .9; }\n.container-fluid .options .y-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: -50px;\n      margin-top: 18em; }\n.container-fluid .options .y-blob img {\n        width: 162px;\n        opacity: .9; }\n.container-fluid .options .g-blob {\n      display: none; }\n.container-fluid .home3, .container-fluid .home4 {\n    margin-bottom: 5em; }\n.container-fluid .home3 .deco1, .container-fluid .home3 .deco2, .container-fluid .home4 .deco1, .container-fluid .home4 .deco2 {\n      display: none; }\n.container-fluid .home3 h1, .container-fluid .home4 h1 {\n      margin-top: 1.5em; }\n.container-fluid .home3 .num-line, .container-fluid .home4 .num-line {\n      margin-bottom: 1em;\n      margin-top: 5em;\n      height: 2px;\n      max-width: 2em;\n      background-color: #111; }\n.container-fluid .home3 .num-label, .container-fluid .home4 .num-label {\n      line-height: 1;\n      letter-spacing: .1em;\n      color: #111517;\n      font-size: 13px; }\n.container-fluid .home3 .num-value, .container-fluid .home4 .num-value {\n      font-size: 1.2em;\n      line-height: 1.5;\n      font-weight: 400px;\n      letter-spacing: .03em;\n      color: #111517; }\n.container-fluid .home3 .arrow, .container-fluid .home4 .arrow {\n      display: inline-block;\n      width: 21px;\n      margin-top: -2px; }\n.container-fluid .home3 img, .container-fluid .home4 img {\n      max-width: 100%;\n      vertical-align: middle;\n      display: inline-block;\n      border: 0; }\n.container-fluid .home3 .home-link, .container-fluid .home4 .home-link {\n      position: relative;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: inline-block;\n      margin-top: 2.5em;\n      padding-left: 3em;\n      text-decoration: none;\n      background-color: transparent;\n      -webkit-transition: color 0.4s ease-out 0s;\n      transition: color 0.4s ease-out 0s; }\n.container-fluid .home3 .home-explore, .container-fluid .home4 .home-explore {\n      display: inline-block;\n      margin-right: .2rem;\n      letter-spacing: .05em; }\n.container-fluid .legacy {\n    margin-bottom: 10em;\n    margin-top: 8em;\n    width: 100%; }\n.container-fluid .legacy .text-muted {\n      margin-left: 6em;\n      margin-top: 1em; }\n.container-fluid .legacy .text-muted::before {\n        content: \"———— \"; }\n.container-fluid .legacy .legacy-text {\n      margin-top: 4em;\n      margin-bottom: 4em; }\n.container-fluid .legacy .case-title {\n      margin-bottom: 1em; }\n.container-fluid .cta {\n    text-align: left;\n    background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.45))), url(\"/static/cta.jpg\") no-repeat center center fixed;\n    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.45)), url(\"/static/cta.jpg\") no-repeat center center fixed;\n    background-size: cover;\n    background-attachment: fixed;\n    color: white;\n    height: 622px;\n    padding-top: 23em;\n    padding-left: 15px;\n    text-shadow: 0px .25px .25px #111517; }\n.container-fluid .cta .yellow {\n      color: #ffd100; }\n.container-fluid .cta .orange {\n      color: #de561c; }\n.container-fluid .btn .btn-primary:focus {\n    outline: 0; }\n.container-fluid .img-fluid.banner {\n    height: 412px; }\n#accordion {\n  margin: auto; }\n#accordion .case-action {\n    color: white;\n    letter-spacing: .07em;\n    line-height: 3;\n    padding-left: 1.85em;\n    font-size: 13px !important; }\n#accordion .case-client {\n    color: white;\n    font-family: 'Bebas Neue';\n    font-size: 1.75em;\n    letter-spacing: .07em;\n    line-height: 1;\n    text-align: left;\n    padding: 0; }\n#accordion .card {\n    width: 100%;\n    padding: 0; }\n#accordion .red {\n    background-color: #ff1400;\n    margin-bottom: 1em; }\n#accordion .yellow {\n    background-color: #ffc300;\n    margin-bottom: 1em; }\n#accordion .blue {\n    background-color: #1b126c;\n    margin-bottom: 1em; }\n#accordion .orange {\n    background-color: #de561c; }\n#accordion .btn, #accordion .btn-link, #accordion .btn-link:focus, #accordion .btn-link:hover, #accordion .btn-link:active {\n    text-decoration: none !important;\n    color: #353535 !important;\n    width: 100%;\n    padding-left: 0;\n    padding-top: 10em; }\n#accordion .card-header {\n    border-bottom: none;\n    padding-left: 0; }\n#accordion .card-body p {\n    color: white; }\n.mobile-nav .navbar .mobnav > li {\n  font-size: 2.5em;\n  padding-right: .5em;\n  line-height: 1.25em; }\n.mobile-nav .navbar-dark .navbar-nav .nav-link {\n  color: white; }\n.mobile-nav .nav-icons {\n  height: 20px; }\n.mobile-nav .navbar-brand {\n  margin: 0;\n  padding-left: 15px; }\n#main {\n  background-image: url(\"/static/half-bill.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  min-height: 686px;\n  margin-bottom: 0; }\n#main h1, #main p {\n    width: 184px; }\n.num-container {\n  position: relative; }\n.num-container img {\n    width: 80%;\n    display: block;\n    margin: auto; }\n.num-overlay {\n  position: absolute;\n  bottom: 38px; }\n.footer-info {\n  height: auto;\n  padding-bottom: 2.5em; }\n.footer-info #footer {\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-bottom: 1em;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    letter-spacing: .07em; }\n.footer-info #footer h5, .footer-info #footer ul {\n      font-size: 13px; }\n.footer-info #footer ul {\n      margin-top: 2em;\n      padding: 0; }\n.footer-info #footer .footer-socials {\n      list-style-type: none; }\n.footer-info #footer .footer-socials .footer-social {\n        display: inline-block;\n        margin-right: 2em;\n        line-height: 1.6; }\n.footer-info #footer .footer-socials a {\n        text-decoration: none;\n        color: inherit; }\n.footer-info #footer .footer-copyright {\n      text-decoration: none;\n      color: white !important; }\n.footer-info #footer .footer-line {\n      background-color: #eb1c21;\n      height: 2px;\n      width: 75%;\n      float: left;\n      padding: 0;\n      margin: 0; }\n@media (min-width: 576px) {\n  p {\n    line-height: 34px; }\n  .head1, .head2, .head3 {\n    font-size: 76px;\n    line-height: 76px; }\n  .action {\n    padding-top: 20%; }\n  .row.section iframe {\n    width: 100%;\n    height: 400px; }\n  .container-fluid .home1 {\n    padding: 0;\n    max-width: 600px; }\n  .container-fluid .cta {\n    height: 700px;\n    padding-top: 30em;\n    padding-left: 40px; }\n  .container-fluid .marko-logo {\n    width: 132px; }\n  .container-fluid .home2, .container-fluid .home3, .container-fluid .home4, .container-fluid .home5 {\n    padding-left: 40px;\n    padding-right: 40px; }\n  .container-fluid .options {\n    padding-bottom: 4em;\n    padding-top: 4em; }\n    .container-fluid .options .r-blob {\n      left: 358px;\n      margin-top: 15.5em; }\n  .container-fluid .home3 .deco1, .container-fluid .home3 .deco2, .container-fluid .home4 .deco1, .container-fluid .home4 .deco2 {\n    display: block;\n    font-size: 25vw;\n    color: #f6f6f6;\n    position: absolute;\n    left: 60px;\n    z-index: -1;\n    line-height: .8; }\n  .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n    top: 9.95em; }\n  .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n    top: 15.35em; }\n  .container-fluid .home3 h1, .container-fluid .home4 h1 {\n    font-size: 52px;\n    line-height: 52px; }\n  .container-fluid .home3 .home-link, .container-fluid .home4 .home-link {\n    padding-left: 18em; }\n  .container-fluid .home3 .home-explore, .container-fluid .home4 .home-explore {\n    font-size: 22px; }\n  .container-fluid .legacy .text-muted {\n    margin-left: 14em;\n    font-size: 22px; }\n  .container-fluid .legacy .case-title {\n    font-size: 34px;\n    line-height: 34px; }\n  .container-fluid .legacy .num-container img {\n    width: 75%; }\n  .container-fluid .legacy .num-overlay {\n    bottom: 74px; }\n  .container-fluid #accordion .case-action {\n    font-size: 16px !important;\n    line-height: 28px; }\n  .footer-info {\n    padding-bottom: 6em; }\n    .footer-info #footer {\n      padding-left: 40px;\n      padding-right: 40px; }\n      .footer-info #footer h5, .footer-info #footer ul {\n        font-size: 16px;\n        letter-spacing: .09em; }\n      .footer-info #footer .footer-line {\n        width: 50%; } }\n@media (min-width: 768px) {\n  .mobile-nav {\n    display: none; }\n  .top-nav {\n    display: block; }\n  .navbar .navbar-brand {\n    color: #eb1c21; }\n  .navbar .navbar-nav > li {\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 14px;\n    letter-spacing: .09em; }\n  .navbar-light .navbar-nav .nav-link {\n    color: #111517; }\n  .jumbotron {\n    padding-top: 94px; }\n  .home1 .marko-logo {\n    display: none; }\n  #main {\n    background-image: url(\"/static/billboard.jpg\"); }\n    #main .head1, #main .head2, #main .head3 {\n      font-size: 85px;\n      line-height: 85px; }\n  .container-fluid .home1 {\n    max-width: 700px; }\n  .container-fluid .options {\n    padding-top: 6em;\n    padding-bottom: 8em; }\n    .container-fluid .options .r-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: 518px;\n      margin-top: 9em; }\n      .container-fluid .options .r-blob img {\n        width: 286px; }\n    .container-fluid .options .y-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: -20px;\n      margin-top: 18em; }\n      .container-fluid .options .y-blob img {\n        width: 286px; }\n  .container-fluid .home3, .container-fluid .home4 {\n    margin-bottom: 10em; }\n    .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n      top: 10em; }\n    .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n      top: 15.2em; }\n    .container-fluid .home3 .home-link, .container-fluid .home4 .home-link {\n      padding-left: 24em; }\n  .footer-info {\n    padding-bottom: 1em; }\n    .footer-info #footer {\n      padding-left: 60px;\n      padding-right: 60px; } }\n@media (min-width: 992px) {\n  p {\n    line-height: 32px; }\n  .navbar {\n    padding-left: 3rem; }\n  .navbar-nav > li {\n    padding-left: 30px;\n    padding-right: 30px; }\n  #main {\n    background-image: url(\"/static/full-bill.jpg\"); }\n    #main .head1, #main .head2, #main .head3 {\n      font-size: 75px;\n      line-height: 75px; }\n    #main h1, #main p {\n      width: 360px; }\n  .action {\n    padding-top: 14%; }\n  .row.section iframe {\n    width: 100%;\n    height: 556px; }\n  .container-fluid .home1 {\n    max-width: 880px; }\n  .container-fluid .home2 h1, .container-fluid .home2 p {\n    width: 600px;\n    padding-left: 100px; }\n  .container-fluid .options {\n    padding-top: 8em; }\n    .container-fluid .options .r-blob {\n      left: 600px;\n      margin-top: 2em; }\n      .container-fluid .options .r-blob img {\n        width: 376px; }\n    .container-fluid .options .y-blob {\n      left: 0px;\n      margin-top: 16em; }\n      .container-fluid .options .y-blob img {\n        width: 296px; }\n    .container-fluid .options .g-blob {\n      display: block;\n      position: absolute;\n      z-index: -3;\n      left: 760px;\n      margin-top: 18em; }\n      .container-fluid .options .g-blob img {\n        width: 200px; }\n  .container-fluid .home3, .container-fluid .home4 {\n    padding-left: 268px; }\n    .container-fluid .home3 h1, .container-fluid .home3 p, .container-fluid .home4 h1, .container-fluid .home4 p {\n      width: 600px; }\n    .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n      padding-left: 20px;\n      font-size: 21vw;\n      top: 9.5em; }\n    .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n      padding-left: 20px;\n      font-size: 21vw;\n      top: 15.1em; }\n  .container-fluid .legacy .text-muted {\n    margin-left: 24em; }\n  .container-fluid .legacy .num-container img {\n    width: 55%; }\n  .container-fluid .legacy .num-overlay {\n    bottom: 64px;\n    left: 100px; }\n  .container-fluid .legacy p {\n    width: 600px;\n    display: block;\n    margin: auto; }\n  .container-fluid #accordion {\n    padding-left: 0em; }\n    .container-fluid #accordion .yellow {\n      margin-right: 1em; }\n      .container-fluid #accordion .yellow:hover {\n        opacity: .9; }\n    .container-fluid #accordion .blue {\n      margin-right: 1em; }\n      .container-fluid #accordion .blue:hover {\n        opacity: .9; }\n    .container-fluid #accordion .red:hover {\n      opacity: .9; }\n    .container-fluid #accordion .orange:hover {\n      opacity: .9; }\n    .container-fluid #accordion .card {\n      padding: 0; }\n    .container-fluid #accordion .card-body p {\n      width: auto; }\n    .container-fluid #accordion .case-action {\n      width: auto; }\n  .footer-info {\n    padding-bottom: 0; }\n    .footer-info #footer {\n      padding-left: 30px;\n      padding-right: 30px; }\n      .footer-info #footer .info {\n        line-height: 1;\n        margin-top: .5em;\n        font-size: 14px; }\n      .footer-info #footer .footer-socials {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: stretch;\n            -ms-flex-align: stretch;\n                align-items: stretch;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n        -webkit-box-flex: 50%;\n            -ms-flex: 50%;\n                flex: 50%;\n        text-align: right;\n        line-height: 1;\n        margin: 0;\n        font-size: 14px; }\n      .footer-info #footer .footer-line {\n        display: none; } }\n";
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