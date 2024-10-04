import * as React from "react";
const SvgNintendoSwitch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#nintendo-switch_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h1v18H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15zM21 9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3h-1v18h1c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15zM17.5 6.5v1M6.5 16.5v1"
      />
    </g>
    <defs>
      <clipPath id="nintendo-switch_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNintendoSwitch;
