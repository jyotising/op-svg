import * as React from "react";
const SvgManualGear = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#manual-gear_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 6v6H4M12 6v12M4 6v12"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </g>
    <defs>
      <clipPath id="manual-gear_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgManualGear;
