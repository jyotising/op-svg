import * as React from "react";
const SvgCloseRemind = (props) => (
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
      d="m3.5 3.25 17 19"
    />
    <path fill="#333" d="M12 1a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.535 19a3.5 3.5 0 0 0 6.93 0zM15 19H3s2.785-2.32 2.988-8.75M21 19s-3-2.5-3-9.5a6 6 0 0 0-9.418-4.932"
    />
  </svg>
);
export default SvgCloseRemind;
