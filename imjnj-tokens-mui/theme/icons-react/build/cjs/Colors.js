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
var Colors = function Colors(props) {
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
      d: "M12 12.8c2.9823 0 5.4-2.4177 5.4-5.4C17.4 4.4177 14.9823 2 12 2 9.0177 2 6.6 4.4177 6.6 7.4c0 2.9823 2.4177 5.4 5.4 5.4Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 18.625c.9554.8551 2.217 1.375 3.6 1.375 2.9823 0 5.4-2.4177 5.4-5.4 0-2.4902-1.6856-4.5868-3.9782-5.2108m-10.0436 0C4.6856 10.0132 3 12.1098 3 14.6 3 17.5823 5.4177 20 8.4 20c2.9823 0 5.4-2.4177 5.4-5.4a5.384 5.384 0 0 0-.3782-1.9891M17.4 7.4c0 2.9823-2.4177 5.4-5.4 5.4-2.9823 0-5.4-2.4177-5.4-5.4C6.6 4.4177 9.0177 2 12 2c2.9823 0 5.4 2.4177 5.4 5.4Z"
    })]
  }));
};
var _default = exports["default"] = Colors;