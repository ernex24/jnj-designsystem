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
var Perspective01 = function Perspective01(props) {
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
      d: "M3 4.6c0-.56 0-.84.109-1.054a1.0001 1.0001 0 0 1 .437-.437C3.76 3 4.04 3 4.6 3h.8c.56 0 .84 0 1.054.109.1882.0959.3411.2489.437.437C7 3.76 7 4.04 7 4.6v.8c0 .56 0 .84-.109 1.054a1.0001 1.0001 0 0 1-.437.437C6.24 7 5.96 7 5.4 7h-.8c-.56 0-.84 0-1.054-.109a1.0001 1.0001 0 0 1-.437-.437C3 6.24 3 5.96 3 5.4v-.8Zm0 14c0-.5601 0-.8401.109-1.054a1 1 0 0 1 .437-.437C3.76 17 4.04 17 4.6 17h.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C7 17.7599 7 18.0399 7 18.6v.8c0 .5601 0 .8401-.109 1.054a1 1 0 0 1-.437.437C6.24 21 5.96 21 5.4 21h-.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.2401 3 19.9601 3 19.4v-.8Zm14-12c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C17.7599 5 18.0399 5 18.6 5h.8c.5601 0 .8401 0 1.054.109a1 1 0 0 1 .437.437C21 5.76 21 6.04 21 6.6v.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.2401 9 19.9601 9 19.4 9h-.8c-.5601 0-.8401 0-1.054-.109a1 1 0 0 1-.437-.437C17 8.24 17 7.96 17 7.4v-.8Zm0 10c0-.5601 0-.8401.109-1.054a.9998.9998 0 0 1 .437-.437C17.7599 15 18.0399 15 18.6 15h.8c.5601 0 .8401 0 1.054.109a.9998.9998 0 0 1 .437.437c.109.2139.109.4939.109 1.054v.8c0 .5601 0 .8401-.109 1.054a.9998.9998 0 0 1-.437.437C20.2401 19 19.9601 19 19.4 19h-.8c-.5601 0-.8401 0-1.054-.109a.9998.9998 0 0 1-.437-.437C17 18.2401 17 17.9601 17 17.4v-.8Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M19 9v6M5 7v10M17 6.7143 7 5.2857m10 12L7 18.7143M4.6 7h.8c.56 0 .84 0 1.054-.109a1.0001 1.0001 0 0 0 .437-.437C7 6.24 7 5.96 7 5.4v-.8c0-.56 0-.84-.109-1.054a1.0001 1.0001 0 0 0-.437-.437C6.24 3 5.96 3 5.4 3h-.8c-.56 0-.84 0-1.054.109a1.0001 1.0001 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v.8c0 .56 0 .84.109 1.054.0959.1882.2489.3411.437.437C3.76 7 4.04 7 4.6 7Zm0 14h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C7 20.2401 7 19.9601 7 19.4v-.8c0-.5601 0-.8401-.109-1.054a1 1 0 0 0-.437-.437C6.24 17 5.96 17 5.4 17h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 17.7599 3 18.0399 3 18.6v.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21Zm14-12h.8c.5601 0 .8401 0 1.054-.109a1 1 0 0 0 .437-.437C21 8.24 21 7.96 21 7.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.2401 5 19.9601 5 19.4 5h-.8c-.5601 0-.8401 0-1.054.109a1 1 0 0 0-.437.437C17 5.76 17 6.04 17 6.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C17.7599 9 18.0399 9 18.6 9Zm0 10h.8c.5601 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437C21 18.2401 21 17.9601 21 17.4v-.8c0-.5601 0-.8401-.109-1.054a.9998.9998 0 0 0-.437-.437C20.2401 15 19.9601 15 19.4 15h-.8c-.5601 0-.8401 0-1.054.109a.9998.9998 0 0 0-.437.437C17 15.7599 17 16.0399 17 16.6v.8c0 .5601 0 .8401.109 1.054a.9998.9998 0 0 0 .437.437c.2139.109.4939.109 1.054.109Z"
    })]
  }));
};
var _default = exports["default"] = Perspective01;