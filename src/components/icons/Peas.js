import * as React from "react";
const SvgPeas = (props) => (
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
      d="M13.5 6S17 9.5 17 14s-2.222 8.111-4 8-3.5-3.5-3-8 3.5-8 3.5-8M13.5 6s.5-2.062 2-3.03C17 2 19.945 4.5 19.5 6s-2 1.5-2.5 0 2-3.25 3.5-3.03C22 3.187 22.128 5.59 22 7c-.25 2.75-1 5-1 5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 6s0 4-3.5 8-6.837 4.85-8 3.5c-1.162-1.35 0-5 3.5-8.5s8-3 8-3"
    />
    <path
      fill="#333"
      d="M13.622 14.954a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M13.122 18.454a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
  </svg>
);
export default SvgPeas;
