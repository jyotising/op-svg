import * as React from "react";
const SvgFishing = (props) => (
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
      d="M10.494 17.276 6 14.5h13.5a1.5 1.5 0 1 1 0 3h-8.218a1.5 1.5 0 0 1-.788-.224"
    />
    <path
      stroke="#333"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M15 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M17 16c2-1.5 1.25-4.783.75-5.75S16.275 8 16.275 8s-.525 0-1.025.5c-1.34 1.34-2.25 3-3.5 3s-3-1-3-1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 7.5C8.202 5.252 6.808 4.217 4 4.03c-.55-.036-1 .418-1 .97v9M3.5 21.5c2 0 1.469-1 3-1s1 1 2.75 1 1.25-1 3-1 1.469 1 3 1 .75-1 2.5-1 1.281 1 3.25 1"
    />
  </svg>
);
export default SvgFishing;
