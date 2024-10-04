import * as React from "react";
const SvgTwoEllipses = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#two-ellipses_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.29 3.674c1.882 1.883-.312 7.128-4.9 11.716s-9.833 6.782-11.716 4.9c-1.882-1.883.312-7.128 4.9-11.716s9.833-6.782 11.716-4.9"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.743 3.674c-1.883 1.883.31 7.128 4.899 11.716 4.588 4.588 9.834 6.782 11.716 4.9 1.882-1.883-.311-7.128-4.9-11.716-4.588-4.588-9.833-6.782-11.715-4.9"
      />
    </g>
    <defs>
      <clipPath id="two-ellipses_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTwoEllipses;
