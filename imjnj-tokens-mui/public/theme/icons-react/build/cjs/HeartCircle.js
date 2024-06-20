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
var HeartCircle = function HeartCircle(props) {
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
      d: "M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      fillRule: "evenodd",
      d: "M11.9969 9.3611c-.8997-1.0518-2.4-1.3348-3.5273-.3716-1.1273.9632-1.286 2.5735-.4007 3.7127.567.7296 2.0191 2.0826 2.9899 2.9611.3226.292.4839.4379.6771.4965a.9217.9217 0 0 0 .522 0c.1932-.0586.3545-.2045.6771-.4965.9708-.8785 2.4229-2.2315 2.9899-2.9611.8853-1.1392.746-2.7597-.4007-3.7127-1.1466-.953-2.6276-.6802-3.5273.3716Z",
      clipRule: "evenodd"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M11.9969 9.3611c-.8997-1.0518-2.4-1.3348-3.5273-.3716-1.1273.9632-1.286 2.5735-.4007 3.7127.567.7296 2.0191 2.0826 2.9899 2.9611.3226.292.4839.4379.6771.4965a.9217.9217 0 0 0 .522 0c.1932-.0586.3545-.2045.6771-.4965.9708-.8785 2.4229-2.2315 2.9899-2.9611.8853-1.1392.746-2.7597-.4007-3.7127-1.1466-.953-2.6276-.6802-3.5273.3716Z",
      clipRule: "evenodd"
    })]
  }));
};
var _default = exports["default"] = HeartCircle;