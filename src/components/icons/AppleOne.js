import * as React from "react";
const SvgAppleOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#apple-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 20.51c1.216 0 1.716.655 2.367.8.652.146 1.199.187 1.759-.06 1.109-.489 1.785-1.071 2.606-1.94C20.252 17.697 21 15.481 21 12.513c0-2.967-.8-4.5-2.033-5.504s-1.948-1.195-3.44-1.003c-1.49.192-2.302 1.794-3.523 1.794-1.22 0-2.707-1.58-4.001-1.794C6.709 5.792 6 6.007 4.88 7.01S3 9.575 3 12.514c0 2.94.776 5.119 2.296 6.73.82.87 1.469 1.517 2.578 2.006.56.247 1.14.206 1.768.06.63-.145 1.13-.8 2.358-.8Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M12.004 7.801q.59-5.8 5.001-5.801.405 1.221.21 2.363-.094.543-.577 1.548M7.114 13a5.3 5.3 0 0 0 0 2.078q.208 1.07.884 1.65"
      />
    </g>
    <defs>
      <clipPath id="apple-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAppleOne;
