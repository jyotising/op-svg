import * as React from "react";
const SvgThumbsDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#thumbs-down_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.19 14.7v3.6a2.7 2.7 0 0 0 2.7 2.7l3.6-8.1V3H6.032a1.8 1.8 0 0 0-1.8 1.53l-1.242 8.1a1.8 1.8 0 0 0 1.8 2.07z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.49 3h2.403a2.08 2.08 0 0 1 2.097 1.8v6.3c-.142 1.045-1.043 1.919-2.097 1.9H16.49z"
      />
    </g>
    <defs>
      <clipPath id="thumbs-down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThumbsDown;
