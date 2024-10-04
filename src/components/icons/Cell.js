import * as React from "react";
const SvgCell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cell_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M14.208 10.923q-.088 1.94.987 2.72c1.074.78 3.724.87 5.822-2.72 2.099-3.59.063-5.54-.71-5.865a3.1 3.1 0 0 0-1.555-.244M15.507 14.003q-.916 1.06-.201 2.547c.714 1.487 2.543 1.22 3.458 2.458q.914 1.238.693 2.492"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M4.252 11.82c1.13 1.51 3.831 1.708 6.998.495 1.282-.49 2.64-1.212 4.002-2.172 1.027-.723 1.77-1.46 2.294-2.183 1.886-2.602.912-4.999 0-5.757-.988-.82-2.885-1.158-6.296.314q-.915.394-1.983.973C7.87 4.252 6.717 5.112 5.831 6 3.75 8.088 3.14 10.331 4.252 11.82Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8.123 4.42A7.16 7.16 0 0 0 9.97 8.288c1.013 1.105 2.223 1.81 4.029 2.462M4.99 12.5q-4.368 4.237-2.355 6.418c2.015 2.179 3.909-.604 6.448-.604q2.54 0 3.917 3.186"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M17.546 7.96c-.523.722-1.267 1.46-2.294 2.183-1.361.96-2.72 1.681-4.002 2.172M11.25 2.517q-.915.394-1.983.973C7.87 4.252 6.717 5.112 5.831 6"
      />
    </g>
    <defs>
      <clipPath id="cell_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCell;
