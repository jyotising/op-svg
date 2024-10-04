import * as React from "react";
const SvgPageTemplate = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#page-template_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.5 2H2v11h9.5zM22 17H2v4.5h20zM22 2h-6.5v4H22zM22 9h-6.5v4H22z"
      />
    </g>
    <defs>
      <clipPath id="page-template_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPageTemplate;
