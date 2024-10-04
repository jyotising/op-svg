import * as React from "react";
const SvgRemoteControl = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#remote-control_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M17.5 2h-11a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 5H9v4h6zM11.5 12h1"
      />
    </g>
    <defs>
      <clipPath id="remote-control_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRemoteControl;
