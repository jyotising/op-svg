import * as React from "react";
const SvgDatabaseSetting = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#database-setting_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 6v4.5c-1.478 0-2.805.64-3.72 1.66a4.98 4.98 0 0 0-1.208 4.19 5 5 0 0 0 2.465 3.502c-1.331.403-3.098.648-5.037.648C5.358 20.5 2 19.38 2 18V6"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 15.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0M17 6c0 1.38-3.358 2.5-7.5 2.5S2 7.38 2 6s3.358-2.5 7.5-2.5S17 4.62 17 6"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 14c0 1.38 3.358 2.5 7.5 2.5.903 0 1.77-.053 2.572-.15M2 10c0 1.38 3.358 2.5 7.5 2.5 1.378 0 2.67-.124 3.78-.34M17 13.5l1.732 1v2L17 17.5l-1.732-1v-2z"
      />
    </g>
    <defs>
      <clipPath id="database-setting_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDatabaseSetting;
