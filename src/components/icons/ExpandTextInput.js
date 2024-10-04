import * as React from "react";
const SvgExpandTextInput = (props) => (
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
      d="M11 21H3v-8M13 3h8v8"
    />
  </svg>
);
export default SvgExpandTextInput;
