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
var InfoOctagon = function InfoOctagon(props) {
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
      d: "M7.8522 3.4218c.1557-.1557.2335-.2335.3243-.2892a.9.9 0 0 1 .2602-.1077C8.5403 3 8.6503 3 8.8705 3h6.259c.2202 0 .3302 0 .4338.0249a.9015.9015 0 0 1 .2602.1077c.0908.0557.1686.1335.3243.2892l4.4304 4.4304c.1557.1557.2335.2335.2892.3243a.9.9 0 0 1 .1077.2602C21 8.5403 21 8.6503 21 8.8705v6.259c0 .2202 0 .3302-.0249.4338a.9014.9014 0 0 1-.1077.2602c-.0557.0908-.1335.1686-.2892.3243l-4.4304 4.4304c-.1557.1557-.2335.2335-.3243.2892a.9014.9014 0 0 1-.2602.1077C15.4597 21 15.3497 21 15.1295 21h-6.259c-.2202 0-.3302 0-.4338-.0249a.9.9 0 0 1-.2602-.1077c-.0908-.0557-.1686-.1335-.3243-.2892l-4.4304-4.4304c-.1557-.1557-.2335-.2335-.2892-.3243a.9015.9015 0 0 1-.1077-.2602C3 15.4597 3 15.3497 3 15.1295v-6.259c0-.2202 0-.3302.0249-.4338a.9.9 0 0 1 .1077-.2602c.0557-.0908.1335-.1686.2892-.3243l4.4304-4.4304Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 15.6V12m0-3.6h.009M3 8.8705v6.259c0 .2202 0 .3302.0249.4338a.9015.9015 0 0 0 .1077.2602c.0557.0908.1335.1686.2892.3243l4.4304 4.4304c.1557.1557.2335.2335.3243.2892a.9.9 0 0 0 .2602.1077C8.5403 21 8.6503 21 8.8705 21h6.259c.2202 0 .3302 0 .4338-.0249a.9014.9014 0 0 0 .2602-.1077c.0908-.0557.1686-.1335.3243-.2892l4.4304-4.4304c.1557-.1557.2335-.2335.2892-.3243a.9014.9014 0 0 0 .1077-.2602C21 15.4597 21 15.3497 21 15.1295v-6.259c0-.2202 0-.3302-.0249-.4338a.9.9 0 0 0-.1077-.2602c-.0557-.0908-.1335-.1686-.2892-.3243l-4.4304-4.4304c-.1557-.1557-.2335-.2335-.3243-.2892a.9015.9015 0 0 0-.2602-.1077C15.4597 3 15.3497 3 15.1295 3h-6.259c-.2202 0-.3302 0-.4338.0249a.9.9 0 0 0-.2602.1077c-.0908.0557-.1686.1335-.3243.2892L3.4218 7.8522c-.1557.1557-.2335.2335-.2892.3243a.9.9 0 0 0-.1077.2602C3 8.5403 3 8.6503 3 8.8705Z"
    })]
  }));
};
var _default = exports["default"] = InfoOctagon;