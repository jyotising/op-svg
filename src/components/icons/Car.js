import * as React from "react";
const SvgCar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#car_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6.75 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M17.25 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.5 18.5A1.5 1.5 0 0 1 2 17v-4.645A3 3 0 0 1 3.66 9.67l.34-.17 1.155-4.955A2 2 0 0 1 7.103 3h9.844A2 2 0 0 1 18.9 4.564l1.103 4.937.34.17A3 3 0 0 1 22 12.354V17a1.5 1.5 0 0 1-1.5 1.5h-.998v.5a2 2 0 0 1-4.002 0v-.5h-7v.5a2 2 0 1 1-4 0v-.5z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 11h10l-.826-3.717a1 1 0 0 0-.976-.783H8.802a1 1 0 0 0-.976.783z"
      />
    </g>
    <defs>
      <clipPath id="car_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCar;
