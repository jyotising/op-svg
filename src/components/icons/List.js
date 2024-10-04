import * as React from "react";
const SvgList = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#list_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.5 5 4 6.5l3-3M2.5 12 4 13.5l3-3M2.5 19 4 20.5l3-3M10.5 12h11M10.5 19h11M10.5 5h11"
      />
    </g>
    <defs>
      <clipPath id="list_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgList;
