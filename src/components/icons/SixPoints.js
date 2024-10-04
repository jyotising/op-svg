import * as React from "react";
const SvgSixPoints = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#six-points_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12V6m0 6-5.25 3.031zm0 0 5.25 3.031zM7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0M21 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M21 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </g>
    <defs>
      <clipPath id="six-points_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSixPoints;
