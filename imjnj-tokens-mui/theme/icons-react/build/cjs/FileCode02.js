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
var FileCode02 = function FileCode02(props) {
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
      d: "M8.35 14.25 10.6 12 8.35 9.75m-3.6 0L2.5 12l2.25 2.25"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M4.75 17.85c0 .418 0 .627.0231.8024a2.7 2.7 0 0 0 2.3245 2.3245C7.273 21 7.482 21 7.9 21h6.93c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458v-6.4906c0-.6604 0-.9906-.0746-1.3013a2.6973 2.6973 0 0 0-.3233-.7805c-.1669-.2724-.4004-.506-.8674-.9729l-2.8694-2.8694c-.467-.467-.7005-.7005-.9729-.8674a2.7005 2.7005 0 0 0-.7805-.3233C12.9512 3 12.621 3 11.9606 3H7.9c-.418 0-.627 0-.8024.0231A2.7 2.7 0 0 0 4.773 5.3476c-.023.1754-.023.3844-.023.8024m3.6 8.1L10.6 12 8.35 9.75m-3.6 0L2.5 12l2.25 2.25"
    })]
  }));
};
var _default = exports["default"] = FileCode02;