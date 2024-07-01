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
var PaintPour = function PaintPour(props) {
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
      d: "M19.9825 15.6c0 .9941-.8058 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941 1.8-2.7 1.8-2.7s1.8 1.7059 1.8 2.7ZM3.119 13.1365c-.7128-.7129-1.0692-1.0693-1.2028-1.4803a1.7999 1.7999 0 0 1 0-1.1124c.1336-.411.49-.7674 1.2028-1.4803L8.2825 3.9l6.1818 6.1818c.3564.3564.5346.5346.6014.7401a.9004.9004 0 0 1 0 .5562c-.0668.2055-.245.3837-.6014.7401l-4.1453 4.1453c-.7128.7129-1.0692 1.0693-1.4802 1.2028a1.7995 1.7995 0 0 1-1.1125 0c-.411-.1335-.7674-.4899-1.4802-1.2028l-3.127-3.127Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M14.5825 11.1h-12.6m7.2-6.3-1.8-1.8m5.4 18h-10.8m18-5.4c0 .9941-.8058 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941 1.8-2.7 1.8-2.7s1.8 1.7059 1.8 2.7Zm-11.7-11.7 6.1818 6.1818c.3564.3564.5346.5346.6014.7401a.9004.9004 0 0 1 0 .5562c-.0668.2055-.245.3837-.6014.7401l-4.1453 4.1453c-.7128.7129-1.0692 1.0693-1.4802 1.2028a1.7995 1.7995 0 0 1-1.1125 0c-.411-.1335-.7674-.4899-1.4802-1.2028l-3.127-3.127c-.713-.7129-1.0693-1.0693-1.2029-1.4803a1.7999 1.7999 0 0 1 0-1.1124c.1336-.411.49-.7674 1.2028-1.4803L8.2825 3.9Z"
    })]
  }));
};
var _default = exports["default"] = PaintPour;