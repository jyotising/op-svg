import * as React from "react";
const SvgPaint = (props) => (
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
      strokeWidth={1.92}
      d="m8.155 11.333 4.752 4.752M8.155 11.333l-4.073 4.073a3.36 3.36 0 1 0 4.752 4.752l4.073-4.073M8.155 16.085l-2.037 2.036M12.907 16.085l7.155-3.088c1.29-.556 1.828-2.101 1.001-3.237-1.998-2.744-4.693-5.15-6.68-6.623-1.1-.814-2.56-.307-3.1.948l-3.128 7.248z"
    />
  </svg>
);
export default SvgPaint;
