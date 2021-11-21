import * as React from "react";

function SvgComponent(
  { width, height, strokeWidth, strokeColor, fillColor, style, onClick },
  props
) {
  return (
    <svg
      width={width}
      height={height}
      style={style}
      onClick={onClick}
      viewBox="0 0 16 16"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 1L1 15M1 1l14 14"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
