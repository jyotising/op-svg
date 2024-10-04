import * as React from "react";
const SvgMouseOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#mouse-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M18 12a6 6 0 0 0-12 0v4a6 6 0 0 0 12 0z"
      />
      <path stroke="#333" strokeWidth={2} d="M6 12a6 6 0 0 1 12 0v.5H6z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12.5V6c0-2 .75-4 3.5-4 3 0 4 2.5 4 4.5"
      />
    </g>
    <defs>
      <clipPath id="mouse-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMouseOne;
