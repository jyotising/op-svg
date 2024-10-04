import * as React from "react";
const SvgRulerOne = (props) => (
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
      d="M21.5 20.5h-10M19.36 2.5H10.5l-8 18h8.831zM4.98 14.941h4.014M6.632 11.235h4.014M8.387 7.3h4.014"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="m10.5 2.5-8 18"
    />
  </svg>
);
export default SvgRulerOne;
