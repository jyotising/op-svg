import * as React from "react";
const SvgMultiRing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#multi-ring_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 5a3 3 0 0 0-6 0v7a3 3 0 0 0 6 0z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.071 9.171a3 3 0 1 0-4.243-4.243l-4.95 4.95a3 3 0 1 0 4.243 4.243z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 15a3 3 0 0 0 0-6h-7a3 3 0 0 0 0 6z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 19.071a3 3 0 1 0 4.243-4.243l-4.95-4.95a3 3 0 1 0-4.242 4.243z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19a3 3 0 0 0 6 0v-7a3 3 0 0 0-6 0z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.929 14.828a3 3 0 0 0 4.243 4.243l4.95-4.95A3 3 0 1 0 9.878 9.88z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 9a3 3 0 0 0 0 6h7a3 3 0 0 0 0-6z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.172 4.928a3 3 0 0 0-4.243 4.243l4.95 4.95a3 3 0 1 0 4.242-4.243z"
      />
    </g>
    <defs>
      <clipPath id="multi-ring_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMultiRing;
