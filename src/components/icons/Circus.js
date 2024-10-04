import * as React from "react";
const SvgCircus = (props) => (
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
      d="M4.5 13s-.038.393-.5 2.5C3.51 17.732 2 22 2 22h20s-1.51-4.268-2-6.5c-.462-2.107-.5-2.5-.5-2.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14c.5 4.5-2 8-2 8M14 14c-.5 4.5 2 8 2 8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 9s3.796-.027 5.5-.5C9.933 8.103 12 7 12 7s1.912 1.097 3.25 1.5C17.036 9.037 21 9 21 9l-.5 3.5s-2 1-2.5 1-1.5-1-2-1-1.75 1.5-2 1.5-1.5-1.5-2-1.5-1.5 1.75-2 1.75-1.5-1.75-2-1.75c-.099 0-.237.04-.395.102-1.071.426-2.244.642-3.314.214L3.5 12.5z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M12 2.5v5" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 5.5v-3s-.75 1.5-3 0-3 0-3 0v3s.75-1.5 3 0 3 0 3 0"
    />
  </svg>
);
export default SvgCircus;
