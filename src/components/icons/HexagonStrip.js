import * as React from "react";
const SvgHexagonStrip = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hexagon-strip_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 2h5v5.67l4.91-2.835 2.5 4.33L17 12l4.91 2.835-2.5 4.33-4.91-2.835V22h-5v-5.67l-4.91 2.835-2.5-4.33L7 12 2.09 9.165l2.5-4.33L9.5 7.67z"
      />
    </g>
    <defs>
      <clipPath id="hexagon-strip_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHexagonStrip;
