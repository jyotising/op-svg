import * as React from "react";
const SvgTeapot = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.5 6.5c-3.65 0-6.729 2.535-7.689 6h15.38c-.961-3.465-4.04-6-7.69-6M3.5 14.796c0 2.21.833 4.217 2.191 5.704H17.31a8.43 8.43 0 0 0 2.19-5.704c0-.796-.108-1.567-.31-2.296H3.81c-.201.73-.31 1.5-.31 2.296M13.5 6.5v-1a2 2 0 1 0-4 0v1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.5 14s-.992-.066-1.5-1.25C1.25 11 2.5 10 3 8.5c.38-1.141-.397-1.993-.79-2.335A.58.58 0 0 1 2 5.732v-.308c0-.245.177-.452.421-.46.518-.02 1.41.034 2.08.536 1 .75 1.5 3 1.5 3M4.5 20.5h14M19.5 12.5A2.5 2.5 0 1 0 17.208 9"
    />
  </svg>
);
export default SvgTeapot;
