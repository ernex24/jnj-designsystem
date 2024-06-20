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
var ThumbsUp = function ThumbsUp(props) {
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
      d: "M18.5522 18.7106C18.3496 20.0277 17.2163 21 15.8836 21H3.8c-.9941 0-1.8-.8059-1.8-1.8v-6.3c0-.9941.8059-1.8 1.8-1.8h2.1151a.9.9 0 0 0 .8224-.5345l3.1673-7.1262A.7398.7398 0 0 1 10.5807 3C11.8064 3 12.8 3.9936 12.8 5.2193V8.4a.9.9 0 0 0 .9.9h3.1528c1.6548 0 2.9203 1.475 2.6687 3.1106l-.9693 6.3Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M6.5 21v-9.9M2 12.9v6.3c0 .9941.8059 1.8 1.8 1.8h12.0836c1.3327 0 2.466-.9723 2.6686-2.2894l.9693-6.3C19.7731 10.775 18.5076 9.3 16.8529 9.3H13.7a.9.9 0 0 1-.9-.9V5.2193C12.8 3.9936 11.8064 3 10.5807 3a.7398.7398 0 0 0-.676.4393l-3.1672 7.1262a.9.9 0 0 1-.8224.5345H3.8c-.9941 0-1.8.8059-1.8 1.8Z"
    })]
  }));
};
var _default = exports["default"] = ThumbsUp;