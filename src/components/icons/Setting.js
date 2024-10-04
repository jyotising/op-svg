import * as React from "react";
const SvgSetting = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#setting_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.343 7.586a7.7 7.7 0 0 1 1.264 3.05H22v2.728h-2.393a7.7 7.7 0 0 1-1.264 3.05l1.692 1.693-1.928 1.928-1.692-1.692a7.7 7.7 0 0 1-3.051 1.264V22h-2.728v-2.393a7.7 7.7 0 0 1-3.05-1.264l-1.693 1.692-1.928-1.928 1.692-1.692a7.7 7.7 0 0 1-1.264-3.051H2v-2.728h2.393c.199-1.118.639-2.154 1.264-3.05L3.965 5.893l1.928-1.928 1.693 1.692a7.7 7.7 0 0 1 3.05-1.264V2h2.728v2.393c1.118.199 2.154.639 3.05 1.264l1.693-1.692 1.928 1.928z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
    </g>
    <defs>
      <clipPath id="setting_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSetting;
