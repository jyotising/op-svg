import * as React from "react";
const SvgTextItalic = (props) => (
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
      d="M10 3h8M6 21h8M14.5 2.977 9.5 21"
    />
  </svg>
);
export default SvgTextItalic;
