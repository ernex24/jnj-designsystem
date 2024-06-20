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
var FilterFunnel01 = function FilterFunnel01(props) {
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
      d: "M3 4.44c0-.504 0-.756.098-.9486a.9.9 0 0 1 .3934-.3933C3.684 3 3.936 3 4.44 3h15.12c.504 0 .7561 0 .9486.098a.9003.9003 0 0 1 .3933.3934C21 3.684 21 3.936 21 4.44v.6024c0 .242 0 .363-.0296.4754a.9013.9013 0 0 1-.1274.2792c-.0657.096-.1571.1752-.3399.3337l-5.7562 4.9887c-.1828.1584-.2742.2376-.3399.3336a.9015.9015 0 0 0-.1274.2792c-.0296.1125-.0296.2334-.0296.4753v4.705c0 .176 0 .264-.0284.3401a.4503.4503 0 0 1-.119.1758c-.0601.0546-.1418.0873-.3052.1526l-3.06 1.224c-.3308.1324-.4962.1985-.629.1709a.45.45 0 0 1-.2835-.1919c-.0749-.1131-.0749-.2912-.0749-.6475v-5.929c0-.2419 0-.3628-.0296-.4753a.9003.9003 0 0 0-.1274-.2792c-.0657-.096-.157-.1752-.3399-.3336L3.4969 6.1306c-.1828-.1584-.2742-.2376-.3399-.3336a.9001.9001 0 0 1-.1274-.2792C3 5.4053 3 5.2844 3 5.0424V4.44Z"
    })
  }));
};
var _default = exports["default"] = FilterFunnel01;