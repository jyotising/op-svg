import * as React from "react";
const SvgCoatHanger = (props) => (
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
      d="M9.5 6.5A2.5 2.5 0 1 1 12 9v2M22 18H2c0-2.5 3-7 10-7s10 4.5 10 7"
    />
  </svg>
);
export default SvgCoatHanger;
