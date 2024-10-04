import * as React from "react";
const SvgStamp = (props) => (
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
      d="m2.5 4.4 1.9-1.9 1.9 1.425L8.2 2.5l1.9 1.425L12 2.5l1.9 1.425L15.8 2.5l1.9 1.425L19.6 2.5l1.9 1.9-1.425 1.9L21.5 8.2l-1.425 1.9L21.5 12l-1.425 1.9 1.425 1.9-1.425 1.9 1.425 1.9-1.9 1.9-1.9-1.425-1.9 1.425-1.9-1.425L12 21.5l-1.9-1.425L8.2 21.5l-1.9-1.425L4.4 21.5l-1.9-1.9 1.425-1.9L2.5 15.8l1.425-1.9L2.5 12l1.425-1.9L2.5 8.2l1.425-1.9z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
    />
  </svg>
);
export default SvgStamp;
