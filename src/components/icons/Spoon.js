import * as React from "react";
const SvgSpoon = (props) => (
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
      d="M17 7A5 5 0 1 0 7 7a5 5 0 0 0 10 0M12 12v6M13.5 19.5a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 0 0 3 0z"
    />
  </svg>
);
export default SvgSpoon;
