import * as React from "react";
const SvgCoronavirus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#coronavirus_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.817 17.75A10 10 0 0 0 6.5 20.353M13.934 21.813a10.1 10.1 0 0 1-3.868 0M21.775 14.121a10 10 0 0 0 .009-4.2M20.183 6.25A10 10 0 0 0 17.5 3.647M10.078 2.185a10 10 0 0 1 3.845 0M3.817 6.25A10 10 0 0 1 6.5 3.647M20.25 17.647a10 10 0 0 1-2.683 2.603M8 12H2M5 19l4.172-4.172M12 16v6M19 19l-4.172-4.172M16 12h6M19 5l-4.172 4.172M12 8V2M5 5l4.172 4.172M2.216 9.921a10 10 0 0 0 0 4.158M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      />
    </g>
    <defs>
      <clipPath id="coronavirus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoronavirus;
