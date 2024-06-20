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
var Server03 = function Server03(props) {
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
      d: "M3 16.05c0-1.7397 1.4103-3.15 3.15-3.15h11.7c1.7397 0 3.15 1.4103 3.15 3.15 0 1.7397-1.4103 3.15-3.15 3.15H6.15C4.4103 19.2 3 17.7897 3 16.05Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m21 16.05-.6226-9.0272c-.0977-1.4173-.1466-2.1259-.4537-2.663a2.7006 2.7006 0 0 0-1.1681-1.0903C18.1986 3 17.4883 3 16.0677 3H7.9323c-1.4206 0-2.1309 0-2.688.2695a2.7 2.7 0 0 0-1.168 1.0902c-.3071.5372-.356 1.2458-.4537 2.663L3 16.05m18 0c0 1.7397-1.4103 3.15-3.15 3.15H6.15C4.4103 19.2 3 17.7897 3 16.05m18 0c0-1.7397-1.4103-3.15-3.15-3.15H6.15C4.4103 12.9 3 14.3103 3 16.05m3.6 0h.009m5.391 0h5.4"
    })]
  }));
};
var _default = exports["default"] = Server03;