import * as React from "react";
const SvgDiamonds = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 4h12l4 5-10 12L2 9zM2 9h20M12 21 8 9M12 21l4-12"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6.5 2 9l10 12L22 9l-2-2.5"
    />
  </svg>
);
export default SvgDiamonds;
