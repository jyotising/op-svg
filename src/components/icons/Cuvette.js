import * as React from "react";
const SvgCuvette = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cuvette_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5h6v8.5l7 7V22H2v-1.5l7-7z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.25 18.75 18.5 17l-1.75-1.75M20.25 18.75 18.5 17l-1.75-1.75M7.25 15.25 5.5 17l-1.75 1.75M7.25 15.25 5.5 17l-1.75 1.75M9 2h6M12 13.5v.5M12 9v1.5M5 17.5h14"
      />
    </g>
    <defs>
      <clipPath id="cuvette_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCuvette;
