import * as React from "react";
const SvgBrightness = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brightness_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.01 17.677a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m19.48 4.505-1.23 1.237M5.534 18.373 4.51 19.402M12 20.677v1.5M22 11.677h-2M18.766 18.168 20 19.402"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M12.01 8.677a3.5 3.5 0 0 0 0 7"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 12.177h2M5.022 4.505 6.05 5.53M12 1.677v2"
      />
    </g>
    <defs>
      <clipPath id="brightness_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrightness;
