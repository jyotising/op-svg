import * as React from "react";
const SvgZoom = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 21.5c-2.363-.884-4.334-3.907-5.32-5.679-.426-.764-.202-1.704.482-2.25a1.915 1.915 0 0 1 2.55.14l.788.789v-4.25a1.25 1.25 0 0 1 2.5 0v-2a1.25 1.25 0 1 1 2.5 0v4a1.25 1.25 0 0 1 2.5 0v1.5a1.25 1.25 0 0 1 2.5 0v3.934c0 .535-.132 1.064-.44 1.501-.513.726-1.432 1.832-2.56 2.315-1.75.75-3.315.817-5.5 0M6.5 4h11M8.5 6l-2-2 2-2M15.5 2l2 2-2 2"
    />
  </svg>
);
export default SvgZoom;
