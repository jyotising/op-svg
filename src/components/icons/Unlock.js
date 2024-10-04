import * as React from "react";
const SvgUnlock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#unlock_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.5 11.023h-15a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 11V7.002c-.003-2.567 1.961-4.718 4.543-4.976S16.483 3.487 17 6.003M12 15v3"
      />
    </g>
    <defs>
      <clipPath id="unlock_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUnlock;
