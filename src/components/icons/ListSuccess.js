import * as React from "react";
const SvgListSuccess = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#list-success_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 5h12M10 12h12M10 19h12M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4M2 5l1.5 1.5 3-3"
      />
    </g>
    <defs>
      <clipPath id="list-success_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgListSuccess;
