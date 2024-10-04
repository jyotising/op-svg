import * as React from "react";
const SvgCloseWifi = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#close-wifi_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 9.483A14.53 14.53 0 0 0 9.75 5.674M19 12.9a9.85 9.85 0 0 0-4.75-2.642M5 12.9a10 10 0 0 1 2.18-1.65M8 16.157a5.63 5.63 0 0 1 2.5-1.456"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12 20a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 20 4 4M2 9.482a15 15 0 0 1 1.75-1.42"
      />
    </g>
    <defs>
      <clipPath id="close-wifi_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloseWifi;
