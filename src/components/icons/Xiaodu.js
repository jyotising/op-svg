import * as React from "react";
const SvgXiaodu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#xiaodu_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.072 10.54c.177-1.893.266-2.84 1.256-3.852s2.08-1.14 4.259-1.394C9.002 5.129 10.565 5 12 5s2.998.129 4.413.294c2.18.254 3.269.38 4.26 1.394.99 1.012 1.078 1.959 1.255 3.852.045.478.072.97.072 1.46s-.027.982-.072 1.46c-.177 1.893-.266 2.84-1.256 3.852s-2.08 1.14-4.259 1.394C14.998 18.871 13.435 19 12 19s-2.998-.129-4.413-.294c-2.18-.254-3.269-.38-4.259-1.393s-1.079-1.96-1.256-3.853A16 16 0 0 1 2 12c0-.49.027-.982.072-1.46M8 9.5v5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 9.5 14 12l2.5 2.5"
      />
    </g>
    <defs>
      <clipPath id="xiaodu_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgXiaodu;
