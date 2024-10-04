import * as React from "react";
const SvgLoadingTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#loading-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 2v4M19.071 4.929l-2.828 2.828M22 12h-4M19.071 19.07l-2.828-2.828M12 22v-4M4.929 19.07l2.828-2.828M2 12h4M4.929 4.929l2.828 2.828M8.173 2.76 8.94 4.61M2.761 8.173l1.848.765M2.761 15.827l1.848-.765M8.173 21.238l.766-1.847M15.827 21.238l-.765-1.847M21.239 15.827l-1.848-.765M21.239 8.173l-1.848.765M15.827 2.76l-.765 1.849"
      />
    </g>
    <defs>
      <clipPath id="loading-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoadingTwo;
