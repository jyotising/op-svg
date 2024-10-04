import * as React from "react";
const SvgLandscape = (props) => (
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
      d="M7 14c1.5 0 6.25.75 6.25 2.5S10.697 17.87 9.5 18C8.464 18 6 18 6 19.5c0 2 10.272 2.5 12.25 2.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 7.5c0-2.133-2.135-5.5-5.097-5.5s-5.236 4-6.13 7.733C3.379 13.467 3.506 18 3.506 18M13 12c0-1.25.7-3.5 3-3.5 2 0 3.1 2.021 3.5 3.75s.5 4.25.5 4.25"
    />
  </svg>
);
export default SvgLandscape;
