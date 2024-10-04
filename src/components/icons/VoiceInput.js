import * as React from "react";
const SvgVoiceInput = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#voice-input_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 15a6 6 0 0 0 6 6c3.314 0 5-2 5.5-3.5l.77-2.5L17.5 4.5 22 21M20.364 15h-6.095"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 7.5a3 3 0 0 0-6 0V15a3 3 0 1 0 6 0z"
      />
    </g>
    <defs>
      <clipPath id="voice-input_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVoiceInput;
