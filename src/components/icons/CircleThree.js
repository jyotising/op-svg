import * as React from "react";
const SvgCircleThree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#circle-three_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.452 6.964a5 5 0 0 1-8.904 0A7.49 7.49 0 0 0 4.596 14.2q.2-.016.404-.016a5 5 0 0 1 4.897 6.016 7.5 7.5 0 0 0 2.103.3c.73 0 1.436-.105 2.103-.3a5 5 0 0 1 5.301-6 7.49 7.49 0 0 0-2.953-7.238"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4.5 21.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M19.5 21.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="circle-three_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCircleThree;
