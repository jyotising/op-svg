import * as React from "react";
const SvgTaxi = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#taxi_svg__a)">
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 17.5v-3.645a3 3 0 0 1 1.66-2.684l.34-.17 1.155-3.955A2 2 0 0 1 7.103 5.5h9.844A2 2 0 0 1 18.9 7.064l1.103 3.937.34.17A3 3 0 0 1 22 13.854V17.5a1.5 1.5 0 0 1-1.5 1.5h-.998v.5a2 2 0 0 1-4.002 0V19h-7v.5a2 2 0 1 1-4 0V19h-1A1.5 1.5 0 0 1 2 17.5Z"
      />
      <path
        fill="#333"
        d="M6.75 16.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M17.25 16.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5.5h6l-.496-2.478c-.06-.305-.304-.522-.585-.522H10.08c-.28 0-.524.217-.585.522z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 11.5h9"
      />
    </g>
    <defs>
      <clipPath id="taxi_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTaxi;
