import * as React from "react";
const SvgNotepad = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#notepad_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M9 4H5.5a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5H16"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M9 6.5V4h1.975A.025.025 0 0 0 11 3.975V3a1.5 1.5 0 1 1 3 0v.975c0 .014.011.025.025.025H16v2.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5Z"
      />
    </g>
    <defs>
      <clipPath id="notepad_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotepad;
