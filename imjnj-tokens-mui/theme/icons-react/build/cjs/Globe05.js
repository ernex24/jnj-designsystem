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
var Globe05 = function Globe05(props) {
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
      d: "M16.5 11c1.8-1.8 3.6-3.4118 3.6-5.4 0-1.9882-1.6118-3.6-3.6-3.6-1.9882 0-3.6 1.6118-3.6 3.6 0 1.9882 1.8 3.6 3.6 5.4Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M16.725 5.375a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M14.7 2.412A8.9961 8.9961 0 0 0 12 2c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9 9-4.0294 9-9c0-1.5438-.3887-2.9968-1.0736-4.2665M16.5 5.375h.0045M10.65 19.8994l.0001-1.983a.4506.4506 0 0 1 .1084-.2928l2.2372-2.6101a.45.45 0 0 0-.1184-.6836l-2.5706-1.4689a.4503.4503 0 0 1-.1676-.1677L8.4634 9.7568a.45.45 0 0 0-.4307-.2252l-4.975.443M20.1 5.6c0 1.9882-1.8 3.6-3.6 5.4-1.8-1.8-3.6-3.4118-3.6-5.4 0-1.9882 1.6118-3.6 3.6-3.6 1.9882 0 3.6 1.6118 3.6 3.6Zm-3.375-.225a.225.225 0 1 1-.45 0 .225.225 0 0 1 .45 0Z"
    })]
  }));
};
var _default = exports["default"] = Globe05;