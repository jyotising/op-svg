import * as React from "react";
const SvgCommunication = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#communication_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 19H11v-4h7v-4h4v8h-2.5L18 20.5z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 3h16v12H8.5l-2 2-2-2H2z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M9.5 9h.5M13 9h.5M6 9h.5"
      />
    </g>
    <defs>
      <clipPath id="communication_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCommunication;