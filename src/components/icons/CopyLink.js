import * as React from "react";
const SvgCopyLink = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#copy-link_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M6 4.964V3.5A1.5 1.5 0 0 1 7.5 2h13A1.5 1.5 0 0 1 22 3.5v13a1.5 1.5 0 0 1-1.5 1.5h-1.491"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.5 5h-14A1.5 1.5 0 0 0 2 6.5v14A1.5 1.5 0 0 0 3.5 22h14a1.5 1.5 0 0 0 1.5-1.5v-14A1.5 1.5 0 0 0 17.5 5Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.22 11.555 11.866 8.8c.726-.726 1.919-.71 2.664.036.746.745.762 1.938.036 2.664l-.955 1.011M6.733 14.374c-.255.255-.783.764-.783.764-.725.726-.745 2.02 0 2.765.746.746 1.939.762 2.665.036l2.582-2.344"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.332 14.164a1.93 1.93 0 0 1-.566-1.237 1.83 1.83 0 0 1 .53-1.427M11.161 12.93c.746.746.762 1.939.036 2.665"
      />
    </g>
    <defs>
      <clipPath id="copy-link_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCopyLink;
