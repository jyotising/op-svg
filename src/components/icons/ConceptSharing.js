import * as React from "react";
const SvgConceptSharing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#concept-sharing_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.183 18H12l-4.5-2.48-5.496 2.02 1.501 2.973 3.537-1.477Q12.004 22 13.082 22q1.08 0 8.918-4"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.496 13.494v-2.335c.55-.229 1.271-.562 1.686-.977a4.5 4.5 0 1 0-6.364 0c.415.415 1.132.749 1.682.977q.005.251 0 2.335z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m6 10.5.5-.5M20 10.5l-.5-.5M7.5 2.5 7 2M18.5 2.5 19 2M20.5 6H20M6 6h-.5"
      />
    </g>
    <defs>
      <clipPath id="concept-sharing_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgConceptSharing;
