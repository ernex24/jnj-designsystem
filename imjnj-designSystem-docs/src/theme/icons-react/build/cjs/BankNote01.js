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
var BankNote01 = function BankNote01(props) {
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
      d: "M18.779 16.8161c.9268.1781 1.3902.2672 1.6197.1864.2336-.0822.3539-.1816.4786-.3954C21 16.3969 21 15.9879 21 15.17V5.4965c0-.162 0-.243-.0535-.3912-.0321-.0888-.1568-.2802-.2251-.3454-.114-.1087-.1535-.1262-.2325-.161C19.8958 4.3373 18.7038 4 16.5 4c-3.6 0-6.3 1.8-9 1.8-.8609 0-1.6302-.0915-2.279-.2161-.9268-.1781-1.3902-.2671-1.6198-.1864-.2335.0822-.3538.1816-.4785.3954C3 6.0031 3 6.4121 3 7.23v9.6736c0 .162 0 .243.0535.3912.0321.0888.1568.2802.2251.3454.114.1087.1535.1262.2325.161.593.2616 1.785.5989 3.9889.5989 3.6 0 6.3-1.8 9-1.8.8609 0 1.6302.0915 2.279.2161Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M12 13.45c1.2426 0 2.25-1.0074 2.25-2.25S13.2426 8.95 12 8.95 9.75 9.9574 9.75 11.2s1.0074 2.25 2.25 2.25Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M6.6 10.3v3.6m10.8-5.4v3.6M16.5 4c2.2038 0 3.3958.3373 3.9889.5989.079.0348.1185.0523.2325.161.0683.0652.193.2565.2251.3454.0535.1482.0535.2292.0535.3912V15.17c0 .8179 0 1.2269-.1227 1.4371-.1247.2138-.245.3132-.4786.3954-.2295.0808-.6929-.0083-1.6197-.1864A12.1009 12.1009 0 0 0 16.5 16.6c-2.7 0-5.4 1.8-9 1.8-2.2038 0-3.3958-.3373-3.989-.5989-.0789-.0348-.1184-.0523-.2324-.161-.0683-.0652-.193-.2566-.225-.3454C3 17.1465 3 17.0655 3 16.9035V7.23c0-.818 0-1.2269.1227-1.437.1247-.2139.245-.3133.4785-.3955.2296-.0808.693.0083 1.6199.1864A12.0972 12.0972 0 0 0 7.5 5.8c2.7 0 5.4-1.8 9-1.8Zm-2.25 7.2c0 1.2426-1.0074 2.25-2.25 2.25s-2.25-1.0074-2.25-2.25S10.7574 8.95 12 8.95s2.25 1.0074 2.25 2.25Z"
    })]
  }));
};
var _default = exports["default"] = BankNote01;