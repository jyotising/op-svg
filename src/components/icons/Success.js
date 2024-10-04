import * as React from "react";
const SvgSuccess = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#success_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 2 2.627 1.916 3.25-.006 1 3.094L21.51 8.91 20.5 12l1.01 3.09-2.634 1.906-1 3.094-3.25-.006L12 22l-2.627-1.916-3.25.006-1-3.094L2.49 15.09 3.5 12 2.49 8.91l2.633-1.906 1-3.094 3.25.006z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8.5 12 2.5 2.5 5-5"
      />
    </g>
    <defs>
      <clipPath id="success_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSuccess;
