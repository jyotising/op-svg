import * as React from "react";
const SvgPhoneOutgoing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#phone-outgoing_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H1.412v22.588H24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H1.412v22.588H24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.882}
        d="m14.588 9.412 6.118-5.883M14.588 3.294h6.118v6.118"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={1.882}
        d="M8.177 4.61c.342 0 .657.185.823.484l1.15 2.074c.152.271.159.6.02.877l-1.11 2.219s.322 1.652 1.667 2.997 2.992 1.661 2.992 1.661l2.218-1.109a.94.94 0 0 1 .878.02l2.08 1.156c.299.166.484.48.484.822V18.2c0 1.215-1.13 2.094-2.281 1.705-2.366-.798-6.04-2.318-8.367-4.646S4.883 9.256 4.084 6.89c-.388-1.152.49-2.282 1.706-2.282z"
      />
    </g>
    <defs>
      <clipPath id="phone-outgoing_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhoneOutgoing;
