import * as React from "react";
const SvgRenal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#renal_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 22q-1.096-3.262-.708-5.5.39-2.24 2.419-2.926-1.51 4.58 1.237 6.692c2.748 2.113 9.369 1.141 9.728-6.005.358-7.146-3.079-12.305-8.16-12.305-5.083 0-5.843 5.5-2.264 7.367q-4.75 1.035-6.028 4.25-1.28 3.216-.2 8.427"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.3 7.5q-2.173 1.296-1.575 2.373.597 1.077 2.712 0M16.623 13.12q-2.805-.571-3.374.414c-.568.985 1.936 2.413 2.843 2.591"
      />
    </g>
    <defs>
      <clipPath id="renal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRenal;
