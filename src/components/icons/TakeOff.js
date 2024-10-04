import * as React from "react";
const SvgTakeOff = (props) => (
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
      d="m11 14.5-4.112 2.056a1.5 1.5 0 0 1-1.644-.2L2 13.59l1.781-.682a1.5 1.5 0 0 1 .993-.028l1.64.523a1.5 1.5 0 0 0 1.135-.091l11.131-5.65a1.5 1.5 0 0 1 .679-.162H22l-.776 1.553a1.5 1.5 0 0 1-.671.67L16 12"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11 14.5-2 1 2.5 5L16 12M8.5 12.5 6 8l8 2"
    />
  </svg>
);
export default SvgTakeOff;
