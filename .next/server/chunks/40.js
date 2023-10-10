exports.id = 40;
exports.ids = [40];
exports.modules = {

/***/ 8274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LargeButton_LargeButton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2213);
/* harmony import */ var _LargeButton_LargeButton_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LargeButton_LargeButton_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["className", "linkClassName", "children", "onClick", "to", "color", "disabled"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const colors = {
  blue: (_LargeButton_LargeButton_module_css__WEBPACK_IMPORTED_MODULE_2___default().blue_color),
  gray: (_LargeButton_LargeButton_module_css__WEBPACK_IMPORTED_MODULE_2___default().gray_color)
};

const LargeButton = _ref => {
  let {
    className = '',
    linkClassName = '',
    children,
    onClick,
    to,
    color = 'blue',
    disabled
  } = _ref,
      others = _objectWithoutProperties(_ref, _excluded);

  if (to && !disabled) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: to,
      className: `w-full ${linkClassName}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", _objectSpread(_objectSpread({
        className: `${(_LargeButton_LargeButton_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_root)} ${colors[color]} lg:!w-full ${className}`
      }, others), {}, {
        onClick: onClick,
        children: children
      }))
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", _objectSpread(_objectSpread({
    className: `${(_LargeButton_LargeButton_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_root)} ${colors[color]} ${className} `,
    disabled: disabled
  }, others), {}, {
    onClick: onClick,
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LargeButton);

/***/ }),

/***/ 3911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Typography_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1279);
/* harmony import */ var _Typography_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Typography_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);





const Typography = ({
  variant,
  children,
  className = '',
  style
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [variant === 'h1' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      className: `${(_Typography_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading_h1)} ${className}`,
      style: style,
      children: children
    }), variant === 'h2' &&
    /*#__PURE__*/
    // 32px 55px
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      className: `${(_Typography_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading_h2)} ${className}`,
      style: style,
      children: children
    }), variant === 'h3' &&
    /*#__PURE__*/
    // 32px 40px
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
      className: `${(_Typography_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading_h3)} ${className}`,
      style: style,
      children: children
    }), variant === 'h4' &&
    /*#__PURE__*/
    // 20px 24px
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
      className: `${(_Typography_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading_h4)} ${className}`,
      style: style,
      children: children
    }), variant === 'subtitle' &&
    /*#__PURE__*/
    // 16px 20px
    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: `${(_Typography_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading_subtitle)} ${className}`,
      style: style,
      children: children
    }), variant === 'heading' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      className: `${(_Typography_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading)} ${className}`,
      style: style,
      children: children
    }), variant === 'body1' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: `${(_Typography_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading_body1)} ${className}`,
      style: style,
      children: children
    }), variant === 'body2' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: `${(_Typography_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading_body2)} ${className}`,
      style: style,
      children: children
    }), variant === 'body3' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: `${(_Typography_module_css__WEBPACK_IMPORTED_MODULE_1___default().heading_body3)} ${className}`,
      style: style,
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ 2213:
/***/ ((module) => {

// Exports
module.exports = {
	"button_root": "LargeButton_button_root__Zbh_g",
	"blue_color": "LargeButton_blue_color__SFeg0",
	"gray_color": "LargeButton_gray_color__0Wc2n"
};


/***/ }),

/***/ 1279:
/***/ ((module) => {

// Exports
module.exports = {
	"heading_h1": "Typography_heading_h1__qkhWg",
	"heading_h2": "Typography_heading_h2__aYSH9",
	"heading_h3": "Typography_heading_h3__7ow1G",
	"heading_h4": "Typography_heading_h4__Wc0R6",
	"heading_subtitle": "Typography_heading_subtitle__yea7_",
	"heading": "Typography_heading__bsTnE",
	"heading_body1": "Typography_heading_body1__bWIi6",
	"heading_body2": "Typography_heading_body2__eNV_X",
	"heading_body3": "Typography_heading_body3__NHUYR"
};


/***/ })

};
;