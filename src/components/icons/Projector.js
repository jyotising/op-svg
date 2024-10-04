import * as React from "react";
const SvgProjector = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#projector_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 8h3v8H2V8h10M3 19v-3h3v3zM21 19v-3h-3v3zM5 12h4"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.5 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      />
      <path fill="#333" d="M15.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </g>
    <defs>
      <clipPath id="projector_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProjector;
