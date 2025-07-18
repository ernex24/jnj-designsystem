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
var Virus = function Virus(props) {
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
      d: "M12 16.5c2.4853 0 4.5-2.0147 4.5-4.5S14.4853 7.5 12 7.5 7.5 9.5147 7.5 12s2.0147 4.5 4.5 4.5Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 3v4.5M12 3a9.037 9.037 0 0 0-1.8721.195M12 3c.6419 0 1.2682.0672 1.872.195M12 7.5c-2.4853 0-4.5 2.0147-4.5 4.5M12 7.5c2.4853 0 4.5 2.0147 4.5 4.5M12 16.5V21m0-4.5c2.4853 0 4.5-2.0147 4.5-4.5M12 16.5c-2.4853 0-4.5-2.0147-4.5-4.5m4.5 9c.641 0 1.2663-.067 1.8693-.1944M12 21a9.0374 9.0374 0 0 1-1.8761-.1958M5.636 5.636l3.182 3.182m6.364 6.364 3.1819 3.182M3 12h4.5M3 12c0 .642.0672 1.2683.195 1.8722M3 12c0-.6429.0674-1.2701.1955-1.8749M16.5 12H21m0 0c0-.642-.0672-1.2683-.195-1.8722M21 12a9.0354 9.0354 0 0 1-.1949 1.8715M5.6361 18.364l3.1819-3.182m6.364-6.364 3.1819-3.182M16.902 4.451a9.048 9.048 0 0 1 2.6479 2.6483m-.0025 9.8054A9.0474 9.0474 0 0 1 16.9 19.5504m-9.8017-.001a9.0492 9.0492 0 0 1-2.645-2.6437m-.0028-9.8072a9.0482 9.0482 0 0 1 2.647-2.6473"
    })]
  }));
};
var _default = exports["default"] = Virus;