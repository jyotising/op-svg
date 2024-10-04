import * as React from "react";
const SvgHandRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hand-right_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.013 20.487v-11h-3v11z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.013 9.487q5.343-4.89 6.192-5.611c.85-.722 1.81-.419 1.81 1.387s-2.642 2.848-2.642 4.224q-.002.012 10.138.001a1.5 1.5 0 0 1 1.502 1.5c0 .83-.672 1.503-1.502 1.503h-4.004q-.907 5.98-1 6.502c-.095.522-.593 1.494-2.028 1.494H5.013z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="hand-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHandRight;
