import * as React from "react";
const SvgTwoDimensionalCodeOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 3H3v6h6zM9 15H3v6h6zM21 15h-6v6h6zM21 3h-6v6h6z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 3v9M12 15v6M12 12H3M21 12h-6"
    />
  </svg>
);
export default SvgTwoDimensionalCodeOne;
