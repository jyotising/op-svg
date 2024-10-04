import * as React from "react";
const SvgRugby = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#rugby_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.95 16.95c4.686-4.686 6.269-10.701 3.535-13.435S11.737 2.365 7.05 7.051C2.364 11.737.781 17.752 3.515 20.486s8.748 1.15 13.435-3.536M10.586 10.587l2.828 2.828M12.707 8.466l2.829 2.828M8.464 12.708l2.829 2.828M6.346 17.66 17.66 6.346M2.808 14.122l7.07 7.071M14.121 2.808l7.071 7.07"
      />
    </g>
    <defs>
      <clipPath id="rugby_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRugby;
