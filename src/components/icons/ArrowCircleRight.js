import * as React from "react";
const SvgArrowCircleRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#arrow-circle-right_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.246 12.25h9M11.746 7.75l4.5 4.5-4.5 4.5"
      />
    </g>
    <defs>
      <clipPath id="arrow-circle-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowCircleRight;