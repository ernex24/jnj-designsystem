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
var Edit02 = function Edit02(props) {
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
      d: "M2.8112 15.37c.038-.3423.0571-.5134.1089-.6734.046-.1419.1108-.277.193-.4015.0925-.1404.2143-.2621.4578-.5057L14.503 2.8574c.9144-.9144 2.3968-.9144 3.3112 0 .9144.9143.9144 2.3968 0 3.3111L6.8821 17.1006c-.2435.2435-.3653.3653-.5057.4579a1.6544 1.6544 0 0 1-.4015.1929c-.16.0518-.331.0708-.6734.1089L2.5 18.1716l.3112-2.8016Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m15.3308 8.652-3.3112-3.3113M2.5 18.1716l2.8015-.3113c.3423-.0381.5135-.0571.6734-.1089.142-.0459.277-.1108.4015-.1929.1404-.0926.2622-.2144.5057-.4579l10.9321-10.932c.9144-.9144.9144-2.3969 0-3.3113-.9144-.9143-2.3968-.9143-3.3112 0L3.571 13.7894c-.2436.2436-.3654.3653-.458.5057a1.6548 1.6548 0 0 0-.193.4015c-.0517.16-.0707.3311-.1088.6734L2.5 18.1716Z"
    })]
  }));
};
var _default = exports["default"] = Edit02;