import * as React from "react";
const SvgRocket = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#rocket_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.353 3.947 12 2l2.648 1.947a7 7 0 0 1 2.852 5.64V18.5h-11V9.586a7 7 0 0 1 2.852-5.639Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6.5 8.5-3 3v4l3-1.5zM17.5 8.5l3 3v4l-3-1.5z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19.5V21M12 19.5V22M15 19.5V21"
      />
    </g>
    <defs>
      <clipPath id="rocket_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRocket;
