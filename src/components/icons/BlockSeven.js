import * as React from "react";
const SvgBlockSeven = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#block-seven_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 9h6v6H9zM15 9h6v6h-6zM3 9h6v6H3zM9 15h6v6H9zM9 3h6v6H9z"
      />
    </g>
    <defs>
      <clipPath id="block-seven_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBlockSeven;