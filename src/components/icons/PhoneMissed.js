import * as React from "react";
const SvgPhoneMissed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#phone-missed_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M23.76 0H.72v23.04h23.04z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={1.92}
        d="M8.398 4.169c.349 0 .67.19.84.494l1.174 2.115a.96.96 0 0 1 .02.896L9.3 9.936s.328 1.686 1.7 3.058 3.052 1.694 3.052 1.694l2.262-1.131a.96.96 0 0 1 .896.02l2.12 1.179a.96.96 0 0 1 .494.839v2.435c0 1.24-1.152 2.136-2.327 1.74-2.413-.815-6.16-2.365-8.534-4.74s-3.925-6.12-4.74-8.534c-.396-1.175.5-2.327 1.74-2.327z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.92}
        d="M19.313 4.457 15.24 8.53M15.24 4.457l4.073 4.073"
      />
    </g>
    <defs>
      <clipPath id="phone-missed_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhoneMissed;
