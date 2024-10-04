import * as React from "react";
const SvgIncreaseTheScale = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#increase-the-scale_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 4.5a2.5 2.5 0 0 0-5 0v5a2.5 2.5 0 0 0 5 0zM21 4.5a2.5 2.5 0 0 0-5 0v5a2.5 2.5 0 0 0 5 0z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 16 3 3-3 3"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M3 12h.5" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 19H9.5"
      />
    </g>
    <defs>
      <clipPath id="increase-the-scale_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIncreaseTheScale;
