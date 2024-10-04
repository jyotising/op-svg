import * as React from "react";
const SvgPaperMoneyTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#paper-money-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 6.5h20v12H2z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 10.5a4 4 0 0 0 4-4H2zM2 14.5a4 4 0 0 1 4 4H2zM22 14.5v4h-4a4 4 0 0 1 4-4M22 10.5a4 4 0 0 1-4-4h4z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15.5c1.38 0 2.5-1.343 2.5-3s-1.12-3-2.5-3-2.5 1.343-2.5 3 1.12 3 2.5 3Z"
      />
    </g>
    <defs>
      <clipPath id="paper-money-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaperMoneyTwo;
