import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="stroke"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 18a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComponent;
