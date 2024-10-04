import * as React from "react";
const SvgWifi = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#wifi_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 9.483q.442-.42.909-.793C8.519 4.187 16.69 4.45 22 9.483"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 12.9c-3.866-3.867-10.134-3.867-14 0M16 16.157a5.657 5.657 0 0 0-8 0"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12 20a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="wifi_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWifi;
