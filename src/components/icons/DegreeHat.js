import * as React from "react";
const SvgDegreeHat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#degree-hat_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 8.7 10.511-4.2 10.511 4.2-10.51 4.2z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22.022 8.755v4.611M5.778 10.913v6.22S8.183 19.5 11.51 19.5s5.733-2.367 5.733-2.367v-6.22"
      />
    </g>
    <defs>
      <clipPath id="degree-hat_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDegreeHat;
