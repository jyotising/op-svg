import * as React from "react";
const SvgModify = (props) => (
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
      d="M10.036 4.793 7.914 2.672a1 1 0 0 0-1.414 0L3.672 5.5a1 1 0 0 0 0 1.414l2.12 2.122M14.464 18.708l2.122 2.12a1 1 0 0 0 1.414 0L20.828 18a1 1 0 0 0 0-1.414l-2.121-2.121M20.839 5.99 18.01 3.16a1 1 0 0 0-1.414 0L3.161 16.596a1 1 0 0 0 0 1.415l2.829 2.828a1 1 0 0 0 1.414 0L20.839 7.404a1 1 0 0 0 0-1.414"
    />
    <path
      fill="#333"
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgModify;
