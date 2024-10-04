import * as React from "react";
const SvgSoundOne = (props) => (
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
      strokeWidth={2}
      d="M4.5 3.5A1.5 1.5 0 0 1 6 2h12a1.5 1.5 0 0 1 1.5 1.5v17A1.5 1.5 0 0 1 18 22H6a1.5 1.5 0 0 1-1.5-1.5z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path fill="#333" d="M17 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 18h1M9.5 18h1"
    />
  </svg>
);
export default SvgSoundOne;
