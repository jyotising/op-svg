import * as React from "react";
const SvgRingOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ring-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5.636A1.818 1.818 0 1 0 12 2a1.818 1.818 0 0 0 0 3.636ZM12 22a1.818 1.818 0 1 0 0-3.637A1.818 1.818 0 0 0 12 22ZM3.818 13.818a1.818 1.818 0 1 0 0-3.636 1.818 1.818 0 0 0 0 3.636ZM20.182 13.818a1.818 1.818 0 1 0 0-3.636 1.818 1.818 0 0 0 0 3.636Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.367 5.08a8.2 8.2 0 0 1 2.553 2.553M18.92 16.367a8.2 8.2 0 0 1-2.553 2.553M7.633 18.92a8.2 8.2 0 0 1-2.553-2.553M5.08 7.633A8.2 8.2 0 0 1 7.633 5.08"
      />
    </g>
    <defs>
      <clipPath id="ring-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRingOne;
