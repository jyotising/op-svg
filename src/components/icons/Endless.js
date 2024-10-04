import * as React from "react";
const SvgEndless = (props) => (
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
      d="m15.5 10.5 2-1.5 4.5 3v5l-5 3-5-3V6.5l-5.5-3-4.5 3V12l4.5 3 2-1.5"
    />
  </svg>
);
export default SvgEndless;
