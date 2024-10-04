import * as React from "react";
const SvgMedicalFiles = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#medical-files_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.5 21h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5.75"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.318 13.5c1.205 0 2.182.94 2.182 2.1 0 1.51-1.455 2.8-2.182 3.5q-.727.7-1.818 1.4-1.09-.7-1.818-1.4c-.728-.7-2.182-1.99-2.182-3.5 0-1.16.977-2.1 2.182-2.1.759 0 1.427.373 1.818.939a2.2 2.2 0 0 1 1.818-.939Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M7.5 7h8" />
    </g>
    <defs>
      <clipPath id="medical-files_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMedicalFiles;
