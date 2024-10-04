import * as React from "react";
const SvgRing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ring_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5.81a1.9 1.9 0 0 0 1.895-1.905A1.9 1.9 0 0 0 12 2a1.9 1.9 0 0 0-1.895 1.905A1.9 1.9 0 0 0 12 5.81ZM4.895 20.096a1.9 1.9 0 0 0 1.894-1.905 1.9 1.9 0 0 0-1.894-1.905A1.9 1.9 0 0 0 3 18.191a1.9 1.9 0 0 0 1.895 1.905ZM19.105 20.096A1.9 1.9 0 0 0 21 18.19a1.9 1.9 0 0 0-1.895-1.905 1.9 1.9 0 0 0-1.894 1.905 1.9 1.9 0 0 0 1.894 1.905Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.571 5.157a9.05 9.05 0 0 1 4.39 8.65M15.507 21.287A8.9 8.9 0 0 1 12 22a8.9 8.9 0 0 1-3.507-.713M3.04 13.808a9.053 9.053 0 0 1 4.389-8.65"
      />
    </g>
    <defs>
      <clipPath id="ring_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRing;
