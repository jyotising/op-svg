import * as React from "react";
const SvgVolleyball = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M15.905 21.203c5.084-2.16 7.454-8.028 5.3-13.107S13.174.638 8.095 2.797C3.017 4.957.638 10.825 2.797 15.904c2.16 5.079 8.029 7.458 13.108 5.299Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M8 3c-.747 3.505.969 7.098 4 9M6 20c3.485-1.13 5.87-4.34 6-8M22 12.5c-2.725-2.336-7.25-2.298-10-.5"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M8.5 8s5.78-4.246 12-1M10 16.5S3.795 14.01 3.5 7M17 11s.78 7.25-5.14 11.015"
    />
  </svg>
);
export default SvgVolleyball;
