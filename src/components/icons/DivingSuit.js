import * as React from "react";
const SvgDivingSuit = (props) => (
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
      d="M8.5 12H7.045C4.26 12 2 9.76 2 7s2.26-5 5.045-5L10 4.5 12.955 2C15.74 2 18 4.24 18 7s-2.26 5-5.045 5H11.5M13 18H7v4h6z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M13 20h5c2.21 0 4-1.79 4-4V7h-4M10.61 15H9.39c-.73 0-1.285-.655-1.165-1.37l.61-3.645a1.18 1.18 0 0 1 2.33 0l.61 3.645c.115.715-.44 1.37-1.165 1.37"
    />
  </svg>
);
export default SvgDivingSuit;
