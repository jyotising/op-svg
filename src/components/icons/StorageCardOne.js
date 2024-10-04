import * as React from "react";
const SvgStorageCardOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#storage-card-one_svg__a)">
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 2h-9v4h9z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.294 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2.294"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13.5 10-4 4h5.002L10.5 18"
      />
      <path
        fill="#fff"
        fillOpacity={0.01}
        d="M0 0v-.5h-.5V0zm24 0h.5v-.5H24zm0 24v.5h.5V24zM0 24h-.5v.5H0zM0 .5h24v-1H0zM23.5 0v24h1V0zm.5 23.5H0v1h24zM.5 24V0h-1v24z"
      />
    </g>
    <defs>
      <clipPath id="storage-card-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStorageCardOne;
