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
var Trophy02 = function Trophy02(props) {
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
      d: "M6.15 4.4c0-.4664 0-.6995.0843-.8804a.9001.9001 0 0 1 .4353-.4353C6.8505 3 7.0836 3 7.55 3h8.9c.4663 0 .6995 0 .8804.0843a.9002.9002 0 0 1 .4353.4353c.0843.1809.0843.414.0843.8804v5.35c0 3.2309-2.6191 5.85-5.85 5.85-3.2309 0-5.85-2.6191-5.85-5.85V4.4Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 15.6c-3.2309 0-5.85-2.6191-5.85-5.85V4.4c0-.4664 0-.6995.0843-.8804a.9001.9001 0 0 1 .4353-.4353C6.8505 3 7.0836 3 7.55 3h8.9c.4663 0 .6995 0 .8804.0843a.9002.9002 0 0 1 .4353.4353c.0843.1809.0843.414.0843.8804v5.35c0 3.2309-2.6191 5.85-5.85 5.85Zm0 0v3.6m4.5 0h-9M21 4.8v4.5M3 4.8v4.5"
    })]
  }));
};
var _default = exports["default"] = Trophy02;