import * as React from "react";
const SvgStackLight = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 2h-7v15h7z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 7h7M8.5 12h7M3.44 3.94l2.12 2.12M3.44 16.56l2.12-2.12M20.56 3.94l-2.12 2.12M20.56 16.56l-2.12-2.12M2 10.5h3M19 10.5h3"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 17h-4v5h4z"
    />
  </svg>
);
export default SvgStackLight;
