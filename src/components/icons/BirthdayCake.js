import * as React from "react";
const SvgBirthdayCake = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#birthday-cake_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 20v-8H4v8m16 0H4zm0 0H2h18m0 0h2z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m20 17-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1M16 12V7.5M12 12V7.5M8 12V7.5M16 5V4M12 5V4M8 5V4M4 12v8M20 12v8"
      />
    </g>
    <defs>
      <clipPath id="birthday-cake_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBirthdayCake;
