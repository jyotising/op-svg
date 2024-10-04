import * as React from "react";
const SvgSwimmingRing = (props) => (
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
      strokeWidth={2}
      d="M14 16.584A5.02 5.02 0 0 0 16.584 14M7.416 14A5.02 5.02 0 0 0 10 16.584M10 7.416A5.02 5.02 0 0 0 7.416 10M14 7.416A5.02 5.02 0 0 1 16.584 10M15 20.488A9.03 9.03 0 0 0 20.488 15M3.512 15A9.03 9.03 0 0 0 9 20.488M9 3.512A9.03 9.03 0 0 0 3.512 9M15 3.512A9.03 9.03 0 0 1 20.488 9"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M13.5 8.5h-3L9 3.5 10 2h4l1 1.5zM8.5 10.5v3l-5 1.5L2 14v-4l1.5-1zM10.5 15.5h3l1.5 5-1 1.5h-4l-1-1.5zM15.5 13.5v-3l5-1.5c.54.4.96.6 1.5 1v4c-.54.4-.96.6-1.5 1z"
    />
  </svg>
);
export default SvgSwimmingRing;
