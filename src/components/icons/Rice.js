import * as React from "react";
const SvgRice = (props) => (
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
      strokeWidth={2}
      d="M12 19c4.694 0 8.5-3.53 8.5-8.5h-17c0 4.97 3.806 8.5 8.5 8.5ZM15 10.5c0-2.761-2.127-5-4.75-5s-4.75 2.239-4.75 5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M19.5 10.5c0-1.657-1.383-3-3.089-3-.722 0-1.385.24-1.911.643"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="m16.5 7.5 1.5-5M19 9l2-3.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 18.5-1 3h8l-1-3"
    />
  </svg>
);
export default SvgRice;
