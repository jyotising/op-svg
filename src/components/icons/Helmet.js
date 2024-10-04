import * as React from "react";
const SvgHelmet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M21.17 16c.535-1.225.83-2.58.83-4 0-5.525-4.475-10-10-10S2 6.475 2 12h10l.005 4c0 1.935 1.565 3.5 3.5 3.5s3.5-1.565 3.5-3.5z"
    />
    <path
      fill="#333"
      d="M15.5 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="m12 16-9 2c1.115 1.585 2.225 3.185 4 4l6-3.5"
    />
  </svg>
);
export default SvgHelmet;
