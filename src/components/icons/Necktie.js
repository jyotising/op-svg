import * as React from "react";
const SvgNecktie = (props) => (
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
      d="m7.5 18 3-11.5h3l3 11.5-4.5 4zM10.5 2h3L15 3l-1.5 3.5h-3L9 3z"
    />
  </svg>
);
export default SvgNecktie;
