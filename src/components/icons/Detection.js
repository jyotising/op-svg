import * as React from "react";
const SvgDetection = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#detection_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.225 17.425 5.22 15.75l.257-2.935 3.99-3.348 4.388-3.683 1.596-1.339a3.646 3.646 0 1 1 4.687 5.586l-1.596 1.34-4.388 3.682-3.99 3.348-2.934-.256-1.993 1.673a1.564 1.564 0 0 1-2.012-2.394Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m11.718 4.859 7.386 8.802M9.288 14.5 12.15 12"
      />
    </g>
    <defs>
      <clipPath id="detection_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDetection;
