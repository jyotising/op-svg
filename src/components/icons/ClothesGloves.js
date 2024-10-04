import * as React from "react";
const SvgClothesGloves = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clothes-gloves_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.5 13.5v-5zm0-5V8c0-2.828 0-4.243-.879-5.121C15.743 2 14.328 2 11.5 2h-2c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v14h14v-3.5s3.5 0 3.5-3v-4c0-3-3.5-3-3.5-3M7 11.5v-9M10.5 11.5v-9M14 11.5v-9"
      />
    </g>
    <defs>
      <clipPath id="clothes-gloves_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClothesGloves;
