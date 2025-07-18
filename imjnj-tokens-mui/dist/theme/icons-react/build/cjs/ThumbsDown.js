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
var ThumbsDown = function ThumbsDown(props) {
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
      d: "M3.2907 6.6631c.2-1.3.3-1.95.6187-2.4385a2.7 2.7 0 0 1 1.1469-.984C5.5875 3 6.245 3 7.5605 3h9.6137c1.0081 0 1.5122 0 1.8972.1962.3387.1726.6141.448.7867.7866.1961.385.1961.8891.1961 1.8972v4.14c0 1.0081 0 1.5121-.1961 1.8972a1.8003 1.8003 0 0 1-.7867.7866c-.385.1962-.8891.1962-1.8972.1962h-.6841c-.3388 0-.5081 0-.656.0533a.9001.9001 0 0 0-.3448.2241c-.1088.1135-.1776.2682-.3151.5778l-3.0247 6.8055a.7398.7398 0 0 1-.676.4393c-1.2257 0-2.2192-.9936-2.2192-2.2193V16.14c0-.504 0-.7561-.0982-.9486a.9003.9003 0 0 0-.3933-.3933C8.5703 14.7 8.3183 14.7 7.8142 14.7h-.7245c-1.7348 0-2.6023 0-3.223-.3529a2.7002 2.7002 0 0 1-1.188-1.3849c-.2545-.6671-.1226-1.5244.1412-3.239l.4708-3.06Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M15.5542 3v9.9m4.5-2.88V5.88c0-1.008 0-1.5121-.1961-1.8972a1.8003 1.8003 0 0 0-.7867-.7866C18.6864 3 18.1823 3 17.1742 3H7.5605c-1.3154 0-1.973 0-2.5042.2407a2.7 2.7 0 0 0-1.147.984c-.3186.4883-.4186 1.1384-.6186 2.4384l-.4708 3.06c-.2638 1.7147-.3957 2.572-.1412 3.2391a2.7002 2.7002 0 0 0 1.188 1.3849c.6207.3529 1.4882.3529 3.223.3529h.7246c.504 0 .756 0 .9485.0981a.9003.9003 0 0 1 .3933.3933c.0982.1925.0982.4446.0982.9486v2.6407c0 1.2257.9935 2.2193 2.2192 2.2193a.7398.7398 0 0 0 .676-.4393l3.0247-6.8055c.1375-.3096.2063-.4643.3151-.5778a.9001.9001 0 0 1 .3448-.2241c.1479-.0533.3172-.0533.656-.0533h.6841c1.0081 0 1.5122 0 1.8972-.1962a1.8003 1.8003 0 0 0 .7867-.7866c.1961-.3851.1961-.8891.1961-1.8972Z"
    })]
  }));
};
var _default = exports["default"] = ThumbsDown;