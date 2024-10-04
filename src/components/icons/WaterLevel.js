import * as React from "react";
const SvgWaterLevel = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#water-level_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22a7.5 7.5 0 0 0 7.5-7.5C19.5 7.5 12 2 12 2S4.5 7.5 4.5 14.5A7.5 7.5 0 0 0 12 22"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.5 14.5a7.5 7.5 0 0 0 15 0S15 16 12 14.5s-7.5 0-7.5 0Z"
      />
    </g>
    <defs>
      <clipPath id="water-level_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWaterLevel;
