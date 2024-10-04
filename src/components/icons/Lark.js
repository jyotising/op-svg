import * as React from "react";
const SvgLark = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#lark_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M20.536 2.997 1.656 8.26l4.537 4.647 4.207.074 4.842-4.72q-.192-.394-.193-.66c0-.396.156-.71.399-.933q.621-.574 1.497-.172zM21.051 3.364l-5.262 18.88-4.647-4.537-.073-4.207 4.687-4.76q.382.274.832.248c.451-.025.743-.297.88-.458.137-.16.297-.427.284-.824a1.3 1.3 0 0 0-.261-.732z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="lark_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLark;
