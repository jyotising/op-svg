import * as React from "react";
const SvgUDisk = (props) => (
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
      d="M15 6V2H9v4"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M6.5 6.187c0-.103.084-.187.187-.187h10.626c.103 0 .187.084.187.187V16.5a5.5 5.5 0 0 1-11 0z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 10.5h4M10 14.5h4"
    />
  </svg>
);
export default SvgUDisk;
