import * as React from "react";
const SvgVideocameraOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#videocamera-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M16.5 10.5H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.5 13.5H10v4h4.5zM13.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M17.5 17.5l4.5 2v-8l-4.5 2"
      />
    </g>
    <defs>
      <clipPath id="videocamera-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVideocameraOne;
