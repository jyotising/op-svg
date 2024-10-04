import * as React from "react";
const SvgReload = (props) => (
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
      d="M11 21.5c-2.363-.884-4.334-3.907-5.32-5.679-.426-.764-.202-1.704.482-2.25a1.915 1.915 0 0 1 2.55.14l.788.789V8.75a1.25 1.25 0 1 1 2.5 0v3a1.25 1.25 0 0 1 2.5 0v1a1.25 1.25 0 0 1 2.5 0v1a1.25 1.25 0 0 1 2.5 0v3.934c0 .535-.132 1.064-.44 1.501-.513.726-1.432 1.832-2.56 2.315-1.75.75-3.315.817-5.5 0M18 6l-2 2-2-2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7 6.5a4.5 4.5 0 1 1 8.924.826"
    />
  </svg>
);
export default SvgReload;
