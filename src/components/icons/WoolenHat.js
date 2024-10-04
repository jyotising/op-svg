import * as React from "react";
const SvgWoolenHat = (props) => (
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
      d="M21 17H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M7.5 13v4M12 13v4M16.5 13v4"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 17c0-4.125.5-11 8-11s8 6.875 8 11"
    />
  </svg>
);
export default SvgWoolenHat;
