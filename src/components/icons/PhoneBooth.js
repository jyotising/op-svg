import * as React from "react";
const SvgPhoneBooth = (props) => (
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
      d="M17 17H7v4.5h10zM17 2H7v3h10zM7 5v12M10 5v12M11 8v2M16 13H7M17 5v12M2 22h20"
    />
  </svg>
);
export default SvgPhoneBooth;
