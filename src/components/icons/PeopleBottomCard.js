import * as React from "react";
const SvgPeopleBottomCard = (props) => (
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
      d="M22 19.5H2v-15h7.5L12 2l2.5 2.5H22z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M16.5 16.5c0-2.21-2.015-4-4.5-4s-4.5 1.79-4.5 4"
    />
  </svg>
);
export default SvgPeopleBottomCard;
