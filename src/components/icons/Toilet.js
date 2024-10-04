import * as React from "react";
const SvgToilet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#toilet_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 5h4v6h-4zM8.5 17.5 6 22h12l-2.5-4.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 11V2.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V11"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M3.04 11.182A.15.15 0 0 1 3.186 11h17.627a.15.15 0 0 1 .146.182c-.612 2.754-2.317 5.226-5 6.1-1.242.405-2.632.718-3.959.718-1.328 0-2.718-.313-3.96-.718-2.683-.874-4.388-3.346-5-6.1Z"
      />
    </g>
    <defs>
      <clipPath id="toilet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgToilet;
