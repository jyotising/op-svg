import * as React from "react";
const SvgSpeakerOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#speaker-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 7.5H2v9h5.5zM7.5 7.5l9-3.5v16l-9-3.5M20 8.5h1M19.5 12.5H22M20 16.5h1"
      />
    </g>
    <defs>
      <clipPath id="speaker-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpeakerOne;
