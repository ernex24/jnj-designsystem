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
var HomeSmile = function HomeSmile(props) {
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
      d: "M3 10.5651c0-.5744 0-.8616.074-1.126a1.9998 1.9998 0 0 1 .318-.6502c.1633-.2208.39-.3971.8434-.7498l6.7823-5.2751c.3513-.2732.527-.4099.721-.4624a.9996.9996 0 0 1 .5226 0c.194.0525.3697.1891.721.4624l6.7823 5.2751c.4534.3527.6801.529.8434.7498.1446.1955.2524.4159.318.6502.074.2644.074.5516.074 1.126V17.8c0 1.1201 0 1.6801-.218 2.108a1.9996 1.9996 0 0 1-.874.874C19.4802 21 18.9201 21 17.8 21H6.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C3 19.4801 3 18.9201 3 17.8v-7.2349Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M8.126 14c.444 1.7252 2.0102 3 3.874 3s3.4299-1.2748 3.874-3M11.0177 2.764 4.2354 8.0391c-.4534.3527-.68.529-.8434.7498a1.9998 1.9998 0 0 0-.318.6502C3 9.7035 3 9.9907 3 10.565V17.8c0 1.1201 0 1.6801.218 2.108.1917.3763.4977.6823.874.874C4.5198 21 5.08 21 6.2 21h11.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C21 19.4801 21 18.9201 21 17.8v-7.2349c0-.5744 0-.8616-.074-1.126a2.0016 2.0016 0 0 0-.318-.6502c-.1633-.2208-.39-.3971-.8434-.7498L12.9823 2.764c-.3513-.2732-.527-.4099-.721-.4624a.9996.9996 0 0 0-.5226 0c-.194.0525-.3697.1891-.721.4624Z"
    })]
  }));
};
var _default = exports["default"] = HomeSmile;