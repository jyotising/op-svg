import * as React from "react";
const SvgSofaTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sofa-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 19V9h-4v6.5H6V9H2v10z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 3H6v12.5h12z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M5 22a2 2 0 0 0 2-2c-.549.002-3.65 0-4 0a2 2 0 0 0 2 2M19 22a2 2 0 0 0 2-2c-.952-.004-3.569 0-4 0a2 2 0 0 0 2 2"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="sofa-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSofaTwo;
