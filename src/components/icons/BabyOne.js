import * as React from "react";
const SvgBabyOne = (props) => (
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
      d="M12 6.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M2.5 14s8.5-10.125 19 0"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 14v-1.895S9.5 9.5 12 9.5s2.5 2.605 2.5 2.605V16s0 2.5-2.5 2.5S9.5 16 9.5 16zM14.5 16l4 2.5-3 3.5M9.5 16l-4 2.5 3 3.5"
    />
  </svg>
);
export default SvgBabyOne;
