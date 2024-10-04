import * as React from "react";
const SvgSplitCells = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#split-cells_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 7V2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v19a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V17M22 17v4.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V7M14 12l8 .007M2 12.007 10 12"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19.614 14.39.795-.796L22 12.003l-1.59-1.591-.796-.796M4.378 14.393l-.796-.795-1.59-1.591 1.59-1.591.796-.796"
      />
    </g>
    <defs>
      <clipPath id="split-cells_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSplitCells;
