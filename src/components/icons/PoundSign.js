import * as React from "react";
const SvgPoundSign = (props) => (
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
      d="M18 8.5H6M18 15.5H6M8.5 18V6M15.5 18V6"
    />
  </svg>
);
export default SvgPoundSign;
