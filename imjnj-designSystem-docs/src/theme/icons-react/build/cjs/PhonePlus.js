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
var PhonePlus = function PhonePlus(props) {
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
      d: "M7.3803 9.8532c.696 1.4496 1.6448 2.8083 2.8463 4.0099 1.2016 1.2015 2.5603 2.1503 4.0099 2.8463.1247.0599.187.0898.2659.1128.2804.0818.6246.0231.862-.147.0669-.0478.124-.105.2383-.2193.3496-.3496.5244-.5244.7002-.6387a2 2 0 0 1 2.1804 0c.1758.1143.3506.2891.7002.6387l.1948.1949c.5315.5314.7972.7972.9415 1.0825a1.9998 1.9998 0 0 1 0 1.8054c-.1443.2854-.41.5511-.9415 1.0826l-.1576.1576c-.5296.5296-.7944.7944-1.1545.9967-.3995.2244-1.02.3858-1.4782.3844-.4129-.0012-.6952-.0813-1.2596-.2415-3.0334-.861-5.8958-2.4855-8.2837-4.8735-2.388-2.3879-4.0125-5.2503-4.8735-8.2837-.1602-.5644-.2403-.8467-.2415-1.2596-.0014-.4582.16-1.0787.3844-1.4782.2023-.36.467-.6249.9967-1.1545l.1576-.1576c.5315-.5315.7972-.7972 1.0826-.9415a2 2 0 0 1 1.8054 0c.2853.1443.551.41 1.0825.9415l.1949.1948c.3496.3496.5244.5244.6387.7002a2 2 0 0 1 0 2.1804c-.1143.1758-.2891.3506-.6387.7002-.1143.1143-.1715.1715-.2193.2383-.17.2374-.2287.5816-.147.862.023.0789.053.1412.1128.266Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16.9996 11V3m-4 4h8m-10.773 6.8631c-1.2015-1.2016-2.1503-2.5603-2.8463-4.0099-.0599-.1247-.0898-.187-.1128-.2659-.0817-.2804-.023-.6246.147-.862.0478-.0669.105-.124.2193-.2383.3496-.3496.5244-.5244.6387-.7002a2 2 0 0 0 0-2.1804c-.1143-.1757-.2891-.3506-.6387-.7002l-.1949-.1948c-.5314-.5315-.7972-.7972-1.0825-.9415a2 2 0 0 0-1.8054 0c-.2854.1443-.5511.41-1.0826.9415l-.1576.1576c-.5296.5296-.7944.7944-.9967 1.1545-.2244.3995-.3858 1.02-.3844 1.4782.0012.413.0813.6952.2415 1.2596.861 3.0334 2.4855 5.8958 4.8735 8.2837 2.388 2.388 5.2503 4.0125 8.2837 4.8735.5644.1602.8467.2403 1.2596.2415.4582.0014 1.0787-.16 1.4782-.3844.3601-.2023.6249-.4671 1.1545-.9967l.1576-.1576c.5315-.5315.7972-.7972.9415-1.0826a1.9998 1.9998 0 0 0 0-1.8054c-.1443-.2853-.41-.5511-.9415-1.0825l-.1948-.1949c-.3496-.3496-.5244-.5244-.7002-.6387a2 2 0 0 0-2.1804 0c-.1758.1143-.3506.2891-.7002.6387-.1143.1143-.1714.1715-.2383.2193-.2374.1701-.5816.2288-.862.147-.0789-.023-.1412-.0529-.2659-.1128-1.4496-.696-2.8083-1.6448-4.0099-2.8463Z"
    })]
  }));
};
var _default = exports["default"] = PhonePlus;