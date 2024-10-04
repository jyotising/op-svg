import * as React from "react";
const SvgUmbrella = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#umbrella_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.364 13.5q1.818-1.818 3.636-1.818t3.636 1.818q2.122-1.818 3.182-1.818T22 13.5c0-5.523-4.477-10-10-10S2 7.977 2 13.5q2.121-1.818 3.182-1.818T8.364 13.5Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12v7.277c0 1.507 1.243 2.729 2.75 2.729s2.75-1.222 2.75-2.73M12 1.5v2"
      />
    </g>
    <defs>
      <clipPath id="umbrella_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUmbrella;
