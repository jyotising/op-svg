import * as React from "react";
const SvgTranslation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#translation_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.594 13.5h4.812M8.5 16l1.094-2.5zm7 0-1.094-2.5zm-5.906-2.5L12 8l2.406 5.5z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21.6 10c-.927-4.564-4.962-8-9.8-8S2.927 5.436 2 10l3-1M2 14c.927 4.564 4.962 8 9.8 8s8.873-3.436 9.8-8L19 15"
      />
    </g>
    <defs>
      <clipPath id="translation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTranslation;
