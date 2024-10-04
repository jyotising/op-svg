import * as React from "react";
const SvgVerticalTimeline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#vertical-timeline_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 2.5h20M2 21.5h20M4 18v3.5"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 14H2v4h4zM14 10h-4v4h4zM22 6h-4v4h4z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M20 10v11.5M4 6v.5M4 10v.5M11.5 6v.5M12 14v7.5"
      />
    </g>
    <defs>
      <clipPath id="vertical-timeline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVerticalTimeline;
