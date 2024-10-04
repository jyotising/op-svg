import * as React from "react";
const SvgChoppingBoard = (props) => (
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
      d="M7 4h14.006c.552 0 .994.448.994 1v14c0 .552-.442 1-.994 1H7c-2 0-5-1-5-8s3.5-8 5-8M6 10v4"
    />
  </svg>
);
export default SvgChoppingBoard;
