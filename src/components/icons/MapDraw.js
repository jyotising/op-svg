import * as React from "react";
const SvgMapDraw = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#map-draw_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 6 2 3v15l6.5 3 7-3 6.5 3V6l-6.5-3zM15.5 3v15M8.5 6v15"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.25 4.5 8.5 6l7-3 3.25 1.5M5.25 19.5 8.5 21l7-3 3.25 1.5"
      />
    </g>
    <defs>
      <clipPath id="map-draw_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMapDraw;
