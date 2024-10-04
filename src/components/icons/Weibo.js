import * as React from "react";
const SvgWeibo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#weibo_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.28 8.206c-1.671 1.625-5.198 6.368-2.599 9.76 2.6 3.393 9.96 2.084 12.999-.306s2.738-3.867 2.08-4.518c-.66-.65-2.582.007-3.12-.878-.539-.886.958-3.098-.317-3.798-1.276-.7-3.478 1.825-4.472 1.17-.995-.657 1.094-2.799 0-3.416s-2.898.361-4.57 1.986Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M21.69 8.258a6.48 6.48 0 0 0-1.821-4.037 6.48 6.48 0 0 0-3.862-1.92M18.646 8.465a3.32 3.32 0 0 0-1-2.114 3.62 3.62 0 0 0-2.12-1.005"
      />
      <path
        fill="#333"
        d="M12.5 15c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2"
      />
    </g>
    <defs>
      <clipPath id="weibo_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWeibo;
