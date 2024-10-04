import * as React from "react";
const SvgMosaic = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#mosaic_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        d="M22 18h-4v4h4zM14 18h-4v4h4zM6 18H2v4h4zM22 10h-4v4h4zM14 10h-4v4h4zM6 10H2v4h4zM22 2h-4v4h4zM14 2h-4v4h4zM6 2H2v4h4zM10 6H6v4h4zM10 14H6v4h4zM18 6h-4v4h4zM18 14h-4v4h4z"
      />
    </g>
    <defs>
      <clipPath id="mosaic_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMosaic;
