import * as React from "react";
const SvgMergeCells = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#merge-cells_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10 7V2.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V17M14 17v4.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V7M14 12h8M2.5 12H10"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m16.374 14.409-.795-.796-1.591-1.59 1.59-1.592.796-.795M7.688 14.409l.795-.796 1.591-1.59-1.591-1.592-.796-.795"
      />
    </g>
    <defs>
      <clipPath id="merge-cells_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMergeCells;
