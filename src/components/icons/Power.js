import * as React from "react";
const SvgPower = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#power_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.25 4a9.5 9.5 0 0 0-2.375 1.92A9.27 9.27 0 0 0 2.5 12.123c0 5.179 4.253 9.377 9.5 9.377s9.5-4.198 9.5-9.377c0-2.378-.897-4.55-2.375-6.203A9.5 9.5 0 0 0 16.75 4M12 2v10"
      />
    </g>
    <defs>
      <clipPath id="power_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPower;
