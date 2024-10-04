import * as React from "react";
const SvgEyes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#eyes_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20.5c4.97 0 9-4.161 9-7s-4.03-7-9-7-9 4.164-9 7 4.03 7 9 7Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m6.632 5.633 1.297 1.81M17.813 5.855l-1.298 1.81M12.004 3.5v3"
      />
    </g>
    <defs>
      <clipPath id="eyes_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyes;
