import * as React from "react";
const SvgTitleLevel = (props) => (
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
      d="M3 4v16M12 4v16M3.5 12h8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M16 12v8M16 15.512C16 14.23 17 13 18.5 13s2.5 1.18 2.5 2.512v4.495"
    />
  </svg>
);
export default SvgTitleLevel;
