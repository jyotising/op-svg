import * as React from "react";
const SvgCooperativeHandshake = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cooperative-handshake_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20 2 10l6-6 4 4m0 12 6-6-2 2-2 2z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 11.5 12 8m-3.5 3.5L16 4l6 6-4 4-4-4-3 3zM14 18l-1.5-1.5M16 16l-1.5-1.5"
      />
    </g>
    <defs>
      <clipPath id="cooperative-handshake_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCooperativeHandshake;
