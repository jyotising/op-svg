import * as React from "react";
const SvgHealth = (props) => (
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
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.65 6C12.739 6 12 6.717 12 7.602c0 1.603 1.95 3.06 3 3.398 1.05-.339 3-1.795 3-3.398C18 6.717 17.261 6 16.35 6c-.558 0-1.051.269-1.35.68A1.66 1.66 0 0 0 13.65 6"
    />
  </svg>
);
export default SvgHealth;
