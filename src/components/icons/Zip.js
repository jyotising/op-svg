import * as React from "react";
const SvgZip = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#zip_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.314 6.374 12 2.5l9.686 3.874A.5.5 0 0 1 22 6.84V21a.5.5 0 0 1-.5.5h-19A.5.5 0 0 1 2 21V6.839a.5.5 0 0 1 .314-.465Z"
        clipRule="evenodd"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M12 11v5" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M16.5 13.5c.828 0 1.5-.56 1.5-1.25S17.328 11 16.5 11h-1.35a.15.15 0 0 0-.15.15v1.1c0 .69.672 1.25 1.5 1.25Z"
        clipRule="evenodd"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M15 11v5" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 11h3.002L6 16h3.002"
      />
    </g>
    <defs>
      <clipPath id="zip_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZip;
