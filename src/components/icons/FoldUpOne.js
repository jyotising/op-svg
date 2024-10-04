import * as React from "react";
const SvgFoldUpOne = (props) => (
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
      d="M3 5h18M3 10h18M3 20l9-7 9 7"
    />
  </svg>
);
export default SvgFoldUpOne;
