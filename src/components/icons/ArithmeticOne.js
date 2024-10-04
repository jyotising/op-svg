import * as React from "react";
const SvgArithmeticOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#arithmetic-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 15.75h7M14 19.75h7M3.671 20.328l5.657-5.656M3.671 14.672l5.657 5.656M14 6.25h7M3 6.25h7M6.5 2.75v7"
      />
    </g>
    <defs>
      <clipPath id="arithmetic-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArithmeticOne;
