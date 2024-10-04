import * as React from "react";
const SvgFunds = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#funds_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 7.5c2.761 0 5-1.12 5-2.5S9.761 2.5 7 2.5 2 3.62 2 5s2.239 2.5 5 2.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 5v3.5C2 9.88 4.239 11 7 11s5-1.12 5-2.5V5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 8.5V12c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5V8.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 12v3.5C2 16.88 4.239 18 7 18s5-1.12 5-2.5V12"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 15.5V19c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5v-3.5M17 14.5c2.761 0 5-1.12 5-2.5s-2.239-2.5-5-2.5-5 1.12-5 2.5 2.239 2.5 5 2.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12v3.5c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5V12"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15.5V19c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5v-3.5"
      />
    </g>
    <defs>
      <clipPath id="funds_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFunds;
