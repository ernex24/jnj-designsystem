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
var CursorClick01 = function CursorClick01(props) {
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
      d: "M20.817 13.3728c.5286-.2847.793-.427.8598-.5983a.4998.4998 0 0 0-.0441-.4505c-.0988-.155-.3857-.2434-.9595-.4202L9.4452 8.4452c-.4687-.1444-.703-.2166-.8614-.1585a.5.5 0 0 0-.2971.2971c-.0581.1583.0141.3927.1585.8614l3.4586 11.2281c.1768.5738.2651.8607.4202.9595a.5.5 0 0 0 .4505.0441c.1712-.0669.3136-.3312.5982-.8599l2.4918-4.6274c.0423-.0786.0634-.1179.0906-.1522a.493.493 0 0 1 .0823-.0823c.0343-.0272.0736-.0483.1522-.0906l4.6274-2.4917Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M9 3.5V2M5.0607 5.0607 4 4m1.0607 9L4 14.0607m9-9L14.0607 4M3.5 9H2m13.8645 7.1896-2.4918 4.6274c-.2846.5287-.427.793-.5982.8599a.5.5 0 0 1-.4505-.0441c-.1551-.0988-.2434-.3857-.4202-.9595L8.4452 9.4453c-.1444-.4688-.2166-.7032-.1585-.8615a.5.5 0 0 1 .2971-.2971c.1583-.058.3927.0141.8614.1585l11.228 3.4586c.5738.1768.8607.2652.9595.4202a.4998.4998 0 0 1 .0441.4505c-.0668.1713-.3312.3136-.8598.5983l-4.6274 2.4917c-.0786.0423-.1179.0634-.1522.0906a.493.493 0 0 0-.0823.0823c-.0272.0343-.0483.0736-.0906.1522Z"
    })]
  }));
};
var _default = exports["default"] = CursorClick01;