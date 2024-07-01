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
var LockKeyholeCircle = function LockKeyholeCircle(props) {
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
      d: "M13.5584 12.0752c-.0635-.1905-.0952-.2857-.0936-.3636.0018-.0819.0127-.1249.0504-.1976.0359-.0692.1318-.1585.3237-.337.5297-.4929.8611-1.1963.8611-1.977 0-1.4912-1.2088-2.7-2.7-2.7S9.3 7.7088 9.3 9.2c0 .7807.3314 1.4841.8611 1.977.1919.1785.2878.2678.3237.337.0377.0727.0486.1157.0504.1976.0016.0779-.0301.1731-.0936.3636l-.8257 2.4771c-.1067.32-.16.48-.128.6073a.45.45 0 0 0 .1944.2698c.1107.0706.2794.0706.6166.0706h3.4022c.3372 0 .5059 0 .6165-.0706a.45.45 0 0 0 .1945-.2698c.032-.1273-.0213-.2873-.128-.6073l-.8257-2.4771Z"
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
      d: "M13.5584 12.0752c-.0635-.1905-.0952-.2857-.0936-.3636.0018-.0819.0127-.1249.0504-.1976.0359-.0692.1318-.1585.3237-.337.5297-.4929.8611-1.1963.8611-1.977 0-1.4912-1.2088-2.7-2.7-2.7S9.3 7.7088 9.3 9.2c0 .7807.3314 1.4841.8611 1.977.1919.1785.2878.2678.3237.337.0377.0727.0486.1157.0504.1976.0016.0779-.0301.1731-.0936.3636l-.8257 2.4771c-.1067.32-.16.48-.128.6073a.45.45 0 0 0 .1944.2698c.1107.0706.2794.0706.6166.0706h3.4022c.3372 0 .5059 0 .6165-.0706a.45.45 0 0 0 .1945-.2698c.032-.1273-.0213-.2873-.128-.6073l-.8257-2.4771Z"
    })]
  }));
};
var _default = exports["default"] = LockKeyholeCircle;