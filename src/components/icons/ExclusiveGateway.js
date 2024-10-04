import * as React from "react";
const SvgExclusiveGateway = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#exclusive-gateway_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11.4 2.1-9.193 9.193a1 1 0 0 0 0 1.414L11.4 21.9a1 1 0 0 0 1.414 0l9.192-9.192a1 1 0 0 0 0-1.414L12.814 2.1a1 1 0 0 0-1.415 0Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m9.021 14.994 6-5.981M9.026 9.008l5.99 5.99"
      />
    </g>
    <defs>
      <clipPath id="exclusive-gateway_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgExclusiveGateway;
