import * as React from "react";
const SvgPreviewClose = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#preview-close_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8c.317.61.798 1.175 1.411 1.678C6.131 11.087 8.89 12 12 12s5.87-.913 7.589-2.322C20.202 9.175 20.683 8.61 21 8M14.489 12l1.035 3.864M18.677 10.677l2.828 2.828M2.5 13.505l2.828-2.828M8.464 15.864 9.499 12"
      />
    </g>
    <defs>
      <clipPath id="preview-close_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPreviewClose;
