import * as React from "react";
const SvgCycleMovement = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cycle-movement_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m10 7.5 2 2 2-2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9.5V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5.5M14 16.5l-2-2-2 2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14.5V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.5M16.5 10l-2 2 2 2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.5 12H20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5.5M7.5 14l2-2-2-2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 12H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.5"
      />
    </g>
    <defs>
      <clipPath id="cycle-movement_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCycleMovement;
