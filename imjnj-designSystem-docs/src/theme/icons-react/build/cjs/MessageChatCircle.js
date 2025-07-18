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
var MessageChatCircle = function MessageChatCircle(props) {
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
      d: "M11.9 16.05c0 2.7338-2.1632 4.95-4.8316 4.95a4.7224 4.7224 0 0 1-1.5744-.2687c-.1873-.0661-.281-.0992-.3439-.1118a.7636.7636 0 0 0-.1699-.0173c-.0642-.0004-.1378.0096-.2849.0297L2 21l.5502-2.4855c.036-.1629.0541-.2444.0583-.3165a.7662.7662 0 0 0-.0094-.1915c-.0112-.0713-.0453-.1757-.1135-.3844a5.0561 5.0561 0 0 1-.2488-1.5721c0-2.7338 2.1632-4.95 4.8316-4.95S11.9 13.3162 11.9 16.05Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M5.685 11.3059A7.2083 7.2083 0 0 1 5.6 10.2C5.6 6.2236 8.8447 3 12.8473 3s7.2474 3.2236 7.2474 7.2a7.1421 7.1421 0 0 1-.4681 2.5511c-.0628.1646-.0942.247-.1085.3113a.813.813 0 0 0-.0211.1737c-.0015.0658.0074.1384.0252.2834l.3624 2.9432c.0392.3186.0588.4779.0058.5937a.45.45 0 0 1-.2314.2262c-.117.0503-.2758.027-.5935-.0196l-2.8667-.4202c-.1497-.0219-.2245-.0329-.2927-.0325a.8141.8141 0 0 0-.1801.0192c-.0667.0141-.1519.046-.3223.1098-.795.2978-1.6565.4607-2.5564.4607-.3763 0-.746-.0285-1.1069-.0835M7.0684 21C9.7368 21 11.9 18.7838 11.9 16.05S9.7368 11.1 7.0684 11.1s-4.8316 2.2162-4.8316 4.95c0 .5495.0875 1.0781.2488 1.5721.0682.2087.1023.3131.1135.3844a.7662.7662 0 0 1 .0094.1915c-.0042.0721-.0222.1536-.0583.3165L2 21l2.6953-.3681c.1471-.0201.2207-.0301.285-.0297a.7636.7636 0 0 1 .1698.0173c.063.0126.1566.0457.344.1118A4.7224 4.7224 0 0 0 7.0683 21Z"
    })]
  }));
};
var _default = exports["default"] = MessageChatCircle;