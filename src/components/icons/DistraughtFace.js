import * as React from "react";
const SvgDistraughtFace = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#distraught-face_svg__a)">
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
        d="M12 14.5c2.5 0 3.5 2 3.5 2h-7s1-2 3.5-2M16 8.5 14.5 10l1.5 1.5M8 8.5 9.5 10 8 11.5"
      />
    </g>
    <defs>
      <clipPath id="distraught-face_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDistraughtFace;
