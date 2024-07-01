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
var Codepen = function Codepen(props) {
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
      d: "M12.7848 2.5293c-.2841-.1846-.4261-.277-.5791-.3129a.9004.9004 0 0 0-.4114 0c-.153.036-.295.1283-.5791.313l-7.56 4.914c-.2394.1555-.359.2333-.4458.3371a.9.9 0 0 0-.1696.3126C3 8.2224 3 8.3651 3 8.6507v4.737c0 .2856 0 .4283.0398.5576a.8998.8998 0 0 0 .1696.3126c.0867.1038.2064.1816.4458.3372l7.56 4.914c.2841.1846.4261.277.5791.3129a.9017.9017 0 0 0 .4114 0c.153-.0359.295-.1283.5791-.3129l7.56-4.914c.2394-.1556.3591-.2334.4458-.3372a.8978.8978 0 0 0 .1696-.3126C21 13.816 21 13.6733 21 13.3877v-4.737c0-.2856 0-.4283-.0398-.5576a.898.898 0 0 0-.1696-.3126c-.0867-.1038-.2064-.1816-.4458-.3372l-7.56-4.914Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 8.3192 4.8575 12.962c-.619.4023-.9286.6035-1.0358.8587a.8998.8998 0 0 0 0 .6972M12 8.3192l7.1425 4.6427c.6191.4023.9286.6035 1.0358.8587a.8998.8998 0 0 1 0 .6972M12 8.3192v-5.85m0 11.25L4.8575 9.0766c-.619-.4024-.9286-.6036-1.0358-.8588a.9.9 0 0 1 0-.6972M12 13.7192l7.1425-4.6426c.6191-.4024.9286-.6036 1.0358-.8588a.8999.8999 0 0 0 0-.6972M12 13.7192v5.85m8.3448-4.9741-7.56 4.914c-.2841.1846-.4261.277-.5791.3129a.9017.9017 0 0 1-.4114 0c-.153-.0359-.295-.1283-.5791-.3129l-7.56-4.914c-.2394-.1556-.359-.2334-.4458-.3372a.8998.8998 0 0 1-.1696-.3126C3 13.816 3 13.6733 3 13.3877v-4.737c0-.2856 0-.4283.0398-.5576a.9.9 0 0 1 .1696-.3126c.0867-.1038.2064-.1816.4458-.3372l7.56-4.914c.2841-.1846.4261-.277.5791-.3129a.9004.9004 0 0 1 .4114 0c.153.036.295.1283.5791.313l7.56 4.914c.2394.1555.3591.2333.4458.3371a.898.898 0 0 1 .1696.3126c.0398.1293.0398.272.0398.5576v4.737c0 .2856 0 .4283-.0398.5576a.8978.8978 0 0 1-.1696.3126c-.0867.1038-.2064.1816-.4458.3372Z"
    })]
  }));
};
var _default = exports["default"] = Codepen;