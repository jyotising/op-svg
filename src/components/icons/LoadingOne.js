import * as React from "react";
const SvgLoadingOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#loading-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2v2M17 3.34l-1 1.732M20.66 7l-1.732 1M22 12h-2M20.66 17l-1.732-1M17 20.66l-1-1.731M12 22v-2M7 20.66l1-1.731M3.34 17l1.732-1M2 12h2M3.34 7l1.732 1M7 3.34l1 1.732"
      />
    </g>
    <defs>
      <clipPath id="loading-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoadingOne;
