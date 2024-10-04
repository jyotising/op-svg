import * as React from "react";
const SvgCarrot = (props) => (
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
      d="M7.812 10.341C7.145 7.624 9.202 5 12 5s4.855 2.624 4.188 5.341l-2.549 10.374a1.688 1.688 0 0 1-3.278 0z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 2v2.75M15.05 2.796 13.688 4.42M9 2.796l1.364 1.625M8 9.5h3M12.5 13h3M9.5 17h2"
    />
  </svg>
);
export default SvgCarrot;
