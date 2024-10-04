import * as React from "react";
const SvgWindows = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#windows_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3.375 5.53 6.469-.862v6.038H3.375zM12.431 4.422l8.194-1.047v7.331h-8.194zM12.431 13.725l8.194.191v6.709l-8.194-1.342zM3.375 13.293l6.469.156v5.45l-6.469-1.09z"
      />
    </g>
    <defs>
      <clipPath id="windows_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWindows;
