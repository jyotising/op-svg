import * as React from "react";
const SvgCake = (props) => (
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
      d="M12 6v2.5M4 13.5V20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6.5M2 10.985A2.485 2.485 0 0 1 4.485 8.5h15.03A2.485 2.485 0 0 1 22 10.985v.14c0 .93-.567 1.768-1.432 2.114a1.52 1.52 0 0 1-1.272-.066l-.171-.09a1.7 1.7 0 0 0-1.583 0 1.7 1.7 0 0 1-1.584 0 1.7 1.7 0 0 0-1.583 0 1.7 1.7 0 0 1-1.583 0 1.7 1.7 0 0 0-1.584 0 1.7 1.7 0 0 1-1.583 0 1.7 1.7 0 0 0-1.583 0 1.7 1.7 0 0 1-1.584 0 1.7 1.7 0 0 0-1.583 0l-.171.09a1.52 1.52 0 0 1-1.272.066A2.28 2.28 0 0 1 2 11.125z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M13.5 4C13.1 2 12 2 12 2s-1.1 0-1.5 2c-.5 2.5 3.5 2.5 3 0Z"
    />
  </svg>
);
export default SvgCake;
