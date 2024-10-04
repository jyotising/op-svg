import * as React from "react";
const SvgMicroscope = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#microscope_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M13 22q3.26-2.256 3.475-4.56.215-2.306-1.392-3.44"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M13.828 14.111a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.144 13.5 9.39 16.289l-4.596-4.597L13.985 2.5l4.596 4.596-3.093 3.094"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m3.279 14.067 3.93 3.84M3 22h18"
      />
    </g>
    <defs>
      <clipPath id="microscope_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMicroscope;
