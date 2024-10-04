import * as React from "react";
const SvgPlayBasketball = (props) => (
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
      d="M16 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="m11.5 20 4.055-1.03a.5.5 0 0 0 .21-.86L11.5 14.5l2-4-5.205-1.87a1 1 0 0 1-.565-.51L5.5 4"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="m11.5 14.5-3.485 4.395a1 1 0 0 1-.385.285L2.5 21M13.5 10.5l4.95 1.395c.235.07.44.22.57.425L21 15.5"
    />
    <path fill="#333" d="M9 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </svg>
);
export default SvgPlayBasketball;
