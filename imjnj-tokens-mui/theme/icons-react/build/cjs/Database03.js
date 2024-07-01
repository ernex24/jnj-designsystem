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
var Database03 = function Database03(props) {
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
      d: "M11.1 21c.9941 0 1.8-.8059 1.8-1.8 0-.9941-.8059-1.8-1.8-1.8-.9941 0-1.8.8059-1.8 1.8 0 .9941.8059 1.8 1.8 1.8Zm0-12.6c4.4735 0 8.1-1.2088 8.1-2.7S15.5735 3 11.1 3 3 4.2088 3 5.7s3.6265 2.7 8.1 2.7Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M3 5.7v5.4c0 1.494 3.6 2.7 8.1 2.7s8.1-1.206 8.1-2.7V5.7"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12.9 19.2c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8m3.6 0c0-.9941-.8059-1.8-1.8-1.8m1.8 1.8h6.3m-9.9 0c0-.9941.8059-1.8 1.8-1.8m-1.8 1.8H3m8.1-1.8v-3.6m8.1-8.1c0 1.4912-3.6265 2.7-8.1 2.7S3 7.1912 3 5.7m16.2 0c0-1.4912-3.6265-2.7-8.1-2.7S3 4.2088 3 5.7m16.2 0v5.4c0 1.494-3.6 2.7-8.1 2.7M3 5.7v5.4c0 1.494 3.6 2.7 8.1 2.7"
    })]
  }));
};
var _default = exports["default"] = Database03;