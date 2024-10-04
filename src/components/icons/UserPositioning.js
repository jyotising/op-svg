import * as React from "react";
const SvgUserPositioning = (props) => (
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
      d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M18 18a6 6 0 0 0-12 0M18 2h4v4M6 2H2v4M18 22h4v-4M6 22H2v-4"
    />
  </svg>
);
export default SvgUserPositioning;
