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
var NavigationPointerOff02 = function NavigationPointerOff02(props) {
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
      d: "m10.6241 5.1282.7127-1.6248c.2084-.4753.3126-.713.4583-.7856a.45.45 0 0 1 .402 0c.1457.0727.2499.3103.4584.7856l2.8551 6.5096M9.252 8.2564 4.7834 18.4448c-.2309.5265-.3464.7897-.2953.9511a.4502.4502 0 0 0 .2939.2936c.1614.0508.4245-.065.9508-.2965l5.9732-2.6282c.1069-.047.1603-.0705.2157-.0798a.4465.4465 0 0 1 .1486 0c.0555.0093.1089.0328.2157.0798l5.9733 2.6282c.5262.2315.7893.3473.9508.2965a.4504.4504 0 0 0 .2939-.2936c.051-.1614-.0645-.4246-.2954-.9511l-.1837-.4189M21 20 3 2"
    })
  }));
};
var _default = exports["default"] = NavigationPointerOff02;