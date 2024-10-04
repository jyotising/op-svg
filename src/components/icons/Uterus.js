import * as React from "react";
const SvgUterus = (props) => (
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
      d="M16 9c-.462 3-1.5 5.75-3.75 5.75s-3-2.5-3.75-5.75 0-6 3.75-6S16.46 6 16 9Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 13.5v8M14.5 13.5v8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.25 6c-.885-.772-1.93-.835-3.207-.747C3.128 5.383 2 6.846 2 9zM2 9c0 2.155 1.448 4.092 2.944 3.649 1.496-.444 1.287-2.194.587-3.014S2.911 8.502 2 9ZM16.25 6.25c.875-.816 1.766-1.085 3.17-.998C21.526 5.383 22 6.824 22 8.978zM22 8.978c0 2.154-.826 4.113-2.47 3.67s-1.415-2.193-.646-3.014c.77-.82 2.115-1.155 3.116-.656Z"
    />
  </svg>
);
export default SvgUterus;
