import * as React from "react";
const SvgHoney = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#honey_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M7.307 2.421 4.962 4.766A1.658 1.658 0 0 0 7.307 7.11L9.65 4.766A1.658 1.658 0 0 0 7.307 2.42ZM12.386 6.72 9.26 9.846a1.658 1.658 0 1 0 2.345 2.345l3.126-3.126a1.658 1.658 0 1 0-2.345-2.345Z"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="m14.34 9.455 6.885 6.885c.514.514.406 1.455-.242 2.103-.647.647-1.588.755-2.102.242L11.996 11.8M11.214 3.203l-5.47 5.47a1.658 1.658 0 1 0 2.344 2.345l5.47-5.47a1.658 1.658 0 0 0-2.344-2.345Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6.927 11.571q1.068 3.329-.355 4.917c-1.424 1.59-1.202 5.583 2.013 5.583 3.216 0 4.16-3.993 1.436-5.394"
      />
    </g>
    <defs>
      <clipPath id="honey_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHoney;
