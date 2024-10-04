import * as React from "react";
const SvgRuler = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ruler_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m22 7-5-5-1.875 1.875L13.25 5.75 9.5 9.5l-3.75 3.75-1.875 1.875L2 17l5 5zM15.125 3.875l-11.25 11.25M4.5 14.5l2 2M7 12l3 3M9.5 9.5l2 2M12 7l3 3M14.5 4.5l2 2"
      />
    </g>
    <defs>
      <clipPath id="ruler_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRuler;
