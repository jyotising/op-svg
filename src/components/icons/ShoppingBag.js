import * as React from "react";
const SvgShoppingBag = (props) => (
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
      d="M2.5 8.5h19l-2.1 13H4.6zM17.5 8.5c0-3.314-2.463-6-5.5-6s-5.5 2.686-5.5 6"
    />
    <path fill="#333" d="M8.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 16.5s1 1.5 3 1.5 3-1.5 3-1.5"
    />
    <path fill="#333" d="M15.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgShoppingBag;
