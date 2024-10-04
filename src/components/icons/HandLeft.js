import * as React from "react";
const SvgHandLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hand-left_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 20.5v-11h-3v11z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9.5q-5.329-4.927-6.179-5.65c-.85-.723-1.81-.42-1.81 1.39 0 1.808 2.632 2.882 2.632 4.26q.002.012-10.141.002A1.5 1.5 0 0 0 2 11v.001c0 .83.672 1.502 1.502 1.502h3.506q.906 5.976 1 6.5c.093.523.592 1.496 2.026 1.496H19z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="hand-left_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHandLeft;
