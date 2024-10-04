import * as React from "react";
const SvgHarm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#harm_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M23.755 0H.245v23.51h23.51z" />
      <path fill="#fff" fillOpacity={0.01} d="M23.755.49H.245V24h23.51z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={1.959}
        d="m3.184 4.533 8.82-2.574 8.812 2.574v5.28a12.89 12.89 0 0 1-8.815 12.228A12.89 12.89 0 0 1 3.184 9.81z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.959}
        d="m14.694 9.016-5.542 5.541M9.152 9.016l5.542 5.541"
      />
    </g>
    <defs>
      <clipPath id="harm_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHarm;
