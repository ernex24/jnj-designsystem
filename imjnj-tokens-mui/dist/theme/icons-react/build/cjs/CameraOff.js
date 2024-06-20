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
var CameraOff = function CameraOff(props) {
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
      d: "M21 7.7395V16.4c0 .9762-.5181 1.8314-1.2943 2.3057l-4.945-4.945-5.0714-5.0714L5.7 4.7h.377c.12 0 .18 0 .2344-.0033a1.8 1.8 0 0 0 1.5613-1.1253c.0203-.0505.0393-.1075.0773-.2214.038-.114.057-.1709.0773-.2214a1.8 1.8 0 0 1 1.5612-1.1253C9.643 2 9.703 2 9.823 2h4.354c.1201 0 .1801 0 .2344.0033a1.8 1.8 0 0 1 1.5613 1.1253c.0203.0505.0393.1075.0773.2214.038.114.057.1709.0773.2214a1.7998 1.7998 0 0 0 1.5613 1.1253c.0543.0033.1183.0033.2464.0033.3323 0 .4984 0 .6312.0132 1.2807.1268 2.2938 1.14 2.4206 2.4206.0132.1328.0132.2904.0132.6057Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M5.7 4.7h.377c.12 0 .18 0 .2344-.0033a1.8 1.8 0 0 0 1.5613-1.1253c.0203-.0505.0393-.1075.0773-.2214.038-.114.057-.1709.0773-.2214a1.8 1.8 0 0 1 1.5612-1.1253C9.643 2 9.703 2 9.823 2h4.354c.1201 0 .1801 0 .2344.0033a1.8 1.8 0 0 1 1.5613 1.1253c.0203.0505.0393.1075.0773.2214.038.114.057.1709.0773.2214a1.7998 1.7998 0 0 0 1.5613 1.1253c.0543.0033.1183.0033.2464.0033.3323 0 .4984 0 .6312.0132 1.2807.1268 2.2938 1.14 2.4206 2.4206.0132.1328.0132.2904.0132.6057V16.4c0 .9764-.5183 1.8318-1.2948 2.306m-4.9475-4.9417A3.5857 3.5857 0 0 0 15.6 11.45c0-1.9882-1.6118-3.6-3.6-3.6a3.5856 3.5856 0 0 0-2.3129.8412M21 20 3 2m0 4.95v7.83c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943h7.83M12 15.05c-1.9882 0-3.6-1.6118-3.6-3.6"
    })]
  }));
};
var _default = exports["default"] = CameraOff;