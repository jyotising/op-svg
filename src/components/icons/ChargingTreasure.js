import * as React from "react";
const SvgChargingTreasure = (props) => (
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
      strokeWidth={2}
      d="M21.043 17.5 19.479 4.323A1.5 1.5 0 0 0 17.989 3H6.471a1.5 1.5 0 0 0-1.483 1.278L3.012 17.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M18 15H6a3 3 0 1 0 0 6h12a3 3 0 1 0 0-6Z"
    />
    <path fill="#333" d="M11.5 18a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 18h3M11 6h2"
    />
  </svg>
);
export default SvgChargingTreasure;
