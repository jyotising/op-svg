import * as React from "react";
const SvgPullRequests = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#pull-requests_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.5 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.5 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.5 6v12M12 5h4.5a2 2 0 0 1 2 2v11"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 8-3-3 3-3"
      />
    </g>
    <defs>
      <clipPath id="pull-requests_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPullRequests;
