import * as React from "react";
const SvgCustomer = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#customer_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M4.305 18.493a10.06 10.06 0 0 1-2.644-6.797c0-5.632 4.648-10.198 10.382-10.198s10.382 4.566 10.382 10.198c0 3.982-2.325 7.43-5.713 9.109a15 15 0 0 1-6.95 1.693c-3.075 0-5.933-.92-8.303-2.494 0 0 1.589-.173 2.845-1.51m12.615-1.75a6.877 6.877 0 0 0-4.48-11.73c-.05-1.224.609-2.05.612-2.054a9.86 9.86 0 0 0-5.114 2.719 9.86 9.86 0 0 0-2.377 3.82q.103-.273.23-.538-.147.372-.266.762a6.878 6.878 0 0 0 11.394 7.02"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8.565 11.172v1.424a1.029 1.029 0 1 0 2.057 0v-1.424a1.029 1.029 0 1 0-2.057 0M13.657 11.172v1.424a1.029 1.029 0 1 0 2.057 0v-1.424a1.029 1.029 0 0 0-2.058 0"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="customer_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCustomer;
