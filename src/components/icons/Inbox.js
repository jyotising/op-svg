import * as React from "react";
const SvgInbox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#inbox_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 15 4.5 3h15L22 15"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 15h5.455l.909 3h7.272l.91-3H22v6.5H2z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 7h5M8 11h8"
      />
    </g>
    <defs>
      <clipPath id="inbox_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInbox;
