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
var MessageCircle01 = function MessageCircle01(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M20.9996 11.5c0 4.6944-3.8056 8.5-8.5 8.5-1.0768 0-2.1068-.2002-3.0548-.5655-.1734-.0667-.26-.1001-.329-.116a.901.901 0 0 0-.1863-.0248c-.0707-.0027-.1482.0053-.3033.0213l-5.121.5294c-.4883.0504-.7324.0757-.8764-.0122a.5.5 0 0 1-.2336-.3494c-.0261-.1667.0905-.3826.3239-.8144l1.6356-3.0276c.1347-.2493.202-.374.2326-.4939.0301-.1183.0374-.2037.0278-.3255-.0098-.1233-.064-.2838-.1721-.6048A8.4898 8.4898 0 0 1 3.9996 11.5c0-4.6944 3.8056-8.5 8.5-8.5s8.5 3.8056 8.5 8.5Z"
    })
  }));
};
var _default = exports["default"] = MessageCircle01;