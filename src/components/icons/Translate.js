import * as React from "react";
const SvgTranslate = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#translate_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.143 18.5h5.714M21 21l-1.143-2.5zm-8 0 1.143-2.5zm1.143-2.5L17 12l2.857 6.5zM8 3l.5 1.5M3 5.5h11M5 8s.895 3.13 3.132 4.87C10.368 14.609 14 16 14 16"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5.5s-.895 4.109-3.132 6.391S3 16 3 16"
      />
    </g>
    <defs>
      <clipPath id="translate_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTranslate;
