import * as React from "react";
const SvgNoShooting = (props) => (
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
      d="M7.5 6 9 3h6l1.5 3zM20.5 6h-17C2.672 6 2 6.627 2 7.4v12.2c0 .773.672 1.4 1.5 1.4h17c.828 0 1.5-.627 1.5-1.4V7.4c0-.773-.672-1.4-1.5-1.4Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14 10-4 7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 17.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
);
export default SvgNoShooting;
