import * as React from "react";
const SvgExtend = (props) => (
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
      strokeWidth={2}
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"
    />
    <path
      fill="#333"
      d="M17.5 6h-2.293a.5.5 0 0 0-.354.854l2.293 2.292A.5.5 0 0 0 18 8.793V6.5a.5.5 0 0 0-.5-.5M6 6.5v2.293a.5.5 0 0 0 .854.353l2.292-2.292A.5.5 0 0 0 8.793 6H6.5a.5.5 0 0 0-.5.5M6.5 18h2.293a.5.5 0 0 0 .353-.854l-2.292-2.293a.5.5 0 0 0-.854.354V17.5a.5.5 0 0 0 .5.5M18 17.5v-2.293a.5.5 0 0 0-.854-.354l-2.293 2.293a.5.5 0 0 0 .354.854H17.5a.5.5 0 0 0 .5-.5"
    />
  </svg>
);
export default SvgExtend;
