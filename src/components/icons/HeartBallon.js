import * as React from "react";
const SvgHeartBallon = (props) => (
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
      d="M8.667 2C6.667 2 6 3.578 6 5.525 6 9.05 9.9 12.255 12 13c2.1-.745 6-3.95 6-7.475C18 3.578 17.156 2 15.333 2 14.217 2 12.597 3.539 12 4.444 11.403 3.54 9.783 2 8.667 2M12 13c-1 .545-2.5 1.75-2.5 3.5s5 1.25 5 3S9 22 9 22"
    />
  </svg>
);
export default SvgHeartBallon;
