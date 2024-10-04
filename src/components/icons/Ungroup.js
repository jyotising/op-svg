import * as React from "react";
const SvgUngroup = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ungroup_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.636 2H2v3.636h3.636zM22 18.363h-3.637V22H22zM5.636 12H2v3.636h3.636zM12 18.363H8.364V22H12zM15.636 2H12v3.636h3.636zM22 8.363h-3.637V12H22z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.636 3.818H12M12 20.182h6.364M5.636 13.819h8.182V5.637M14.414 10.182h3.95zm-4.232 8.181v-4.549zM3.818 5.637V12M20.182 12v6.364"
      />
    </g>
    <defs>
      <clipPath id="ungroup_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUngroup;
