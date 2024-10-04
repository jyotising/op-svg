import * as React from "react";
const SvgResistor = (props) => (
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
      strokeWidth={2}
      d="M4.929 15.535a1 1 0 0 1 0-1.414l1.475-1.475a1 1 0 0 1 .707-.293h1.293a1 1 0 0 0 .707-.293l2.95-2.95a1 1 0 0 0 .293-.706V7.11a1 1 0 0 1 .292-.707l1.475-1.475a1 1 0 0 1 1.415 0l3.535 3.535a1 1 0 0 1 0 1.414l-1.475 1.475a1 1 0 0 1-.707.293h-1.293a1 1 0 0 0-.707.293l-2.95 2.95a1 1 0 0 0-.293.707v1.293a1 1 0 0 1-.293.707L9.88 19.07a1 1 0 0 1-1.415 0z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.515 20.486 3.182-3.182M17.304 6.697l3.182-3.182"
    />
  </svg>
);
export default SvgResistor;
