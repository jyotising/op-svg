import * as React from "react";
const SvgBezierCurve = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bezier-curve_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 15H2v4h4zM22 15h-4v4h4zM14 5h-4v4h4z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 7H2M22 7h-8M4 15c0-3.728 2.55-6.86 6-7.748M14 7.252c3.45.888 6 4.02 6 7.748"
      />
    </g>
    <defs>
      <clipPath id="bezier-curve_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBezierCurve;
