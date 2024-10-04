import * as React from "react";
const SvgRiding = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M16.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M20 11.5h-3.815c-.28 0-.55-.12-.74-.325l-2.67-2.89a1.005 1.005 0 0 0-1.265-.18l-3.725 2.29a.5.5 0 0 0 0 .85l3.73 2.285c.295.18.48.505.48.855L12 19"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M18.25 22a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM5.75 22a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
    />
  </svg>
);
export default SvgRiding;
