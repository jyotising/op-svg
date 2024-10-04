import * as React from "react";
const SvgChess = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M17 2H7v5h10zM13.5 7l3 11.5h-9l3-11.5M20 22H4v-2l3-1.5h10l3 1.5zM6 11.51h12M10.25 2v2M13.75 2v2"
    />
  </svg>
);
export default SvgChess;
