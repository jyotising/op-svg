import * as React from "react";
const SvgPeoples = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#peoples_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M16.304 3.5A3.5 3.5 0 0 1 18 6.5c0 1.273-.68 2.388-1.696 3M2 20.4v.6h15v-.6c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C13.96 14 12.84 14 10.6 14H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 17.04 2 18.16 2 20.4M22 21v-.6c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.749"
      />
    </g>
    <defs>
      <clipPath id="peoples_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPeoples;
