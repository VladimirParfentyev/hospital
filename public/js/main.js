/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("(function() {\r\n  \"use strict\";\r\n\r\n  const select = (el, all = false) => {\r\n    el = el.trim()\r\n    if (all) {\r\n      return [...document.querySelectorAll(el)]\r\n    } else {\r\n      return document.querySelector(el)\r\n    }\r\n  }\r\n\r\n  const on = (type, el, listener, all = false) => {\r\n    let selectEl = select(el, all)\r\n    if (selectEl) {\r\n      if (all) {\r\n        selectEl.forEach(e => e.addEventListener(type, listener))\r\n      } else {\r\n        selectEl.addEventListener(type, listener)\r\n      }\r\n    }\r\n  }\r\n\r\n  const onscroll = (el, listener) => {\r\n    el.addEventListener('scroll', listener)\r\n  }\r\n\r\n  let navbarlinks = select('#navbar .scrollto', true)\r\n  const navbarlinksActive = () => {\r\n    let position = window.scrollY + 200\r\n    navbarlinks.forEach(navbarlink => {\r\n      if (!navbarlink.hash) return\r\n      let section = select(navbarlink.hash)\r\n      if (!section) return\r\n      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {\r\n        navbarlink.classList.add('active')\r\n      } else {\r\n        navbarlink.classList.remove('active')\r\n      }\r\n    })\r\n  }\r\n  window.addEventListener('load', navbarlinksActive)\r\n  onscroll(document, navbarlinksActive)\r\n\r\n  const scrollto = (el) => {\r\n    let header = select('#header')\r\n    let offset = header.offsetHeight\r\n\r\n    let elementPos = select(el).offsetTop\r\n    window.scrollTo({\r\n      top: elementPos - offset,\r\n      behavior: 'smooth'\r\n    })\r\n  }\r\n\r\n  let selectHeader = select('#header')\r\n  let selectTopbar = select('#topbar')\r\n  if (selectHeader) {\r\n    const headerScrolled = () => {\r\n      if (window.scrollY > 100) {\r\n        selectHeader.classList.add('header-scrolled')\r\n        if (selectTopbar) {\r\n          selectTopbar.classList.add('topbar-scrolled')\r\n        }\r\n      } else {\r\n        selectHeader.classList.remove('header-scrolled')\r\n        if (selectTopbar) {\r\n          selectTopbar.classList.remove('topbar-scrolled')\r\n        }\r\n      }\r\n    }\r\n    window.addEventListener('load', headerScrolled)\r\n    onscroll(document, headerScrolled)\r\n  }\r\n\r\n  let backtotop = select('.back-to-top')\r\n  if (backtotop) {\r\n    const toggleBacktotop = () => {\r\n      if (window.scrollY > 100) {\r\n        backtotop.classList.add('active')\r\n      } else {\r\n        backtotop.classList.remove('active')\r\n      }\r\n    }\r\n    window.addEventListener('load', toggleBacktotop)\r\n    onscroll(document, toggleBacktotop)\r\n  }\r\n\r\n  on('click', '.mobile-nav-toggle', function(e) {\r\n    select('#navbar').classList.toggle('navbar-mobile')\r\n    this.classList.toggle('bi-list')\r\n    this.classList.toggle('bi-x')\r\n  })\r\n\r\n  on('click', '.navbar .dropdown > a', function(e) {\r\n    if (select('#navbar').classList.contains('navbar-mobile')) {\r\n      e.preventDefault()\r\n      this.nextElementSibling.classList.toggle('dropdown-active')\r\n    }\r\n  }, true)\r\n\r\n// скролл\r\n  on('click', '.scrollto', function(e) {\r\n    if (select(this.hash)) {\r\n      e.preventDefault()\r\n\r\n      let navbar = select('#navbar')\r\n      if (navbar.classList.contains('navbar-mobile')) {\r\n        navbar.classList.remove('navbar-mobile')\r\n        let navbarToggle = select('.mobile-nav-toggle')\r\n        navbarToggle.classList.toggle('bi-list')\r\n        navbarToggle.classList.toggle('bi-x')\r\n      }\r\n      scrollto(this.hash)\r\n    }\r\n  }, true)\r\n\r\n  window.addEventListener('load', () => {\r\n    if (window.location.hash) {\r\n      if (select(window.location.hash)) {\r\n        scrollto(window.location.hash)\r\n      }\r\n    }\r\n  });\r\n\r\n  let preloader = select('#preloader');\r\n  if (preloader) {\r\n    window.addEventListener('load', () => {\r\n      preloader.remove()\r\n    });\r\n  }\r\n\r\n  const glightbox = GLightbox({\r\n    selector: '.glightbox'\r\n  });\r\n\r\n  const galelryLightbox = GLightbox({\r\n    selector: '.galelry-lightbox'\r\n  });\r\n\r\n})()\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;