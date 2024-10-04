import * as React from "react";
const SvgVolumeSmall = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#volume-small_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v18c-3.5 0-6.1-4.58-6.1-4.58H3a1 1 0 0 1-1-1V8.505a1 1 0 0 1 1-1h2.9S8.5 3 12 3Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7.5q.469.419.842.93A6.04 6.04 0 0 1 18 12a6.04 6.04 0 0 1-1.14 3.545q-.379.526-.86.955"
      />
    </g>
    <defs>
      <clipPath id="volume-small_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVolumeSmall;
