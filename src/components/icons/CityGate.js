import * as React from "react";
const SvgCityGate = (props) => (
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
      d="M7.5 5.5H16s2.524 1.483 3.5 2c.546.289 2.5.5 2.5.5s-.908.324-1.5.5c-.772.229-2 .5-2 .5h-13s-1.228-.271-2-.5C2.908 8.324 2 8 2 8s1.954-.211 2.5-.5c.976-.517 3-2 3-2Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 5.5 12 2l3 3.5z"
    />
    <path stroke="#333" strokeWidth={2} d="M17.5 9v3M6 9v3" />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2 22 1-10h18l1 10z"
    />
    <path stroke="#333" strokeWidth={2} d="M10 19a2 2 0 1 1 4 0v3h-4z" />
  </svg>
);
export default SvgCityGate;
