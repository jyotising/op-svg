import * as React from "react";
const SvgStrongbox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#strongbox_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2"
      />
      <path
        fill="#333"
        d="M6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
      />
    </g>
    <defs>
      <clipPath id="strongbox_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStrongbox;
