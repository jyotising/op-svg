import * as React from "react";
const SvgWeixinTopStories = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#weixin-top-stories_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 2 3.6 3.765L20.66 7l-1.46 5 1.46 5-5.06 1.235L12 22l-3.6-3.765L3.34 17l1.46-5-1.46-5L8.4 5.765z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15.489 5.957.197 3.914L18.977 12l-3.291 2.129-.197 3.914L12 16.256l-3.489 1.786-.197-3.914-3.291-2.129 3.291-2.128.197-3.914L12 7.743z"
      />
    </g>
    <defs>
      <clipPath id="weixin-top-stories_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWeixinTopStories;
