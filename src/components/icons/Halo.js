import * as React from "react";
const SvgHalo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#halo_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8.682 7a6 6 0 0 0-1.726 1.75M6.099 13.09a6 6 0 0 1 0-2.18M8.682 17a6 6 0 0 1-1.726-1.75M13.18 17.884a6 6 0 0 1-2.36 0M15.318 17a6 6 0 0 0 1.726-1.75M17.901 13.09a6 6 0 0 0 0-2.18M15.318 7a6 6 0 0 1 1.726 1.75M10.82 6.116a6 6 0 0 1 2.36 0M20.876 16.61a10 10 0 0 0 .69-1.686M22 12a10 10 0 0 0-.2-2zM2 12a10 10 0 0 1 .2-2zm17.323 6.81a10 10 0 0 1-1.398 1.247zm-14.646 0a10 10 0 0 0 1.398 1.247zm3.18-15.914a10 10 0 0 0-1.782 1.047zm8.287 0a10 10 0 0 1 1.78 1.047zm-3.02-.834a10 10 0 0 0-2.247 0zm0 19.876a10 10 0 0 0 2.126-.478zm-2.247 0a10 10 0 0 1-2.127-.478zm-6.8-16.04a10 10 0 0 0-.953 1.492zm15.846 0a10 10 0 0 1 .953 1.492zM3.123 16.61a10 10 0 0 1-.689-1.686z"
      />
    </g>
    <defs>
      <clipPath id="halo_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHalo;
