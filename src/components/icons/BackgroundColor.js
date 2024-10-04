import * as React from "react";
const SvgBackgroundColor = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#background-color_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M18.5 18.5a2 2 0 0 0 2-2q0-1.104-2-3-2 1.896-2 3a2 2 0 0 0 2 2"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m10.427 2.752 1.768 1.768"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11.84 4.166-7.777 7.779L9.72 17.6l7.778-7.778z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m6 10.037 8.48 2.788M2 21.5h20"
      />
    </g>
    <defs>
      <clipPath id="background-color_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBackgroundColor;
