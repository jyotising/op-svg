import * as React from "react";
const SvgNasal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#nasal_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8.494 2q.09 4.687-.485 6.505C7.433 10.322 3.04 15.38 3.04 18.05s3.152 4.144 4.854 3.138M16.001 2q-.169 4.687.407 6.505c.575 1.817 5.072 6.22 5.072 9.141s-3.257 4.549-4.959 3.543"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6.503 17.417q1.282-.729 2.23 0C9.68 18.147 9.978 20 12.004 20s3.02-2.078 3.996-2.583q.977-.504 2 0M10.143 11.073c-.397.428-.817.904-1.124 1.734a4.6 4.6 0 0 0-.311 1.405"
      />
    </g>
    <defs>
      <clipPath id="nasal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNasal;
