import * as React from "react";
const SvgWindTurbine = (props) => (
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
      d="M12 15v7M14.5 11.5c5.5 2.5 8 7 8 7s-6 0-10.5-4c-4.5 4-10.5 4-10.5 4s2.5-5 8-7C9.5 5 12 2 12 2s2.5 3 2.5 9.5"
    />
    <path fill="#333" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgWindTurbine;
