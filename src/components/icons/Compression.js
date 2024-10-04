import * as React from "react";
const SvgCompression = (props) => (
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
      d="M4.46 4.357C4.247 3.695 4.738 3 5.433 3h13.134c.695 0 1.185.695.973 1.357C18.95 6.2 18 9.545 18 12s.95 5.8 1.54 7.643c.212.662-.278 1.357-.973 1.357H5.433c-.695 0-1.186-.695-.973-1.357C5.05 17.8 6 14.455 6 12s-.95-5.8-1.54-7.643M2 7.5c.75 1 1 3 1 4.5s-.25 3.5-1 4.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M9 7.75h6M9 12h6M9 16h2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 7.5c-.75 1-1 3-1 4.5s.25 3 1 4.5"
    />
  </svg>
);
export default SvgCompression;
