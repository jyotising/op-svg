import * as React from "react";
const SvgLightMember = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#light-member_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M17.528 7.5 9.231 3.833a1 1 0 0 0-1.223.34L5.679 7.5"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M21.5 7.5h-19A.5.5 0 0 0 2 8v12a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9.5 11.5 2.551 5 2.449-5"
      />
    </g>
    <defs>
      <clipPath id="light-member_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLightMember;
