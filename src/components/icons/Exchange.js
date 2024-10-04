import * as React from "react";
const SvgExchange = (props) => (
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
      d="M12 8h2.5V2L22 9.5 14.5 17v-5H9V6.5L2 14l7 8v-6h2.5"
    />
  </svg>
);
export default SvgExchange;
