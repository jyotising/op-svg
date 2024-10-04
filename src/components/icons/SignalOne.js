import * as React from "react";
const SvgSignalOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#signal-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M19.071 19.07A9.97 9.97 0 0 0 22 12a9.97 9.97 0 0 0-2.929-7.071M4.929 4.929A9.97 9.97 0 0 0 2 11.999a9.97 9.97 0 0 0 2.929 7.072M7.55 7.05A6.98 6.98 0 0 0 5.5 12c0 1.933.784 3.683 2.05 4.95M16.45 16.95A6.98 6.98 0 0 0 18.5 12a6.98 6.98 0 0 0-2.05-4.95"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22v-5M12 2v5"
      />
      <path fill="#333" d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </g>
    <defs>
      <clipPath id="signal-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSignalOne;
