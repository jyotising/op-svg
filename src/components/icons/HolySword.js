import * as React from "react";
const SvgHolySword = (props) => (
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
      d="M8.5 6.5 12 2l3.5 4.5-2.5 13h-2zM8.5 19.5h7M12 19.5v3"
    />
  </svg>
);
export default SvgHolySword;
