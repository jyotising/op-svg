import * as React from "react";
const SvgSport = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sport_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M18 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 8.385 4.002-1.386L15.5 9.623l-5.498 4.1 5.498 3.619-3.496 4.657M17.66 10.821l1.34.73 3-2.819M8.425 15.773 6.94 17.728l-4.938 2.77"
      />
    </g>
    <defs>
      <clipPath id="sport_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSport;
