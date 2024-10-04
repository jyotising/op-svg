import * as React from "react";
const SvgCamera = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#camera_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 6 9 3h6l1.5 3zM20.5 6h-17A1.5 1.5 0 0 0 2 7.5v12A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 20.5 6Z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 17.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      />
    </g>
    <defs>
      <clipPath id="camera_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCamera;
