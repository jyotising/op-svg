import * as React from "react";
const SvgAutoLineHeight = (props) => (
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
      strokeWidth={2}
      d="M3 3.5h18M3 20.5h18"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 6.5-5 11M9 14h6M12 6.5l5 11"
    />
  </svg>
);
export default SvgAutoLineHeight;
