import * as React from "react";
const SvgCastle = (props) => (
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
      d="M2 5.5 5.5 2 9 5.5zM15 5.5 18.5 2 22 5.5zM22 22v-9h-2V8.5h-3V13h-3v-2.5l-2-2-2 2V13H7V8.5H4V13H2v9h7v-2a3 3 0 0 1 6 0v2zM7.5 5.5h-4v3h4zM20.5 5.5h-4v3h4z"
    />
  </svg>
);
export default SvgCastle;
