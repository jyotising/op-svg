import * as React from "react";
const SvgSunHat = (props) => (
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
      d="M6 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5H6zM22 17.5c-.554.667-1.187 2.5-3.8 2.5-1.369 0-3.228-.842-5.7-1.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 17.5S5 13 6 10h12c1 3 4 7.5 4 7.5-3-2-12.5 2.5-16 2.5-2.75 0-3.417-1.833-4-2.5"
    />
  </svg>
);
export default SvgSunHat;
