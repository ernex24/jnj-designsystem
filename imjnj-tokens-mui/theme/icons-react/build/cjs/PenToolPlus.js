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
var PenToolPlus = function PenToolPlus(props) {
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
      d: "M19.2182 10.9818c-.3564.3564-.5346.5346-.7401.6014a.9004.9004 0 0 1-.5562 0c-.2055-.0668-.3837-.245-.7401-.6014l-3.3636-3.3636c-.3564-.3564-.5346-.5346-.6014-.74a.9005.9005 0 0 1 0-.5563c.0668-.2055.245-.3837.6014-.7401l.6636-.6636c.3564-.3564.5346-.5346.7401-.6014a.9.9 0 0 1 .5562 0c.2055.0668.3837.245.7401.6014l3.3636 3.3636c.3564.3564.5346.5346.6014.74a.9005.9005 0 0 1 0 .5563c-.0668.2055-.245.3837-.6014.7401l-.6636.6636ZM3.8 21l5.9274-5.9275L3.8 21Zm9-7.2c0-.9941-.8059-1.8-1.8-1.8-.9941 0-1.8.8059-1.8 1.8 0 .9941.8059 1.8 1.8 1.8.9941 0 1.8-.8059 1.8-1.8Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M13.7 7.5 8.151 9.0854c-.2744.0784-.4116.1176-.525.1913a.9.9 0 0 0-.2538.2488c-.076.1119-.118.2483-.2019.521L3.8 21m0 0 10.9535-3.3703c.2727-.0839.4091-.1259.521-.2019a.8993.8993 0 0 0 .2488-.2539c.0737-.1133.1129-.2505.1913-.5249L17.3 11.1M3.8 21l5.9274-5.9275M4.7 8.4V3M2 5.7h5.4m12.4818 2.5818-3.3636-3.3636c-.3564-.3564-.5346-.5346-.7401-.6014a.9.9 0 0 0-.5562 0c-.2055.0668-.3837.245-.7401.6014l-.6636.6636c-.3564.3564-.5346.5346-.6014.74a.9005.9005 0 0 0 0 .5563c.0668.2055.245.3837.6014.7401l3.3636 3.3636c.3564.3564.5346.5346.7401.6014a.9004.9004 0 0 0 .5562 0c.2055-.0668.3837-.245.7401-.6014l.6636-.6636c.3564-.3564.5346-.5346.6014-.74a.9005.9005 0 0 0 0-.5563c-.0668-.2055-.245-.3837-.6014-.7401ZM11 12c.9941 0 1.8.8059 1.8 1.8 0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8Z"
    })]
  }));
};
var _default = exports["default"] = PenToolPlus;