import * as React from "react";
const SvgChopsticksFork = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#chopsticks-fork_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 2v20M4 2.5v5C4 10 7 10 7 10s3 0 3-2.5v-5M18.5 2 20 22M15.5 2 14 22"
      />
    </g>
    <defs>
      <clipPath id="chopsticks-fork_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChopsticksFork;
