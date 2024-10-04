import * as React from "react";
const SvgWindmillTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#windmill-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12a5 5 0 0 0 0-10zM12 12a5 5 0 0 0 10 0zM12 12a5 5 0 0 0-10 0zM12 12a5 5 0 0 0 0 10z"
      />
    </g>
    <defs>
      <clipPath id="windmill-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWindmillTwo;
