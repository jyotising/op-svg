import * as React from "react";
const SvgPreviewCloseOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#preview-close-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.016 6.25A8.2 8.2 0 0 1 12 6c5.523 0 10 6 10 6s-1.12 1.5-2.929 3M4.93 9C3.119 10.5 2 12 2 12s4.477 6 10 6c.685 0 1.354-.092 2-.254zM10.157 10.31a2.5 2.5 0 0 0 3.593 3.475M21 21 3 3"
      />
    </g>
    <defs>
      <clipPath id="preview-close-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPreviewCloseOne;
