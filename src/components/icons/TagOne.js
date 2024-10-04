import * as React from "react";
const SvgTagOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#tag-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m21.085 14.623-6.453 6.453a1.8 1.8 0 0 1-2.547 0L4 13V4h9l8.085 8.085a1.8 1.8 0 0 1 0 2.538Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M9.25 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="tag-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTagOne;
