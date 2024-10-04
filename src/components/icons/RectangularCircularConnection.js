import * as React from "react";
const SvgRectangularCircularConnection = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#rectangular-circular-connection_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.5 15.5h-5v5h5z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.84 6.5H21V18h-8.5"
      />
    </g>
    <defs>
      <clipPath id="rectangular-circular-connection_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRectangularCircularConnection;
