import * as React from "react";
const SvgTextStyleOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#text-style-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.53 15H4.47M2 21l2.47-6zm14 0-2.47-6zm-2.47-6-1.03-2.5L9 4l-3.5 8.5L4.47 15zM14 5h8M16 10h6M18 15h4M20 20h2"
      />
    </g>
    <defs>
      <clipPath id="text-style-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextStyleOne;
