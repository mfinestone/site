webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Members.tsx":
/*!********************************!*\
  !*** ./components/Members.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./components/Section.tsx");
/* harmony import */ var _lib_members_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/members.json */ "./lib/members.json");
var _lib_members_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../lib/members.json */ "./lib/members.json", 1);
var _jsxFileName = "/home/ian/proj/defi/site/components/Members.tsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Category = function Category(_ref) {
  var header = _ref.header,
      members = _ref.members,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, header), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, members.map(function (member) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: _lib_members_json__WEBPACK_IMPORTED_MODULE_3__.members[member],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, member));
  })));
};

var StyledCategory =
/*#__PURE__*/
Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])(Category, {
  label: "StyledCategory",
  target: "ebj7umv0"
})("h4{color:#000d45;font-family:Aeonik;font-size:28px;font-weight:bold;line-height:34px;}ul{list-style:none;}li{color:#0734ff;font-family:Aeonik;font-size:20px;line-height:24px;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9wcm9qL2RlZmkvc2l0ZS9jb21wb25lbnRzL01lbWJlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCdUMiLCJmaWxlIjoiL2hvbWUvaWFuL3Byb2ovZGVmaS9zaXRlL2NvbXBvbmVudHMvTWVtYmVycy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwicmVhY3QtZW1vdGlvblwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vU2VjdGlvblwiO1xuaW1wb3J0IG1lbWJlckRhdGEgZnJvbSBcIi4uL2xpYi9tZW1iZXJzLmpzb25cIjtcblxuY29uc3QgQ2F0ZWdvcnkgPSAoe1xuICBoZWFkZXIsXG4gIG1lbWJlcnMsXG4gIGNsYXNzTmFtZVxufToge1xuICBoZWFkZXI6IHN0cmluZztcbiAgbWVtYmVyczogc3RyaW5nW107XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPGg0PntoZWFkZXJ9PC9oND5cbiAgICA8dWw+XG4gICAgICB7bWVtYmVycy5tYXAobWVtYmVyID0+IChcbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9e21lbWJlckRhdGEubWVtYmVyc1ttZW1iZXJdfT57bWVtYmVyfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU3R5bGVkQ2F0ZWdvcnkgPSBzdHlsZWQoQ2F0ZWdvcnkpYFxuICBoNCB7XG4gICAgY29sb3I6ICMwMDBkNDU7XG4gICAgZm9udC1mYW1pbHk6IEFlb25paztcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgbGkge1xuICAgIGNvbG9yOiAjMDczNGZmO1xuICAgIGZvbnQtZmFtaWx5OiBBZW9uaWs7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG5gO1xuXG5jb25zdCBNZW1iZXJzID0gKHsgY2xhc3NOYW1lIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5lbnRyaWVzKG1lbWJlckRhdGEuY2F0ZWdvcmllcykuc29ydChcbiAgICAoYSwgYikgPT4gKGEgPCBiID8gLTEgOiAxKVxuICApO1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxoMj5NZW1iZXJzPC9oMj5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoW2hlYWRlciwgbWVtYmVyc10pID0+IChcbiAgICAgICAgPFN0eWxlZENhdGVnb3J5IGhlYWRlcj17aGVhZGVyfSBtZW1iZXJzPXttZW1iZXJzIGFzIHN0cmluZ1tdfSAvPlxuICAgICAgKSl9XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKE1lbWJlcnMpYGA7XG4iXX0= */");

var Members = function Members(_ref2) {
  var className = _ref2.className;
  var categories = Object.entries(_lib_members_json__WEBPACK_IMPORTED_MODULE_3__.categories).sort(function (a, b) {
    return a < b ? -1 : 1;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Members"), categories.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        header = _ref4[0],
        members = _ref4[1];

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledCategory, {
      header: header,
      members: members,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])(Members, {
  target: "ebj7umv1"
})("/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9wcm9qL2RlZmkvc2l0ZS9jb21wb25lbnRzL01lbWJlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREOEIiLCJmaWxlIjoiL2hvbWUvaWFuL3Byb2ovZGVmaS9zaXRlL2NvbXBvbmVudHMvTWVtYmVycy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwicmVhY3QtZW1vdGlvblwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vU2VjdGlvblwiO1xuaW1wb3J0IG1lbWJlckRhdGEgZnJvbSBcIi4uL2xpYi9tZW1iZXJzLmpzb25cIjtcblxuY29uc3QgQ2F0ZWdvcnkgPSAoe1xuICBoZWFkZXIsXG4gIG1lbWJlcnMsXG4gIGNsYXNzTmFtZVxufToge1xuICBoZWFkZXI6IHN0cmluZztcbiAgbWVtYmVyczogc3RyaW5nW107XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgPGg0PntoZWFkZXJ9PC9oND5cbiAgICA8dWw+XG4gICAgICB7bWVtYmVycy5tYXAobWVtYmVyID0+IChcbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9e21lbWJlckRhdGEubWVtYmVyc1ttZW1iZXJdfT57bWVtYmVyfTwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU3R5bGVkQ2F0ZWdvcnkgPSBzdHlsZWQoQ2F0ZWdvcnkpYFxuICBoNCB7XG4gICAgY29sb3I6ICMwMDBkNDU7XG4gICAgZm9udC1mYW1pbHk6IEFlb25paztcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIH1cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgbGkge1xuICAgIGNvbG9yOiAjMDczNGZmO1xuICAgIGZvbnQtZmFtaWx5OiBBZW9uaWs7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG5gO1xuXG5jb25zdCBNZW1iZXJzID0gKHsgY2xhc3NOYW1lIH06IHsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5lbnRyaWVzKG1lbWJlckRhdGEuY2F0ZWdvcmllcykuc29ydChcbiAgICAoYSwgYikgPT4gKGEgPCBiID8gLTEgOiAxKVxuICApO1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxoMj5NZW1iZXJzPC9oMj5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgoW2hlYWRlciwgbWVtYmVyc10pID0+IChcbiAgICAgICAgPFN0eWxlZENhdGVnb3J5IGhlYWRlcj17aGVhZGVyfSBtZW1iZXJzPXttZW1iZXJzIGFzIHN0cmluZ1tdfSAvPlxuICAgICAgKSl9XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkKE1lbWJlcnMpYGA7XG4iXX0= */"));

/***/ })

})
//# sourceMappingURL=index.js.f6dd63c89156e06f1d7f.hot-update.js.map