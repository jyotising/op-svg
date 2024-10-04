import * as React from "react";
const SvgYoutube = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#youtube_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.532 5.207Q9.689 5 11.999 5t6.47.207a3 3 0 0 1 2.84 2.747q.19 2.275.19 4.008 0 1.755-.195 4.064a3 3 0 0 1-2.794 2.741Q14.955 19 12 19t-6.51-.233a3 3 0 0 1-2.793-2.74 49 49 0 0 1-.197-4.065q0-1.718.193-4.01a3 3 0 0 1 2.84-2.745Z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.5 9.806v4.398a.429.429 0 0 0 .665.357l3.299-2.18a.43.43 0 0 0 .002-.713L11.169 9.45a.429.429 0 0 0-.668.356Z"
      />
    </g>
    <defs>
      <clipPath id="youtube_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgYoutube;
