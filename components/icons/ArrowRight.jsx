import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke="white"
      d="m15 6 6 6-6 6M21 12H3"
    />
  </svg>
);

export default SvgComponent;
