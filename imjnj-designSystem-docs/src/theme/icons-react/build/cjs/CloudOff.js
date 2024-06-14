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
var CloudOff = function CloudOff(props) {
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
      d: "M7.05 17.4C4.8133 17.4 3 15.5868 3 13.35c0-2.1092 1.6124-3.8418 3.6718-4.0326A5.3754 5.3754 0 0 1 7.758 6.8581l10.3684 10.3684A4.0513 4.0513 0 0 1 16.95 17.4h-9.9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M20.7303 14.8063A4.0406 4.0406 0 0 0 21 13.35c0-2.1092-1.6124-3.8418-3.6718-4.0326C16.907 6.755 14.6818 4.8 12 4.8c-.4019 0-.7936.044-1.1704.1272m-3.0709 1.93a5.3753 5.3753 0 0 0-1.087 2.4602C4.6125 9.5082 3 11.2408 3 13.35c0 2.2368 1.8133 4.05 4.05 4.05h9.9c.4105 0 .8067-.0611 1.18-.1746M3.9 3l16.2 16.2"
    })]
  }));
};
var _default = exports["default"] = CloudOff;