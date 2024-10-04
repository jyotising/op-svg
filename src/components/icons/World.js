import * as React from "react";
const SvgWorld = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#world_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M2 10.42q2.26-1.068 3.345-.297c1.083.77 1.22 3.909 3.684 2.409s-1.056-2.112-.291-4.285c.764-2.174 3.266-.485 3.515-2.866q.248-2.38-5.695-1.822"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M18 4q-4.285 3.74-2.994 4.519c1.292.777 1.84-.317 3.417 0s1.236 2.454.406 2.454c-.829 0-5.124-.547-4.908 1.96.217 2.506 2.8 2.877 2.8 4.278q0 1.4-1.715 4.286M3.052 16.464q.684-.3 1.028-.438 2.885-1.165 4.282-.55c1.646.727 1.013 2.194 1.529 2.735.515.54 1.803.383 1.803 1.411q0 1.029-.69 2.323"
      />
    </g>
    <defs>
      <clipPath id="world_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorld;
