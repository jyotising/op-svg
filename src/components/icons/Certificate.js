import * as React from "react";
const SvgCertificate = (props) => (
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
      d="M13 18H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4M6 7h12M6 10.5h3M6 14h2"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M15 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 20 2 1v-5.264s-.57.764-2 .764-2-.75-2-.75V21z"
    />
  </svg>
);
export default SvgCertificate;
