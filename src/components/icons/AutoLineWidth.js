import * as React from "react";
const SvgAutoLineWidth = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M2.5 20V4" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 6.5-5 11M9 14h6M12 6.5l5 11"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M21.5 20V4" />
  </svg>
);
export default SvgAutoLineWidth;
