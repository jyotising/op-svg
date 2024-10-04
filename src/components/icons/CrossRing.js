import * as React from "react";
const SvgCrossRing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cross-ring_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM20 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 12h12M12 6v12M18.653 7.555a8 8 0 0 0-2.208-2.208m-8.89 0a8 8 0 0 0-2.208 2.208zM5.347 16.445a8 8 0 0 0 2.208 2.208zm11.098 2.208a8 8 0 0 0 2.208-2.208z"
      />
    </g>
    <defs>
      <clipPath id="cross-ring_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrossRing;
