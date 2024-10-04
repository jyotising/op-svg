import * as React from "react";
const SvgSnowflake = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#snowflake_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2v20M3.362 7l17.32 10M3.36 16.989l17.28-9.977M6 5l1.5 4.5-4.5 1M3 13.5l4.5 1L6 19M18 5l-1.5 4.5 4.5 1M21 13.5l-4.5 1L18 19M9 3.5l3 3 3-3M9 20.5l3-3 3 3"
      />
    </g>
    <defs>
      <clipPath id="snowflake_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSnowflake;
