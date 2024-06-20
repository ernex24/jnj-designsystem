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
var ThermometerCold = function ThermometerCold(props) {
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
      d: "M3 11h9-9Zm6.3-7.2v14.4V3.8ZM3.9 8.3 6.6 11l-2.7 2.7M12 5.6 9.3 8.3 6.6 5.6m0 10.8 2.7-2.7 1.35 1.35M15.6 3.8c0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8v9.4816c1.076.6225 1.8 1.7859 1.8 3.1184 0 1.9882-1.6118 3.6-3.6 3.6-1.9882 0-3.6-1.6118-3.6-3.6 0-1.3325.724-2.4959 1.8-3.1184V3.8Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3 11h9M9.3 3.8v14.4M3.9 8.3 6.6 11l-2.7 2.7M12 5.6 9.3 8.3 6.6 5.6m0 10.8 2.7-2.7 1.35 1.35m8.55-1.7684V3.8c0-.9941-.8059-1.8-1.8-1.8-.9941 0-1.8.8059-1.8 1.8v9.4816c-1.076.6225-1.8 1.7859-1.8 3.1184 0 1.9882 1.6118 3.6 3.6 3.6 1.9882 0 3.6-1.6118 3.6-3.6 0-1.3325-.724-2.4959-1.8-3.1184Z"
    })]
  }));
};
var _default = exports["default"] = ThermometerCold;