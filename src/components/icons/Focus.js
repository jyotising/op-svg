import * as React from "react";
const SvgFocus = (props) => (
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
      d="M8 3H4a1 1 0 0 0-1 1v4M8 21H4a1 1 0 0 1-1-1v-4M16 21h4a1 1 0 0 0 1-1v-4M16 3h4a1 1 0 0 1 1 1v4"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"
    />
    <path fill="#333" d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
  </svg>
);
export default SvgFocus;
