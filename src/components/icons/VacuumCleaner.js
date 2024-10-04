import * as React from "react";
const SvgVacuumCleaner = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#vacuum-cleaner_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M13 11.25V5c0-1.5 1-3 3-3s3 1.5 3 3v12"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.375 17h5.25L22 20h-6zM5 20h7.943a.057.057 0 0 0 .057-.057v-8.316A6.627 6.627 0 0 0 6.373 5 2.873 2.873 0 0 0 3.5 7.873V14.5"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M5 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 5v9.5"
      />
    </g>
    <defs>
      <clipPath id="vacuum-cleaner_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVacuumCleaner;
