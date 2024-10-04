import * as React from "react";
const SvgMapRoadTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#map-road-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5 11l14-5"
      />
      <path
        stroke="#333"
        strokeDasharray="1 3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 14.5 14-5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 18 14-5M8 9.5l-1.5-4M18.5 18 17 14"
      />
    </g>
    <defs>
      <clipPath id="map-road-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapRoadTwo;
