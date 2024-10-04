import * as React from "react";
const SvgOneThirdRotation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#one-third-rotation_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 20.008A10 10 0 0 1 12 22a10 10 0 0 1-8.662-5H7.5M16 2.832c3.532 1.543 6 5.067 6 9.168 0 1.821-.487 3.53-1.338 5l-2.021-3.5M2.05 13Q2 12.507 2 12C2 6.477 6.477 2 12 2L9.979 5.5M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      />
    </g>
    <defs>
      <clipPath id="one-third-rotation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOneThirdRotation;
