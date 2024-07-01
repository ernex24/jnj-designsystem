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
var Airpods = function Airpods(props) {
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
      d: "M3 7.2125c0 2.0504 1.6621 3.7125 3.7125 3.7125.2753 0 .413 0 .4843.0246.1492.0515.2271.1294.2786.2786.0246.0714.0246.1831.0246.4065v5.7028c0 .8077.6548 1.4625 1.4625 1.4625.8077 0 1.4625-.6548 1.4625-1.4625V7.2125C10.425 5.1621 8.7629 3.5 6.7125 3.5S3 5.1621 3 7.2125Zm18 0c0 2.0504-1.6621 3.7125-3.7125 3.7125-.2753 0-.4129 0-.4843.0246-.1492.0515-.2271.1294-.2786.2786-.0246.0714-.0246.1831-.0246.4065v5.7028c0 .8077-.6548 1.4625-1.4625 1.4625-.8077 0-1.4625-.6548-1.4625-1.4625V7.2125c0-2.0504 1.6621-3.7125 3.7125-3.7125S21 5.1621 21 7.2125Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3 7.2125c0 2.0504 1.6621 3.7125 3.7125 3.7125.2753 0 .413 0 .4843.0246.1492.0515.2271.1294.2786.2786.0246.0714.0246.1831.0246.4065v5.7028c0 .8077.6548 1.4625 1.4625 1.4625.8077 0 1.4625-.6548 1.4625-1.4625V7.2125C10.425 5.1621 8.7629 3.5 6.7125 3.5S3 5.1621 3 7.2125Zm18 0c0 2.0504-1.6621 3.7125-3.7125 3.7125-.2753 0-.4129 0-.4843.0246-.1492.0515-.2271.1294-.2786.2786-.0246.0714-.0246.1831-.0246.4065v5.7028c0 .8077-.6548 1.4625-1.4625 1.4625-.8077 0-1.4625-.6548-1.4625-1.4625V7.2125c0-2.0504 1.6621-3.7125 3.7125-3.7125S21 5.1621 21 7.2125Z"
    })]
  }));
};
var _default = exports["default"] = Airpods;