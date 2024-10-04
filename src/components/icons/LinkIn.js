import * as React from "react";
const SvgLinkIn = (props) => (
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
      d="M8 6V2h8v4M16 18v4H8v-4M9 12H2M22 12h-7M12 17V7M6.5 9.5 9 12l-2.5 2.5M17.5 9.5 15 12l2.5 2.5"
    />
  </svg>
);
export default SvgLinkIn;
