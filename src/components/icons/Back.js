import * as React from "react";
const SvgBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#back_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 20.418q-3.67-4.48-6.518-5.084-2.847-.605-5.423-.182V20.5L2 11.773 10.06 3.5v5.084q4.76.037 8.095 3.416 3.334 3.38 3.845 8.418Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="back_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBack;
