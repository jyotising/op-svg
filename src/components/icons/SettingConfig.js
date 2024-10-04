import * as React from "react";
const SvgSettingConfig = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#setting-config_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.75 5h-3M13.75 3v4M13.75 5h-11M6.75 12h-4M10.75 10v4M21.75 12h-11M20.75 19h-3M13.75 17v4M13.75 19h-11"
      />
    </g>
    <defs>
      <clipPath id="setting-config_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSettingConfig;
