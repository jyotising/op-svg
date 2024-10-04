import * as React from "react";
const SvgCameraTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#camera-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 8A6 6 0 0 0 6 8v4a6 6 0 0 0 12 0zM12 18v4M8 22h8"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      />
      <path fill="#333" d="M12 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </g>
    <defs>
      <clipPath id="camera-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCameraTwo;
