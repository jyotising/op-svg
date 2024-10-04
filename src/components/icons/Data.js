import * as React from "react";
const SvgData = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#data_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 5.5V19c0 1.657-4.477 3-10 3S2 20.657 2 19V5.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 14.5c0 1.657-4.477 3-10 3s-10-1.343-10-3M22 10c0 1.657-4.477 3-10 3S2 11.657 2 10M12 8c5.523 0 10-1.343 10-3s-4.477-3-10-3S2 3.343 2 5s4.477 3 10 3"
      />
    </g>
    <defs>
      <clipPath id="data_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgData;
