import * as React from "react";
const SvgNutrition = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#nutrition_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 21h2.977q.063-2.052.602-2.257C19.334 17.318 22 13.717 22 9.5H2c0 4.126 2.552 7.662 6.178 9.147q.57.233.85 2.353z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M7.222 13.01q.27.892.713 1.472.435.567 1.07 1.052M20.25 9.498a8.6 8.6 0 0 0-1.941-3.717M16.1 4.01a8.4 8.4 0 0 0-2.024-.807zM11.026 3c-3.561.411-6.453 3.049-7.275 6.5z"
      />
    </g>
    <defs>
      <clipPath id="nutrition_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNutrition;
