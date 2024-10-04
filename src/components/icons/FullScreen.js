import * as React from "react";
const SvgFullScreen = (props) => (
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
      d="M16.5 3H21v4.5M21 16.5V21h-4.5M7.5 21H3v-4.5M3 7.5V3h4.5"
    />
  </svg>
);
export default SvgFullScreen;
