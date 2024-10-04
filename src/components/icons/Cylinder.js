import * as React from "react";
const SvgCylinder = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cylinder_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 5c0 1.657-4.477 3-10 3S2 6.657 2 5s4.477-3 10-3 10 1.343 10 3M22 19c0 1.657-4.477 3-10 3S2 20.657 2 19s4.477-3 10-3 10 1.343 10 3M22 5v14M2 5v14"
      />
    </g>
    <defs>
      <clipPath id="cylinder_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCylinder;
