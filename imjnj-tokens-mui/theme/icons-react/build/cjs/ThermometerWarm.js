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
var ThermometerWarm = function ThermometerWarm(props) {
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
      d: "M12 8.3a3.5998 3.5998 0 0 0-3.3702 5.0099A3.6 3.6 0 0 0 10.2 15.05M12 2.9v1.8-1.8ZM7.14 16.76l-1.26 1.26 1.26-1.26ZM4.8 11.9H3h1.8Zm2.34-4.86L5.88 5.78l1.26 1.26ZM15.6 3.8c0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8v9.4816c1.076.6225 1.8 1.7859 1.8 3.1184 0 1.9882-1.6118 3.6-3.6 3.6-1.9882 0-3.6-1.6118-3.6-3.6 0-1.3325.724-2.4959 1.8-3.1184V3.8Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 8.3a3.5998 3.5998 0 0 0-3.3702 5.0099A3.6 3.6 0 0 0 10.2 15.05M12 2.9v1.8M7.14 16.76l-1.26 1.26M4.8 11.9H3m4.14-4.86L5.88 5.78m13.32 7.5016V3.8c0-.9941-.8059-1.8-1.8-1.8-.9941 0-1.8.8059-1.8 1.8v9.4816c-1.076.6225-1.8 1.7859-1.8 3.1184 0 1.9882 1.6118 3.6 3.6 3.6 1.9882 0 3.6-1.6118 3.6-3.6 0-1.3325-.724-2.4959-1.8-3.1184Z"
    })]
  }));
};
var _default = exports["default"] = ThermometerWarm;