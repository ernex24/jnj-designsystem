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
var Webcam02 = function Webcam02(props) {
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
      d: "M11.15 18.3c4.225 0 7.65-3.425 7.65-7.65C18.8 6.425 15.375 3 11.15 3 6.925 3 3.5 6.425 3.5 10.65c0 4.225 3.425 7.65 7.65 7.65Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M11.15 13.5188c1.5844 0 2.8688-1.2844 2.8688-2.8688 0-1.5844-1.2844-2.8688-2.8688-2.8688-1.5844 0-2.8688 1.2844-2.8688 2.8688 0 1.5844 1.2844 2.8688 2.8688 2.8688Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7.55 21h7.2m4.05-10.35c0 4.225-3.425 7.65-7.65 7.65-4.225 0-7.65-3.425-7.65-7.65C3.5 6.425 6.925 3 11.15 3c4.225 0 7.65 3.425 7.65 7.65Zm-4.7812 0c0 1.5844-1.2844 2.8687-2.8688 2.8687-1.5844 0-2.8688-1.2843-2.8688-2.8687S9.5656 7.7812 11.15 7.7812c1.5844 0 2.8688 1.2844 2.8688 2.8688Z"
    })]
  }));
};
var _default = exports["default"] = Webcam02;