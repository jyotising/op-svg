import * as React from "react";
const SvgFourPointConnection = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#four-point-connection_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 14v6h6M14 20h6v-6M20 10V4h-6M10 4H4v6M22 10h-4v4h4zM6 10H2v4h4zM14 18h-4v4h4zM14 2h-4v4h4zM12 9v6M9 12h6M14 4l6 6M10 4l-6 6M10 20l-6-6M20 14l-5.5 6"
      />
    </g>
    <defs>
      <clipPath id="four-point-connection_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFourPointConnection;
