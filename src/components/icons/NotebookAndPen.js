import * as React from "react";
const SvgNotebookAndPen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#notebook-and-pen_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 3v18h13V3zM6 21V3M22 3h-4v16l2 2 2-2zM18 6h4M15 3H2M15 21H2M18 3v8M22 3v8"
      />
    </g>
    <defs>
      <clipPath id="notebook-and-pen_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNotebookAndPen;
