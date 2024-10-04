import * as React from "react";
const SvgHeartbeat = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M5.5 16 9 11.5l3 4.5 3-4.5 2.5 4H22"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 9.5a5.5 5.5 0 0 0-10-3.163A5.5 5.5 0 0 0 2 9.5C2 15 8.5 20 12 21.163c.597-.198 1.28-.508 2.005-.913"
    />
  </svg>
);
export default SvgHeartbeat;
