import * as React from "react";
const SvgEgg = (props) => (
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
      d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M22 12a10 10 0 0 1-.716 3.724c-.468 1.166-2.065.036-3.673 1.76-1.609 1.726-.356 3.134-1.603 3.68A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10 12.5s.105.605.5 1 1 .5 1 .5"
    />
  </svg>
);
export default SvgEgg;
