import * as React from "react";
const SvgFingernail = (props) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="m19 4.736.172.528h.555l-.45.326.172.528L19 5.792l-.45.326.172-.528-.449-.326h.555z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 9.5a3 3 0 1 0-6 0v6a3 3 0 1 0 6 0zM9 12.5c-1 0-2.5 1.059-2.5 3v4.892M15 12.5c1 0 2.5 1.059 2.5 3v4.75"
    />
  </svg>
);
export default SvgFingernail;
