import * as React from "react";
const SvgNeural = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#neural_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.25 16.5c.983 0 1.395-1.769 2.25-2.123.886-.368 2.209.667 2.877 0 .667-.668-.153-2.151.214-3.038.355-.854 1.909-1.106 1.909-2.089s-1.769-1.22-2.123-2.075c-.368-.886.667-2.384 0-3.052-.668-.667-2.244.368-3.13 0C11.392 3.77 11.233 2 10.25 2S9.002 3.982 8.147 4.337c-.886.367-2.356-.881-3.024-.214-.667.668.368 1.99 0 2.877C4.77 7.855 3 8.267 3 9.25s1.769 1.235 2.124 2.09c.367.886-.668 2.369 0 3.037.667.667 2.137-.368 3.023 0 .855.354 1.12 2.123 2.103 2.123Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8.285 15q-.906 5.1 1.072 6.383c1.979 1.284 3.367.28 4.091-.455s3.077-3.956 5.09-3.956 2.62 1.94 2.429 3q-.19 1.06-.986 1.568"
      />
    </g>
    <defs>
      <clipPath id="neural_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNeural;
