import * as React from "react";

const SvgComponent = ({ style, onClick }, props) => (
  <svg
    style={style}
    onClick={onClick}
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeMiterlimit={10}
      stroke="#221b38"
      d="M3 18h18M3 12h18M3 6h18"
    />
  </svg>
);

export default SvgComponent;
