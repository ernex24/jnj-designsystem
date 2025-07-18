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
var WatchSquare = function WatchSquare(props) {
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
      d: "M11.35 9.3V12l1.35 1.35"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M5.5 9.03c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C6.8678 6.15 7.372 6.15 8.38 6.15h5.94c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866c.1962.385.1962.8891.1962 1.8972v5.94c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866c-.3851.1962-.8891.1962-1.8972.1962H8.38c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C5.5 16.4821 5.5 15.9781 5.5 14.97V9.03Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m15.85 17.85-.3032 1.0612c-.2139.7487-.3209 1.1231-.5393 1.401a1.7998 1.7998 0 0 1-.7347.5542C13.9457 21 13.5563 21 12.7776 21H9.9224c-.7787 0-1.168 0-1.4953-.1336a1.8002 1.8002 0 0 1-.7346-.5542c-.2184-.2779-.3254-.6523-.5393-1.401L6.85 17.85m9-11.7-.3032-1.0612c-.2139-.7487-.3209-1.1231-.5393-1.401a1.7995 1.7995 0 0 0-.7347-.5542C13.9457 3 13.5563 3 12.7776 3H9.9224c-.7787 0-1.168 0-1.4953.1336a1.8 1.8 0 0 0-.7346.5542c-.2184.2779-.3254.6523-.5393 1.401L6.85 6.15m4.5 3.15V12l1.35 1.35m-4.32 4.5h5.94c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972V9.03c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C15.8321 6.15 15.3281 6.15 14.32 6.15H8.38c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C5.5 7.5178 5.5 8.022 5.5 9.03v5.94c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962Z"
    })]
  }));
};
var _default = exports["default"] = WatchSquare;