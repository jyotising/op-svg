import * as React from "react";
const SvgLoadingThree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#loading-three_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M12 6v1.5M16.243 7.758l-1.061 1.06M18 12h-1.5M16.243 16.242l-1.061-1.06M12 18v-1.5M7.757 16.242l1.061-1.06M6 12h1.5M7.757 7.758l1.061 1.06"
      />
    </g>
    <defs>
      <clipPath id="loading-three_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoadingThree;
