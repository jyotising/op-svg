import * as React from "react";
const SvgXigua = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#xigua_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 21.167a9.167 9.167 0 1 0-9.167-9.166c0 1.242.57 1.843 1.474 2.372.903.529 2.603.441 3.76 1.478C9.221 16.89 9.3 18.576 9.54 19.396s1.217 1.771 2.46 1.771Z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.763 9.27q-.404.982-.404 2.307 0 1.26.268 2.494a1.53 1.53 0 0 0 1.906 1.148q1.35-.379 2.35-.992a8.2 8.2 0 0 0 1.744-1.447 1.53 1.53 0 0 0-.138-2.207A16.4 16.4 0 0 0 13.5 9.14q-1.085-.664-2.124-.802a1.53 1.53 0 0 0-1.613.934Z"
      />
    </g>
    <defs>
      <clipPath id="xigua_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgXigua;
