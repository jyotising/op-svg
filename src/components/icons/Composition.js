import * as React from "react";
const SvgComposition = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#composition_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m19.914 10.893-8.93 8.93c-1.707 1.707-4.515 1.666-6.273-.091-1.757-1.758-1.798-4.566-.09-6.273l8.93-8.93M4.367 13.712l13.072-.344"
      />
      <path
        fill="#333"
        d="M14.697 10.454a1 1 0 1 0-1.415-1.415 1 1 0 0 0 1.415 1.415M11.868 11.868a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m11.782 2.761 9.9 9.9"
      />
    </g>
    <defs>
      <clipPath id="composition_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComposition;
