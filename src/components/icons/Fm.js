import * as React from "react";
const SvgFm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fm_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.762 16.527c.619-.703 1.857-.703 2.476 0 .62.703 0 5.153-.413 5.622-.412.468-1.238.468-1.65 0-.413-.469-1.032-4.92-.413-5.622"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.483 15.257a5.5 5.5 0 1 0-6.967 0"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.963 19.083a9 9 0 1 0-7.926 0"
      />
    </g>
    <defs>
      <clipPath id="fm_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFm;
