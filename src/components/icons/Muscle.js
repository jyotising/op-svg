import * as React from "react";
const SvgMuscle = (props) => (
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
      d="M10.685 18a5.76 5.76 0 0 1 6.18-4.19c2.78.295 4.99 2.64 5.13 5.43a5.8 5.8 0 0 1-.28 2.095c-.13.4-.52.665-.945.665H5.88a4 4 0 0 1-3.923-4.785L5 2h6l2 3.5-4.285 3.065L7.5 7M8.72 8.565 11 17"
    />
  </svg>
);
export default SvgMuscle;
