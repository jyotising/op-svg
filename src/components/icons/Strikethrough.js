import * as React from "react";
const SvgStrikethrough = (props) => (
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
      d="M2.5 12h19M12 12c8 3 5 10 0 10s-6-4-6-4M18 6s-1.5-4-6-4-6.282 3.8-4.195 7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18s2 4 6 4 6.282-3.8 4.195-7"
    />
  </svg>
);
export default SvgStrikethrough;
