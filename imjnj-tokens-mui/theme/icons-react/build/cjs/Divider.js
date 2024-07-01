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
var Divider = function Divider(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", (0, _extends2["default"])({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M3 12h.01m4.49 0h.01m8.99 0h.01M12 12h.01M21 12h.01M21 21v-.8c0-1.1201 0-1.6802-.218-2.108a1.9996 1.9996 0 0 0-.874-.874C19.4802 17 18.9201 17 17.8 17H6.2c-1.1201 0-1.6802 0-2.108.218a1.9998 1.9998 0 0 0-.874.874C3 18.5198 3 19.0799 3 20.2v.8M21 3v.8c0 1.1201 0 1.6802-.218 2.108a1.9997 1.9997 0 0 1-.874.874C19.4802 7 18.9201 7 17.8 7H6.2c-1.1201 0-1.6802 0-2.108-.218a1.9999 1.9999 0 0 1-.874-.874C3 5.4802 3 4.92 3 3.8V3"
    })
  }));
};
var _default = exports["default"] = Divider;