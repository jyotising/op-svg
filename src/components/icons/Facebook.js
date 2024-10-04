import * as React from "react";
const SvgFacebook = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#facebook_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 6.3h-3.006a.984.984 0 0 0-.984.983v3.45H18l-.584 3.8H14.01V21.5H9.623v-6.968H6v-3.798h3.576l.047-3.606-.007-.654A3.934 3.934 0 0 1 13.549 2.5H18z"
      />
    </g>
    <defs>
      <clipPath id="facebook_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFacebook;
