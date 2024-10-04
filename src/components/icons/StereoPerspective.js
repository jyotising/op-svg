import * as React from "react";
const SvgStereoPerspective = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#stereo-perspective_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 22V7l5-5h15v15l-5 5zM17 7v15M7 2v15M2 7h15M22 2l-5 5M2 22l5-5M7 17h15"
      />
    </g>
    <defs>
      <clipPath id="stereo-perspective_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStereoPerspective;
