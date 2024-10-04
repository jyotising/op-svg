import * as React from "react";
const SvgWingsuitFlying = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M12 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M12 10c-4.355 0-8 3.64-8 8h3.5v4h9v-4H20c.005-4.355-3.645-8-8-8M7.5 18v-6.5M16.5 18v-6.5M12 22V10"
    />
  </svg>
);
export default SvgWingsuitFlying;
