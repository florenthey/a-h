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
      stroke="white"
      d="m2 2 20 20M22 2 2 22"
    />
  </svg>
);

export default SvgComponent;
