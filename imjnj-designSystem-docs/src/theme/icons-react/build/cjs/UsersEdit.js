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
var UsersEdit = function UsersEdit(props) {
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
      d: "M12.405 19.475c.0353-.1766.053-.2648.0852-.3472a1.0012 1.0012 0 0 1 .1108-.2068c.0506-.0726.1142-.1362.2415-.2635L19.5 12c.5523-.5523 1.4477-.5523 2 0s.5524 1.4477 0 2l-6.6574 6.6574c-.1274.1274-.191.191-.2636.2416a.9943.9943 0 0 1-.2069.1107c-.0823.0323-.1706.05-.3471.0853l-2.0251.405.4051-2.025ZM9.5 11c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4-2.2091 0-4 1.7909-4 4 0 2.2091 1.7909 4 4 4Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M11 15H8c-1.8638 0-2.7957 0-3.5307.3045a4.0001 4.0001 0 0 0-2.1648 2.1648C2 18.2044 2 19.1362 2 21M15.5 3.2908C16.9659 3.8842 18 5.3213 18 7m-6.0001 14.5 2.0251-.405c.1765-.0353.2648-.053.3471-.0853a.9943.9943 0 0 0 .2069-.1107c.0726-.0506.1362-.1142.2636-.2416L21.5 14c.5524-.5523.5523-1.4477 0-2s-1.4477-.5523-2 0l-6.6575 6.6575c-.1273.1273-.1909.1909-.2415.2635a1.0012 1.0012 0 0 0-.1108.2068c-.0322.0824-.0499.1706-.0852.3472l-.4051 2.025ZM13.5 7c0 2.2091-1.7909 4-4 4-2.2091 0-4-1.7909-4-4 0-2.2091 1.7909-4 4-4 2.2091 0 4 1.7909 4 4Z"
    })]
  }));
};
var _default = exports["default"] = UsersEdit;