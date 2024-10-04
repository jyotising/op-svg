import * as React from "react";
const SvgApplication = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#application_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.02 11v10h-16V11"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.921 6.888C2.156 8.868 3.631 11 5.755 11a3.01 3.01 0 0 0 3.009-3 3 3 0 0 0 3 3h.509a3 3 0 0 0 3-3c0 1.657 1.353 3 3.01 3 2.124 0 3.6-2.132 2.835-4.114L19.617 3H4.423z"
      />
    </g>
    <defs>
      <clipPath id="application_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApplication;
