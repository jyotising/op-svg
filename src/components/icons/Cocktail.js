import * as React from "react";
const SvgCocktail = (props) => (
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
      d="M17.9 6.5H16L10.5 16 4.9 6.5H3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12.876 12.798a5.818 5.818 0 1 0-2.219-7.923"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 22H8M10.5 22v-6M6 8s1-1 2.5-1 2.5 1.5 4 1.5S15 8 15 8"
    />
  </svg>
);
export default SvgCocktail;
