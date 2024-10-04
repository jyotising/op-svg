import * as React from "react";
const SvgMicroscopeOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#microscope-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m14.501 9.187.553-.553.265-.265a2.75 2.75 0 1 0-3.89-3.889l-6.843 6.844a.07.07 0 0 0 0 .101l3.485 3.485a.5.5 0 0 0 .707 0l1.856-1.856.553-.553"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m14.081 3.242.884-.884a1.75 1.75 0 0 1 2.475 2.475l-.884.884zM5.243 12.081 3.12 14.202l2.475 2.475 2.122-2.121z"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M11.43 12.612a2.25 2.25 0 1 0 3.182-3.182 2.25 2.25 0 0 0-3.182 3.182Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3 10 6.364 6.364M5 22h16M15.5 11c2 0 4 2 4 5 0 3.2-2.583 4.917-4 6"
      />
    </g>
    <defs>
      <clipPath id="microscope-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMicroscopeOne;
