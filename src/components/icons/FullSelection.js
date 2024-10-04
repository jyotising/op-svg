import * as React from "react";
const SvgFullSelection = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#full-selection_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 2.5H4A1.5 1.5 0 0 0 2.5 4v13A1.5 1.5 0 0 0 4 18.5h13a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 17 2.5Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 6.501V21a1 1 0 0 1-1 1H6.502M6.5 10.243l3 2.762 5-5.146"
      />
    </g>
    <defs>
      <clipPath id="full-selection_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFullSelection;
