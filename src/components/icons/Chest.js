import * as React from "react";
const SvgChest = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#chest_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8.498 1.75v2.574c0 .875-.481 1.213-2.297 1.68-1.815.466-2.353.74-2.777 1.546Q3 8.354 3 10.036v8.714"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.47 10.754q.18 2.158-.73 3.77-.91 1.61-3.211 1.962M6.53 10.754q-.18 2.158.734 3.77.914 1.61 3.237 1.962"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6.5 21.756q1-1.166 1-2.536v-4.182M17.5 21.756q-1-1.166-1-2.536v-4.182M15.5 1.75v2.574c0 .875.482 1.213 2.297 1.68s2.353.74 2.777 1.546q.424.804.424 2.486v8.714"
      />
    </g>
    <defs>
      <clipPath id="chest_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChest;
