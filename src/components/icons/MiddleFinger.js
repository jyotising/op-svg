import * as React from "react";
const SvgMiddleFinger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#middle-finger_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M7.486 13.488q-2.49.443-2.49 3.012c0 2.57 2.576 5.5 4.9 5.5h5.944c2.274 0 3.655-1.925 3.655-3.47v-6.525a1.5 1.5 0 0 0-1.5-1.5h-.004c-.826 0-1.496.67-1.496 1.495"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M7.486 15.02v-4.514c0-.829.672-1.501 1.501-1.501h.002c.83 0 1.503.674 1.503 1.504v2.002"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.492 12.004V3.508a1.508 1.508 0 0 1 3.015 0v8.496"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.495 11.858v-1.356a1.5 1.5 0 1 1 3 0v1.5"
      />
    </g>
    <defs>
      <clipPath id="middle-finger_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMiddleFinger;
