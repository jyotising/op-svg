import * as React from "react";
const SvgLipstick = (props) => (
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
      d="M20.5 12h-6v10h6zM10.5 12h-7v10h7zM5 5.727V12h4V2C5.75 2 5 4.818 5 5.727M3.5 16h7"
    />
  </svg>
);
export default SvgLipstick;
