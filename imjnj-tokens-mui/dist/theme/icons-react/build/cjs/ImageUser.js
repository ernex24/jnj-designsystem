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
var ImageUser = function ImageUser(props) {
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
      d: "M12 12.35c1.9882 0 3.6-1.6118 3.6-3.6 0-1.9882-1.6118-3.6-3.6-3.6-1.9882 0-3.6 1.6118-3.6 3.6 0 1.9882 1.6118 3.6 3.6 3.6Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M3 6.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 2 5.8078 2 7.32 2h9.36c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18C21 4.0517 21 4.8078 21 6.32v9.36c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799 1.9656 1.9656 0 0 1-.3258.13C18.6577 20 17.9252 20 16.68 20H7.32c-1.2452 0-1.9777 0-2.52-.1643a1.9652 1.9652 0 0 1-.3258-.13 2.6998 2.6998 0 0 1-1.18-1.1799C3 17.9482 3 17.1921 3 15.68V6.32Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4.8 19.8357C5.3423 20 6.0748 20 7.32 20h9.36c1.2452 0 1.9777 0 2.52-.1643m-14.4 0a1.9652 1.9652 0 0 1-.3258-.13 2.6998 2.6998 0 0 1-1.18-1.1799C3 17.9482 3 17.1921 3 15.68V6.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 2 5.8078 2 7.32 2h9.36c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18C21 4.0517 21 4.8078 21 6.32v9.36c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799 1.9656 1.9656 0 0 1-.3258.13m-14.4 0c.0003-.7284.0047-1.1138.0692-1.438a3.6 3.6 0 0 1 2.8285-2.8285C8.0454 15.5 8.4637 15.5 9.3 15.5h5.4c.8364 0 1.2546 0 1.6023.0692a3.5998 3.5998 0 0 1 2.8285 2.8285c.0645.3242.0689.7096.0692 1.438M15.6 8.75c0 1.9882-1.6118 3.6-3.6 3.6-1.9882 0-3.6-1.6118-3.6-3.6 0-1.9882 1.6118-3.6 3.6-3.6 1.9882 0 3.6 1.6118 3.6 3.6Z"
    })]
  }));
};
var _default = exports["default"] = ImageUser;