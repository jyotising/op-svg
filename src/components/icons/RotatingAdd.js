import * as React from "react";
const SvgRotatingAdd = (props) => (
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
      d="M9 12h6M12 15V9M7 7H3.338V3.338M17 17h3.662v3.662"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.662 17A10 10 0 0 1 12 22M7 17v3.662H3.338"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 20.662A10 10 0 0 1 2 12M3.338 7C5.067 4.011 8.298 2 12 2M17 7V3.338h3.662"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 3.338c2.989 1.729 5 4.96 5 8.662"
    />
  </svg>
);
export default SvgRotatingAdd;
