import * as React from "react";
const SvgAutoWidth = (props) => (
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
      d="M5.994 16 2 12.003 6 8M18.006 8 22 11.997 18 16M2 12h20"
    />
  </svg>
);
export default SvgAutoWidth;
