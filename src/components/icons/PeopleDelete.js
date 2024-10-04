import * as React from "react";
const SvgPeopleDelete = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#people-delete_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m16.5 15.5 4 4M16.5 19.5l4-4M13.5 14H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 17.04 3 18.16 3 20.4v.6h10.5"
      />
    </g>
    <defs>
      <clipPath id="people-delete_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPeopleDelete;
