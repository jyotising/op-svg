import * as React from "react";
const SvgGrinningFaceWithSquintingEyes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#grinning-face-with-squinting-eyes_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 17.5c2.5 0 3.5-2 3.5-2h-7s1 2 3.5 2M10.5 10.5s-.5-2-2-2-2 2-2 2M17.5 10.5s-.5-2-2-2-2 2-2 2"
      />
    </g>
    <defs>
      <clipPath id="grinning-face-with-squinting-eyes_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGrinningFaceWithSquintingEyes;
