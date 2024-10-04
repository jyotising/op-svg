import * as React from "react";
const SvgBug = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bug_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 21c6 0 7-5.234 7-7V7H5v7c0 1.725 1 7 7 7Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m2 4 3 3M22 4l-3 3M2 13.5h3M22 13.5h-3M3.5 22l3-3M20.5 22l-3-3M12 21V7M7.46 19.52C8.501 20.393 9.962 21 12 21c2.056 0 3.524-.614 4.567-1.493"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 6.167C16 3.865 14.21 2 12 2S8 3.865 8 6.167V7h8z"
      />
    </g>
    <defs>
      <clipPath id="bug_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBug;
