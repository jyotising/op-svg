import * as React from "react";
const SvgFileHiding = (props) => (
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
      d="M5 22h14a1 1 0 0 0 1-1V7l-4.5-5H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 11.5c.141.457.355.881.627 1.258A4.16 4.16 0 0 0 12 14.5a4.16 4.16 0 0 0 3.373-1.742c.272-.377.486-.8.627-1.258M10.76 14.534l-.517 1.932M13.243 14.534l.518 1.932M15.177 13.677l1.414 1.414M7.5 15.005l1.414-1.414M15 2v5h5"
    />
  </svg>
);
export default SvgFileHiding;
