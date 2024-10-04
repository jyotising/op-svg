import * as React from "react";
const SvgRoundCaliper = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#round-caliper_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M22 12a10 10 0 0 1-4.642 8.443l-2.143-3.377A6 6 0 0 0 18 12zM6.712 20.488A10 10 0 0 1 2 12.083l4-.033a6 6 0 0 0 2.827 5.043zM7.221 3.216a10 10 0 0 1 9.635.042l-1.942 3.497a6 6 0 0 0-5.781-.026z"
      />
    </g>
    <defs>
      <clipPath id="round-caliper_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRoundCaliper;
