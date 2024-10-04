import * as React from "react";
const SvgEveryUser = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#every-user_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M17 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M12 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22a5 5 0 0 0-10 0M22 22a5 5 0 0 0-10 0M17 12a5 5 0 0 0-10 0"
      />
    </g>
    <defs>
      <clipPath id="every-user_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEveryUser;
