import * as React from "react";
const SvgBye = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bye_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m17.5 13.307-9.927-9.65a1.464 1.464 0 0 0-2.13.094 1.667 1.667 0 0 0 .09 2.272l5.013 4.965"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.545 10.988 5.09 5.578a1.743 1.743 0 0 0-2.368-.081 1.516 1.516 0 0 0-.09 2.208l5.497 5.602"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8.128 13.307 5 10.25a1.65 1.65 0 0 0-2.317-.04 1.616 1.616 0 0 0-.054 2.285l.008.009c4.615 4.768 7.01 7.02 7.909 7.773C12 21.495 14.868 22 16.366 21c1.497-1 2.85-2.423 3.493-3.836q.575-1.26 2.229-7.78a1.653 1.653 0 0 0-1.23-2.017 1.75 1.75 0 0 0-2.083 1.247L17.5 13.307M15.858 6.333a9.8 9.8 0 0 0-4.376-3.593M2.597 16.888a9.8 9.8 0 0 0 4.182 3.817"
      />
    </g>
    <defs>
      <clipPath id="bye_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBye;
