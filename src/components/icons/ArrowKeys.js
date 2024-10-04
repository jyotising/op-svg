import * as React from "react";
const SvgArrowKeys = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#arrow-keys_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12H2v10h10zm0 0v10zm0 0h10v10H12zM7 2h10v10H7zM12 5v4"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m10 7 2-2 2 2M5 17h4M7 19l-2-2 2-2M19 17h-4M17 15l2 2-2 2"
      />
    </g>
    <defs>
      <clipPath id="arrow-keys_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowKeys;
