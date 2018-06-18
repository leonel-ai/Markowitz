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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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
              { className: 'nav-link', href: '/contact', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
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
              { className: 'nav-link', href: '/contact', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              'Contact'
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
              { className: 'nav-link', href: 'https://app.clio.com/session/new', target: '_blank', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
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

/***/ "./pages/contact.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer__ = __webpack_require__("./components/footer.js");


var _jsxFileName = '/Users/leonelaguzman/Documents/Clients/Markowitz/marko18/pages/contact.js';









var Contact = function Contact() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'container-fluid', id: 'contact-page', __source: {
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
        'Contact | Markowitz Law'
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
      { id: 'contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container contact-header', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/mlaw.svg', alt: 'logo', className: 'img-fluid marko-logo', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'contact-banner', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/services-temp.png', alt: '', className: 'img-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'banner-overlay', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'display-4', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          'HAVE PROBLEMS ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'banner-line', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'banner-subtitle', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'banner-line', __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }),
        ' 25 YEARS STRONG'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'action', __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        'Scroll'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row section contact-forms', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        },
        'Let\'s Get Started'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        'Please fill out the form below and we will be in contact shortly.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { action: 'https://docs.google.com/forms/u/2/d/e/1FAIpQLSfMudiGEhtZqJrpY4axY_C4Ubkj52bWKtbZr0WamXB1d1BGSA/formResponse',
          className: 'clio-intake-form', __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'hidden', name: 'token', value: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'hidden', name: 'utm_campaign', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            },
            'Reason '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'entry.2018616690', id: 'c1', value: 'Submit Case', __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { htmlFor: 'c1', __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            '\xA0 Submit Case'
          ),
          '\xA0',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'entry.2018616690', id: 'c2', value: 'Send Message', __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { htmlFor: 'c2', __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            '\xA0 Send Message'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            'First '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'entry.1601318407', required: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            'Last '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'entry.1992502422', required: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            'Email '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email', name: 'emailAddress', required: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            },
            'Phone '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'entry.789951872', required: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            'Tell us your story '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { name: 'entry.1666005408', id: 'contact-msg', cols: '36', rows: '4', required: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            },
            'Citation # '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'entry.236670299', __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            },
            'License # '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', name: 'entry.88074758', __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: 'deadline', __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            },
            'Due Date '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'date', name: 'entry.371323935', __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            }
          },
          'By submitting, you agree to this agreement and there\'s no way out of it.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'submit', value: 'Send', __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row section contact-cta', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'clio-prompt', __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        },
        'Already started your case?'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h4',
        { className: 'clio-cta', __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        },
        'sign into clio'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row section contact-info', __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'col-sm-12 col-md-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        },
        'include map here'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'col-sm-12 col-md-4', __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 110
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              }
            },
            'Markowitz Law'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 112
              }
            },
            'address street'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              }
            },
            'Houston, TX 77xxx'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              }
            },
            'tel 000-000-0000'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'li',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              }
            },
            'email@email.com'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row section bookend', __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'col-sm-12 col-md-6', __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bookend-banner', __source: {
              fileName: _jsxFileName,
              lineNumber: 122
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/services-temp.png', alt: '', className: 'img-fluid', __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'col-sm-12 col-md-6', __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'bookend-text', __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'bookend-deco', __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'num-line', __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'num-label', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 130
                }
              },
              'NO.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'num-value', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 131
                }
              },
              '04'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              }
            },
            'Let\'s do some business.'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '/', className: 'mini-cta', __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'banner-line', __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            }),
            'Action if needed'
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'footer-info', __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./styles/index.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "@charset \"UTF-8\";\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0;\n}\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit;\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block;\n}\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none;\n}\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block;\n}\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none;\n}\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none;\n}\n@font-face {\n  font-family: 'Bebas Neue';\n  src: url(/static/fonts/BebasNeue-Regular.otf) format(\"opentype\"); }\n@font-face {\n  font-family: 'Inter UI';\n  src: url(/static/fonts/Inter-UI-Regular.ttf) format(\"truetype\"); }\nbody {\n  font-family: 'Bebas Neue' !important; }\nh1 {\n  letter-spacing: 2.5px !important;\n  margin-bottom: 0;\n  padding-bottom: 12px; }\np {\n  font-size: medium;\n  color: #111517;\n  font-family: 'Inter UI', Arial, sans-serif !important;\n  font-weight: 400 !important;\n  font-size: 16px !important; }\n.display-4 {\n  line-height: 56px; }\n.head1 {\n  padding-top: .5em; }\n.head2, .head3 {\n  line-height: 46px;\n  font-size: 2.8em; }\n.action {\n  padding-top: 40%;\n  font-size: 13px !important;\n  margin-bottom: 6px; }\nhr {\n  background-color: #eb1c21;\n  height: 2px;\n  width: 13%;\n  float: left;\n  padding: 0;\n  margin: 0; }\n.top-nav {\n  display: none; }\n.bg-dark {\n  background-color: #eb1c21 !important; }\n.jumbotron {\n  padding-top: 12px;\n  border: none; }\n.container-fluid {\n  padding-left: 0;\n  padding-right: 0;\n  border: none; }\n.container-fluid .row {\n    margin-right: 0;\n    margin-left: 0;\n    color: #111517; }\n.container-fluid .marko-logo {\n    width: 100px;\n    display: block;\n    margin: auto; }\n.container-fluid .section h1, .container-fluid .section h2, .container-fluid .section h3, .container-fluid .section h4, .container-fluid .section h5, .container-fluid .section p {\n    padding-left: 15px;\n    padding-right: 15px; }\n.container-fluid .home-header {\n    position: fixed;\n    margin: 0 auto;\n    width: 100%;\n    top: 2%;\n    z-index: 1030; }\n.container-fluid .home1 {\n    padding-left: 20px; }\n.container-fluid .home2, .container-fluid .home3, .container-fluid .home4, .container-fluid .home5 {\n    padding-left: 20px;\n    padding-right: 20px; }\n.container-fluid .options {\n    padding-bottom: 4em;\n    padding-top: 2em; }\n.container-fluid .options .r-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: 160px;\n      margin-top: 10em; }\n.container-fluid .options .r-blob img {\n        width: 200px;\n        opacity: .9; }\n.container-fluid .options .y-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: -50px;\n      margin-top: 18em; }\n.container-fluid .options .y-blob img {\n        width: 162px;\n        opacity: .9; }\n.container-fluid .options .g-blob {\n      display: none; }\n.container-fluid .home3, .container-fluid .home4 {\n    margin-bottom: 5em; }\n.container-fluid .home3 .deco1, .container-fluid .home3 .deco2, .container-fluid .home4 .deco1, .container-fluid .home4 .deco2 {\n      display: none; }\n.container-fluid .home3 h1, .container-fluid .home4 h1 {\n      margin-top: 1.5em; }\n.container-fluid .home3 .num-line, .container-fluid .home4 .num-line {\n      margin-bottom: 1em;\n      margin-top: 5em;\n      height: 2px;\n      max-width: 2em;\n      background-color: #111; }\n.container-fluid .home3 .num-label, .container-fluid .home4 .num-label {\n      line-height: 1;\n      letter-spacing: .1em;\n      color: #111517;\n      font-size: 13px; }\n.container-fluid .home3 .num-value, .container-fluid .home4 .num-value {\n      font-size: 1.2em;\n      line-height: 1.5;\n      font-weight: 400px;\n      letter-spacing: .03em;\n      color: #111517; }\n.container-fluid .home3 .arrow, .container-fluid .home4 .arrow {\n      display: inline-block;\n      width: 21px;\n      margin-top: -2px; }\n.container-fluid .home3 img, .container-fluid .home4 img {\n      max-width: 100%;\n      vertical-align: middle;\n      display: inline-block;\n      border: 0; }\n.container-fluid .home3 .home-link, .container-fluid .home4 .home-link {\n      position: relative;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: inline-block;\n      margin-top: 2.5em;\n      padding-left: 3em;\n      text-decoration: none;\n      background-color: transparent;\n      -webkit-transition: color 0.4s ease-out 0s;\n      transition: color 0.4s ease-out 0s; }\n.container-fluid .home3 .home-explore, .container-fluid .home4 .home-explore {\n      display: inline-block;\n      margin-right: .2rem;\n      letter-spacing: .05em; }\n.container-fluid .legacy {\n    margin-bottom: 10em;\n    margin-top: 8em;\n    width: 100%; }\n.container-fluid .legacy .text-muted {\n      margin-left: 6em;\n      margin-top: 1em; }\n.container-fluid .legacy .text-muted::before {\n        content: \"———— \"; }\n.container-fluid .legacy .legacy-text {\n      margin-top: 4em;\n      margin-bottom: 4em; }\n.container-fluid .legacy .case-title {\n      margin-bottom: 1em; }\n.container-fluid .cta {\n    text-align: left;\n    background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.45))), url(\"/static/cta.jpg\") no-repeat center center fixed;\n    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.45)), url(\"/static/cta.jpg\") no-repeat center center fixed;\n    background-size: cover;\n    background-attachment: fixed;\n    color: white;\n    height: 622px;\n    padding-top: 23em;\n    padding-left: 15px;\n    text-shadow: 0px .25px .25px #111517; }\n.container-fluid .cta .yellow {\n      color: #ffd100; }\n.container-fluid .cta .orange {\n      color: #de561c; }\n.container-fluid .btn .btn-primary:focus {\n    outline: 0; }\n.container-fluid .img-fluid.banner {\n    height: 412px; }\n#accordion {\n  margin: auto; }\n#accordion .case-action {\n    color: white;\n    letter-spacing: .07em;\n    line-height: 3;\n    padding-left: 1.85em;\n    font-size: 13px !important; }\n#accordion .case-client {\n    color: white;\n    font-family: 'Bebas Neue';\n    font-size: 1.75em;\n    letter-spacing: .07em;\n    line-height: 1;\n    text-align: left;\n    padding: 0; }\n#accordion .card {\n    width: 100%;\n    padding: 0; }\n#accordion .red {\n    background-color: #ff1400;\n    margin-bottom: 1em; }\n#accordion .yellow {\n    background-color: #ffc300;\n    margin-bottom: 1em; }\n#accordion .blue {\n    background-color: #1b126c;\n    margin-bottom: 1em; }\n#accordion .orange {\n    background-color: #de561c; }\n#accordion .btn, #accordion .btn-link, #accordion .btn-link:focus, #accordion .btn-link:hover, #accordion .btn-link:active {\n    text-decoration: none !important;\n    color: #353535 !important;\n    width: 100%;\n    padding-left: 0;\n    padding-top: 10em; }\n#accordion .card-header {\n    border-bottom: none;\n    padding-left: 0; }\n#accordion .card-body p {\n    color: white; }\n.mobile-nav .navbar .mobnav > li {\n  font-size: 5em;\n  padding-right: .3em;\n  line-height: 1;\n  letter-spacing: .045em; }\n.mobile-nav .navbar-dark .navbar-nav .nav-link {\n  color: white; }\n.mobile-nav .nav-icons {\n  height: 20px; }\n.mobile-nav .navbar-brand {\n  margin: 0;\n  padding-left: 15px; }\n#main {\n  background-image: url(\"/static/half-bill.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  min-height: 686px;\n  margin-bottom: 0;\n  margin-top: 12%; }\n#main h1, #main p {\n    width: 184px; }\n.num-container {\n  position: relative; }\n.num-container img {\n    width: 80%;\n    display: block;\n    margin: auto; }\n.num-overlay {\n  position: absolute;\n  bottom: 38px; }\n.footer-info {\n  height: auto;\n  padding-bottom: 2.5em; }\n.footer-info #footer {\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-bottom: 1em;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    letter-spacing: .07em; }\n.footer-info #footer h5, .footer-info #footer ul {\n      font-size: 13px; }\n.footer-info #footer ul {\n      margin-top: 2em;\n      padding: 0; }\n.footer-info #footer .footer-socials {\n      list-style-type: none; }\n.footer-info #footer .footer-socials .footer-social {\n        display: inline-block;\n        margin-right: 2em;\n        line-height: 1.6; }\n.footer-info #footer .footer-socials a {\n        text-decoration: none;\n        color: inherit; }\n.footer-info #footer .footer-copyright {\n      text-decoration: none;\n      color: white !important; }\n.footer-info #footer .footer-line {\n      background-color: #eb1c21;\n      height: 2px;\n      width: 75%;\n      float: left;\n      padding: 0;\n      margin: 0; }\n/* services */\n#services-page h1, #services-page p {\n  margin-left: 8px;\n  margin-right: 8px; }\n#services-page #services {\n  background-color: white;\n  height: 70px;\n  padding-top: 12px; }\n#services-page #services .services-header {\n    position: fixed;\n    z-index: 1030; }\n#services-page .services-banner {\n  margin-top: 8em;\n  margin-bottom: 10em;\n  position: relative; }\n#services-page .services-banner img {\n    display: block;\n    margin: 0 auto;\n    height: auto;\n    max-width: 100%; }\n#services-page .services-banner .banner-line {\n    width: 25%;\n    display: inline-block;\n    height: 1px;\n    min-width: 5rem;\n    margin-right: 1em;\n    margin-bottom: .375em;\n    margin-left: 1em;\n    background-color: rgba(27, 27, 28, 0.13); }\n#services-page .services-banner .banner-overlay {\n    position: absolute;\n    bottom: 350px;\n    padding-left: 30px; }\n#services-page .services-banner .banner-overlay h1 {\n      font-size: 24px;\n      line-height: 26px;\n      letter-spacing: .035em; }\n#services-page .services-banner .banner-subtitle {\n    position: absolute;\n    left: 25%;\n    bottom: 30%; }\n#services-page .services-banner .action {\n    padding-top: 20%;\n    font-size: 13px !important;\n    text-align: center;\n    margin-bottom: 6px; }\n#services-page .services-banner hr {\n    margin: 0 auto;\n    padding: auto;\n    float: inherit; }\n#services-page .services-detail {\n  margin-bottom: 3em; }\n#services-page .services-detail .txt-deco {\n    position: relative;\n    display: block; }\n#services-page .services-detail .txt-deco .deco-line {\n      position: absolute;\n      left: 2em;\n      top: .28em;\n      display: block;\n      width: 3em;\n      height: 2px;\n      background-color: #111517; }\n#services-page .services-detail .txt-deco .deco-label {\n      padding-left: 6em;\n      margin-bottom: 2em;\n      line-height: 1; }\n#services-page .services-detail p {\n    line-height: 1.6;\n    margin-bottom: 1.75em; }\n#services-page .services-detail .o-blob {\n    display: block;\n    position: absolute;\n    z-index: -2;\n    left: 160px;\n    margin-top: 14em; }\n#services-page .services-detail .o-blob img {\n      width: 210px;\n      opacity: .9; }\n#services-page .services-detail .b-blob {\n    display: block;\n    position: absolute;\n    z-index: -2;\n    left: -160px;\n    margin-top: -11em; }\n#services-page .services-detail .b-blob img {\n      width: 400px;\n      opacity: .85; }\n#services-page .services-detail h4 {\n    font-size: 28px;\n    line-height: 36px; }\n#services-page .services-detail ul, #services-page .services-detail li {\n    list-style: none;\n    font-size: 14px;\n    line-height: 22px;\n    font-family: 'Inter UI'; }\n#services-page .questions-grid {\n  margin-bottom: 3em; }\n#services-page .questions-grid #faq .card, #services-page .questions-grid #faq .card-header {\n    background-color: white !important;\n    padding: 3em; }\n#services-page .questions-grid #faq .btn, #services-page .questions-grid #faq .btn-link {\n    color: #111517;\n    text-decoration: none;\n    padding: 0;\n    max-width: 16rem;\n    text-align: left;\n    white-space: normal; }\n#services-page .questions-grid #faq .btn:hover, #services-page .questions-grid #faq .btn:active, #services-page .questions-grid #faq .btn:visited, #services-page .questions-grid #faq .btn-link:hover, #services-page .questions-grid #faq .btn-link:active, #services-page .questions-grid #faq .btn-link:visited {\n      text-decoration: none; }\n#services-page .questions-grid #faq .faq {\n    margin: 0 0 5%;\n    padding: 0;\n    border: 2px solid #f6f6f6; }\n#services-page .questions-grid #faq .faq .case-action {\n      margin-bottom: 2em;\n      line-height: 1.6;\n      font-size: 12px; }\n#services-page .questions-grid #faq .faq .case-client {\n      max-width: 16rem;\n      margin-bottom: 0;\n      letter-spacing: .045rem;\n      font-family: 'Bebas Neue'; }\n#services-page .questions-grid #faq .faq-line {\n    width: 2em;\n    height: 1px;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    background-color: #f6f6f6;\n    color: #f6f6f6; }\n#services-page .questions-grid .banner-line {\n    width: 25%;\n    display: inline-block;\n    height: 1px;\n    min-width: 3rem;\n    margin-right: 1em;\n    margin-bottom: .375em;\n    margin-left: 1em;\n    background-color: #eb1c21; }\n#services-page .questions-grid .faq-contact {\n    margin-top: 5em;\n    margin-left: 2em; }\n#services-page .resources-detail {\n  margin-top: 0;\n  padding-top: 0;\n  margin-bottom: 8em; }\n#services-page .resources-detail .res-info {\n    margin-bottom: 3em;\n    margin-left: 40px;\n    margin-right: 40px; }\n#services-page .resources-detail .res-info .num-line {\n      margin-bottom: 1em;\n      margin-top: 0;\n      height: 2px;\n      max-width: 2em;\n      background-color: #111; }\n#services-page .resources-detail .res-info .num-label {\n      line-height: 1;\n      letter-spacing: .1em;\n      color: #111517;\n      font-size: 13px; }\n#services-page .resources-detail .res-info .num-value {\n      font-size: 1.2em;\n      line-height: 1.5;\n      font-weight: 400px;\n      letter-spacing: .03em;\n      color: #111517; }\n#services-page .resources-detail .txt-deco {\n    position: relative;\n    display: block;\n    margin-top: 1em; }\n#services-page .resources-detail .txt-deco .deco-line {\n      position: absolute;\n      left: 3em;\n      top: .28em;\n      display: block;\n      width: 3em;\n      height: 2px;\n      background-color: #111517; }\n#services-page .resources-detail .txt-deco .deco-label {\n      padding-left: 7em;\n      margin-bottom: 2em;\n      line-height: 1; }\n#services-page .resources-detail p {\n    line-height: 1.6;\n    margin-bottom: 1.75em; }\n#services-page .resources-detail h3 {\n    padding-left: 40px;\n    padding-right: 40px; }\n#services-page #resources {\n  margin: auto;\n  width: 100%; }\n#services-page #resources .res-action {\n    color: white;\n    letter-spacing: .07em;\n    line-height: 3;\n    padding-left: 1.85em;\n    font-size: 13px !important; }\n#services-page #resources .res-header {\n    color: white;\n    font-family: 'Bebas Neue';\n    font-size: 1.75em;\n    letter-spacing: .07em;\n    line-height: 1;\n    text-align: left;\n    padding: 0; }\n#services-page #resources .card {\n    width: 100%;\n    padding: 0; }\n#services-page #resources .red {\n    background-color: #ff1400;\n    margin-bottom: 1em; }\n#services-page #resources .yellow {\n    background-color: #ffc300;\n    margin-bottom: 1em; }\n#services-page #resources .blue {\n    background-color: #1b126c;\n    margin-bottom: 1em; }\n#services-page #resources .btn, #services-page #resources .btn-link, #services-page #resources .btn-link:focus, #services-page #resources .btn-link:hover, #services-page #resources .btn-link:active {\n    text-decoration: none !important;\n    color: #353535 !important;\n    width: 100%;\n    padding-left: 0;\n    padding-top: 10em; }\n#services-page #resources .card-header {\n    border-bottom: none;\n    padding-left: 0; }\n#services-page #resources .card-body p, #services-page #resources a {\n    color: white;\n    line-height: .75; }\n#contact-page h1, #contact-page p {\n  margin-left: 8px;\n  margin-right: 8px; }\n#contact-page #contact {\n  background-color: white;\n  height: 70px;\n  padding-top: 12px; }\n#contact-page #contact .contact-header {\n    position: fixed;\n    z-index: 1030; }\n#contact-page .contact-banner {\n  margin-top: 8em;\n  margin-bottom: 10em;\n  position: relative; }\n#contact-page .contact-banner img {\n    display: block;\n    margin: 0 auto;\n    height: auto;\n    max-width: 100%; }\n#contact-page .contact-banner .banner-line {\n    width: 25%;\n    display: inline-block;\n    height: 1px;\n    min-width: 5rem;\n    margin-right: 1em;\n    margin-bottom: .375em;\n    margin-left: 1em;\n    background-color: rgba(27, 27, 28, 0.13); }\n#contact-page .contact-banner .banner-overlay {\n    position: absolute;\n    bottom: 350px;\n    padding-left: 30px; }\n#contact-page .contact-banner .banner-overlay h1 {\n      font-size: 24px;\n      line-height: 26px;\n      letter-spacing: .035em; }\n#contact-page .contact-banner .banner-subtitle {\n    position: absolute;\n    left: 25%;\n    bottom: 30%; }\n#contact-page .contact-banner .action {\n    padding-top: 20%;\n    font-size: 13px !important;\n    text-align: center;\n    margin-bottom: 6px; }\n#contact-page .contact-banner hr {\n    margin: 0 auto;\n    padding: auto;\n    float: inherit; }\n#contact-page .contact-forms {\n  padding: 2em;\n  border: 1px solid red; }\n#contact-page .contact-cta {\n  margin-top: 3em;\n  padding: 3em;\n  border: 1px solid blue; }\n#contact-page .contact-info {\n  margin-top: 3em; }\n#contact-page .bookend {\n  margin-top: 3em;\n  margin-bottom: 5em; }\n#contact-page .bookend .bookend-text {\n    margin-left: 20px; }\n#contact-page .bookend .bookend-text .bookend-deco {\n      margin-left: 20px;\n      margin-bottom: 2em; }\n#contact-page .bookend .banner-line {\n    width: 25%;\n    display: inline-block;\n    height: 1px;\n    min-width: 5rem;\n    margin-right: 1em;\n    margin-bottom: .375em;\n    margin-left: 1em;\n    background-color: rgba(27, 27, 28, 0.13); }\n@media (min-width: 576px) {\n  p {\n    line-height: 34px; }\n  .head1, .head2, .head3 {\n    font-size: 76px;\n    line-height: 76px; }\n  .action {\n    padding-top: 10vh; }\n  .row.section iframe {\n    width: 100%;\n    height: 400px; }\n  .container-fluid .home1 {\n    padding: 0;\n    max-width: 600px; }\n  .container-fluid .cta {\n    height: 700px;\n    padding-top: 30em;\n    padding-left: 40px; }\n  .container-fluid .marko-logo {\n    width: 132px; }\n  .container-fluid .home2, .container-fluid .home3, .container-fluid .home4, .container-fluid .home5 {\n    padding-left: 40px;\n    padding-right: 40px; }\n  .container-fluid .options {\n    padding-bottom: 4em;\n    padding-top: 4em; }\n    .container-fluid .options .r-blob {\n      left: 358px;\n      margin-top: 15.5em; }\n  .container-fluid .home3 .deco1, .container-fluid .home3 .deco2, .container-fluid .home4 .deco1, .container-fluid .home4 .deco2 {\n    display: block;\n    font-size: 25vw;\n    color: #f6f6f6;\n    position: absolute;\n    left: 60px;\n    z-index: -1;\n    line-height: .8; }\n  .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n    top: 9.95em; }\n  .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n    top: 15.35em; }\n  .container-fluid .home3 h1, .container-fluid .home4 h1 {\n    font-size: 52px;\n    line-height: 52px; }\n  .container-fluid .home3 .home-link, .container-fluid .home4 .home-link {\n    padding-left: 18em; }\n  .container-fluid .home3 .home-explore, .container-fluid .home4 .home-explore {\n    font-size: 22px; }\n  .container-fluid .legacy .text-muted {\n    margin-left: 14em;\n    font-size: 22px; }\n  .container-fluid .legacy .case-title {\n    font-size: 34px;\n    line-height: 34px; }\n  .container-fluid .legacy .num-container img {\n    width: 75%; }\n  .container-fluid .legacy .num-overlay {\n    bottom: 74px; }\n  .container-fluid #accordion .case-action {\n    font-size: 16px !important;\n    line-height: 28px; }\n  .footer-info {\n    padding-bottom: 6em; }\n    .footer-info #footer {\n      padding-left: 40px;\n      padding-right: 40px; }\n      .footer-info #footer h5, .footer-info #footer ul {\n        font-size: 16px;\n        letter-spacing: .09em; }\n      .footer-info #footer .footer-line {\n        width: 50%; }\n  /* services */\n  .questions-grid {\n    margin-bottom: 3em; }\n    .questions-grid #faq .btn, .questions-grid #faq .btn-link {\n      max-width: 16rem;\n      text-align: left;\n      white-space: normal; }\n      .questions-grid #faq .btn:hover, .questions-grid #faq .btn:active, .questions-grid #faq .btn:visited, .questions-grid #faq .btn-link:hover, .questions-grid #faq .btn-link:active, .questions-grid #faq .btn-link:visited {\n        text-decoration: none; }\n    .questions-grid #faq .faq {\n      margin: 0 0 5%;\n      padding: 0;\n      border: 2px solid #f6f6f6; }\n      .questions-grid #faq .faq .case-action {\n        margin-bottom: 2em;\n        line-height: 1.6;\n        font-size: 12px; }\n      .questions-grid #faq .faq .case-client {\n        max-width: 16rem;\n        margin-bottom: 0;\n        letter-spacing: .045rem;\n        font-family: 'Bebas Neue'; }\n    .questions-grid #faq .faq-line {\n      width: 2em;\n      height: 1px;\n      margin-top: 1em;\n      margin-bottom: 1em;\n      background-color: #f6f6f6;\n      color: #f6f6f6; }\n    .questions-grid .banner-line {\n      width: 25%;\n      display: inline-block;\n      height: 1px;\n      min-width: 3rem;\n      margin-right: 1em;\n      margin-bottom: .375em;\n      margin-left: 1em;\n      background-color: #eb1c21; }\n    .questions-grid .faq-contact {\n      margin-top: 5em;\n      margin-left: 2em; } }\n@media (min-width: 768px) {\n  .mobile-nav {\n    display: none; }\n  .top-nav {\n    display: block; }\n  .navbar .navbar-brand {\n    color: #eb1c21; }\n  .navbar .navbar-nav > li {\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 14px;\n    letter-spacing: .09em; }\n  .navbar-light .navbar-nav .nav-link {\n    color: #111517; }\n  .jumbotron {\n    padding-top: 94px; }\n  .home-header, .services-header {\n    display: none; }\n  #main {\n    background-image: url(\"/static/billboard.jpg\");\n    min-height: 100vh;\n    margin-top: 0; }\n    #main .head1, #main .head2, #main .head3 {\n      font-size: 85px;\n      line-height: 85px; }\n    #main .head1 {\n      margin-top: 0; }\n  .action {\n    display: none; }\n  .container-fluid .home1 {\n    max-width: 800px; }\n  .container-fluid .options {\n    padding-top: 6em;\n    padding-bottom: 8em; }\n    .container-fluid .options .r-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: 518px;\n      margin-top: 9em; }\n      .container-fluid .options .r-blob img {\n        width: 286px; }\n    .container-fluid .options .y-blob {\n      display: block;\n      position: absolute;\n      z-index: -2;\n      left: -20px;\n      margin-top: 18em; }\n      .container-fluid .options .y-blob img {\n        width: 286px; }\n  .container-fluid .home3, .container-fluid .home4 {\n    margin-bottom: 10em; }\n    .container-fluid .home3 h1, .container-fluid .home4 h1 {\n      font-size: 72px;\n      line-height: 72px; }\n    .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n      top: 10em; }\n    .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n      top: 15.2em; }\n    .container-fluid .home3 .home-link, .container-fluid .home4 .home-link {\n      padding-left: 24em; }\n  .footer-info {\n    padding-bottom: 1em; }\n    .footer-info #footer {\n      padding-left: 60px;\n      padding-right: 60px; }\n  /* services */\n  .services-detail h4 {\n    margin-top: 1.5em; } }\n@media (min-width: 992px) {\n  p {\n    line-height: 32px; }\n  .navbar {\n    padding-left: 3rem; }\n    .navbar .navbar-nav > li {\n      font-size: 15px;\n      line-height: 15px; }\n  .navbar-nav > li {\n    padding-left: 30px;\n    padding-right: 30px; }\n  #main {\n    background-image: url(\"/static/full-bill.jpg\"); }\n    #main .head1, #main .head2, #main .head3 {\n      font-size: 75px;\n      line-height: 75px; }\n    #main h1, #main p {\n      width: 360px; }\n  .row.section iframe {\n    width: 100%;\n    height: 556px; }\n  .container-fluid .home1 {\n    max-width: 880px; }\n  .container-fluid .home2 h1, .container-fluid .home2 p {\n    width: 600px;\n    padding-left: 100px; }\n  .container-fluid .options {\n    padding-top: 8em; }\n    .container-fluid .options .r-blob {\n      left: 600px;\n      margin-top: 2em; }\n      .container-fluid .options .r-blob img {\n        width: 376px; }\n    .container-fluid .options .y-blob {\n      left: 0px;\n      margin-top: 16em; }\n      .container-fluid .options .y-blob img {\n        width: 296px; }\n    .container-fluid .options .g-blob {\n      display: block;\n      position: absolute;\n      z-index: -3;\n      left: 760px;\n      margin-top: 18em; }\n      .container-fluid .options .g-blob img {\n        width: 200px; }\n  .container-fluid .home3, .container-fluid .home4 {\n    padding-left: 268px; }\n    .container-fluid .home3 h1, .container-fluid .home3 p, .container-fluid .home4 h1, .container-fluid .home4 p {\n      width: 600px; }\n    .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n      padding-left: 20px;\n      font-size: 21vw;\n      top: 9.35em; }\n    .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n      padding-left: 20px;\n      font-size: 21vw;\n      top: 15em; }\n  .container-fluid .legacy .text-muted {\n    margin-left: 24em; }\n  .container-fluid .legacy .num-container img {\n    width: 55%; }\n  .container-fluid .legacy .num-overlay {\n    bottom: 64px;\n    left: 100px; }\n  .container-fluid .legacy p {\n    width: 600px;\n    display: block;\n    margin: auto; }\n  .container-fluid #accordion {\n    padding-left: 0em; }\n    .container-fluid #accordion .yellow {\n      margin-right: 1em; }\n      .container-fluid #accordion .yellow:hover {\n        opacity: .9; }\n    .container-fluid #accordion .blue {\n      margin-right: 1em; }\n      .container-fluid #accordion .blue:hover {\n        opacity: .9; }\n    .container-fluid #accordion .red:hover {\n      opacity: .9; }\n    .container-fluid #accordion .orange:hover {\n      opacity: .9; }\n    .container-fluid #accordion .card {\n      padding: 0; }\n    .container-fluid #accordion .card-body p {\n      width: auto; }\n    .container-fluid #accordion .case-action {\n      width: auto; }\n  .footer-info {\n    padding-bottom: 0; }\n    .footer-info #footer {\n      padding-left: 30px;\n      padding-right: 30px; }\n      .footer-info #footer .info {\n        line-height: 1;\n        margin-top: .5em;\n        font-size: 14px; }\n      .footer-info #footer .footer-socials {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: stretch;\n            -ms-flex-align: stretch;\n                align-items: stretch;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n        -webkit-box-flex: 50%;\n            -ms-flex: 50%;\n                flex: 50%;\n        text-align: right;\n        line-height: 1;\n        margin: 0;\n        font-size: 14px; }\n      .footer-info #footer .footer-line {\n        display: none; } }\n@media (min-width: 1200px) {\n  .row.section iframe {\n    height: 768px; }\n  #main .head1 {\n    font-size: 104px;\n    line-height: 104px; }\n  #main h1, #main p {\n    width: 400px; }\n  .container-fluid .home1 {\n    max-width: 1000px; }\n  .container-fluid .cta {\n    padding-left: 80px; }\n  .container-fluid .marko-logo {\n    width: 150px; }\n  .container-fluid .home2 h1, .container-fluid .home2 p {\n    padding-left: 220px;\n    width: 790px; }\n  .container-fluid .options {\n    padding-bottom: 10em;\n    padding-top: 8em; }\n    .container-fluid .options .r-blob {\n      left: 780px; }\n      .container-fluid .options .r-blob img {\n        width: 420px; }\n    .container-fluid .options .y-blob {\n      left: 40px; }\n      .container-fluid .options .y-blob img {\n        width: 320px; }\n    .container-fluid .options .g-blob {\n      left: 960px; }\n      .container-fluid .options .g-blob img {\n        width: 220px; }\n  .container-fluid .home3, .container-fluid .home4 {\n    padding-left: 480px;\n    padding-bottom: 6em;\n    padding-top: 5em; }\n    .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n      top: 12em;\n      font-size: 18vw; }\n    .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n      font-size: 18vw;\n      top: 19.5em; }\n  .container-fluid .legacy {\n    padding-top: 4em; }\n    .container-fluid .legacy .num-container img {\n      width: 50%; }\n    .container-fluid .legacy .text-muted {\n      margin-left: 28em; }\n    .container-fluid .legacy p {\n      padding-bottom: 6em; }\n  .container-fluid #accordion .btn, .container-fluid #accordion .btn-link, .container-fluid #accordion .btn-link:focus, .container-fluid #accordion .btn-link:hover, .container-fluid #accordion .btn-link:active {\n    margin-bottom: 0;\n    overflow: hidden; }\n  .container-fluid #accordion .case-action {\n    padding-bottom: 0; }\n  .container-fluid #accordion .card-body p {\n    padding-bottom: 0em; }\n  /* services */ }\n@media (min-width: 1300px) {\n  .action {\n    padding-top: 40vh; }\n  .container-fluid .home1 {\n    max-width: 1080px; }\n  .container-fluid .options .r-blob {\n    left: 840px; }\n  .container-fluid .options .g-blob {\n    left: 1000px; }\n  .container-fluid .home3 .deco1, .container-fluid .home4 .deco1 {\n    top: 9.5em; }\n  .container-fluid .home3 .deco2, .container-fluid .home4 .deco2 {\n    top: 16.2em; }\n  .container-fluid .cta {\n    padding-top: 28em; }\n    .container-fluid .cta h3 {\n      font-size: 72px;\n      line-height: 72px; }\n  .container-fluid .legacy .num-overlay {\n    left: 200px;\n    bottom: 76px; } }\n";
})();

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/contact.js");


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
//# sourceMappingURL=contact.js.map