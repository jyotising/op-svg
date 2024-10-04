import * as React from "react";
const SvgWeixinScan = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#weixin-scan_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 15H6l1 2.5h6l1.044 3.133A2 2 0 0 0 15.941 22H19a2 2 0 0 0 2-2v-5l.5-3.5-1.823.365a1 1 0 0 0-.79.816zM5.5 9H18l-1-2.5h-6L9.956 3.368A2 2 0 0 0 8.059 2H5a2 2 0 0 0-2 2v5l-.5 3.5 1.823-.365a1 1 0 0 0 .79-.816z"
      />
    </g>
    <defs>
      <clipPath id="weixin-scan_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWeixinScan;
