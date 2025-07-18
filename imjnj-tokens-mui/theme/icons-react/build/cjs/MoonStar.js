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
var MoonStar = function MoonStar(props) {
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
      d: "m17.4 2 .556 1.112c.239.478.3584.7168.518.9239.1417.1837.3064.3485.4901.49.2071.1597.446.2791.9239.518L21 5.6l-1.112.556c-.4779.239-.7168.3584-.9239.518a2.7034 2.7034 0 0 0-.4901.4901c-.1596.207-.279.446-.518.9239L17.4 9.2l-.556-1.112c-.239-.478-.3584-.7168-.518-.9239a2.7034 2.7034 0 0 0-.4901-.49c-.2071-.1597-.446-.2792-.9239-.518L13.8 5.6l1.112-.556c.4779-.239.7168-.3584.9239-.518a2.7034 2.7034 0 0 0 .4901-.4901c.1596-.207.279-.446.518-.9239L17.4 2Zm2.7 10.2504c-1.1799 2.0697-3.4069 3.4651-5.9598 3.4651-3.7862 0-6.8555-3.0692-6.8555-6.8554 0-2.5531 1.3956-4.7802 3.4656-5.9601C6.4018 3.3123 3 6.9742 3 11.4307 3 16.1634 6.8366 20 11.5693 20c4.4563 0 8.1181-3.4014 8.5307-7.7496Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m17.4 2 .556 1.112c.239.478.3584.7168.518.9239.1417.1837.3064.3485.4901.49.2071.1597.446.2791.9239.518L21 5.6l-1.112.556c-.4779.239-.7168.3584-.9239.518a2.7034 2.7034 0 0 0-.4901.4901c-.1596.207-.279.446-.518.9239L17.4 9.2l-.556-1.112c-.239-.478-.3584-.7168-.518-.9239a2.7034 2.7034 0 0 0-.4901-.49c-.2071-.1597-.446-.2792-.9239-.518L13.8 5.6l1.112-.556c.4779-.239.7168-.3584.9239-.518a2.7034 2.7034 0 0 0 .4901-.4901c.1596-.207.279-.446.518-.9239L17.4 2Zm2.7 10.2504c-1.1799 2.0697-3.4069 3.4651-5.9598 3.4651-3.7862 0-6.8555-3.0692-6.8555-6.8554 0-2.5531 1.3956-4.7802 3.4656-5.9601C6.4018 3.3123 3 6.9742 3 11.4307 3 16.1634 6.8366 20 11.5693 20c4.4563 0 8.1181-3.4014 8.5307-7.7496Z"
    })]
  }));
};
var _default = exports["default"] = MoonStar;