import * as React from "react";
const SvgChessOne = (props) => (
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
      d="M20 22H4v-2l3-1.5h10l3 1.5zM7 9.5h10M13.87 9.5l2.63 9h-9l2.63-9"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 2a4 4 0 0 0-1.938 7.5h3.876A4 4 0 0 0 12 2Z"
    />
  </svg>
);
export default SvgChessOne;
