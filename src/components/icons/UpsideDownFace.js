import * as React from "react";
const SvgUpsideDownFace = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#upside-down-face_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M0 24h24V0H0z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 15v-.5M15.5 15v-.5M8.5 8.5s1-2 3.5-2 3.5 2 3.5 2"
      />
    </g>
    <defs>
      <clipPath id="upside-down-face_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUpsideDownFace;
