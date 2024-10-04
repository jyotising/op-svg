import * as React from "react";
const SvgSun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sun_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 1.5v1.575"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M19.425 4.575 18.31 5.69z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.425 4.575 18.31 5.69M22.5 12h-1.575"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m19.425 19.424-1.114-1.113z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19.425 19.424-1.114-1.113M12 22.5v-1.575"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="m4.575 19.424 1.114-1.113z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m4.575 19.424 1.114-1.113M1.5 12h1.575"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M4.575 4.575 5.69 5.69z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.575 4.575 5.69 5.69"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      />
    </g>
    <defs>
      <clipPath id="sun_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSun;
