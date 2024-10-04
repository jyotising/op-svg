import * as React from "react";
const SvgCarBattery = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#car-battery_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21.5 6h-20v15h20zM5.5 3h-4v3h4zM21.5 3h-4v3h4zM4.5 10.5h3M15.5 10.5h3M6 9v3"
      />
    </g>
    <defs>
      <clipPath id="car-battery_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarBattery;