"use strict";
(self["webpackChunkfaq_accordion_card_main"] = self["webpackChunkfaq_accordion_card_main"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);\n  font-size: 12px;\n}\n\ninput {\n  display: none;\n}\ninput + label + .content {\n  display: none;\n}\n\nlabel {\n  font-size: 14px;\n  line-height: 14px;\n  display: flex;\n  padding: 8px 0px;\n  margin: 0 0 1px 0;\n  cursor: pointer;\n  color: #1d1e35;\n  transition: ease 0.5s;\n}\nlabel:hover {\n  color: #f47c57;\n}\n\n.content {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  /* or 150% */\n  color: #787887;\n}\n\ninput:checked {\n  transition: all 4500ms;\n}\ninput:checked + label {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: #1d1e35;\n}\ninput:checked + label + .content {\n  display: block;\n}\ninput:checked + label > img {\n  transform: rotate(180deg);\n}\n\n.hidden {\n  display: none;\n}\n@media (min-width: 640px) {\n  .hidden--sm {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .hidden--md {\n    display: none;\n  }\n}\n@media (min-width: 1024px) {\n  .hidden--lg {\n    display: none;\n  }\n}\n@media (min-width: 1280px) {\n  .hidden--xl {\n    display: none;\n  }\n}\n@media (min-width: 1536px) {\n  .hidden--xl2 {\n    display: none;\n  }\n}\n\n.block {\n  display: block;\n}\n@media (min-width: 640px) {\n  .block--sm {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .block--md {\n    display: block;\n  }\n}\n@media (min-width: 1024px) {\n  .block--lg {\n    display: block;\n  }\n}\n@media (min-width: 1280px) {\n  .block--xl {\n    display: block;\n  }\n}\n@media (min-width: 1536px) {\n  .block--xl2 {\n    display: block;\n  }\n}\n\n.grid {\n  display: grid;\n  justify-items: center;\n}\n.grid__col--1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid__col--2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid__col--3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid__col--4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid--1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid--2 {\n  grid-template-columns: auto auto;\n}\n.grid--3 {\n  grid-template-columns: auto auto auto;\n}\n.grid--4 {\n  grid-template-columns: auto auto auto auto;\n}\n@media (min-width: 640px) {\n  .grid--sm {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--sm__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--sm__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--sm__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--sm__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--sm--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--sm--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--sm--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--sm--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 768px) {\n  .grid--md {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--md__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--md__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--md__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--md__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--md--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--md--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--md--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--md--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1024px) {\n  .grid--lg {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--lg__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--lg__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--lg__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--lg__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--lg--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--lg--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--lg--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--lg--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1280px) {\n  .grid--xl {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--xl__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--xl__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--xl__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--xl--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--xl--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--xl--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1536px) {\n  .grid--xl2 {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--xl2__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl2__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--xl2__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--xl2__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--xl2--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl2--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--xl2--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--xl2--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n\n.gap {\n  gap: 0px;\n}\n.gap--0 {\n  gap: 0px;\n}\n.gap--4 {\n  gap: 1rem;\n}\n.gap--x {\n  column-gap: 0px;\n}\n.gap--y {\n  row-gap: 0px;\n}\n\n.justify-items--center {\n  justify-items: center;\n}\n\n.justify-content--center {\n  justify-content: center;\n}\n\n* {\n  font-family: \"Kumbh Sans\";\n}\n\nh1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 32px;\n  color: #1d1e35;\n  margin-bottom: 43px;\n}\n\n.container {\n  margin: 0px;\n  padding: 165px 24px;\n}\n@media (min-width: 768px) {\n  .container {\n    padding: 116px 165px;\n  }\n}\n.container--fluid {\n  padding: 24px;\n}\n@media (min-width: 768px) {\n  .container--fluid {\n    padding: 0px;\n  }\n}\n.container__small {\n  max-width: 540px;\n}\n\n.card {\n  min-height: 100%;\n  background-color: white;\n  margin: 130px 260px;\n  padding: 65px 95px;\n  max-height: 509px;\n  overflow: hidden;\n}\n.card__illustration {\n  /*\n  background-image: url(\"../images/bg-pattern-desktop.svg\");\n  background-repeat: no-repeat;\n  background-position: right bottom;*/\n  position: relative;\n  left: -40%;\n  top: -10%;\n}\n.card__illustration__bg {\n  position: relative;\n  left: -100%;\n  width: 200%;\n}\n.card__illustration__woman {\n  position: relative;\n  width: 100%;\n  top: -40%;\n}\n.card__illustration__box {\n  position: relative;\n  width: 40%;\n  top: -55%;\n  left: -5%;\n}\n.accordion__element {\n  border-bottom: solid #e7e7e9 1px;\n  padding-bottom: 16px;\n  width: 350px;\n}\n.accordion__element__label {\n  justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/sass/base/_base.scss","webpack://./src/sass/main.scss","webpack://./src/sass/utils/_variables.scss","webpack://./src/sass/base/_display.scss","webpack://./src/sass/utils/_mixins.scss","webpack://./src/sass/base/_typography.scss","webpack://./src/sass/layout/_container.scss","webpack://./src/sass/layout/_card.scss","webpack://./src/sass/components/_accordion.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody{\r\n  background: linear-gradient(180deg, $color-primary 0%, $color-secondary 100%);\r\n  font-size: 12px;\r\n}\r\ninput {\r\n  display: none;\r\n  & + label + .content {\r\n    display: none;\r\n  }\r\n}\r\nlabel {\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n\r\n  display: flex;\r\n  padding: 8px 0px;\r\n  margin: 0 0 1px 0;\r\n  cursor: pointer;\r\n  color: $color-dark-blue-hsl;\r\n  transition: ease .5s;\r\n  &:hover {\r\n    color: $color-soft-red-hsl;\r\n  }\r\n}\r\n\r\n.content {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  /* or 150% */\r\n  color: $color-gray-hsl;\r\n\r\n}\r\ninput:checked{\r\n  transition: all 4500ms;\r\n  & + label{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    line-height: 14px;\r\n    color: $color-dark-blue-hsl;\r\n    & + .content {\r\n      display: block;\r\n    }\r\n    & > img{\r\n      transform: rotate(180deg);\r\n    }\r\n  }\r\n}\r\n","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);\n  font-size: 12px;\n}\n\ninput {\n  display: none;\n}\ninput + label + .content {\n  display: none;\n}\n\nlabel {\n  font-size: 14px;\n  line-height: 14px;\n  display: flex;\n  padding: 8px 0px;\n  margin: 0 0 1px 0;\n  cursor: pointer;\n  color: #1d1e35;\n  transition: ease 0.5s;\n}\nlabel:hover {\n  color: #f47c57;\n}\n\n.content {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  /* or 150% */\n  color: #787887;\n}\n\ninput:checked {\n  transition: all 4500ms;\n}\ninput:checked + label {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: #1d1e35;\n}\ninput:checked + label + .content {\n  display: block;\n}\ninput:checked + label > img {\n  transform: rotate(180deg);\n}\n\n.hidden {\n  display: none;\n}\n@media (min-width: 640px) {\n  .hidden--sm {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .hidden--md {\n    display: none;\n  }\n}\n@media (min-width: 1024px) {\n  .hidden--lg {\n    display: none;\n  }\n}\n@media (min-width: 1280px) {\n  .hidden--xl {\n    display: none;\n  }\n}\n@media (min-width: 1536px) {\n  .hidden--xl2 {\n    display: none;\n  }\n}\n\n.block {\n  display: block;\n}\n@media (min-width: 640px) {\n  .block--sm {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .block--md {\n    display: block;\n  }\n}\n@media (min-width: 1024px) {\n  .block--lg {\n    display: block;\n  }\n}\n@media (min-width: 1280px) {\n  .block--xl {\n    display: block;\n  }\n}\n@media (min-width: 1536px) {\n  .block--xl2 {\n    display: block;\n  }\n}\n\n.grid {\n  display: grid;\n  justify-items: center;\n}\n.grid__col--1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid__col--2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid__col--3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid__col--4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid--1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid--2 {\n  grid-template-columns: auto auto;\n}\n.grid--3 {\n  grid-template-columns: auto auto auto;\n}\n.grid--4 {\n  grid-template-columns: auto auto auto auto;\n}\n@media (min-width: 640px) {\n  .grid--sm {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--sm__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--sm__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--sm__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--sm__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--sm--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--sm--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--sm--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--sm--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 768px) {\n  .grid--md {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--md__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--md__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--md__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--md__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--md--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--md--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--md--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--md--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1024px) {\n  .grid--lg {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--lg__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--lg__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--lg__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--lg__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--lg--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--lg--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--lg--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--lg--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1280px) {\n  .grid--xl {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--xl__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--xl__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--xl__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--xl--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--xl--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--xl--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1536px) {\n  .grid--xl2 {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--xl2__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl2__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--xl2__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--xl2__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--xl2--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl2--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--xl2--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--xl2--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n\n.gap {\n  gap: 0px;\n}\n.gap--0 {\n  gap: 0px;\n}\n.gap--4 {\n  gap: 1rem;\n}\n.gap--x {\n  column-gap: 0px;\n}\n.gap--y {\n  row-gap: 0px;\n}\n\n.justify-items--center {\n  justify-items: center;\n}\n\n.justify-content--center {\n  justify-content: center;\n}\n\n* {\n  font-family: \"Kumbh Sans\";\n}\n\nh1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 32px;\n  color: #1d1e35;\n  margin-bottom: 43px;\n}\n\n.container {\n  margin: 0px;\n  padding: 165px 24px;\n}\n@media (min-width: 768px) {\n  .container {\n    padding: 116px 165px;\n  }\n}\n.container--fluid {\n  padding: 24px;\n}\n@media (min-width: 768px) {\n  .container--fluid {\n    padding: 0px;\n  }\n}\n.container__small {\n  max-width: 540px;\n}\n\n.card {\n  min-height: 100%;\n  background-color: white;\n  margin: 130px 260px;\n  padding: 65px 95px;\n  max-height: 509px;\n  overflow: hidden;\n}\n.card__illustration {\n  /*\n  background-image: url(\"../images/bg-pattern-desktop.svg\");\n  background-repeat: no-repeat;\n  background-position: right bottom;*/\n  position: relative;\n  left: -40%;\n  top: -10%;\n}\n.card__illustration__bg {\n  position: relative;\n  left: -100%;\n  width: 200%;\n}\n.card__illustration__woman {\n  position: relative;\n  width: 100%;\n  top: -40%;\n}\n.card__illustration__box {\n  position: relative;\n  width: 40%;\n  top: -55%;\n  left: -5%;\n}\n.accordion__element {\n  border-bottom: solid #e7e7e9 1px;\n  padding-bottom: 16px;\n  width: 350px;\n}\n.accordion__element__label {\n  justify-content: space-between;\n}","$color-primary : #B068E9;\r\n$color-secondary: #6463E7;\r\n\r\n//color HSL\r\n\r\n$color-primary-hsl : hsl(273, 75%, 66%);\r\n$color-secondary-hsl: hsl(240, 73%, 65%);\r\n\r\n$color-dark-hsl: hsl(237, 12%, 33%);\r\n$color-gray-hsl: hsl(240, 6%, 50%);\r\n$color-dark-blue-hsl :hsl(238, 29%, 16%);\r\n$color-light-gray-blue-hsl : hsl(240, 5%, 91%);\r\n$color-soft-red-hsl: hsl(14, 88%, 65%);","\r\n.hidden{\r\n  @include display(none);\r\n}\r\n.block{\r\n  @include display(block);\r\n}\r\n\r\n\r\n.grid{\r\n  //grid-column-gap: 50px;\r\n  @include grid;\r\n  &--sm{\r\n    @media (min-width: 640px) {\r\n      @include grid;\r\n    }\r\n  }\r\n  &--md {\r\n    @media (min-width: 768px) {\r\n      @include grid;\r\n    }\r\n  }\r\n  &--lg {\r\n    @media (min-width: 1024px) {\r\n      @include grid;\r\n    }\r\n  }\r\n  &--xl {\r\n    @media (min-width: 1280px) {\r\n      @include grid;\r\n    }\r\n  }\r\n  &--xl2 {\r\n    @media (min-width: 1536px) {\r\n      @include grid;\r\n    }\r\n  }\r\n}\r\n.gap{\r\n  gap:0px;\r\n  &--0{\r\n    gap:0px;\r\n  }\r\n  &--4{\r\n    gap:1rem;\r\n  }\r\n  &--x{\r\n    column-gap: 0px;\r\n  }\r\n  &--y{\r\n    row-gap: 0px;\r\n  }\r\n}\r\n.justify-items{\r\n  &--center{\r\n    justify-items: center;\r\n  }\r\n}\r\n.justify-content{\r\n   &--center{\r\n     justify-content: center;\r\n   }\r\n }\r\n\r\n","@mixin hidden{\r\n  display: none;\r\n}\r\n@mixin grid{\r\n  display: grid;\r\n  justify-items: center;\r\n  &__col{\r\n    &--1{\r\n      grid-template-columns: repeat(1, minmax(0, 1fr));\r\n    }\r\n    &--2{\r\n      grid-template-columns: repeat(2, minmax(0, 1fr));\r\n    }\r\n    &--3{\r\n      grid-template-columns: repeat(3, minmax(0, 1fr));\r\n    }\r\n    &--4{\r\n      grid-template-columns: repeat(4, minmax(0, 1fr));\r\n    }\r\n  }\r\n  &--1{\r\n    grid-template-columns: repeat(1, minmax(0, 1fr));\r\n  }\r\n  &--2{\r\n    grid-template-columns: auto auto;\r\n  }\r\n  &--3{\r\n    grid-template-columns: auto auto auto;\r\n  }\r\n  &--4{\r\n    grid-template-columns: auto auto auto auto;\r\n  }\r\n}\r\n\r\n@mixin block{\r\n  display: block;\r\n}\r\n\r\n@mixin display($value){\r\n\r\n  display: $value;\r\n  &--sm{\r\n    @media (min-width: 640px) {\r\n      display: $value;\r\n    }\r\n  }\r\n  &--md {\r\n    @media (min-width: 768px) {\r\n      display: $value;\r\n    }\r\n  }\r\n  &--lg {\r\n    @media (min-width: 1024px) {\r\n      display: $value;\r\n    }\r\n  }\r\n  &--xl {\r\n    @media (min-width: 1280px) {\r\n      display: $value;\r\n    }\r\n  }\r\n  &--xl2 {\r\n    @media (min-width: 1536px) {\r\n      display: $value;\r\n    }\r\n  }\r\n\r\n}","* {\r\n  font-family: \"Kumbh Sans\";\r\n}\r\n\r\nh1{\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 32px;\r\n  line-height: 32px;\r\n  color: $color-dark-blue-hsl;\r\n  margin-bottom: 43px;\r\n}",".container{\r\n  margin: 0px;\r\n  padding: 165px 24px ;\r\n  @media (min-width: 768px) {\r\n    padding: 116px 165px;\r\n  }\r\n  &--fluid{\r\n    padding: 24px ;\r\n    @media (min-width: 768px) {\r\n      padding: 0px;\r\n    }\r\n  }\r\n  &__small\r\n  {\r\n    max-width: 540px;\r\n  }\r\n}","\r\n.card{\r\n  min-height: 100%;\r\n  background-color: white;\r\n  margin: 130px 260px;\r\n  padding: 65px 95px;\r\n  max-height: 509px;\r\n  overflow: hidden;\r\n  &__illustration{/*\r\n    background-image: url(\"../images/bg-pattern-desktop.svg\");\r\n    background-repeat: no-repeat;\r\n    background-position: right bottom;*/\r\n    position: relative;\r\n    left: -40%;\r\n    top: -10%;\r\n    &__bg{\r\n      position: relative;\r\n      left: -100%;\r\n      width: 200%;\r\n    }\r\n    &__woman{\r\n      position: relative;\r\n      width: 100%;\r\n      top: -40%;\r\n    }\r\n    &__box{\r\n      position: relative;\r\n      width: 40%;\r\n      top: -55%;\r\n      left: -5%;\r\n    }\r\n  }\r\n  &__content{\r\n\r\n  }\r\n}",".accordion{\r\n  &__element{\r\n    border-bottom: solid $color-light-gray-blue-hsl 1px;\r\n    padding-bottom: 16px;\r\n    width: 350px;\r\n    &__label{\r\n      justify-content: space-between;\r\n      &__arrow{\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxhQUFhLE9BQU8sTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLE9BQU8sTUFBTSxNQUFNLGFBQWEsT0FBTyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtB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Q0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLWNhcmQtbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi1jYXJkLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi1jYXJkLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi1jYXJkLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLWNhcmQtbWFpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0IwNjhFOSAwJSwgIzY0NjNFNyAxMDAlKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuaW5wdXQgKyBsYWJlbCArIC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDhweCAwcHg7XFxuICBtYXJnaW46IDAgMCAxcHggMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMWQxZTM1O1xcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xcbn1cXG5sYWJlbDpob3ZlciB7XFxuICBjb2xvcjogI2Y0N2M1NztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgLyogb3IgMTUwJSAqL1xcbiAgY29sb3I6ICM3ODc4ODc7XFxufVxcblxcbmlucHV0OmNoZWNrZWQge1xcbiAgdHJhbnNpdGlvbjogYWxsIDQ1MDBtcztcXG59XFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBjb2xvcjogIzFkMWUzNTtcXG59XFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsICsgLmNvbnRlbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCA+IGltZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcbiAgLmhpZGRlbi0tc20ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5oaWRkZW4tLW1kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLmhpZGRlbi0tbGcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuICAuaGlkZGVuLS14bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG4gIC5oaWRkZW4tLXhsMiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAuYmxvY2stLXNtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmJsb2NrLS1tZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAuYmxvY2stLWxnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5ibG9jay0teGwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcbiAgLmJsb2NrLS14bDIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLmdyaWRfX2NvbC0tMSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkX19jb2wtLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZF9fY29sLS0zIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWRfX2NvbC0tNCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLS0xIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWQtLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcbi5ncmlkLS0zIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxufVxcbi5ncmlkLS00IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAuZ3JpZC0tc20ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuZ3JpZC0tc21fX2NvbC0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1zbV9fY29sLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXNtX19jb2wtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tc21fX2NvbC0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1zbS0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1zbS0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXNtLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS1zbS0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZ3JpZC0tbWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuZ3JpZC0tbWRfX2NvbC0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1tZF9fY29sLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLW1kX19jb2wtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbWRfX2NvbC0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1tZC0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1tZC0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLW1kLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS1tZC0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLmdyaWQtLWxnIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmdyaWQtLWxnX19jb2wtLTEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbGdfX2NvbC0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1sZ19fY29sLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLWxnX19jb2wtLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbGctLTEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbGctLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS1sZy0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxuICB9XFxuICAuZ3JpZC0tbGctLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5ncmlkLS14bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5ncmlkLS14bF9fY29sLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsX19jb2wtLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0teGxfX2NvbC0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS14bF9fY29sLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICB9XFxuICAuZ3JpZC0teGwtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXhsLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuICAuZ3JpZC0teGwyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMi0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS14bDItLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS14bDItLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXhsMi0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG59XFxuXFxuLmdhcCB7XFxuICBnYXA6IDBweDtcXG59XFxuLmdhcC0tMCB7XFxuICBnYXA6IDBweDtcXG59XFxuLmdhcC0tNCB7XFxuICBnYXA6IDFyZW07XFxufVxcbi5nYXAtLXgge1xcbiAgY29sdW1uLWdhcDogMHB4O1xcbn1cXG4uZ2FwLS15IHtcXG4gIHJvdy1nYXA6IDBweDtcXG59XFxuXFxuLmp1c3RpZnktaXRlbXMtLWNlbnRlciB7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtLWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIkt1bWJoIFNhbnNcXFwiO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgY29sb3I6ICMxZDFlMzU7XFxuICBtYXJnaW4tYm90dG9tOiA0M3B4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMTY1cHggMjRweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTE2cHggMTY1cHg7XFxuICB9XFxufVxcbi5jb250YWluZXItLWZsdWlkIHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbnRhaW5lci0tZmx1aWQge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxufVxcbi5jb250YWluZXJfX3NtYWxsIHtcXG4gIG1heC13aWR0aDogNTQwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMTMwcHggMjYwcHg7XFxuICBwYWRkaW5nOiA2NXB4IDk1cHg7XFxuICBtYXgtaGVpZ2h0OiA1MDlweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jYXJkX19pbGx1c3RyYXRpb24ge1xcbiAgLypcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2JnLXBhdHRlcm4tZGVza3RvcC5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207Ki9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC00MCU7XFxuICB0b3A6IC0xMCU7XFxufVxcbi5jYXJkX19pbGx1c3RyYXRpb25fX2JnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgd2lkdGg6IDIwMCU7XFxufVxcbi5jYXJkX19pbGx1c3RyYXRpb25fX3dvbWFuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAtNDAlO1xcbn1cXG4uY2FyZF9faWxsdXN0cmF0aW9uX19ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRvcDogLTU1JTtcXG4gIGxlZnQ6IC01JTtcXG59XFxuLmFjY29yZGlvbl9fZWxlbWVudCB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAjZTdlN2U5IDFweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4uYWNjb3JkaW9uX19lbGVtZW50X19sYWJlbCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2Jhc2UvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy91dGlscy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2Jhc2UvX2Rpc3BsYXkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvdXRpbHMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2xheW91dC9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2xheW91dC9fY2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL19hY2NvcmRpb24uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDQTtFQUNFLDZEQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtBQ0dGO0FERkU7RUFDRSxhQUFBO0FDSUo7O0FEREE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjRWJvQjtFRmNwQixxQkFBQTtBQ0dGO0FERkU7RUFDRSxjRWRpQjtBRGtCckI7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNFM0JlO0FEOEJqQjs7QURBQTtFQUNFLHNCQUFBO0FDR0Y7QURGRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRXBDa0I7QUR3Q3RCO0FESEk7RUFDRSxjQUFBO0FDS047QURISTtFQUNFLHlCQUFBO0FDS047O0FFdkRBO0VDdUNFLGFEdENpQjtBRjBEbkI7QUdsQkk7RUFERjtJQUVJLGFEekNhO0VGOERqQjtBQUNGO0FHbEJJO0VBREY7SUFFSSxhRDlDYTtFRm1FakI7QUFDRjtBR2xCSTtFQURGO0lBRUksYURuRGE7RUZ3RWpCO0FBQ0Y7QUdsQkk7RUFERjtJQUVJLGFEeERhO0VGNkVqQjtBQUNGO0FHbEJJO0VBREY7SUFFSSxhRDdEYTtFRmtGakI7QUFDRjs7QUVqRkE7RUNvQ0UsY0RuQ2lCO0FGb0ZuQjtBRy9DSTtFQURGO0lBRUksY0R0Q2E7RUZ3RmpCO0FBQ0Y7QUcvQ0k7RUFERjtJQUVJLGNEM0NhO0VGNkZqQjtBQUNGO0FHL0NJO0VBREY7SUFFSSxjRGhEYTtFRmtHakI7QUFDRjtBRy9DSTtFQURGO0lBRUksY0RyRGE7RUZ1R2pCO0FBQ0Y7QUcvQ0k7RUFERjtJQUVJLGNEMURhO0VGNEdqQjtBQUNGOztBRXpHQTtFQ0xFLGFBQUE7RUFDQSxxQkFBQTtBSGtIRjtBR2hISTtFQUNFLGdEQUFBO0FIa0hOO0FHaEhJO0VBQ0UsZ0RBQUE7QUhrSE47QUdoSEk7RUFDRSxnREFBQTtBSGtITjtBR2hISTtFQUNFLGdEQUFBO0FIa0hOO0FHL0dFO0VBQ0UsZ0RBQUE7QUhpSEo7QUcvR0U7RUFDRSxnQ0FBQTtBSGlISjtBRy9HRTtFQUNFLHFDQUFBO0FIaUhKO0FHL0dFO0VBQ0UsMENBQUE7QUhpSEo7QUVsSUk7RUFERjtJQ1JBLGFBQUE7SUFDQSxxQkFBQTtFSCtJQTtFRzdJRTtJQUNFLGdEQUFBO0VIK0lKO0VHN0lFO0lBQ0UsZ0RBQUE7RUgrSUo7RUc3SUU7SUFDRSxnREFBQTtFSCtJSjtFRzdJRTtJQUNFLGdEQUFBO0VIK0lKO0VHNUlBO0lBQ0UsZ0RBQUE7RUg4SUY7RUc1SUE7SUFDRSxnQ0FBQTtFSDhJRjtFRzVJQTtJQUNFLHFDQUFBO0VIOElGO0VHNUlBO0lBQ0UsMENBQUE7RUg4SUY7QUFDRjtBRTNKSTtFQURGO0lDYkEsYUFBQTtJQUNBLHFCQUFBO0VINktBO0VHM0tFO0lBQ0UsZ0RBQUE7RUg2S0o7RUczS0U7SUFDRSxnREFBQTtFSDZLSjtFRzNLRTtJQUNFLGdEQUFBO0VINktKO0VHM0tFO0lBQ0UsZ0RBQUE7RUg2S0o7RUcxS0E7SUFDRSxnREFBQTtFSDRLRjtFRzFLQTtJQUNFLGdDQUFBO0VINEtGO0VHMUtBO0lBQ0UscUNBQUE7RUg0S0Y7RUcxS0E7SUFDRSwwQ0FBQTtFSDRLRjtBQUNGO0FFcExJO0VBREY7SUNsQkEsYUFBQTtJQUNBLHFCQUFBO0VIMk1BO0VHek1FO0lBQ0UsZ0RBQUE7RUgyTUo7RUd6TUU7SUFDRSxnREFBQTtFSDJNSjtFR3pNRTtJQUNFLGdEQUFBO0VIMk1KO0VHek1FO0lBQ0UsZ0RBQUE7RUgyTUo7RUd4TUE7SUFDRSxnREFBQTtFSDBNRjtFR3hNQTtJQUNFLGdDQUFBO0VIME1GO0VHeE1BO0lBQ0UscUNBQUE7RUgwTUY7RUd4TUE7SUFDRSwwQ0FBQTtFSDBNRjtBQUNGO0FFN01JO0VBREY7SUN2QkEsYUFBQTtJQUNBLHFCQUFBO0VIeU9BO0VHdk9FO0lBQ0UsZ0RBQUE7RUh5T0o7RUd2T0U7SUFDRSxnREFBQTtFSHlPSjtFR3ZPRTtJQUNFLGdEQUFBO0VIeU9KO0VHdk9FO0lBQ0UsZ0RBQUE7RUh5T0o7RUd0T0E7SUFDRSxnREFBQTtFSHdPRjtFR3RPQTtJQUNFLGdDQUFBO0VId09GO0VHdE9BO0lBQ0UscUNBQUE7RUh3T0Y7RUd0T0E7SUFDRSwwQ0FBQTtFSHdPRjtBQUNGO0FFdE9JO0VBREY7SUM1QkEsYUFBQTtJQUNBLHFCQUFBO0VIdVFBO0VHclFFO0lBQ0UsZ0RBQUE7RUh1UUo7RUdyUUU7SUFDRSxnREFBQTtFSHVRSjtFR3JRRTtJQUNFLGdEQUFBO0VIdVFKO0VHclFFO0lBQ0UsZ0RBQUE7RUh1UUo7RUdwUUE7SUFDRSxnREFBQTtFSHNRRjtFR3BRQTtJQUNFLGdDQUFBO0VIc1FGO0VHcFFBO0lBQ0UscUNBQUE7RUhzUUY7RUdwUUE7SUFDRSwwQ0FBQTtFSHNRRjtBQUNGOztBRS9QQTtFQUNFLFFBQUE7QUZrUUY7QUVqUUU7RUFDRSxRQUFBO0FGbVFKO0FFalFFO0VBQ0UsU0FBQTtBRm1RSjtBRWpRRTtFQUNFLGVBQUE7QUZtUUo7QUVqUUU7RUFDRSxZQUFBO0FGbVFKOztBRS9QRTtFQUNFLHFCQUFBO0FGa1FKOztBRTlQRztFQUNFLHVCQUFBO0FGaVFMOztBSTdUQTtFQUNFLHlCQUFBO0FKZ1VGOztBSTdUQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjSENvQjtFR0FwQixtQkFBQTtBSmdVRjs7QUsxVUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUw2VUY7QUs1VUU7RUFIRjtJQUlJLG9CQUFBO0VMK1VGO0FBQ0Y7QUs5VUU7RUFDRSxhQUFBO0FMZ1ZKO0FLL1VJO0VBRkY7SUFHSSxZQUFBO0VMa1ZKO0FBQ0Y7QUtoVkU7RUFFRSxnQkFBQTtBTGlWSjs7QU05VkE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QU5pV0Y7QU1oV0U7RUFBZ0I7OztxQ0FBQTtFQUlkLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QU5tV0o7QU1sV0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FOb1dOO0FNbFdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBTm9XTjtBTWxXSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FOb1dOO0FPaFlFO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QVBrWUo7QU9qWUk7RUFDRSw4QkFBQTtBUG1ZTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgJGNvbG9yLXByaW1hcnkgMCUsICRjb2xvci1zZWNvbmRhcnkgMTAwJSk7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcbmlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAmICsgbGFiZWwgKyAuY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcbmxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDhweCAwcHg7XFxyXFxuICBtYXJnaW46IDAgMCAxcHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZGFyay1ibHVlLWhzbDtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UgLjVzO1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAkY29sb3Itc29mdC1yZWQtaHNsO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICAvKiBvciAxNTAlICovXFxyXFxuICBjb2xvcjogJGNvbG9yLWdyYXktaHNsO1xcclxcblxcclxcbn1cXHJcXG5pbnB1dDpjaGVja2Vke1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDQ1MDBtcztcXHJcXG4gICYgKyBsYWJlbHtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gICAgY29sb3I6ICRjb2xvci1kYXJrLWJsdWUtaHNsO1xcclxcbiAgICAmICsgLmNvbnRlbnQge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICAgICYgPiBpbWd7XFxyXFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0IwNjhFOSAwJSwgIzY0NjNFNyAxMDAlKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuaW5wdXQgKyBsYWJlbCArIC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDhweCAwcHg7XFxuICBtYXJnaW46IDAgMCAxcHggMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMWQxZTM1O1xcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xcbn1cXG5sYWJlbDpob3ZlciB7XFxuICBjb2xvcjogI2Y0N2M1NztcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgLyogb3IgMTUwJSAqL1xcbiAgY29sb3I6ICM3ODc4ODc7XFxufVxcblxcbmlucHV0OmNoZWNrZWQge1xcbiAgdHJhbnNpdGlvbjogYWxsIDQ1MDBtcztcXG59XFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBjb2xvcjogIzFkMWUzNTtcXG59XFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsICsgLmNvbnRlbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCA+IGltZyB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcbiAgLmhpZGRlbi0tc20ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5oaWRkZW4tLW1kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLmhpZGRlbi0tbGcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuICAuaGlkZGVuLS14bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG4gIC5oaWRkZW4tLXhsMiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAuYmxvY2stLXNtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmJsb2NrLS1tZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAuYmxvY2stLWxnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5ibG9jay0teGwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcbiAgLmJsb2NrLS14bDIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLmdyaWRfX2NvbC0tMSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkX19jb2wtLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZF9fY29sLS0zIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWRfX2NvbC0tNCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLS0xIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWQtLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcbi5ncmlkLS0zIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxufVxcbi5ncmlkLS00IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAuZ3JpZC0tc20ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuZ3JpZC0tc21fX2NvbC0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1zbV9fY29sLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXNtX19jb2wtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tc21fX2NvbC0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1zbS0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1zbS0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXNtLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS1zbS0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZ3JpZC0tbWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuZ3JpZC0tbWRfX2NvbC0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1tZF9fY29sLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLW1kX19jb2wtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbWRfX2NvbC0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1tZC0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1tZC0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLW1kLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS1tZC0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLmdyaWQtLWxnIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmdyaWQtLWxnX19jb2wtLTEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbGdfX2NvbC0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1sZ19fY29sLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLWxnX19jb2wtLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbGctLTEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbGctLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS1sZy0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxuICB9XFxuICAuZ3JpZC0tbGctLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5ncmlkLS14bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5ncmlkLS14bF9fY29sLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsX19jb2wtLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0teGxfX2NvbC0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS14bF9fY29sLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICB9XFxuICAuZ3JpZC0teGwtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXhsLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuICAuZ3JpZC0teGwyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMi0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS14bDItLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS14bDItLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXhsMi0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG59XFxuXFxuLmdhcCB7XFxuICBnYXA6IDBweDtcXG59XFxuLmdhcC0tMCB7XFxuICBnYXA6IDBweDtcXG59XFxuLmdhcC0tNCB7XFxuICBnYXA6IDFyZW07XFxufVxcbi5nYXAtLXgge1xcbiAgY29sdW1uLWdhcDogMHB4O1xcbn1cXG4uZ2FwLS15IHtcXG4gIHJvdy1nYXA6IDBweDtcXG59XFxuXFxuLmp1c3RpZnktaXRlbXMtLWNlbnRlciB7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtLWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIkt1bWJoIFNhbnNcXFwiO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgY29sb3I6ICMxZDFlMzU7XFxuICBtYXJnaW4tYm90dG9tOiA0M3B4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMTY1cHggMjRweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTE2cHggMTY1cHg7XFxuICB9XFxufVxcbi5jb250YWluZXItLWZsdWlkIHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbnRhaW5lci0tZmx1aWQge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxufVxcbi5jb250YWluZXJfX3NtYWxsIHtcXG4gIG1heC13aWR0aDogNTQwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMTMwcHggMjYwcHg7XFxuICBwYWRkaW5nOiA2NXB4IDk1cHg7XFxuICBtYXgtaGVpZ2h0OiA1MDlweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jYXJkX19pbGx1c3RyYXRpb24ge1xcbiAgLypcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2JnLXBhdHRlcm4tZGVza3RvcC5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207Ki9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC00MCU7XFxuICB0b3A6IC0xMCU7XFxufVxcbi5jYXJkX19pbGx1c3RyYXRpb25fX2JnIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgd2lkdGg6IDIwMCU7XFxufVxcbi5jYXJkX19pbGx1c3RyYXRpb25fX3dvbWFuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAtNDAlO1xcbn1cXG4uY2FyZF9faWxsdXN0cmF0aW9uX19ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRvcDogLTU1JTtcXG4gIGxlZnQ6IC01JTtcXG59XFxuLmFjY29yZGlvbl9fZWxlbWVudCB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAjZTdlN2U5IDFweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG4uYWNjb3JkaW9uX19lbGVtZW50X19sYWJlbCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVwiLFwiJGNvbG9yLXByaW1hcnkgOiAjQjA2OEU5O1xcclxcbiRjb2xvci1zZWNvbmRhcnk6ICM2NDYzRTc7XFxyXFxuXFxyXFxuLy9jb2xvciBIU0xcXHJcXG5cXHJcXG4kY29sb3ItcHJpbWFyeS1oc2wgOiBoc2woMjczLCA3NSUsIDY2JSk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeS1oc2w6IGhzbCgyNDAsIDczJSwgNjUlKTtcXHJcXG5cXHJcXG4kY29sb3ItZGFyay1oc2w6IGhzbCgyMzcsIDEyJSwgMzMlKTtcXHJcXG4kY29sb3ItZ3JheS1oc2w6IGhzbCgyNDAsIDYlLCA1MCUpO1xcclxcbiRjb2xvci1kYXJrLWJsdWUtaHNsIDpoc2woMjM4LCAyOSUsIDE2JSk7XFxyXFxuJGNvbG9yLWxpZ2h0LWdyYXktYmx1ZS1oc2wgOiBoc2woMjQwLCA1JSwgOTElKTtcXHJcXG4kY29sb3Itc29mdC1yZWQtaHNsOiBoc2woMTQsIDg4JSwgNjUlKTtcIixcIlxcclxcbi5oaWRkZW57XFxyXFxuICBAaW5jbHVkZSBkaXNwbGF5KG5vbmUpO1xcclxcbn1cXHJcXG4uYmxvY2t7XFxyXFxuICBAaW5jbHVkZSBkaXNwbGF5KGJsb2NrKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdyaWR7XFxyXFxuICAvL2dyaWQtY29sdW1uLWdhcDogNTBweDtcXHJcXG4gIEBpbmNsdWRlIGdyaWQ7XFxyXFxuICAmLS1zbXtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuICAgICAgQGluY2x1ZGUgZ3JpZDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJi0tbWQge1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgICBAaW5jbHVkZSBncmlkO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLS1sZyB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXHJcXG4gICAgICBAaW5jbHVkZSBncmlkO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLS14bCB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gICAgICBAaW5jbHVkZSBncmlkO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLS14bDIge1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxyXFxuICAgICAgQGluY2x1ZGUgZ3JpZDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4uZ2Fwe1xcclxcbiAgZ2FwOjBweDtcXHJcXG4gICYtLTB7XFxyXFxuICAgIGdhcDowcHg7XFxyXFxuICB9XFxyXFxuICAmLS00e1xcclxcbiAgICBnYXA6MXJlbTtcXHJcXG4gIH1cXHJcXG4gICYtLXh7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDBweDtcXHJcXG4gIH1cXHJcXG4gICYtLXl7XFxyXFxuICAgIHJvdy1nYXA6IDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmp1c3RpZnktaXRlbXN7XFxyXFxuICAmLS1jZW50ZXJ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmp1c3RpZnktY29udGVudHtcXHJcXG4gICAmLS1jZW50ZXJ7XFxyXFxuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICB9XFxyXFxuIH1cXHJcXG5cXHJcXG5cIixcIkBtaXhpbiBoaWRkZW57XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5AbWl4aW4gZ3JpZHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAmX19jb2x7XFxyXFxuICAgICYtLTF7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgICB9XFxyXFxuICAgICYtLTJ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgICB9XFxyXFxuICAgICYtLTN7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgICB9XFxyXFxuICAgICYtLTR7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLS0xe1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICB9XFxyXFxuICAmLS0ye1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIH1cXHJcXG4gICYtLTN7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxyXFxuICB9XFxyXFxuICAmLS00e1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBibG9ja3tcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGlzcGxheSgkdmFsdWUpe1xcclxcblxcclxcbiAgZGlzcGxheTogJHZhbHVlO1xcclxcbiAgJi0tc217XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcclxcbiAgICAgIGRpc3BsYXk6ICR2YWx1ZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJi0tbWQge1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgICBkaXNwbGF5OiAkdmFsdWU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICYtLWxnIHtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAgIGRpc3BsYXk6ICR2YWx1ZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJi0teGwge1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuICAgICAgZGlzcGxheTogJHZhbHVlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLS14bDIge1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxyXFxuICAgICAgZGlzcGxheTogJHZhbHVlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxufVwiLFwiKiB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkt1bWJoIFNhbnNcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5oMXtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxyXFxuICBjb2xvcjogJGNvbG9yLWRhcmstYmx1ZS1oc2w7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0M3B4O1xcclxcbn1cIixcIi5jb250YWluZXJ7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDE2NXB4IDI0cHggO1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgIHBhZGRpbmc6IDExNnB4IDE2NXB4O1xcclxcbiAgfVxcclxcbiAgJi0tZmx1aWR7XFxyXFxuICAgIHBhZGRpbmc6IDI0cHggO1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX3NtYWxsXFxyXFxuICB7XFxyXFxuICAgIG1heC13aWR0aDogNTQwcHg7XFxyXFxuICB9XFxyXFxufVwiLFwiXFxyXFxuLmNhcmR7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IDEzMHB4IDI2MHB4O1xcclxcbiAgcGFkZGluZzogNjVweCA5NXB4O1xcclxcbiAgbWF4LWhlaWdodDogNTA5cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgJl9faWxsdXN0cmF0aW9uey8qXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL2JnLXBhdHRlcm4tZGVza3RvcC5zdmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tOyovXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogLTQwJTtcXHJcXG4gICAgdG9wOiAtMTAlO1xcclxcbiAgICAmX19iZ3tcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgbGVmdDogLTEwMCU7XFxyXFxuICAgICAgd2lkdGg6IDIwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fd29tYW57XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIHRvcDogLTQwJTtcXHJcXG4gICAgfVxcclxcbiAgICAmX19ib3h7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgICAgdG9wOiAtNTUlO1xcclxcbiAgICAgIGxlZnQ6IC01JTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fY29udGVudHtcXHJcXG5cXHJcXG4gIH1cXHJcXG59XCIsXCIuYWNjb3JkaW9ue1xcclxcbiAgJl9fZWxlbWVudHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgJGNvbG9yLWxpZ2h0LWdyYXktYmx1ZS1oc2wgMXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICAmX19sYWJlbHtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgJl9fYXJyb3d7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9