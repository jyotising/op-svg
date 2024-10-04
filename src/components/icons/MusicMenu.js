import * as React from "react";
const SvgMusicMenu = (props) => (
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
      d="M14.5 3v14.5"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 18.02a2.52 2.52 0 0 1 2.52-2.52h4.48v2.98A2.52 2.52 0 0 1 11.98 21h-1.96a2.52 2.52 0 0 1-2.52-2.52z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14.5 7.033 6.442 1.528V4.507L14.5 3z"
      clipRule="evenodd"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4h7M3 8h7M3 12h5"
    />
  </svg>
);
export default SvgMusicMenu;
