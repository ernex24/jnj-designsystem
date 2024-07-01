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
var Microscope = function Microscope(props) {
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
      d: "M8.85 12.9h-3.6c-.4182 0-.6273 0-.8012.0346a1.8 1.8 0 0 0-1.4142 1.4142C3 14.5227 3 14.7318 3 15.15s0 .6273.0346.8012a1.8 1.8 0 0 0 1.4142 1.4142c.174.0346.383.0346.8012.0346h3.6c.4182 0 .6273 0 .8012-.0346a1.7999 1.7999 0 0 0 1.4142-1.4142c.0346-.1739.0346-.383.0346-.8012s0-.6273-.0346-.8012a1.7999 1.7999 0 0 0-1.4142-1.4142C9.4772 12.9 9.2682 12.9 8.85 12.9Zm-4.95 0V6.15C3.9 4.4103 5.3103 3 7.05 3c1.7397 0 3.15 1.4103 3.15 3.15v6.75H3.9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3 21h8.1m-.9-14.1732A7.2135 7.2135 0 0 1 12 6.6c3.9765 0 7.2 3.2235 7.2 7.2 0 3.0216-1.8614 5.6085-4.5 6.6766M5.25 12.9h3.6c.4182 0 .6273 0 .8012.0346a1.7999 1.7999 0 0 1 1.4142 1.4142c.0346.1739.0346.383.0346.8012s0 .6273-.0346.8012a1.7999 1.7999 0 0 1-1.4142 1.4142c-.174.0346-.383.0346-.8012.0346h-3.6c-.4182 0-.6273 0-.8012-.0346a1.8 1.8 0 0 1-1.4142-1.4142C3 15.7773 3 15.5682 3 15.15s0-.6273.0346-.8012a1.8 1.8 0 0 1 1.4142-1.4142c.174-.0346.383-.0346.8012-.0346ZM3.9 6.15v6.75h6.3V6.15C10.2 4.4103 8.7897 3 7.05 3 5.3103 3 3.9 4.4103 3.9 6.15Z"
    })]
  }));
};
var _default = exports["default"] = Microscope;