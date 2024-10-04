import * as React from "react";
const SvgTheater = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#theater_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 3h16a1 1 0 0 1 1 1v14l-5-6.997q-2 1.188-4 1.188t-4-1.188L3 18V4a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M3 21h18" />
    </g>
    <defs>
      <clipPath id="theater_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTheater;
