import * as React from "react";
const SvgGymnastics = (props) => (
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
      d="M12 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="m11.5 14.5-1 3.5L6 17l-2.5 5M10.5 18l1 4H17M3.5 11.5l8 3 6-1 3.02-2.485M6 2c7-1 12 1 16 5.5"
    />
  </svg>
);
export default SvgGymnastics;
