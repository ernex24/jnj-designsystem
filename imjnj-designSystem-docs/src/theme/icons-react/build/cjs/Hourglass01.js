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
var Hourglass01 = function Hourglass01(props) {
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
      d: "M11.2 12 7.3544 8.7953c-.5714-.4761-.857-.7142-1.0624-1.006a2.7 2.7 0 0 1-.3993-.8525C5.8 6.5923 5.8 6.2204 5.8 5.4766V3h10.8v2.4766c0 .7438 0 1.1156-.0927 1.4602a2.7005 2.7005 0 0 1-.3993.8525c-.2054.2918-.491.5299-1.0624 1.006L11.2 12l3.8456 3.2047c.5714.4761.857.7142 1.0624 1.006a2.701 2.701 0 0 1 .3993.8524c.0927.3447.0927.7165.0927 1.4603V21H5.8v-2.4766c0-.7438 0-1.1156.0927-1.4603a2.7005 2.7005 0 0 1 .3993-.8524c.2054-.2918.491-.5299 1.0624-1.006L11.2 12Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M11.2 12 7.3544 8.7953c-.5714-.4761-.857-.7142-1.0624-1.006a2.7 2.7 0 0 1-.3993-.8525C5.8 6.5923 5.8 6.2204 5.8 5.4766V3m5.4 9 3.8456-3.2047c.5714-.4761.857-.7142 1.0624-1.006a2.7005 2.7005 0 0 0 .3993-.8525c.0927-.3445.0927-.7164.0927-1.4602V3m-5.4 9-3.8456 3.2047c-.5714.4761-.857.7142-1.0624 1.006a2.7005 2.7005 0 0 0-.3993.8524c-.0927.3447-.0927.7165-.0927 1.4603V21m5.4-9 3.8456 3.2047c.5714.4761.857.7142 1.0624 1.006a2.701 2.701 0 0 1 .3993.8524c.0927.3447.0927.7165.0927 1.4603V21M4 3h14.4M4 21h14.4"
    })]
  }));
};
var _default = exports["default"] = Hourglass01;