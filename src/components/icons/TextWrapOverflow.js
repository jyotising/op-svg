import * as React from "react";
const SvgTextWrapOverflow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#text-wrap-overflow_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M4 5v14M12 2v6M8 12h13"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18.528 9.506 2.519 2.507-2.519 2.549"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M12 16v6" />
    </g>
    <defs>
      <clipPath id="text-wrap-overflow_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextWrapOverflow;
