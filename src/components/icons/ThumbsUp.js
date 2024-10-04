import * as React from "react";
const SvgThumbsUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#thumbs-up_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.8 9.3V5.7A2.7 2.7 0 0 0 11.1 3l-3.6 8.1V21h10.458a1.8 1.8 0 0 0 1.8-1.53L21 11.37a1.8 1.8 0 0 0-1.8-2.07zM7.5 11H5.097c-1.054-.018-1.956.855-2.097 1.9v6.3A2.08 2.08 0 0 0 5.097 21H7.5z"
      />
    </g>
    <defs>
      <clipPath id="thumbs-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThumbsUp;
