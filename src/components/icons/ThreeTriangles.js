import * as React from "react";
const SvgThreeTriangles = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#three-triangles_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.995 14.75 12 9.562M9.005 14.75l-3.5 6h12.99l-3.5-6zm0 0h12.99L15.5 3.5 12 9.562zm0 0L12 9.562zm0 0h5.99zm5.99 0H2.005L8.5 3.5 12 9.562z"
      />
    </g>
    <defs>
      <clipPath id="three-triangles_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThreeTriangles;
