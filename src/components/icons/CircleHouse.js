import * as React from "react";
const SvgCircleHouse = (props) => (
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
      d="M22 11.5H2s5.25-3 7.5-5.5 2.75-4 2.75-4 .5 1.5 2.75 4 7 5.5 7 5.5M20 15.5H4V22h16zM17.5 11.5h-11v4h11z"
    />
  </svg>
);
export default SvgCircleHouse;
