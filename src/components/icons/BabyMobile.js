import * as React from "react";
const SvgBabyMobile = (props) => (
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
      d="M2.25 9 12 4l10 5M12 9V2M5 15V8"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M5 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 15V8M16 18l3-3 3 3-3 3zM14.5 11.5V9h-5v2.5"
    />
  </svg>
);
export default SvgBabyMobile;
