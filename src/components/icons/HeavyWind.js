import * as React from "react";
const SvgHeavyWind = (props) => (
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
      d="M2 9.943C2 6.108 5.053 3 8.818 3c3.149 0 5.799 2.173 6.583 5.127a4.46 4.46 0 0 1 2.053-.499c2.51 0 4.546 2.073 4.546 4.629a4.64 4.64 0 0 1-2.535 4.152.9.9 0 0 1-.405.091H7.5M7.5 16.5H6a2 2 0 1 0 0 4h1.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 9H9.5a2 2 0 0 0 0 4H11M9.5 13H16"
    />
  </svg>
);
export default SvgHeavyWind;
