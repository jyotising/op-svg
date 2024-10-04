import * as React from "react";
const SvgLipstickOne = (props) => (
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
      d="m19.718 2.661.707.707a2 2 0 0 1 0 2.829l-3.536 3.535-2.121-2.121z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17.596 10.439-3.535-3.536-5.657 5.657 3.535 3.536z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.647 16.803-4.95-4.95-4.95 4.95 4.95 4.95z"
    />
  </svg>
);
export default SvgLipstickOne;
