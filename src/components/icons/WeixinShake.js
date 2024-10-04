import * as React from "react";
const SvgWeixinShake = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#weixin-shake_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 9.5 14.5 3 3 14.5 9.5 21zM8 14.5 9.5 16M15 21l6-6M3 9l6-6"
      />
    </g>
    <defs>
      <clipPath id="weixin-shake_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWeixinShake;
