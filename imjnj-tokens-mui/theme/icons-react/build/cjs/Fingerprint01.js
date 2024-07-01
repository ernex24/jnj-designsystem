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
var Fingerprint01 = function Fingerprint01(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M7.4264 3.247C8.7667 2.4548 10.3302 2 12 2c4.9706 0 9 4.0294 9 9 0 .0298-.0001.0596-.0004.0894M4.243 6.4333C3.4532 7.772 3 9.333 3 11c0 4.1936 2.8682 7.7174 6.75 8.7165m10.0869-4.288c-1.1884 2.0985-3.1953 3.6724-5.5869 4.288m-.3696-13.7801A5.3891 5.3891 0 0 0 12 5.6c-2.9823 0-5.4 2.4177-5.4 5.4 0 .6649.1202 1.3017.34 1.8899m10.1226-3.773A5.3882 5.3882 0 0 1 17.4 11c0 2.9823-2.4177 5.4-5.4 5.4a5.3878 5.3878 0 0 1-1.8686-.3321M12 9.2v3.6"
    })
  }));
};
var _default = exports["default"] = Fingerprint01;