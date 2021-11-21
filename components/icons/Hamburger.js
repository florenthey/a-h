import * as React from "react";

function SvgComponent({
  width,
  height,
  strokeWidth,
  strokeColor,
  fillColor,
  style,
  onClick,
  props,
}) {
  return (
    <svg
      width={width}
      height={height}
      style={style}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 18a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
        // stroke={strokeColor}
        strokeWidth={strokeWidth}
        // clipRule="evenodd"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgComponent;
