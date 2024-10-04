import * as React from "react";
const SvgHairDryer = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hair-dryer_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9.597 10.772 1.159 9.276a1.737 1.737 0 0 1-3.446.431l-1.187-9.494"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 2a4.5 4.5 0 0 0 0 9c.789 0 1.87-.088 3.097-.228l6.201-1.011L22 8.75v-4.5l-7.75-1.125zM18.5 4.1v4.8M22 8.75l-6.202 1.01M22 4.25l-7.75-1.125"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      />
    </g>
    <defs>
      <clipPath id="hair-dryer_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHairDryer;
