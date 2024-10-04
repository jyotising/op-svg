import * as React from "react";
const SvgMayuraGesture = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#mayura-gesture_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12.977 12 .02-8.5A1.496 1.496 0 0 0 11.504 2h-.003c-.829 0-1.493.672-1.493 1.5v8.02m.49 6.48-.951-2.005 2.555-.209a1.89 1.89 0 0 0 0-3.782H7.999c-1.695 0-3.499 1.788-3.499 3.517 0 1.73.394 2.72.823 3.648.43.93 1.575 2.831 4.685 2.831h4.47c2.624 0 4.522-2.427 4.516-5.5q-.007-2.873.003-8.5a1.495 1.495 0 0 0-1.493-1.498h-.002c-.826 0-1.495.67-1.495 1.495V8l.008 4.525q0 2.17-2.011 1.496z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.003 12V5c0-.827.67-1.498 1.498-1.498h.002c.829.001 1.5.673 1.5 1.502V12M13.004 10.01v-.5a1.5 1.5 0 0 1 3 0v.5"
      />
    </g>
    <defs>
      <clipPath id="mayura-gesture_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMayuraGesture;
