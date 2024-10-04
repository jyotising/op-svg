import * as React from "react";
const SvgAudioFile = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 22V2h11.5L20 7.25V22z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 7-3 1.484v7.266"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.25 18.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5"
    />
  </svg>
);
export default SvgAudioFile;
