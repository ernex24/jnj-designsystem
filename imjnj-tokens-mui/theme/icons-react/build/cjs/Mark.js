"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Mark = function Mark(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M12 18.2c3.9765 0 7.2-3.2235 7.2-7.2 0-3.9764-3.2235-7.2-7.2-7.2-3.9764 0-7.2 3.2236-7.2 7.2 0 3.9765 3.2236 7.2 7.2 7.2Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M12 13.7c1.4912 0 2.7-1.2088 2.7-2.7S13.4912 8.3 12 8.3 9.3 9.5088 9.3 11s1.2088 2.7 2.7 2.7Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19.2 11c0 3.9765-3.2235 7.2-7.2 7.2m7.2-7.2c0-3.9764-3.2235-7.2-7.2-7.2m7.2 7.2H21m-9 7.2c-3.9764 0-7.2-3.2235-7.2-7.2m7.2 7.2V20m-7.2-9c0-3.9764 3.2236-7.2 7.2-7.2M4.8 11H3m9-7.2V2m2.7 9c0 1.4912-1.2088 2.7-2.7 2.7S9.3 12.4912 9.3 11s1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Z"
    })]
  }));
};
var _default = exports["default"] = Mark;