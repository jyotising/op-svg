import * as React from "react";
const SvgMask = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#mask_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M7 7h10a5 5 0 0 1 5 5v1.5a6.5 6.5 0 0 1-6.5 6.5h-7A6.5 6.5 0 0 1 2 13.5V12a5 5 0 0 1 5-5Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M9 13.5h6M12 10.5v6"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 12.52V6.008A2.084 2.084 0 0 1 5.524 4.5q1.2 1.145 1.711 2.5M22 12.52V6.384A2.239 2.239 0 0 0 18 5a56 56 0 0 0-1.5 2"
      />
    </g>
    <defs>
      <clipPath id="mask_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMask;
