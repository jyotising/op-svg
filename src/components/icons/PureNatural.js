import * as React from "react";
const SvgPureNatural = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#pure-natural_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M5.5 20.5q3.126-1.342 5.887-1.45 2.762-.105 7.113.95"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M11.523 22q-.576-7.08.477-11"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11.588q1.192-4.515 4.2-5.383 3.006-.87 5.8.797.015 3.67-3.185 5.375-3.2 1.707-6.815-.79ZM11.896 11.057q.625-5.391-2.505-7.593T2.142 2.48q-.72 4.972 2.2 7.52 2.918 2.547 7.554 1.057Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="pure-natural_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPureNatural;
