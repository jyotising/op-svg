import * as React from "react";
const SvgLarkOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#lark-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1.747 8.86 20.839 3.16l-5.657 19.134-4.44-4.44.02-4.618-4.773-.135z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M13.768 7.445a2 2 0 1 0 2.828 2.829 2 2 0 0 0-2.828-2.829"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.839 3.203 15.182 8.86"
      />
    </g>
    <defs>
      <clipPath id="lark-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLarkOne;
