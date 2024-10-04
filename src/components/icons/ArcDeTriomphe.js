import * as React from "react";
const SvgArcDeTriomphe = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 8v14h5v-7.5a3 3 0 0 1 6 0V22h5V8zM2.5 5h19v1.5A1.5 1.5 0 0 1 20 8H4a1.5 1.5 0 0 1-1.5-1.5z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M2.5 2h19M4 2v2.5M20 2v2.5M4 14h5M15 14h5"
    />
  </svg>
);
export default SvgArcDeTriomphe;
