import * as React from "react";
const SvgEntertainment = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#entertainment_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12A5 5 0 1 0 8 2a5 5 0 0 0 0 10Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7.601q.01.01 7.063 8.882a.5.5 0 0 1-.031.673l-2.042 2.042a.5.5 0 0 1-.673.03L8.91 12M13.235 12.235l1.414 1.414"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 22.043q1.437-1.874 3.495-1.874c2.058 0 4.487 2.586 6.558 2.23 2.072-.356 2.665-2.4 1.39-3.53"
      />
    </g>
    <defs>
      <clipPath id="entertainment_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEntertainment;
