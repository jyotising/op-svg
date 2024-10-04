import * as React from "react";
const SvgMultiCircular = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#multi-circular_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </g>
    <defs>
      <clipPath id="multi-circular_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMultiCircular;
