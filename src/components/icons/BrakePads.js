import * as React from "react";
const SvgBrakePads = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brake-pads_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 2a10 10 0 0 1 10 10h-3.997A6.003 6.003 0 0 0 12 5.997z"
      />
    </g>
    <defs>
      <clipPath id="brake-pads_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrakePads;
