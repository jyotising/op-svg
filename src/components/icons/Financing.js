import * as React from "react";
const SvgFinancing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#financing_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m14.828 11.293-2.12-2.122a1 1 0 0 0-1.415 0l-2.121 2.122a1 1 0 0 0 0 1.414l2.12 2.121a1 1 0 0 0 1.415 0l2.121-2.121a1 1 0 0 0 0-1.414Z"
      />
    </g>
    <defs>
      <clipPath id="financing_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFinancing;
