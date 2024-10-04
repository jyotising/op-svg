import * as React from "react";
const SvgFocusOne = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M12 8.5v-2M12 17.5v-2M17.5 12h-2M8.5 12h-2"
    />
    <path fill="#333" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgFocusOne;
