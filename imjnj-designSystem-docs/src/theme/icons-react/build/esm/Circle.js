import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var Circle = function Circle(props) {
  return /*#__PURE__*/_jsx("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props, {
    children: /*#__PURE__*/_jsx("path", {
      fill: "transparent",
      fillOpacity: 0.01,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    })
  }));
};
export default Circle;