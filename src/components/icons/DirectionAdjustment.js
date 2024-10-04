import * as React from "react";
const SvgDirectionAdjustment = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#direction-adjustment_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2v6m-2-4 2-2zm2-2 2 2zM12 22v-6m-2 4 2 2zm2 2 2-2zM22 12h-6m4-2 2 2zm2 2-2 2zM2 12h6m-4-2-2 2zm-2 2 2 2zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </g>
    <defs>
      <clipPath id="direction-adjustment_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDirectionAdjustment;
