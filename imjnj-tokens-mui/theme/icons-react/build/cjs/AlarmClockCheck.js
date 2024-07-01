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
var AlarmClockCheck = function AlarmClockCheck(props) {
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
      d: "M5.7 3 3 5.7 5.7 3ZM21 5.7 18.3 3 21 5.7ZM6.6 17.4l-1.8 1.8 1.8-1.8Zm10.8 0 1.8 1.8-1.8-1.8ZM12 19.2a7.2003 7.2003 0 0 0 7.2-7.2A7.2002 7.2002 0 0 0 6.9088 6.9088 7.2 7.2 0 0 0 12 19.2Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M5.7 3 3 5.7m18 0L18.3 3M6.6 17.4l-1.8 1.8m12.6-1.8 1.8 1.8m-9.9-6.75 1.8 1.8 4.05-4.05m-3.15 9a7.2003 7.2003 0 0 0 7.2-7.2A7.2002 7.2002 0 0 0 6.9088 6.9088 7.2 7.2 0 0 0 12 19.2Z"
    })]
  }));
};
var _default = exports["default"] = AlarmClockCheck;