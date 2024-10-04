import * as React from "react";
const SvgHospitalTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hospital-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 5.5h4l2 5H2l2-5h4M4 10.5h16v11H4z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 2.5H8v8h8zM12 14.5H8v7h4zM16 14.5h-4v7h4zM10.5 6.5h3M18 21.5H6M12 8V5"
      />
    </g>
    <defs>
      <clipPath id="hospital-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHospitalTwo;
