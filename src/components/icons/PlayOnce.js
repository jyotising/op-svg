import * as React from "react";
const SvgPlayOnce = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#play-once_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21.912 12.615a6.96 6.96 0 0 1-1.419 3.224A6.99 6.99 0 0 1 15 18.5H8c-3.302 0-6-2.66-6-6a6 6 0 0 1 6-6h14"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19 3.5 3 3-3 3M12 9.5v6M12 9.5 10.5 11l-.75.75"
      />
    </g>
    <defs>
      <clipPath id="play-once_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlayOnce;
