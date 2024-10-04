import * as React from "react";
const SvgApiApp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#api-app_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M9 11.969V5a3 3 0 0 1 6 0v1.003M15 12.002V19a3 3 0 0 1-6 0v-1.015"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M12 15H4.992A2.996 2.996 0 0 1 2 12c0-1.657 1.34-3 2.992-3h1.002M12 9h6.994A3.003 3.003 0 0 1 22 12c0 1.657-1.346 3-3.006 3h-.96"
      />
    </g>
    <defs>
      <clipPath id="api-app_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApiApp;
