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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);\n  font-size: 12px;\n}\n\ninput {\n  display: none;\n}\n\nlabel {\n  font-size: 14px;\n  line-height: 14px;\n  display: block;\n  padding: 8px 0px;\n  margin: 0 0 1px 0;\n  cursor: pointer;\n  color: #1d1e35;\n  transition: ease 0.5s;\n}\nlabel:hover {\n  color: #f47c57;\n}\n\n.content {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  /* or 150% */\n  color: #787887;\n}\n\ninput + label + .content {\n  display: none;\n}\n\ninput:checked + label + .content {\n  display: block;\n}\n\ninput:checked + label {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: #1d1e35;\n}\n\n.hidden {\n  display: none;\n}\n@media (min-width: 640px) {\n  .hidden--sm {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .hidden--md {\n    display: none;\n  }\n}\n@media (min-width: 1024px) {\n  .hidden--lg {\n    display: none;\n  }\n}\n@media (min-width: 1280px) {\n  .hidden--xl {\n    display: none;\n  }\n}\n@media (min-width: 1536px) {\n  .hidden--xl2 {\n    display: none;\n  }\n}\n\n.block {\n  display: block;\n}\n@media (min-width: 640px) {\n  .block--sm {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .block--md {\n    display: block;\n  }\n}\n@media (min-width: 1024px) {\n  .block--lg {\n    display: block;\n  }\n}\n@media (min-width: 1280px) {\n  .block--xl {\n    display: block;\n  }\n}\n@media (min-width: 1536px) {\n  .block--xl2 {\n    display: block;\n  }\n}\n\n.grid {\n  display: grid;\n  justify-items: center;\n}\n.grid__col--1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid__col--2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid__col--3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid__col--4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid--1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid--2 {\n  grid-template-columns: auto auto;\n}\n.grid--3 {\n  grid-template-columns: auto auto auto;\n}\n.grid--4 {\n  grid-template-columns: auto auto auto auto;\n}\n@media (min-width: 640px) {\n  .grid--sm {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--sm__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--sm__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--sm__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--sm__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--sm--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--sm--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--sm--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--sm--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 768px) {\n  .grid--md {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--md__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--md__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--md__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--md__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--md--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--md--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--md--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--md--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1024px) {\n  .grid--lg {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--lg__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--lg__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--lg__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--lg__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--lg--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--lg--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--lg--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--lg--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1280px) {\n  .grid--xl {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--xl__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--xl__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--xl__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--xl--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--xl--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--xl--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1536px) {\n  .grid--xl2 {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--xl2__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl2__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--xl2__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--xl2__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--xl2--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl2--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--xl2--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--xl2--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n\n.gap {\n  gap: 0px;\n}\n.gap--0 {\n  gap: 0px;\n}\n.gap--4 {\n  gap: 1rem;\n}\n.gap--x {\n  column-gap: 0px;\n}\n.gap--y {\n  row-gap: 0px;\n}\n\n.justify-items--center {\n  justify-items: center;\n}\n\n.justify-content--center {\n  justify-content: center;\n}\n\n* {\n  font-family: \"Kumbh Sans\";\n}\n\nh1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 32px;\n  color: #1d1e35;\n  margin-bottom: 43px;\n}\n\n.container {\n  margin: 0px;\n  padding: 165px 24px;\n}\n@media (min-width: 768px) {\n  .container {\n    padding: 116px 165px;\n  }\n}\n.container--fluid {\n  padding: 24px;\n}\n@media (min-width: 768px) {\n  .container--fluid {\n    padding: 0px;\n  }\n}\n.container__small {\n  max-width: 540px;\n}\n\n.card {\n  min-height: 100%;\n  background-color: white;\n  margin: 130px 260px;\n  padding: 65px 95px;\n}\n.accordion__element {\n  border-bottom: solid #e7e7e9 1px;\n  padding-bottom: 16px;\n  min-width: 350px;\n}", "",{"version":3,"sources":["webpack://./src/sass/base/_base.scss","webpack://./src/sass/main.scss","webpack://./src/sass/utils/_variables.scss","webpack://./src/sass/base/_display.scss","webpack://./src/sass/utils/_mixins.scss","webpack://./src/sass/base/_typography.scss","webpack://./src/sass/layout/_container.scss","webpack://./src/sass/layout/_card.scss","webpack://./src/sass/components/_accordion.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody{\r\n  background: linear-gradient(180deg, $color-primary 0%, $color-secondary 100%);\r\n  font-size: 12px;\r\n}\r\ninput {\r\n  display: none;\r\n}\r\nlabel {\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n\r\n  display: block;\r\n  padding: 8px 0px;\r\n  margin: 0 0 1px 0;\r\n  cursor: pointer;\r\n  color: $color-dark-blue-hsl;\r\n  transition: ease .5s;\r\n  &:hover {\r\n    color: $color-soft-red-hsl;\r\n  }\r\n}\r\n\r\n.content {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 12px;\r\n  line-height: 18px;\r\n  /* or 150% */\r\n\r\n\r\n  color: $color-gray-hsl;\r\n\r\n}\r\ninput + label + .content {\r\n   display: none;\r\n }\r\n\r\ninput:checked + label + .content {\r\n  display: block;\r\n}\r\ninput:checked + label{\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  line-height: 14px;\r\n  color: $color-dark-blue-hsl;\r\n}","* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);\n  font-size: 12px;\n}\n\ninput {\n  display: none;\n}\n\nlabel {\n  font-size: 14px;\n  line-height: 14px;\n  display: block;\n  padding: 8px 0px;\n  margin: 0 0 1px 0;\n  cursor: pointer;\n  color: #1d1e35;\n  transition: ease 0.5s;\n}\nlabel:hover {\n  color: #f47c57;\n}\n\n.content {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  /* or 150% */\n  color: #787887;\n}\n\ninput + label + .content {\n  display: none;\n}\n\ninput:checked + label + .content {\n  display: block;\n}\n\ninput:checked + label {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: #1d1e35;\n}\n\n.hidden {\n  display: none;\n}\n@media (min-width: 640px) {\n  .hidden--sm {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .hidden--md {\n    display: none;\n  }\n}\n@media (min-width: 1024px) {\n  .hidden--lg {\n    display: none;\n  }\n}\n@media (min-width: 1280px) {\n  .hidden--xl {\n    display: none;\n  }\n}\n@media (min-width: 1536px) {\n  .hidden--xl2 {\n    display: none;\n  }\n}\n\n.block {\n  display: block;\n}\n@media (min-width: 640px) {\n  .block--sm {\n    display: block;\n  }\n}\n@media (min-width: 768px) {\n  .block--md {\n    display: block;\n  }\n}\n@media (min-width: 1024px) {\n  .block--lg {\n    display: block;\n  }\n}\n@media (min-width: 1280px) {\n  .block--xl {\n    display: block;\n  }\n}\n@media (min-width: 1536px) {\n  .block--xl2 {\n    display: block;\n  }\n}\n\n.grid {\n  display: grid;\n  justify-items: center;\n}\n.grid__col--1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid__col--2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid__col--3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid__col--4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid--1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid--2 {\n  grid-template-columns: auto auto;\n}\n.grid--3 {\n  grid-template-columns: auto auto auto;\n}\n.grid--4 {\n  grid-template-columns: auto auto auto auto;\n}\n@media (min-width: 640px) {\n  .grid--sm {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--sm__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--sm__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--sm__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--sm__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--sm--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--sm--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--sm--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--sm--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 768px) {\n  .grid--md {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--md__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--md__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--md__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--md__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--md--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--md--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--md--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--md--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1024px) {\n  .grid--lg {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--lg__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--lg__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--lg__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--lg__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--lg--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--lg--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--lg--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--lg--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1280px) {\n  .grid--xl {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--xl__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--xl__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--xl__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--xl--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--xl--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--xl--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n@media (min-width: 1536px) {\n  .grid--xl2 {\n    display: grid;\n    justify-items: center;\n  }\n  .grid--xl2__col--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl2__col--2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid--xl2__col--3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid--xl2__col--4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid--xl2--1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid--xl2--2 {\n    grid-template-columns: auto auto;\n  }\n  .grid--xl2--3 {\n    grid-template-columns: auto auto auto;\n  }\n  .grid--xl2--4 {\n    grid-template-columns: auto auto auto auto;\n  }\n}\n\n.gap {\n  gap: 0px;\n}\n.gap--0 {\n  gap: 0px;\n}\n.gap--4 {\n  gap: 1rem;\n}\n.gap--x {\n  column-gap: 0px;\n}\n.gap--y {\n  row-gap: 0px;\n}\n\n.justify-items--center {\n  justify-items: center;\n}\n\n.justify-content--center {\n  justify-content: center;\n}\n\n* {\n  font-family: \"Kumbh Sans\";\n}\n\nh1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 32px;\n  line-height: 32px;\n  color: #1d1e35;\n  margin-bottom: 43px;\n}\n\n.container {\n  margin: 0px;\n  padding: 165px 24px;\n}\n@media (min-width: 768px) {\n  .container {\n    padding: 116px 165px;\n  }\n}\n.container--fluid {\n  padding: 24px;\n}\n@media (min-width: 768px) {\n  .container--fluid {\n    padding: 0px;\n  }\n}\n.container__small {\n  max-width: 540px;\n}\n\n.card {\n  min-height: 100%;\n  background-color: white;\n  margin: 130px 260px;\n  padding: 65px 95px;\n}\n.accordion__element {\n  border-bottom: solid #e7e7e9 1px;\n  padding-bottom: 16px;\n  min-width: 350px;\n}","$color-primary : #B068E9;\r\n$color-secondary: #6463E7;\r\n\r\n//color HSL\r\n\r\n$color-primary-hsl : hsl(273, 75%, 66%);\r\n$color-secondary-hsl: hsl(240, 73%, 65%);\r\n\r\n$color-dark-hsl: hsl(237, 12%, 33%);\r\n$color-gray-hsl: hsl(240, 6%, 50%);\r\n$color-dark-blue-hsl :hsl(238, 29%, 16%);\r\n$color-light-gray-blue-hsl : hsl(240, 5%, 91%);\r\n$color-soft-red-hsl: hsl(14, 88%, 65%);","\r\n.hidden{\r\n  @include display(none);\r\n}\r\n.block{\r\n  @include display(block);\r\n}\r\n\r\n\r\n.grid{\r\n  //grid-column-gap: 50px;\r\n  @include grid;\r\n  &--sm{\r\n    @media (min-width: 640px) {\r\n      @include grid;\r\n    }\r\n  }\r\n  &--md {\r\n    @media (min-width: 768px) {\r\n      @include grid;\r\n    }\r\n  }\r\n  &--lg {\r\n    @media (min-width: 1024px) {\r\n      @include grid;\r\n    }\r\n  }\r\n  &--xl {\r\n    @media (min-width: 1280px) {\r\n      @include grid;\r\n    }\r\n  }\r\n  &--xl2 {\r\n    @media (min-width: 1536px) {\r\n      @include grid;\r\n    }\r\n  }\r\n}\r\n.gap{\r\n  gap:0px;\r\n  &--0{\r\n    gap:0px;\r\n  }\r\n  &--4{\r\n    gap:1rem;\r\n  }\r\n  &--x{\r\n    column-gap: 0px;\r\n  }\r\n  &--y{\r\n    row-gap: 0px;\r\n  }\r\n}\r\n.justify-items{\r\n  &--center{\r\n    justify-items: center;\r\n  }\r\n}\r\n.justify-content{\r\n   &--center{\r\n     justify-content: center;\r\n   }\r\n }\r\n\r\n","@mixin hidden{\r\n  display: none;\r\n}\r\n@mixin grid{\r\n  display: grid;\r\n  justify-items: center;\r\n  &__col{\r\n    &--1{\r\n      grid-template-columns: repeat(1, minmax(0, 1fr));\r\n    }\r\n    &--2{\r\n      grid-template-columns: repeat(2, minmax(0, 1fr));\r\n    }\r\n    &--3{\r\n      grid-template-columns: repeat(3, minmax(0, 1fr));\r\n    }\r\n    &--4{\r\n      grid-template-columns: repeat(4, minmax(0, 1fr));\r\n    }\r\n  }\r\n  &--1{\r\n    grid-template-columns: repeat(1, minmax(0, 1fr));\r\n  }\r\n  &--2{\r\n    grid-template-columns: auto auto;\r\n  }\r\n  &--3{\r\n    grid-template-columns: auto auto auto;\r\n  }\r\n  &--4{\r\n    grid-template-columns: auto auto auto auto;\r\n  }\r\n}\r\n\r\n@mixin block{\r\n  display: block;\r\n}\r\n\r\n@mixin display($value){\r\n\r\n  display: $value;\r\n  &--sm{\r\n    @media (min-width: 640px) {\r\n      display: $value;\r\n    }\r\n  }\r\n  &--md {\r\n    @media (min-width: 768px) {\r\n      display: $value;\r\n    }\r\n  }\r\n  &--lg {\r\n    @media (min-width: 1024px) {\r\n      display: $value;\r\n    }\r\n  }\r\n  &--xl {\r\n    @media (min-width: 1280px) {\r\n      display: $value;\r\n    }\r\n  }\r\n  &--xl2 {\r\n    @media (min-width: 1536px) {\r\n      display: $value;\r\n    }\r\n  }\r\n\r\n}","* {\r\n  font-family: \"Kumbh Sans\";\r\n}\r\n\r\nh1{\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: 32px;\r\n  line-height: 32px;\r\n  color: $color-dark-blue-hsl;\r\n  margin-bottom: 43px;\r\n}",".container{\r\n  margin: 0px;\r\n  padding: 165px 24px ;\r\n  @media (min-width: 768px) {\r\n    padding: 116px 165px;\r\n  }\r\n  &--fluid{\r\n    padding: 24px ;\r\n    @media (min-width: 768px) {\r\n      padding: 0px;\r\n    }\r\n  }\r\n  &__small\r\n  {\r\n    max-width: 540px;\r\n  }\r\n}","\r\n.card{\r\n  min-height: 100%;\r\n  background-color: white;\r\n  margin: 130px 260px;\r\n  padding: 65px 95px;\r\n  &__illustration{\r\n\r\n  }\r\n  &__content{\r\n\r\n  }\r\n}",".accordion{\r\n  &__element{\r\n    border-bottom: solid $color-light-gray-blue-hsl 1px;\r\n    padding-bottom: 16px;\r\n    min-width: 350px;\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLE9BQU8sS0FBSyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxN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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi1jYXJkLW1haW4vLi9zcmMvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi1jYXJkLW1haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi1jYXJkLW1haW4vLi9zcmMvc2Fzcy9tYWluLnNjc3M/NmExNyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLWNhcmQtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLWNhcmQtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi1jYXJkLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi1jYXJkLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmFxLWFjY29yZGlvbi1jYXJkLW1haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mYXEtYWNjb3JkaW9uLWNhcmQtbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZhcS1hY2NvcmRpb24tY2FyZC1tYWluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjQjA2OEU5IDAlLCAjNjQ2M0U3IDEwMCUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogOHB4IDBweDtcXG4gIG1hcmdpbjogMCAwIDFweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMxZDFlMzU7XFxuICB0cmFuc2l0aW9uOiBlYXNlIDAuNXM7XFxufVxcbmxhYmVsOmhvdmVyIHtcXG4gIGNvbG9yOiAjZjQ3YzU3O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICAvKiBvciAxNTAlICovXFxuICBjb2xvcjogIzc4Nzg4NztcXG59XFxuXFxuaW5wdXQgKyBsYWJlbCArIC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCArIC5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgbGFiZWwge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMTRweDtcXG4gIGNvbG9yOiAjMWQxZTM1O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcbiAgLmhpZGRlbi0tc20ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5oaWRkZW4tLW1kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLmhpZGRlbi0tbGcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuICAuaGlkZGVuLS14bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG4gIC5oaWRkZW4tLXhsMiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAuYmxvY2stLXNtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmJsb2NrLS1tZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAuYmxvY2stLWxnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5ibG9jay0teGwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcbiAgLmJsb2NrLS14bDIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLmdyaWRfX2NvbC0tMSB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkX19jb2wtLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZF9fY29sLS0zIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWRfX2NvbC0tNCB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkLS0xIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWQtLTIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcbi5ncmlkLS0zIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxufVxcbi5ncmlkLS00IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAuZ3JpZC0tc20ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuZ3JpZC0tc21fX2NvbC0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1zbV9fY29sLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXNtX19jb2wtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tc21fX2NvbC0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1zbS0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1zbS0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXNtLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS1zbS0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuZ3JpZC0tbWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuZ3JpZC0tbWRfX2NvbC0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1tZF9fY29sLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLW1kX19jb2wtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbWRfX2NvbC0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1tZC0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1tZC0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLW1kLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS1tZC0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgLmdyaWQtLWxnIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmdyaWQtLWxnX19jb2wtLTEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbGdfX2NvbC0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1sZ19fY29sLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLWxnX19jb2wtLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbGctLTEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbGctLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS1sZy0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxuICB9XFxuICAuZ3JpZC0tbGctLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5ncmlkLS14bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5ncmlkLS14bF9fY29sLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsX19jb2wtLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0teGxfX2NvbC0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS14bF9fY29sLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICB9XFxuICAuZ3JpZC0teGwtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXhsLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuICAuZ3JpZC0teGwyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMl9fY29sLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMi0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS14bDItLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS14bDItLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXhsMi0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG59XFxuXFxuLmdhcCB7XFxuICBnYXA6IDBweDtcXG59XFxuLmdhcC0tMCB7XFxuICBnYXA6IDBweDtcXG59XFxuLmdhcC0tNCB7XFxuICBnYXA6IDFyZW07XFxufVxcbi5nYXAtLXgge1xcbiAgY29sdW1uLWdhcDogMHB4O1xcbn1cXG4uZ2FwLS15IHtcXG4gIHJvdy1nYXA6IDBweDtcXG59XFxuXFxuLmp1c3RpZnktaXRlbXMtLWNlbnRlciB7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtLWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIkt1bWJoIFNhbnNcXFwiO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgY29sb3I6ICMxZDFlMzU7XFxuICBtYXJnaW4tYm90dG9tOiA0M3B4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMTY1cHggMjRweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTE2cHggMTY1cHg7XFxuICB9XFxufVxcbi5jb250YWluZXItLWZsdWlkIHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbnRhaW5lci0tZmx1aWQge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICB9XFxufVxcbi5jb250YWluZXJfX3NtYWxsIHtcXG4gIG1heC13aWR0aDogNTQwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMTMwcHggMjYwcHg7XFxuICBwYWRkaW5nOiA2NXB4IDk1cHg7XFxufVxcbi5hY2NvcmRpb25fX2VsZW1lbnQge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgI2U3ZTdlOSAxcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG4gIG1pbi13aWR0aDogMzUwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2Jhc2UvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy91dGlscy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2Jhc2UvX2Rpc3BsYXkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvdXRpbHMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9iYXNlL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2xheW91dC9fY29udGFpbmVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2xheW91dC9fY2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL19hY2NvcmRpb24uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDQTtFQUNFLDZEQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0VWb0I7RUZXcEIscUJBQUE7QUNHRjtBREZFO0VBQ0Us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O0VHalFFO0lBQ0UsZ0RBQUE7RUhtUUo7RUdqUUU7SUFDRSxnREFBQTtFSG1RSjtFR2hRQTtJQUNFLGdEQUFBO0VIa1FGO0VHaFFBO0lBQ0UsZ0NBQUE7RUhrUUY7RUdoUUE7SUFDRSxxQ0FBQTtFSGtRRjtFR2hRQTtJQUNFLDBDQUFBO0VIa1FGO0FBQ0Y7O0FFM1BBO0VBQ0UsUUFBQTtBRjhQRjtBRTdQRTtFQUNFLFFBQUE7QUYrUEo7QUU3UEU7RUFDRSxTQUFBO0FGK1BKO0FFN1BFO0VBQ0UsZUFBQTtBRitQSjtBRTdQRTtFQUNFLFlBQUE7QUYrUEo7O0FFM1BFO0VBQ0UscUJBQUE7QUY4UEo7O0FFMVBHO0VBQ0UsdUJBQUE7QUY2UEw7O0FJelRBO0VBQ0UseUJBQUE7QUo0VEY7O0FJelRBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNIQ29CO0VHQXBCLG1CQUFBO0FKNFRGOztBS3RVQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBTHlVRjtBS3hVRTtFQUhGO0lBSUksb0JBQUE7RUwyVUY7QUFDRjtBSzFVRTtFQUNFLGFBQUE7QUw0VUo7QUszVUk7RUFGRjtJQUdJLFlBQUE7RUw4VUo7QUFDRjtBSzVVRTtFQUVFLGdCQUFBO0FMNlVKOztBTTFWQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FONlZGO0FPaldFO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FQbVdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAkY29sb3ItcHJpbWFyeSAwJSwgJGNvbG9yLXNlY29uZGFyeSAxMDAlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuaW5wdXQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxubGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDhweCAwcHg7XFxyXFxuICBtYXJnaW46IDAgMCAxcHggMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZGFyay1ibHVlLWhzbDtcXHJcXG4gIHRyYW5zaXRpb246IGVhc2UgLjVzO1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAkY29sb3Itc29mdC1yZWQtaHNsO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxuICAvKiBvciAxNTAlICovXFxyXFxuXFxyXFxuXFxyXFxuICBjb2xvcjogJGNvbG9yLWdyYXktaHNsO1xcclxcblxcclxcbn1cXHJcXG5pbnB1dCArIGxhYmVsICsgLmNvbnRlbnQge1xcclxcbiAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuIH1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkICsgbGFiZWwgKyAuY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVse1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZGFyay1ibHVlLWhzbDtcXHJcXG59XCIsXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNCMDY4RTkgMCUsICM2NDYzRTcgMTAwJSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbmlucHV0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMHB4O1xcbiAgbWFyZ2luOiAwIDAgMXB4IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzFkMWUzNTtcXG4gIHRyYW5zaXRpb246IGVhc2UgMC41cztcXG59XFxubGFiZWw6aG92ZXIge1xcbiAgY29sb3I6ICNmNDdjNTc7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIC8qIG9yIDE1MCUgKi9cXG4gIGNvbG9yOiAjNzg3ODg3O1xcbn1cXG5cXG5pbnB1dCArIGxhYmVsICsgLmNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsICsgLmNvbnRlbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyBsYWJlbCB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbiAgY29sb3I6ICMxZDFlMzU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAuaGlkZGVuLS1zbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmhpZGRlbi0tbWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAuaGlkZGVuLS1sZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG4gIC5oaWRkZW4tLXhsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcbiAgLmhpZGRlbi0teGwyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLmJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gIC5ibG9jay0tc20ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuYmxvY2stLW1kIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5ibG9jay0tbGcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgLmJsb2NrLS14bCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuICAuYmxvY2stLXhsMiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG4uZ3JpZF9fY29sLS0xIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWRfX2NvbC0tMiB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxufVxcbi5ncmlkX19jb2wtLTMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZF9fY29sLS00IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG59XFxuLmdyaWQtLTEge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbn1cXG4uZ3JpZC0tMiB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuLmdyaWQtLTMge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG59XFxuLmdyaWQtLTQge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gIC5ncmlkLS1zbSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5ncmlkLS1zbV9fY29sLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXNtX19jb2wtLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tc21fX2NvbC0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1zbV9fY29sLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXNtLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXNtLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICB9XFxuICAuZ3JpZC0tc20tLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXNtLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5ncmlkLS1tZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5ncmlkLS1tZF9fY29sLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLW1kX19jb2wtLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbWRfX2NvbC0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1tZF9fY29sLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLW1kLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLW1kLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICB9XFxuICAuZ3JpZC0tbWQtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLW1kLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAuZ3JpZC0tbGcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuZ3JpZC0tbGdfX2NvbC0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1sZ19fY29sLS0yIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLWxnX19jb2wtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0tbGdfX2NvbC0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1sZy0tMSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS1sZy0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLWxnLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS1sZy0tNCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcbiAgLmdyaWQtLXhsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLmdyaWQtLXhsX19jb2wtLTEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0teGxfX2NvbC0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5ncmlkLS14bF9fY29sLS0zIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsX19jb2wtLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0teGwtLTEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0teGwtLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIH1cXG4gIC5ncmlkLS14bC0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxuICB9XFxuICAuZ3JpZC0teGwtLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG4gIC5ncmlkLS14bDIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuZ3JpZC0teGwyX19jb2wtLTEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0teGwyX19jb2wtLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0teGwyX19jb2wtLTMge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0teGwyX19jb2wtLTQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuICAuZ3JpZC0teGwyLS0xIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcbiAgfVxcbiAgLmdyaWQtLXhsMi0tMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgfVxcbiAgLmdyaWQtLXhsMi0tMyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxuICB9XFxuICAuZ3JpZC0teGwyLS00IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgfVxcbn1cXG5cXG4uZ2FwIHtcXG4gIGdhcDogMHB4O1xcbn1cXG4uZ2FwLS0wIHtcXG4gIGdhcDogMHB4O1xcbn1cXG4uZ2FwLS00IHtcXG4gIGdhcDogMXJlbTtcXG59XFxuLmdhcC0teCB7XFxuICBjb2x1bW4tZ2FwOiAwcHg7XFxufVxcbi5nYXAtLXkge1xcbiAgcm93LWdhcDogMHB4O1xcbn1cXG5cXG4uanVzdGlmeS1pdGVtcy0tY2VudGVyIHtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC0tY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS3VtYmggU2Fuc1xcXCI7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICBjb2xvcjogIzFkMWUzNTtcXG4gIG1hcmdpbi1ib3R0b206IDQzcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAxNjVweCAyNHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxMTZweCAxNjVweDtcXG4gIH1cXG59XFxuLmNvbnRhaW5lci0tZmx1aWQge1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29udGFpbmVyLS1mbHVpZCB7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gIH1cXG59XFxuLmNvbnRhaW5lcl9fc21hbGwge1xcbiAgbWF4LXdpZHRoOiA1NDBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAxMzBweCAyNjBweDtcXG4gIHBhZGRpbmc6IDY1cHggOTVweDtcXG59XFxuLmFjY29yZGlvbl9fZWxlbWVudCB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAjZTdlN2U5IDFweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG59XCIsXCIkY29sb3ItcHJpbWFyeSA6ICNCMDY4RTk7XFxyXFxuJGNvbG9yLXNlY29uZGFyeTogIzY0NjNFNztcXHJcXG5cXHJcXG4vL2NvbG9yIEhTTFxcclxcblxcclxcbiRjb2xvci1wcmltYXJ5LWhzbCA6IGhzbCgyNzMsIDc1JSwgNjYlKTtcXHJcXG4kY29sb3Itc2Vjb25kYXJ5LWhzbDogaHNsKDI0MCwgNzMlLCA2NSUpO1xcclxcblxcclxcbiRjb2xvci1kYXJrLWhzbDogaHNsKDIzNywgMTIlLCAzMyUpO1xcclxcbiRjb2xvci1ncmF5LWhzbDogaHNsKDI0MCwgNiUsIDUwJSk7XFxyXFxuJGNvbG9yLWRhcmstYmx1ZS1oc2wgOmhzbCgyMzgsIDI5JSwgMTYlKTtcXHJcXG4kY29sb3ItbGlnaHQtZ3JheS1ibHVlLWhzbCA6IGhzbCgyNDAsIDUlLCA5MSUpO1xcclxcbiRjb2xvci1zb2Z0LXJlZC1oc2w6IGhzbCgxNCwgODglLCA2NSUpO1wiLFwiXFxyXFxuLmhpZGRlbntcXHJcXG4gIEBpbmNsdWRlIGRpc3BsYXkobm9uZSk7XFxyXFxufVxcclxcbi5ibG9ja3tcXHJcXG4gIEBpbmNsdWRlIGRpc3BsYXkoYmxvY2spO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZ3JpZHtcXHJcXG4gIC8vZ3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xcclxcbiAgQGluY2x1ZGUgZ3JpZDtcXHJcXG4gICYtLXNte1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXHJcXG4gICAgICBAaW5jbHVkZSBncmlkO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLS1tZCB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgIEBpbmNsdWRlIGdyaWQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICYtLWxnIHtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcclxcbiAgICAgIEBpbmNsdWRlIGdyaWQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICYtLXhsIHtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcclxcbiAgICAgIEBpbmNsdWRlIGdyaWQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICYtLXhsMiB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXHJcXG4gICAgICBAaW5jbHVkZSBncmlkO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5nYXB7XFxyXFxuICBnYXA6MHB4O1xcclxcbiAgJi0tMHtcXHJcXG4gICAgZ2FwOjBweDtcXHJcXG4gIH1cXHJcXG4gICYtLTR7XFxyXFxuICAgIGdhcDoxcmVtO1xcclxcbiAgfVxcclxcbiAgJi0teHtcXHJcXG4gICAgY29sdW1uLWdhcDogMHB4O1xcclxcbiAgfVxcclxcbiAgJi0teXtcXHJcXG4gICAgcm93LWdhcDogMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG4uanVzdGlmeS1pdGVtc3tcXHJcXG4gICYtLWNlbnRlcntcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uanVzdGlmeS1jb250ZW50e1xcclxcbiAgICYtLWNlbnRlcntcXHJcXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgIH1cXHJcXG4gfVxcclxcblxcclxcblwiLFwiQG1peGluIGhpZGRlbntcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbkBtaXhpbiBncmlke1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICZfX2NvbHtcXHJcXG4gICAgJi0tMXtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICAgIH1cXHJcXG4gICAgJi0tMntcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICAgIH1cXHJcXG4gICAgJi0tM3tcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICAgIH1cXHJcXG4gICAgJi0tNHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICYtLTF7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXHJcXG4gIH1cXHJcXG4gICYtLTJ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgfVxcclxcbiAgJi0tM3tcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIH1cXHJcXG4gICYtLTR7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJsb2Nre1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBkaXNwbGF5KCR2YWx1ZSl7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiAkdmFsdWU7XFxyXFxuICAmLS1zbXtcXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuICAgICAgZGlzcGxheTogJHZhbHVlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLS1tZCB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgIGRpc3BsYXk6ICR2YWx1ZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJi0tbGcge1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuICAgICAgZGlzcGxheTogJHZhbHVlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLS14bCB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gICAgICBkaXNwbGF5OiAkdmFsdWU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICYtLXhsMiB7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXHJcXG4gICAgICBkaXNwbGF5OiAkdmFsdWU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG59XCIsXCIqIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS3VtYmggU2Fuc1xcXCI7XFxyXFxufVxcclxcblxcclxcbmgxe1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDMycHg7XFxyXFxuICBsaW5lLWhlaWdodDogMzJweDtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZGFyay1ibHVlLWhzbDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQzcHg7XFxyXFxufVwiLFwiLmNvbnRhaW5lcntcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogMTY1cHggMjRweCA7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgcGFkZGluZzogMTE2cHggMTY1cHg7XFxyXFxuICB9XFxyXFxuICAmLS1mbHVpZHtcXHJcXG4gICAgcGFkZGluZzogMjRweCA7XFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fc21hbGxcXHJcXG4gIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcXHJcXG4gIH1cXHJcXG59XCIsXCJcXHJcXG4uY2FyZHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMTMwcHggMjYwcHg7XFxyXFxuICBwYWRkaW5nOiA2NXB4IDk1cHg7XFxyXFxuICAmX19pbGx1c3RyYXRpb257XFxyXFxuXFxyXFxuICB9XFxyXFxuICAmX19jb250ZW50e1xcclxcblxcclxcbiAgfVxcclxcbn1cIixcIi5hY2NvcmRpb257XFxyXFxuICAmX19lbGVtZW50e1xcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAkY29sb3ItbGlnaHQtZ3JheS1ibHVlLWhzbCAxcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcclxcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3Nhc3MvbWFpbi5zY3NzJyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==