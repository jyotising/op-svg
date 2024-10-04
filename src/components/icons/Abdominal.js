import * as React from "react";
const SvgAbdominal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#abdominal_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M3.95 2.5q2.128 2.265 2.128 5.882C6.078 12 3 14.77 2.485 16.75Q1.969 18.73 2 21.5M19.628 2.5Q17.5 4.765 17.5 8.382c0 3.618 3.078 6.387 3.593 8.368q.516 1.98.485 4.75"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M3.122 15.418q4.894 3.098 8.889 3.098t8.449-3.098"
      />
      <path
        fill="#333"
        d="M12 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      />
    </g>
    <defs>
      <clipPath id="abdominal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAbdominal;
