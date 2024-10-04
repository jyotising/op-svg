import * as React from "react";
const SvgCableCar = (props) => (
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
      d="M6.64 21a1 1 0 0 1-.908-.58l-2.539-5.5a1 1 0 0 1 0-.84l2.539-5.5A1 1 0 0 1 6.64 8h10.72a1 1 0 0 1 .908.58l2.538 5.5a1 1 0 0 1 0 .84l-2.538 5.5a1 1 0 0 1-.908.58z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 11.5H9v5H4M19.5 11.5h-7V16H20M19 2s-4.75 1.75-8.718 2.197S4 4.5 4 4.5M13 4v4L8.5 4.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.308 9.5-2.115 4.58a1 1 0 0 0 0 .84L4.5 17.75M18.692 9.5l2.115 4.58a1 1 0 0 1 0 .84L19.5 17.75"
    />
  </svg>
);
export default SvgCableCar;
