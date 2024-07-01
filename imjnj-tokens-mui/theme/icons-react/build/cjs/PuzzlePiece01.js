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
var PuzzlePiece01 = function PuzzlePiece01(props) {
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
      d: "M7.95 4.25C7.95 3.0074 8.9574 2 10.2 2s2.25 1.0074 2.25 2.25V5.6h.9c1.258 0 1.8871 0 2.3832.2055a2.7003 2.7003 0 0 1 1.4613 1.4612C17.4 7.763 17.4 8.392 17.4 9.65h1.35c1.2426 0 2.25 1.0074 2.25 2.25s-1.0074 2.25-2.25 2.25H17.4v1.53c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799C15.3482 20 14.5921 20 13.08 20h-.63v-1.575c0-1.1184-.9066-2.025-2.025-2.025-1.1184 0-2.025.9066-2.025 2.025V20H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 17.9482 3 17.1921 3 15.68v-1.53h1.35c1.2426 0 2.25-1.0074 2.25-2.25S5.5926 9.65 4.35 9.65H3c0-1.258 0-1.887.2055-2.3833a2.7 2.7 0 0 1 1.4613-1.4612C5.1629 5.6 5.792 5.6 7.05 5.6h.9V4.25Z"
    })
  }));
};
var _default = exports["default"] = PuzzlePiece01;