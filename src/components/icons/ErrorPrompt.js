import * as React from "react";
const SvgErrorPrompt = (props) => (
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
      d="m4 9 6 6M10 9l-6 6M17 4c2.5 2.18 4 4.966 4 8s-1.5 5.82-4 8M13.5 7c1.875 1.363 3 3.103 3 5s-1.125 3.637-3 5"
    />
  </svg>
);
export default SvgErrorPrompt;
