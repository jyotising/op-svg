import * as React from "react";
const SvgNests = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#nests_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.5 16.157 10.017 2.97q.693-1.47 2.503-1.471c1.81 0 2.989 2.493 2.989 2.493l1.99.297q-3.007.05-3.478 1.21c-.47 1.161 1.228 2.365 1.488 4.002s-.776 4.4-3.265 5.781Q9.755 16.665 6.03 16l-3.05 5.5"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.471 13.49q1.934-3.488 2.544-4.479c.609-.99 3.122-.692 2.22 1.782q-.904 2.474-4.764 2.697ZM16.484 16.492q.856-2.053 2.501-2.488t3 .53q-.843 1.947-2.502 2.496-1.658.55-3-.538Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.493 17.557q.567 2.04 3.007 2.73t4.016-.787q-1.95-2.273-3.515-2.495t-3.508.552Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="nests_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNests;
