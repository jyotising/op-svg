import * as React from "react";
const SvgDeposit = (props) => (
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
      d="M6 8v14h12V8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.5 10 2.5 3 2.5-3M9 16h6M9 13h6M12 13v6M7 5h10M18 9h3V2H3v7h3"
    />
  </svg>
);
export default SvgDeposit;
