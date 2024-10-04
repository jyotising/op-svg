import * as React from "react";
const SvgFan = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fan_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15.5V18m-4.993-4.122-4.993-1.623a10.5 10.5 0 0 1 19.972 0l-4.993 1.623zm0 0a5.25 5.25 0 0 1 1.907-2.625zm0 0L12 15.5zm1.907-2.625A5.25 5.25 0 0 1 12 10.25zm0 0L12 15.5zM12 10.25a5.25 5.25 0 0 1 3.086 1.003zm0 0v5.25zm3.086 1.003a5.25 5.25 0 0 1 1.907 2.625zm0 0L12 15.5zm1.907 2.625L12 15.5z"
      />
    </g>
    <defs>
      <clipPath id="fan_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFan;
