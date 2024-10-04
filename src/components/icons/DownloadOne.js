import * as React from "react";
const SvgDownloadOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#download-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.839 10.136a5.002 5.002 0 1 0 2.527 9.675M18.027 10.136A5.002 5.002 0 1 1 15.5 19.81M18 10a6 6 0 0 0-12 0M8.533 15.06 12 18.538 15.566 15M12 10v6.77"
      />
    </g>
    <defs>
      <clipPath id="download-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDownloadOne;
