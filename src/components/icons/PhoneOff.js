import * as React from "react";
const SvgPhoneOff = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#phone-off_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.339 14.456c.613.26 1.048.344 1.048.344l2.357-1.178a1 1 0 0 1 .933.02l2.21 1.229a1 1 0 0 1 .513.874v2.536c0 1.292-1.201 2.225-2.425 1.812-1.874-.633-4.518-1.69-6.767-3.212M9.722 10.75c-.214-.534-.285-.9-.285-.9l1.179-2.357a1 1 0 0 0-.02-.932L9.372 4.357a1 1 0 0 0-.874-.514H5.962c-1.292 0-2.225 1.2-1.812 2.425.606 1.795 1.603 4.297 3.023 6.482zM20 4 4 20"
      />
    </g>
    <defs>
      <clipPath id="phone-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPhoneOff;
