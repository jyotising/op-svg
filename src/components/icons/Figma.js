import * as React from "react";
const SvgFigma = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 9a1.5 1.5 0 0 1 1.5-1.5H12v3h-1.5A1.5 1.5 0 0 1 9 9ZM9 12a1.5 1.5 0 0 1 1.5-1.5H12v3h-1.5A1.5 1.5 0 0 1 9 12ZM9 15a1.5 1.5 0 0 1 1.5-1.5H12V15a1.5 1.5 0 1 1-3 0ZM12 7.5h1.5a1.5 1.5 0 1 1 0 3H12z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
    />
  </svg>
);
export default SvgFigma;
