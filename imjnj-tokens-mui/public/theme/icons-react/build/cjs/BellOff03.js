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
var BellOff03 = function BellOff03(props) {
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
      d: "M12.7169 6.8147A2.2427 2.2427 0 0 0 13.35 5.25C13.35 4.0074 12.3426 3 11.1 3S8.85 4.0074 8.85 5.25c0 .3037.0602.5933.1692.8576.0551.1335.0826.2003.2086.3268.0907.0911.2778.1999.4018.2336.1723.0469.344.025.6874-.0186A6.2179 6.2179 0 0 1 11.1 6.6c.5535 0 1.0983.0737 1.6169.2147Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M13.8 18.3c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7M6.9397 8.2963C6.1417 9.132 5.7 10.1862 5.7 11.28c0 2.0536-.5093 3.5555-1.1447 4.6302-.7243 1.2249-1.0864 1.8373-1.0721 1.9836.0163.1673.0465.2202.1822.3194.1187.0868.7148.0868 1.907.0868H18.192M11.1 6.6c-.2636 0-.5252.0167-.783.0494-.3434.0437-.515.0655-.6874.0186-.124-.0337-.311-.1425-.4018-.2336-.126-.1265-.1535-.1933-.2086-.3268A2.2433 2.2433 0 0 1 8.85 5.25C8.85 4.0074 9.8574 3 11.1 3s2.25 1.0074 2.25 2.25c0 .608-.2412 1.1598-.6331 1.5647A6.1679 6.1679 0 0 0 11.1 6.6Zm0 0c1.4322 0 2.8057.493 3.8184 1.3707C15.9311 8.8484 16.5 10.0388 16.5 11.28c0 .3013.0082.5907.0238.8686M19.2 19.2 3 4.8"
    })]
  }));
};
var _default = exports["default"] = BellOff03;