import * as React from "react";
const SvgDubai = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M7 2v20" />
    <path stroke="#333" strokeWidth={2} d="M7.25 3S14 6.5 16 11s.5 11 .5 11" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 22h20"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5 7.5h11M7 11h4M7 14.5h6M7 18h6.5"
    />
  </svg>
);
export default SvgDubai;
