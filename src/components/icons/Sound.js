import * as React from "react";
const SvgSound = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sound_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
      <path
        fill="#333"
        d="M7 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </g>
    <defs>
      <clipPath id="sound_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSound;
