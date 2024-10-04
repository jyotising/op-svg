import * as React from "react";
const SvgOvalLove = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#oval-love_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.758 8.75c2.762 4.784 2.48 10.116-.629 11.91-3.109 1.796-7.868-.626-10.63-5.41C.74 10.469 1.02 5.136 4.13 3.34s7.868.628 10.63 5.41"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.129 8.75c-2.761 4.784-2.48 10.116.63 11.91 3.108 1.796 7.867-.626 10.628-5.41 2.762-4.782 2.48-10.115-.629-11.91S11.89 3.968 9.13 8.75"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.876 5.172c1.073.954 2.065 2.162 2.882 3.578 2.762 4.783 2.48 10.115-.63 11.91a4.5 4.5 0 0 1-2.129.59"
      />
    </g>
    <defs>
      <clipPath id="oval-love_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOvalLove;
