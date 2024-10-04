import * as React from "react";
const SvgWeixinFavorites = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#weixin-favorites_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11v10M3 7l9-4 9 4zm0 0 9 4zm0 0v10l9 4zm18 0-9 4zm0 0v10l-9 4z"
      />
    </g>
    <defs>
      <clipPath id="weixin-favorites_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWeixinFavorites;
