import * as React from "react";
const SvgHandDrag = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hand-drag_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M4.792 13.591q-1.287.879-1.287 2.91C3.505 18.53 6 22 8.25 22h5.758c2.203 0 3.54-1.926 3.54-3.47V12.3c0-.897-.725-1.625-1.622-1.627a1.62 1.62 0 0 0-1.622 1.613v.055"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M5.49 14.723V3.83a1.609 1.609 0 0 1 3.218 0v7.993"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.708 12V9.904a1.402 1.402 0 1 1 2.804 0v2.31"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.5 12.33v-1.426a1.402 1.402 0 1 1 2.804 0v1.598"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M5.5 4h15" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18 6.25.833-.75L20.5 4l-1.667-1.5L18 1.75"
      />
    </g>
    <defs>
      <clipPath id="hand-drag_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHandDrag;
