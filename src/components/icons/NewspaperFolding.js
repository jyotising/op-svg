import * as React from "react";
const SvgNewspaperFolding = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#newspaper-folding_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m10.5 22-.5-4M22 22V6h-9.5l.5 4 .5 4 .5 4-3.5 4zM13.5 14h4M13 10h4.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 2h10l.5 4 .5 4 .5 4 .5 4H2zM5 6h3.5M5 10h4M5 14h4.5"
      />
    </g>
    <defs>
      <clipPath id="newspaper-folding_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNewspaperFolding;
