import * as React from "react";
const SvgSignalStrength = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#signal-strength_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.243 16.243a6 6 0 1 0-8.486 0m11.314 2.828c3.905-3.905 3.905-10.237 0-14.142s-10.237-3.905-14.142 0-3.905 10.237 0 14.142z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22h-2m2-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v8zm0 8h2z"
      />
    </g>
    <defs>
      <clipPath id="signal-strength_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSignalStrength;
