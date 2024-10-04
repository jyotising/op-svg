import * as React from "react";
const SvgRobotOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#robot-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M18.5 9h-13a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Z"
      />
      <path
        fill="#333"
        d="M8.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10 16a1 1 0 1 0 0 2zm4 2a1 1 0 1 0 0-2zm-4 0h4v-2h-4z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5v4M2 13v4M22 13v4"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </g>
    <defs>
      <clipPath id="robot-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRobotOne;
