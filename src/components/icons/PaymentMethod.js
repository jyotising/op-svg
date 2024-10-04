import * as React from "react";
const SvgPaymentMethod = (props) => (
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
      d="M19 5 5 19M3 3l3 4 3-4M2.5 7h7M2.5 10h7M6 7v6M16.423 13H21v8H11v-2.925"
    />
  </svg>
);
export default SvgPaymentMethod;
