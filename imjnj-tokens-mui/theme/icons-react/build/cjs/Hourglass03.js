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
var Hourglass03 = function Hourglass03(props) {
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
      d: "M16.16 3H6.44c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C5 3.684 5 3.936 5 4.44v1.867c0 .4403 0 .6605.0497.8676.0441.1837.1169.3593.2156.5203.1113.1817.267.3373.5782.6486l2.6383 2.6383c.3564.3564.5346.5346.6014.7401a.9.9 0 0 1 0 .5562c-.0668.2055-.245.3837-.6014.7401l-2.6383 2.6383c-.3113.3113-.467.4669-.5782.6486a1.7993 1.7993 0 0 0-.2156.5203C5 17.0325 5 17.2527 5 17.6929V19.56c0 .504 0 .7561.098.9486a.9003.9003 0 0 0 .3934.3933C5.684 21 5.936 21 6.44 21h9.72c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933c.0981-.1925.0981-.4446.0981-.9486v-1.8671c0-.4402 0-.6604-.0497-.8675a1.8017 1.8017 0 0 0-.2155-.5203c-.1114-.1817-.267-.3373-.5783-.6486l-2.6383-2.6383c-.3564-.3564-.5346-.5346-.6014-.7401a.9004.9004 0 0 1 0-.5562c.0668-.2055.245-.3837.6014-.7401l2.6383-2.6383c.3113-.3113.4669-.467.5783-.6486a1.8027 1.8027 0 0 0 .2155-.5203c.0497-.2071.0497-.4273.0497-.8675V4.44c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C16.9161 3 16.664 3 16.16 3Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M8.6 17.85H14M6.44 3h9.72c.504 0 .7561 0 .9486.098a.9003.9003 0 0 1 .3933.3934c.0981.1925.0981.4446.0981.9486v1.867c0 .4403 0 .6605-.0497.8676a1.8027 1.8027 0 0 1-.2155.5203c-.1114.1817-.267.3373-.5783.6486l-2.6383 2.6383c-.3564.3564-.5346.5346-.6014.7401a.9004.9004 0 0 0 0 .5562c.0668.2055.245.3837.6014.7401l2.6383 2.6383c.3113.3113.4669.4669.5783.6486.0986.161.1714.3366.2155.5203.0497.2071.0497.4273.0497.8675V19.56c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933C16.9161 21 16.664 21 16.16 21H6.44c-.504 0-.756 0-.9486-.0981a.9003.9003 0 0 1-.3933-.3933C5 20.3161 5 20.064 5 19.56v-1.8671c0-.4402 0-.6604.0497-.8675a1.7993 1.7993 0 0 1 .2156-.5203c.1113-.1817.267-.3373.5782-.6486l2.6383-2.6383c.3564-.3564.5346-.5346.6014-.7401a.9.9 0 0 0 0-.5562c-.0668-.2055-.245-.3837-.6014-.7401L5.8435 8.3435c-.3113-.3113-.467-.467-.5782-.6486a1.8002 1.8002 0 0 1-.2156-.5203C5 6.9675 5 6.7473 5 6.3071V4.44c0-.504 0-.756.098-.9486a.9.9 0 0 1 .3934-.3933C5.684 3 5.936 3 6.44 3Z"
    })]
  }));
};
var _default = exports["default"] = Hourglass03;