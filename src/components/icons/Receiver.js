import * as React from "react";
const SvgReceiver = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#receiver_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.929 19.07c3.905 3.906 10.237 3.906 14.142 0L4.93 4.93c-3.905 3.905-3.905 10.237 0 14.142M16.95 16.95l2.635-10.993M12 12l6.586-6.586M7.05 7.05l10.993-2.635M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </g>
    <defs>
      <clipPath id="receiver_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReceiver;
