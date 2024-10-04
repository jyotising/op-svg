import * as React from "react";
const SvgHotelDoNotClean = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hotel-do-not-clean_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 7.5V7a5 5 0 0 0-10 0zm0 0c0 6-10 6-10 6V22h10zM10 16l3 3M13 16l-3 3"
      />
    </g>
    <defs>
      <clipPath id="hotel-do-not-clean_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHotelDoNotClean;
