import * as React from "react";
const SvgAudit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#audit_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m4 18 .002-3.979a.5.5 0 0 1 .5-.5h5.001c.461 0 .459-.408.459-1.381S7.51 10.347 7.51 6.926c0-3.42 2.539-4.426 4.649-4.426s4.408 1.006 4.408 4.426-2.438 3.965-2.438 5.214c0 1.248 0 1.381.39 1.381h4.98a.5.5 0 0 1 .5.5V18z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 21h16"
      />
    </g>
    <defs>
      <clipPath id="audit_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAudit;
