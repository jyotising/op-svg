import * as React from "react";
const SvgParagraphBreakTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#paragraph-break-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4.5h18M3 9.5h18M3 14.5h9M3 19.5h5M12 19.5l2 2m-2-2h6.5a2.5 2.5 0 0 0 0-5H16zm0 0 2-2z"
      />
    </g>
    <defs>
      <clipPath id="paragraph-break-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgParagraphBreakTwo;
