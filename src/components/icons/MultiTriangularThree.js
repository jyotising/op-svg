import * as React from "react";
const SvgMultiTriangularThree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#multi-triangular-three_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 20.5h20L12 3zM2 20.5l10-5.833M12 3v11.667zm10 17.5-10-5.833z"
      />
    </g>
    <defs>
      <clipPath id="multi-triangular-three_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMultiTriangularThree;
