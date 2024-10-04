import * as React from "react";
const SvgCoupon = (props) => (
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
      d="M2 9.657V4.5h20v5.156a2.75 2.75 0 0 0-1.818 2.594A2.75 2.75 0 0 0 22 14.844V20H2v-5.156a2.75 2.75 0 0 0 1.818-2.594A2.75 2.75 0 0 0 2 9.656Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.5 8 2.5 2.5L14.5 8M9 11h6M9 14.083h6M12 11v6"
    />
  </svg>
);
export default SvgCoupon;
