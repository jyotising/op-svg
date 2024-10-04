import * as React from "react";
const SvgFacebookOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#facebook-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.056 23A1.06 1.06 0 0 1 1 21.939V2.06C1 1.475 1.473 1 2.056 1h19.889C22.527 1 23 1.475 23 2.061V21.94c0 .586-.473 1.061-1.055 1.061z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M19.33 8.943h-2.434c-.675 0-1.222.548-1.222 1.223v2.445h3.657l-.536 3.665h-3.12V23h-4.022v-6.724h-3.32v-3.665h3.277l.043-3.48-.012-1.246a3.19 3.19 0 0 1 3.188-3.22h4.502z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="facebook-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFacebookOne;
