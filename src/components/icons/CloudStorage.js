import * as React from "react";
const SvgCloudStorage = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cloud-storage_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 14.5H2V21h20z"
      />
      <path
        fill="#333"
        d="M17.75 19a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m2 14.5 2.52-12h14.99l2.49 12"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.503 8.013c-1.071 0-2.003.743-2.003 1.743C7.5 11 8.547 11.5 9.849 11.5h.64M14.504 8.013c1.048 0 1.996.487 1.996 1.743 0 1.244-1.055 1.744-2.356 1.744h-.65M14.503 8.013c0-1.492-.992-2.513-2.503-2.513s-2.497.996-2.497 2.513"
      />
      <path stroke="#333" strokeWidth={2} d="M10 11.5h4" />
    </g>
    <defs>
      <clipPath id="cloud-storage_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloudStorage;
