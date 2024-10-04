import * as React from "react";
const SvgSperm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sperm_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M9.119 12.237c.928.65 1.165 1.337 1.804 1.785.7.49 1.474.75 2.085.508 1.153-.458 1.987-1.955 3.005-3.408 1.98-2.828 1.977-7.193.13-8.485-1.846-1.293-5.921.216-7.901 3.043-.968 1.382-2.235 3.223-2.158 4.002.064.655.284 1.02.978 1.637.695.616 1.066.225 2.057.918Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6.809 11.158q-2.655 2.924-.702 4.443 1.955 1.519 4.908-1.498"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6.12 15.613q-2.324 2.54-.855 4.739c1.468 2.197 4.377 2.077 5.797.439s4.092-5.698 7.03-4.863c2.937.834 2.438 4.043.469 4.38"
      />
    </g>
    <defs>
      <clipPath id="sperm_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSperm;
