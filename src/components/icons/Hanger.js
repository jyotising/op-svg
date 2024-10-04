import * as React from "react";
const SvgHanger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hanger_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.365 13.563a3 3 0 0 1 3.27 0l7.775 5.054A1.297 1.297 0 0 1 20.704 21H3.296a1.296 1.296 0 0 1-.706-2.383z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12.5s3-4.343 3-6a3 3 0 0 0-6 0"
      />
    </g>
    <defs>
      <clipPath id="hanger_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHanger;
