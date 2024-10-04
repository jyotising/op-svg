import * as React from "react";
const SvgDashboardOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#dashboard-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3.5c-5.523 0-10 4.477-10 10 0 2.615.857 5.218 2.5 7h15c1.643-1.782 2.5-4.385 2.5-7 0-5.523-4.477-10-10-10"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 10v3M12 6v1M4.5 14h1M6.5 9l.707.707M18.5 14h1M17 9.707 17.707 9"
      />
    </g>
    <defs>
      <clipPath id="dashboard-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDashboardOne;
