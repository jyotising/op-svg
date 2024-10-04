import * as React from "react";
const SvgVigo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#vigo_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22.063c4.764 0 8.625-3.808 8.625-8.505 0-1.153-.158-2.25-.495-3.296-.195-.604-.352-.892-.583-1.447-.232-.556-.54-1.025-.89-1.496s-1.034-1.4-1.507-1.586c0 .731-1.436 3.284-1.987 3.413-.552.128.407-2.685-.814-4.609-1.222-1.924-3.196-3.187-3.196-2.322s-.547 2.316-1.097 3.036S8.613 6.589 7.99 6.879s-.397-1.454-.863-1.146c-.47.31-1.14 1.176-1.49 1.719-1.232 1.9-2.263 3.757-2.263 6.106 0 4.697 3.862 8.505 8.625 8.505Z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.648 11.866v4.368a.939.939 0 0 0 1.431.8l4.193-2.584a.47.47 0 0 0 0-.8l-4.193-2.584a.939.939 0 0 0-1.431.8Z"
      />
    </g>
    <defs>
      <clipPath id="vigo_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVigo;
