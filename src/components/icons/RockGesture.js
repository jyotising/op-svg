import * as React from "react";
const SvgRockGesture = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#rock-gesture_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12.5V3.75c0-.64.25-1.75 1.5-1.75S15 3.11 15 3.75V15l3.5-3.5c.648-.649 1.539-.961 2.25-.25.71.711.797 1.453 0 2.25l-3.25 3.25S14.547 22 13 22H6.5S5 22 4 21s-1-2.25-1-2.25V6.39C3 6.032 3.25 5 4.5 5S6 6 6 6.39v6.11"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 11a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0zM12 11a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0z"
      />
    </g>
    <defs>
      <clipPath id="rock-gesture_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRockGesture;
