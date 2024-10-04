import * as React from "react";
const SvgBrain = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#brain_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.518 22q-.736-2.397-2.217-3.573c-1.483-1.177-3.839-.446-4.709-1.66s.61-3.445 1.13-4.762c.518-1.317-1.991-1.783-1.698-2.157q.293-.375 3.804-2.158Q6.826 2 13.2 2C19.572 2 22 7.403 22 10.84c0 3.436-2.94 7.138-7.128 7.936q-.561.819 1.62 3.224"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 7.25q-.49 1.9.291 2.67.782.768 2.665 1.005-.428 2.45 1.041 2.3 1.469-.152 1.765-1.22 2.296.645 2.488-1.08c.193-1.725-.738-3.101-1.119-3.101s-1.37-.047-1.37-.574-1.153-.825-2.195-.825-.414-.702-1.844-.425q-1.431.278-1.722 1.25Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M15.25 12.75c-.508.316-1.206.84-1.5 1.25-.734 1.025-1.33 1.649-1.46 2.304"
      />
    </g>
    <defs>
      <clipPath id="brain_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrain;
