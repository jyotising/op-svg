import * as React from "react";
const SvgWhistling = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M13.5 5.5H2v4h5.5A6.4 6.4 0 0 0 7 12a6.48 6.48 0 0 0 6.5 6.5c3.6 0 6.5-2.895 6.5-6.5a6.48 6.48 0 0 0-6.5-6.5M13.5 5.5v3M20 12h2"
    />
  </svg>
);
export default SvgWhistling;
