import * as React from "react";
const SvgEditMovie = (props) => (
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
      d="M2.5 8.5H9M15 8.5h6.5M15 15.5h6.5M2.5 15.5H9M15 4.5h6.5v15H15M9 4.5H2.5v15H9"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.5 19.5v-4H17v4zM7 19.5v-4H2.5v4zM21.5 8.5v-4H17v4zM2.5 4.5v4H7v-4z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 3.5v2M12 8.5v2M12 13.5v2M12 18.5v2"
    />
  </svg>
);
export default SvgEditMovie;
