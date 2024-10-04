import * as React from "react";
const SvgBabySling = (props) => (
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
      d="M12 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10.5C7 10.5 5.5 3 5.5 3L3 4l1.5 8.25c.583.333 2.75 1.5 4 3.25s1 3.5 3.75 3.5 3-2.25 3.75-3.5 2.833-3 3.5-3.25L21 4l-2.5-1S17 10.5 12 10.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 14.5s3.5 2 3.5 6.5H18c0-3-2.5-4.5-2.5-4.5M7.5 14.5S4 16.5 4 21h2.5c0-3 2.5-4.5 2.5-4.5"
    />
  </svg>
);
export default SvgBabySling;
