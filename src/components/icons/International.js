import * as React from "react";
const SvgInternational = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#international_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M3 15.492q1.974.792 2.842 0c.868-.791.119-3.193 1.335-3.856s3.067 2.274 4.798 1.308-.163-3.543 1.039-4.588c1.2-1.045 2.763.134 3.036-1.613s-1.274-.99-1.57-2.64q-.298-1.65 0-1.736M14.51 21.676Q13.106 20.237 13.5 19c.393-1.236 1.042-1.162 1.325-1.927.284-.764-.516-1.852 1.258-2.782q1.775-.93 4.88 2.156"
      />
    </g>
    <defs>
      <clipPath id="international_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInternational;
