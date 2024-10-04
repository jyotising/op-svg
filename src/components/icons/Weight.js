import * as React from "react";
const SvgWeight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#weight_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6 9.527q2.493-3 6-3t6 3"
      />
      <path fill="#333" d="M12 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m9.5 10.5 2.504 3.5"
      />
    </g>
    <defs>
      <clipPath id="weight_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWeight;
