import * as React from "react";
const SvgConnectionBox = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#connection-box_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21.5 2h-19c-.276 0-.5.244-.5.545v4.91c0 .3.224.545.5.545h19c.276 0 .5-.244.5-.545v-4.91c0-.3-.224-.545-.5-.545ZM21.5 16h-19c-.276 0-.5.244-.5.546v4.909c0 .3.224.545.5.545h19c.276 0 .5-.244.5-.546v-4.908c0-.302-.224-.546-.5-.546Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 8v4.004l10 .005V16M9 19h6M9 5h6"
      />
    </g>
    <defs>
      <clipPath id="connection-box_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgConnectionBox;
