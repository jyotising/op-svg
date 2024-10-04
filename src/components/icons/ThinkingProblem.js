import * as React from "react";
const SvgThinkingProblem = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#thinking-problem_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19 10.5 2.5 4.5-2.5.5v3h-1.5l-3-.5-.5 3.5H6.5l-1-5.19A8 8 0 1 1 19 10.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 9.5A2.5 2.5 0 1 1 11 12v1.5M11 16.5v.5"
      />
    </g>
    <defs>
      <clipPath id="thinking-problem_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThinkingProblem;
