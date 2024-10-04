import * as React from "react";
const SvgRemoteControlOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#remote-control-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M5.5 2.723c0-.4.324-.723.723-.723h11.554c.4 0 .723.324.723.723V15.5a6.5 6.5 0 0 1-13 0z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 8H10M14 8h1.5"
      />
      <path fill="#333" d="M8.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 19a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      />
    </g>
    <defs>
      <clipPath id="remote-control-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRemoteControlOne;
