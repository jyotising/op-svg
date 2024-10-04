import * as React from "react";
const SvgTopbuzz = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#topbuzz_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9.452 9.084-4.29-.912a.516.516 0 0 1-.397-.612l.966-4.544a.516.516 0 0 1 .612-.397l14.64 3.112c.28.06.457.333.398.612l-.966 4.544a.516.516 0 0 1-.612.397l-4.253-.904q-.291-.062-.344.192l-1.985 9.339a.516.516 0 0 1-.613.397l-4.543-.966a.516.516 0 0 1-.398-.612l1.986-9.34q.053-.252-.2-.306Z"
      />
    </g>
    <defs>
      <clipPath id="topbuzz_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTopbuzz;
