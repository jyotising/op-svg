import * as React from "react";
const SvgCubeFour = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cube-four_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.67 4.5 3.34 7v10l4.33 2.5L12 22l4.33-2.5 4.33-2.5V7l-4.33-2.5L12 2zM12 12l-5.196 3M12 12V5.5zm0 0 5.196 3z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.37 10.375V8.75l1.408-.812m8.444 0 1.407.812v1.625zm-2.815 9.75L12 18.5l-1.407-.812z"
      />
    </g>
    <defs>
      <clipPath id="cube-four_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCubeFour;
