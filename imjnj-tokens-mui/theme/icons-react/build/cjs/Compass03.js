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
var Compass03 = function Compass03(props) {
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
      d: "M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M14.4499 7.6394c.4397-.1466.6595-.2199.8057-.1677a.4496.4496 0 0 1 .2727.2727c.0522.1462-.0211.366-.1677.8057l-1.3388 4.0164c-.0417.1252-.0626.1878-.0981.2398a.4489.4489 0 0 1-.1174.1174c-.052.0355-.1146.0564-.2398.0981l-4.0164 1.3388c-.4397.1466-.6595.2199-.8057.1677a.4496.4496 0 0 1-.2727-.2727c-.0522-.1462.0211-.366.1677-.8057l1.3388-4.0164c.0417-.1252.0626-.1878.0981-.2398a.4495.4495 0 0 1 .1174-.1174c.052-.0355.1146-.0564.2398-.0981l4.0164-1.3388Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M14.4499 7.6394c.4397-.1466.6595-.2199.8057-.1677a.4496.4496 0 0 1 .2727.2727c.0522.1462-.0211.366-.1677.8057l-1.3388 4.0164c-.0417.1252-.0626.1878-.0981.2398a.4489.4489 0 0 1-.1174.1174c-.052.0355-.1146.0564-.2398.0981l-4.0164 1.3388c-.4397.1466-.6595.2199-.8057.1677a.4496.4496 0 0 1-.2727-.2727c-.0522-.1462.0211-.366.1677-.8057l1.3388-4.0164c.0417-.1252.0626-.1878.0981-.2398a.4495.4495 0 0 1 .1174-.1174c.052-.0355.1146-.0564.2398-.0981l4.0164-1.3388Z"
    })]
  }));
};
var _default = exports["default"] = Compass03;