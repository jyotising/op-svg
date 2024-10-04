import * as React from "react";
const SvgCd = (props) => (
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
      strokeWidth={2}
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6.5 12A5.5 5.5 0 0 1 12 6.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </svg>
);
export default SvgCd;
