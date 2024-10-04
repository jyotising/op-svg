import * as React from "react";
const SvgLinkRight = (props) => (
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
      d="M4 6V2h8v4M12 18v4H4v-4M22 12H12M8 17V7M18 8l4 4-4 4"
    />
  </svg>
);
export default SvgLinkRight;
