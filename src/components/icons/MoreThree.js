import * as React from "react";
const SvgMoreThree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#more-three_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10.75 7a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0m0 5a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M12 18.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="more-three_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoreThree;
