import * as React from "react";
const SvgLevelAdjustment = (props) => (
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
      d="m3.949 15-.91 3.399 13.522 3.623L18.443 15M5.557 9l1.881-7.022L20.961 5.6 20.051 9"
    />
    <path
      stroke="#333"
      strokeDasharray="1 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 12h20"
    />
  </svg>
);
export default SvgLevelAdjustment;
