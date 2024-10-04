import * as React from "react";
const SvgCup = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cup_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M4 8.506c0-.28.227-.506.506-.506h11.988c.28 0 .506.227.506.506V15.5a6.5 6.5 0 0 1-13 0z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 11.5H4v4h13zM10.5 2v3M6.5 3v1M14.5 3v1"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M17 17a3.5 3.5 0 1 0 0-7"
      />
    </g>
    <defs>
      <clipPath id="cup_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCup;
