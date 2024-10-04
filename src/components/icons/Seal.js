import * as React from "react";
const SvgSeal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#seal_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M2.5 18.5a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1z"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M2.5 15.5a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.382 7.832a.5.5 0 0 1 .47-.332h4.296a.5.5 0 0 1 .47.332L17 14.5H7z"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M13.8 2h-3.6a2.7 2.7 0 1 0 0 5.4h3.6a2.7 2.7 0 1 0 0-5.4Z"
      />
    </g>
    <defs>
      <clipPath id="seal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSeal;
