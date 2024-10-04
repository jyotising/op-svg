import * as React from "react";
const SvgContrastView = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#contrast-view_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3.5H3.5v17H12z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3.5h2M16.5 3.5h1M16.5 20.5h1M20.5 3.5v1M20.5 7.5v1M20.5 11.5v1M20.5 15.5v1M20.5 19.5v1M13.5 20.5H12M12 2v20"
      />
    </g>
    <defs>
      <clipPath id="contrast-view_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgContrastView;
