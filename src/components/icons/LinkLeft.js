import * as React from "react";
const SvgLinkLeft = (props) => (
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
      d="M12 6V2h8v4M20 18v4h-8v-4M12 12H2M16 17V7M6 8l-4 4 4 4"
    />
  </svg>
);
export default SvgLinkLeft;
