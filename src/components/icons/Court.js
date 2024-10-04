import * as React from "react";
const SvgCourt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#court_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v4m0 8h10V6H2v12zm0 0v-4z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 12a2 2 0 0 1-2 2H2v-4h1.5a2 2 0 0 1 2 2M18.5 12a2 2 0 0 0 2 2H22v-4h-1.5a2 2 0 0 0-2 2"
      />
    </g>
    <defs>
      <clipPath id="court_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCourt;
