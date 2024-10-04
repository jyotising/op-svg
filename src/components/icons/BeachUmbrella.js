import * as React from "react";
const SvgBeachUmbrella = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#beach-umbrella_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.17 10.706 12 12l4.83 1.294 4.83 1.294c1.168-4.363-.736-8.825-4.387-11.088a10 10 0 0 0-2.685-1.16 10 10 0 0 0-3.338-.315c-4.119.31-7.78 3.171-8.91 7.387z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.588 2.34s-2.82 1.833-4.433 3.99c-1.613 2.155-2.019 4.635-2.019 4.635M14.588 2.34s1.526 2.998 1.845 5.672c.32 2.673-.57 5.023-.57 5.023"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m2.34 9.412 4.83 1.294L12 12l4.83 1.294 4.83 1.294M2 22h20M12 12 9.25 22M11.25 2.025a10 10 0 0 1 3.338.316c.972.26 1.872.655 2.685 1.16"
      />
    </g>
    <defs>
      <clipPath id="beach-umbrella_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBeachUmbrella;
