import * as React from "react";
const SvgTextRotationNone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#text-rotation-none_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.667 10.5H8.333m-1.833 4 1.833-4zm11 0-1.833-4zm-1.833-4-.917-2-2.75-6-2.75 6-.917 2zM3 18.5h18l-3 3"
      />
    </g>
    <defs>
      <clipPath id="text-rotation-none_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextRotationNone;
