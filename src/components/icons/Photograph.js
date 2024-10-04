import * as React from "react";
const SvgPhotograph = (props) => (
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
      d="M17 6.5V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 21c-3.5-2-1.834-4.887-2.511-5.5-.827-.748-1.295-1.444-1.49-2.5-.193-1.056.536-2.264 1.49-1.5.953.763 2.511 4 2.511 4l1-1 .5-5.5S15 7 15 6s2 .5 3 2c0 5.22.75 10 3 14"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.5 8.7-2-3.2-4 8H10M3 11l3-5.5L8.5 9"
    />
  </svg>
);
export default SvgPhotograph;
