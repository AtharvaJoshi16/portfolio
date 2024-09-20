import * as React from "react";
const SvgReactFlow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    width={72}
    height={72}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M35 3H25a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
      data-path="animation"
    />
    <path
      stroke="#1A192B"
      strokeWidth={2}
      d="M35 23H25a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V25a2 2 0 0 0-2-2ZM15 23H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V25a2 2 0 0 0-2-2ZM15 3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"
    />
    <path fill="#fff" d="M17 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fill="#fff"
      d="M23 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6M30 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6M30 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6M17 33a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
    <path fill="#fff" d="M23 33a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fill="#1A192B"
      d="M30 25a2 2 0 1 0 0-4 2 2 0 0 0 0 4M17 32a2 2 0 1 0 0-4 2 2 0 0 0 0 4M23 32a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
    <path
      fill="#1A192B"
      d="M22 9.5h-4v1h4zM29.5 17.5v4h1v-4zM22 29.5h-4v1h4z"
      opacity={0.35}
    />
    <path fill="#1A192B" d="M17 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    <path
      fill="currentColor"
      d="M23 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4M30 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
);
export default SvgReactFlow;
