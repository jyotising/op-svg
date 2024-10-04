import * as React from "react";
const SvgWinkingFaceWithOpenEyes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#winking-face-with-open-eyes_svg__a)">
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
        d="m16.5 8-2 2 2 2M15.5 15.5s-1 2-3.5 2-3.5-2-3.5-2M8.5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </g>
    <defs>
      <clipPath id="winking-face-with-open-eyes_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWinkingFaceWithOpenEyes;
