import * as React from "react";
const SvgLink = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#link_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12.354 4.783-7.425 7.424a4.5 4.5 0 0 0 6.364 6.365l8.839-8.84a3 3 0 0 0-4.243-4.242L7.05 14.329a1.5 1.5 0 0 0 2.122 2.121l7.424-7.424"
      />
    </g>
    <defs>
      <clipPath id="link_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLink;
