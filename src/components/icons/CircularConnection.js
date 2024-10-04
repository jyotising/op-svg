import * as React from "react";
const SvgCircularConnection = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circular-connection_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M6.75 19.685A8.46 8.46 0 0 0 12 21.5a8.46 8.46 0 0 0 5.25-1.815M9.5 4.874A8.504 8.504 0 0 0 3.955 15.75M14.5 4.874a8.504 8.504 0 0 1 5.545 10.876"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21.5 18c0 .67-.264 1.28-.694 1.729A2.5 2.5 0 1 1 21.5 18M7.5 18c0 .67-.264 1.28-.694 1.729A2.5 2.5 0 1 1 7.5 18M14.5 4.5c0 .67-.264 1.28-.694 1.729A2.5 2.5 0 1 1 14.5 4.5"
      />
    </g>
    <defs>
      <clipPath id="circular-connection_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircularConnection;
