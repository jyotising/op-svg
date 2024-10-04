import * as React from "react";
const SvgSwallow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#swallow_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.5 16.657 12.017 3.47Q12.71 2.001 14.52 2c1.81 0 2.989 2.493 2.989 2.493l1.99.297q-3.007.05-3.478 1.21c-.47 1.161 1.228 2.365 1.488 4.002s-.776 4.4-3.265 5.781q-2.489 1.381-6.215.717L4.98 22"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.471 13.989q1.934-3.488 2.544-4.479c.609-.99 3.122-.692 2.22 1.782q-.904 2.473-4.764 2.697Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="swallow_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwallow;
