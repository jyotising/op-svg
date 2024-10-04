import * as React from "react";
const SvgEndpointSquare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#endpoint-square_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 20H3V4h18"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M21 12h-7.5"
      />
    </g>
    <defs>
      <clipPath id="endpoint-square_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEndpointSquare;
