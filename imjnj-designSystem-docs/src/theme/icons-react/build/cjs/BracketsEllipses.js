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
var BracketsEllipses = function BracketsEllipses(props) {
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
      d: "M18.5708 20c1.262 0 2.286-1.023 2.286-2.286v-4.571L21.9998 12l-1.143-1.143V6.286c0-1.263-1.023-2.286-2.286-2.286M5.429 4C4.166 4 3.143 5.023 3.143 6.286v4.571L2 12l1.143 1.143v4.571C3.143 18.977 4.166 20 5.429 20M8 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 12.5 12Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 17 12Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M18.5708 20c1.262 0 2.286-1.023 2.286-2.286v-4.571L21.9998 12l-1.143-1.143V6.286c0-1.263-1.023-2.286-2.286-2.286M5.429 4C4.166 4 3.143 5.023 3.143 6.286v4.571L2 12l1.143 1.143v4.571C3.143 18.977 4.166 20 5.429 20M7.5 12h.01M12 12h.01m4.49 0h.01M8 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 12.5 12Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 17 12Z"
    })]
  }));
};
var _default = exports["default"] = BracketsEllipses;