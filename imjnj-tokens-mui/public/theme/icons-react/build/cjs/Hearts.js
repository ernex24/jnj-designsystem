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
var Hearts = function Hearts(props) {
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
      fillRule: "evenodd",
      d: "M16.2972 11.7499c-.4221-2.2679-2.3518-3.9266-4.7816-3.4757-2.4297.4508-4.0007 2.6429-3.6722 5.0248.2639 1.9137 1.7205 6.4037 2.283 8.095.0768.2308.1151.3462.1911.4266a.5049.5049 0 0 0 .248.1432c.1077.0256.2268.0011.4651-.0478 1.7459-.3585 6.3627-1.342 8.152-2.0703 2.227-.9065 3.3763-3.3616 2.5155-5.6927-.8609-2.3311-3.2258-3.1715-5.4009-2.4031Z",
      clipRule: "evenodd"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15.5455 9.9254c.374-.6644.6858-1.2639.8781-1.7202.9337-2.2157.0104-4.7644-2.2467-5.804-2.257-1.0397-4.5235.0383-5.5182 2.1197-1.9021-1.3052-4.4395-1.1135-5.8388.9233-1.3993 2.0369-.9602 4.6978.9564 6.1498.8698.659 2.59 1.6302 4.2097 2.4944m8.3112-2.3385c-.4221-2.2679-2.3518-3.9266-4.7816-3.4757-2.4297.4508-4.0007 2.6429-3.6722 5.0248.2639 1.9137 1.7205 6.4037 2.283 8.095.0768.2308.1151.3462.1911.4266a.5049.5049 0 0 0 .248.1432c.1077.0256.2268.0011.4651-.0478 1.7459-.3585 6.3627-1.342 8.152-2.0703 2.227-.9065 3.3763-3.3616 2.5155-5.6927-.8609-2.3311-3.2258-3.1715-5.4009-2.4031Z"
    })]
  }));
};
var _default = exports["default"] = Hearts;