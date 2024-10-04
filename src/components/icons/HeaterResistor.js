import * as React from "react";
const SvgHeaterResistor = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14.121 5.636-8.485 8.485a1 1 0 0 0 0 1.415l2.828 2.828a1 1 0 0 0 1.414 0l8.486-8.485a1 1 0 0 0 0-1.414l-2.829-2.829a1 1 0 0 0-1.414 0Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.515 20.485 7.05 16.95M16.95 7.05l3.536-3.535M7.404 12.354l4.243 4.242M9.879 9.879l4.243 4.243M12.354 7.404l4.242 4.243M6.344 13.414l7.07-7.07M10.586 17.657l7.071-7.071"
    />
  </svg>
);
export default SvgHeaterResistor;
