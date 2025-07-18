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
var Globe04 = function Globe04(props) {
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
      d: "M14.3147 16.4c.1408 0 .2113 0 .2752-.0194a.4513.4513 0 0 0 .155-.0829c.0516-.0425.0907-.1011.1688-.2183l1.1062-1.6592c.1648-.2473.2472-.3709.2547-.4919a.4496.4496 0 0 0-.0881-.2964c-.0723-.0973-.2089-.1558-.4821-.2729L13.35 12.35l-.7576-.2525c-.21-.07-.3151-.1051-.4125-.0946a.4498.4498 0 0 0-.2344.0971c-.0762.0615-.1257.1605-.2248.3585l-.4873.9748c-.0492.0984-.0739.1476-.0859.1995a.451.451 0 0 0-.01.1404c.0046.0531.022.1053.0568.2097l.6416 1.9248c.059.177.0885.2656.1432.331a.4507.4507 0 0 0 .1805.1301c.0794.0312.1727.0312.3593.0312h1.7958Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      d: "M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m3.9684 6.9345 3.8592 2.7566c.2008.1434.3012.2151.4063.2317a.45.45 0 0 0 .271-.042c.0951-.0475.1691-.1462.3172-.3436l.8155-1.0873c.0419-.0559.0628-.0838.0874-.1079a.45.45 0 0 1 .0716-.057c.029-.0186.0608-.0327.1246-.061l3.4817-1.5475c.1443-.0642.2165-.0962.2709-.1463a.4504.4504 0 0 0 .1111-.159c.0282-.0684.0335-.1472.044-.3048l.2549-3.824M13.35 12.35l2.3544 1.009c.2732.1171.4098.1756.4821.2729a.4496.4496 0 0 1 .0881.2964c-.0075.121-.0899.2446-.2547.4919l-1.1062 1.6592c-.0781.1172-.1172.1758-.1688.2183a.4513.4513 0 0 1-.155.0829c-.0639.0194-.1344.0194-.2752.0194h-1.7958c-.1866 0-.2799 0-.3593-.0312a.4507.4507 0 0 1-.1805-.1301c-.0547-.0654-.0842-.154-.1432-.331l-.6416-1.9248c-.0348-.1044-.0522-.1566-.0568-.2097a.451.451 0 0 1 .01-.1404c.012-.0519.0367-.1011.0859-.1995l.4873-.9748c.0991-.198.1486-.297.2248-.3585a.4498.4498 0 0 1 .2344-.0971c.0974-.0105.2025.0246.4125.0946l.7576.2525ZM21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    })]
  }));
};
var _default = exports["default"] = Globe04;