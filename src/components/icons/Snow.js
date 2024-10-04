import * as React from "react";
const SvgSnow = (props) => (
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
      d="M4.727 15.497A6.98 6.98 0 0 1 2 9.943C2 6.108 5.053 3 8.818 3c3.149 0 5.799 2.173 6.583 5.127a4.46 4.46 0 0 1 2.053-.499c2.51 0 4.546 2.073 4.546 4.629a4.63 4.63 0 0 1-2.727 4.243M9 11.5v3M7.5 13h3M15.5 13v3M14 14.5h3M12 18v3M10.5 19.5h3"
    />
  </svg>
);
export default SvgSnow;
