import * as React from "react";
const SvgDeeplink = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#deeplink_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10.5 17.497v2.989c0 .284-.211.514-.472.514H2.472c-.26 0-.472-.23-.472-.514V3.514C2 3.23 2.211 3 2.472 3h7.556c.26 0 .472.23.472.514v2.99M13.5 6.504v-2.99c0-.284.211-.514.472-.514h7.556c.26 0 .472.23.472.514v16.972c0 .284-.211.514-.472.514h-7.556c-.26 0-.472-.23-.472-.514v-2.989"
      />
      <path
        fill="#333"
        d="M6.25 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17.75 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8 11.75h8"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13.612 14.136.795-.795 1.59-1.591-1.59-1.591-.796-.796"
      />
    </g>
    <defs>
      <clipPath id="deeplink_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeeplink;
