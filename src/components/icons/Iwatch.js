import * as React from "react";
const SvgIwatch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#iwatch_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 6H5v12h13z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.5 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M7.5 6q0-.055.012-.108l.804-3.5A.51.51 0 0 1 8.82 2h5.372c.242 0 .452.163.504.392l.804 3.5M7.5 18q0 .056.012.108l.804 3.5A.51.51 0 0 0 8.82 22h5.372a.51.51 0 0 0 .504-.392l.804-3.5M19.5 8v2"
      />
    </g>
    <defs>
      <clipPath id="iwatch_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIwatch;
