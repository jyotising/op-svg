import * as React from "react";
const SvgInjection = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#injection_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19.084 11.13-9.546 9.547-6.364-6.364 9.546-9.546"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m10.953 2.999 9.9 9.9M7.417 14.313l2.121 2.12M3.175 20.677l3.181-3.182M15.902 7.949l1.768-1.767"
      />
    </g>
    <defs>
      <clipPath id="injection_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInjection;
