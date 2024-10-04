import * as React from "react";
const SvgRocketOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#rocket-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m10.453 3.031.715-.476a1.5 1.5 0 0 1 1.664 0l.715.476A10 10 0 0 1 18 11.351V16.5H6v-5.148a10 10 0 0 1 4.453-8.32"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 11-3 3.109V16.5h18v-2.391L18 11M12 19v3M8 20v1M16 20v1"
      />
    </g>
    <defs>
      <clipPath id="rocket-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRocketOne;
