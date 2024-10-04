import * as React from "react";
const SvgGrinningFaceWithTightlyClosedEyes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#grinning-face-with-tightly-closed-eyes_svg__a)">
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
        d="M8.5 15.5s1 2 3.5 2 3.5-2 3.5-2M8 8l1.5 1.5L8 11M16 8l-1.5 1.5L16 11"
      />
    </g>
    <defs>
      <clipPath id="grinning-face-with-tightly-closed-eyes_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGrinningFaceWithTightlyClosedEyes;
