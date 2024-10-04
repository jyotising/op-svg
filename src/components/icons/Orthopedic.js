import * as React from "react";
const SvgOrthopedic = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#orthopedic_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11.514 18 5.487 3.5V12q5.756-3.907 4.229-7.217c-1.527-3.309-4-3.09-5.727-2.282q-1.726.81-2.503 4.52-2.279-4.85-6.4-4.85c-4.121 0-4.453 4.862-3.862 6.052.59 1.19 1.148 1.833 3.762 3.777q-.056 8.673.721 9.328Q8.647 22.432 11.514 18Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M13.5 12.5v3"
      />
    </g>
    <defs>
      <clipPath id="orthopedic_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOrthopedic;
