import * as React from "react";
const SvgTiktok = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#tiktok_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.68 9.57q-4.418-.213-6.14 3.15c-1.724 3.362-.3 8.864 5.45 8.864 5.749 0 5.915-5.556 5.915-6.138V8.938q1.845 1.168 3.11 1.406 1.265.239 1.61.211V7.317q-1.17-.14-2.025-.538c-.854-.397-2.548-1.498-2.548-3.113V2.417h-3.559q-.015 11.862 0 13.03c.016 1.166-.89 2.799-2.725 2.799-1.836 0-2.741-1.632-2.741-2.684a2.8 2.8 0 0 1 1.136-2.269c.542-.41 1.295-.573 2.516-.573z"
      />
    </g>
    <defs>
      <clipPath id="tiktok_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTiktok;
