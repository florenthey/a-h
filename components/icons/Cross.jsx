import * as React from "react";

const SvgComponent = (
  { width, height, strokeWidth, strokeColor, style, onClick },
  props
) => (
  <svg
    width={width}
    height={height}
    style={style}
    onClick={onClick}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit={10}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      d="m2 2 20 20M22 2 2 22"
    />
  </svg>
);

export default SvgComponent;
