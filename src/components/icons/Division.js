import * as React from "react";
const SvgDivision = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#division_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M12 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M22 12H2"
      />
    </g>
    <defs>
      <clipPath id="division_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDivision;
