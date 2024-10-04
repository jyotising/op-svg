import * as React from "react";
const SvgLung = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#lung_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M9.122 11.132q-.219-3.717-1.762-3.85C5.7 7.14 3.155 9.855 2.4 13.669s-.381 6.546.606 6.73 2.422-.89 3.102-.89c.681 0 3.04.521 3.04-.421v-4.052M14.812 11.185q.21-3.77 1.765-3.902c1.66-.143 4.205 2.571 4.96 6.385s.381 6.546-.606 6.73-2.422-.89-3.102-.89c-.681 0-3.04.521-3.04-.421v-4.052"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10.278 2.5v7.455q-.033 1.719-2.868 1.719M13.646 2.5v7.455q.033 1.719 2.868 1.719"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 15.035q2.967 0 4.5-1.409 1.544 1.41 4.514 1.409"
      />
    </g>
    <defs>
      <clipPath id="lung_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLung;
