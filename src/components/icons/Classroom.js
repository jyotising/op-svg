import * as React from "react";
const SvgClassroom = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#classroom_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM2.5 22c0-4.219 3.088-8.156 5.7-9 0 0 2.375 2.531 3.8 4.219L15.8 13c2.137.281 5.7 4.781 5.7 9"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 22h22"
      />
    </g>
    <defs>
      <clipPath id="classroom_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClassroom;
