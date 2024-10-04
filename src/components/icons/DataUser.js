import * as React from "react";
const SvgDataUser = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#data-user_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 4v6c0 1.105-2.015 2-4.5 2S2 11.105 2 10V4"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7c0 1.105-2.015 2-4.5 2S2 8.105 2 7M11 4c0 1.105-2.015 2-4.5 2S2 5.105 2 4s2.015-2 4.5-2 4.5.895 4.5 2M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M17.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M22 22h-9a4.5 4.5 0 1 1 9 0"
      />
    </g>
    <defs>
      <clipPath id="data-user_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDataUser;
