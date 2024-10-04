import * as React from "react";
const SvgTargetOne = (props) => (
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
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M11.944 19.944c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8Z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M11.944 15.944c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
    />
    <path
      fill="#333"
      d="M11.944 12.944c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M11.944 3.944v-2M18.944 21.944l-2-3.5M6.944 18.444l-2 3.5"
    />
  </svg>
);
export default SvgTargetOne;
