import * as React from "react";
const SvgUnlink = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#unlink_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12.946 8.016-3.889-3.89C7.625 2.696 5.352 2.647 3.98 4.02s-1.326 3.646.106 5.078l3.89 3.89M15.958 11.035l3.89 3.89c1.431 1.431 1.617 3.636.106 5.078-1.51 1.441-3.647 1.325-5.079-.107l-3.889-3.889M10.62 10.538 8.674 8.594M15.157 15.075l-1.945-1.944"
      />
    </g>
    <defs>
      <clipPath id="unlink_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUnlink;
