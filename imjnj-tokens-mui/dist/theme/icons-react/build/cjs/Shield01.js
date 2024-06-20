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
var Shield01 = function Shield01(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M11.302 21.6147c.2214.1292.3321.1938.4883.2273.1213.026.2981.026.4194 0 .1562-.0335.2669-.0981.4883-.2273C14.646 20.4783 20 16.9083 20 11.9999V7.2175c0-.7995 0-1.1993-.1308-1.543a1.9996 1.9996 0 0 0-.5469-.7891c-.2758-.243-.6501-.3834-1.3987-.6642l-5.3618-2.0107c-.2079-.078-.3118-.1169-.4188-.1324a.9995.9995 0 0 0-.286 0c-.107.0155-.2109.0545-.4188.1324L6.0764 4.2212c-.7486.2808-1.1229.4211-1.3987.6642a2 2 0 0 0-.547.7892C4 6.0182 4 6.418 4 7.2175v4.7824c0 4.9084 5.354 8.4784 7.302 9.6148Z"
    })
  }));
};
var _default = exports["default"] = Shield01;