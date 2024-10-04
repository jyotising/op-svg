import * as React from "react";
const SvgDashboardCar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#dashboard-car_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.286 18.714A10.95 10.95 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.528-.853 4.856-2.286 6.714"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.152 15.848a7 7 0 1 1 11.696 0"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 15 8 8H4z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="dashboard-car_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDashboardCar;
