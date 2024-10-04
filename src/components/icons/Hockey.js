import * as React from "react";
const SvgHockey = (props) => (
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
      d="m18 2-2.885 13.705a1 1 0 0 1-.98.795H4.5c-.83 0-1.5.67-1.5 1.5v.775a2.997 2.997 0 0 0 3.215 2.99l8.53-.61a3 3 0 0 0 2.72-2.375L21 2zM7.5 8c2.21 0 4-.672 4-1.5S9.71 5 7.5 5s-4 .672-4 1.5S5.29 8 7.5 8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M11.5 6.5v3c0 .83-1.79 1.5-4 1.5s-4-.67-4-1.5v-3"
    />
  </svg>
);
export default SvgHockey;
