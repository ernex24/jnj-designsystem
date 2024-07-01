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
var Edit03 = function Edit03(props) {
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
      d: "M12 20h9-9Zm-9-1.6745c0-.4892 0-.7338.0553-.964a2.0001 2.0001 0 0 1 .2395-.5781c.1236-.2018.2966-.3748.6425-.7207L16.5 3.5c.8284-.8284 2.1715-.8284 3 0 .8284.8284.8284 2.1716 0 3L6.9373 19.0627c-.3459.3459-.5188.5189-.7207.6426a2.0017 2.0017 0 0 1-.578.2394C5.4083 20 5.1637 20 4.6745 20H3v-1.6745Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 20h9M3 20h1.6746c.4892 0 .7338 0 .964-.0553.204-.049.399-.1298.578-.2394.2019-.1237.3748-.2967.7207-.6426L19.5001 6.5c.8284-.8284.8284-2.1716 0-3-.8285-.8284-2.1716-.8284-3 0L3.9373 16.0627c-.346.3459-.5189.5189-.6425.7207a2.0001 2.0001 0 0 0-.2395.5781C3 17.5917 3 17.8363 3 18.3255V20Z"
    })]
  }));
};
var _default = exports["default"] = Edit03;