import * as React from "react";
const SvgLocalTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#local-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22s7.5-6 7.5-12.5a7.5 7.5 0 0 0-15 0C4.5 16 12 22 12 22Z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </g>
    <defs>
      <clipPath id="local-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocalTwo;
