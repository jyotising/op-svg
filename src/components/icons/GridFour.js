import * as React from "react";
const SvgGridFour = (props) => (
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
      d="M20.5 2.5h-17a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-17a1 1 0 0 0-1-1M12 2.5v19M2.5 12h19"
    />
  </svg>
);
export default SvgGridFour;
