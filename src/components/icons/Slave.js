import * as React from "react";
const SvgSlave = (props) => (
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
      d="M5 19V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.5M19 19v-3.75z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.5 6.5H12a3 3 0 0 0 0 6h.5M16.5 6.5h.5a3 3 0 0 1 0 6h-.5M12.5 9.5h4M5 19a3 3 0 0 1 3-3h8a3 3 0 0 1 0 6H8a3 3 0 0 1-3-3"
    />
    <path fill="#333" d="M16 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgSlave;
