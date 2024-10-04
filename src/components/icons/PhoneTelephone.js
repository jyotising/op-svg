import * as React from "react";
const SvgPhoneTelephone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#phone-telephone_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M23.755 0H.245v23.51h23.51z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={1.959}
        d="M8.57 3.765a.98.98 0 0 1 .856.504l1.198 2.158a.98.98 0 0 1 .02.914L9.49 9.65s.334 1.72 1.734 3.12 3.114 1.728 3.114 1.728l2.309-1.154a.98.98 0 0 1 .914.02l2.164 1.204c.311.172.504.5.504.856v2.485c0 1.265-1.175 2.18-2.374 1.774-2.463-.83-6.286-2.413-8.709-4.836C6.723 12.425 5.141 8.602 4.31 6.14c-.404-1.199.51-2.374 1.775-2.374z"
      />
    </g>
    <defs>
      <clipPath id="phone-telephone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhoneTelephone;
