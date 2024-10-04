import * as React from "react";
const SvgPerspective = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#perspective_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 3.3v17.4M22 14v4l-6.5 1.3zm0 0L2 16zm0 0v-4zM2 16v6l6.5-1.3zm0 0V8zm20-6V6l-6.5-1.3zm0 0L2 8zM2 8V2l6.5 1.3zm13.5-3.3v14.6zm0 0-7-1.4zm0 14.6-7 1.4z"
      />
    </g>
    <defs>
      <clipPath id="perspective_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPerspective;
