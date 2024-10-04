import * as React from "react";
const SvgBike = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bike_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.25 21a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5M18.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.499 3h4.5L18.5 16.5M5.529 16.5 15.84 8.382M15.84 7.5h4.237L21 5M4 7.987h3.5M7.5 8l1.636 5.21"
      />
    </g>
    <defs>
      <clipPath id="bike_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBike;
