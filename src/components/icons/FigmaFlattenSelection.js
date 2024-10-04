import * as React from "react";
const SvgFigmaFlattenSelection = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#figma-flatten-selection_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m16 9-4 4-4-4M18 21H6M21 17H3M12 3v10"
      />
    </g>
    <defs>
      <clipPath id="figma-flatten-selection_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFigmaFlattenSelection;
