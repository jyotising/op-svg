import * as React from "react";
const SvgLifebuoy = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#lifebuoy_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.071 19.071c3.905-3.905 3.905-10.237 0-14.142s-10.237-3.905-14.142 0-3.905 10.237 0 14.142 10.237 3.905 14.142 0M16.243 7.757a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19.071 19.07-2.828-2.828M4.929 19.07l2.828-2.828M4.929 4.929l2.828 2.828M19.071 4.929l-2.828 2.828M16.243 16.243a6 6 0 1 0-8.486-8.486 6 6 0 0 0 8.486 8.486"
      />
    </g>
    <defs>
      <clipPath id="lifebuoy_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLifebuoy;
