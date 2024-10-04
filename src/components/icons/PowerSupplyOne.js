import * as React from "react";
const SvgPowerSupplyOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#power-supply-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 17h-9L4 8.875 5 4.5h14l1 4.375zM9 2v2.5M15 2v2.5M12 17v5h8v-3.684M9 10.5h6"
      />
    </g>
    <defs>
      <clipPath id="power-supply-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPowerSupplyOne;
