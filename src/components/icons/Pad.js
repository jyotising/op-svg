import * as React from "react";
const SvgPad = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#pad_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 2H3v13.5h18z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 15.5V22H3v-6.5"
      />
      <path
        fill="#333"
        d="M8 4.5H6.5A.5.5 0 0 0 6 5v1.5a.5.5 0 0 0 .5.5H8a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5M8 8H6.5a.5.5 0 0 0-.5.5V10a.5.5 0 0 0 .5.5H8a.5.5 0 0 0 .5-.5V8.5A.5.5 0 0 0 8 8M12.75 4.5h-1.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5M12.75 8h-1.5a.5.5 0 0 0-.5.5V10a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5V8.5a.5.5 0 0 0-.5-.5M13.25 18.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M17.5 4.5H16a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"
      />
    </g>
    <defs>
      <clipPath id="pad_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPad;
