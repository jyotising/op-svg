import * as React from "react";
const SvgHandDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hand-down_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.527 5h11V2h-11z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.527 5q4.89 5.342 5.61 6.192c.722.85.419 1.81-1.387 1.81s-2.848-2.643-4.223-2.643q-.014-.002-.002 10.139A1.5 1.5 0 0 1 13.026 22h-.002c-.83 0-1.502-.672-1.502-1.502v-4.005q-5.979-.906-6.501-1c-.523-.094-1.495-.593-1.495-2.027V5z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="hand-down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHandDown;
