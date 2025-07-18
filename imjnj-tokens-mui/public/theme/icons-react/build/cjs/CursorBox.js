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
var CursorBox = function CursorBox(props) {
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
      d: "M20.8652 15.6879c.5156-.2776.7734-.4164.8406-.5855a.5.5 0 0 0-.039-.4473c-.0956-.1549-.3735-.2469-.9294-.431l-8.2261-2.7237c-.4868-.1612-.7301-.2418-.8922-.1838a.4996.4996 0 0 0-.3025.3025c-.058.1621.0226.4054.1838.8922l2.7237 8.2262c.184.5558.276.8337.431.9293a.4999.4999 0 0 0 .4472.0391c.1692-.0673.308-.3251.5856-.8406l1.6983-3.154c.0423-.0785.0635-.1178.0906-.1522a.5085.5085 0 0 1 .0823-.0823c.0344-.0271.0737-.0483.1522-.0906l3.1539-1.6983Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M21 9.5V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21h1.7m7.8862-3.2887-1.6983 3.154c-.2776.5155-.4164.7733-.5856.8406a.4999.4999 0 0 1-.4472-.0391c-.155-.0956-.247-.3735-.431-.9293l-2.7237-8.2262c-.1612-.4868-.2418-.7301-.1838-.8922a.4996.4996 0 0 1 .3025-.3025c.1621-.058.4054.0226.8922.1838l8.2261 2.7237c.5559.1841.8338.2761.9294.431a.5.5 0 0 1 .039.4473c-.0672.1691-.325.3079-.8406.5855l-3.1539 1.6983c-.0785.0423-.1178.0635-.1522.0906a.5085.5085 0 0 0-.0823.0823c-.0271.0344-.0483.0737-.0906.1522Z"
    })]
  }));
};
var _default = exports["default"] = CursorBox;