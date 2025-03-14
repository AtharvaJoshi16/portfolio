import * as React from "react";
const SvgTurbo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    viewBox="10 0 120 28"
    {...props}
  >
    <defs>
      <linearGradient
        id="turbo_svg__c"
        x1={15.023}
        x2={3.644}
        y1={4.006}
        y2={15.385}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF" />
        <stop offset={1} stopColor="#FF1E56" />
      </linearGradient>
      <linearGradient id="turbo_svg__a">
        <stop offset="0%" />
        <stop offset="25%" stopColor="#fff" />
        <stop offset="85%" stopColor="#fff" />
        <stop offset="100%" />
      </linearGradient>
      <mask id="turbo_svg__b">
        <path
          fill="url(#turbo_svg__a)"
          d="M0 0h46v26H0z"
          transform="translate(-8)"
        />
      </mask>
    </defs>
    <g mask="url(#turbo_svg__b)" transform="translate(8)">
      <g
        className="turbo_svg__relative turbo_svg__z-0"
        style={{
          transform: "none",
          transformOrigin: "13.9488px 13.9398px",
        }}
      >
        <path
          fill="#fff"
          d="M13.94 6.422c-4.146 0-7.518 3.372-7.518 7.518 0 4.145 3.372 7.518 7.518 7.518 4.145 0 7.518-3.373 7.518-7.518 0-4.146-3.373-7.518-7.518-7.518m0 11.408a3.89 3.89 0 1 1-.001-7.78 3.89 3.89 0 0 1 0 7.78"
          className="turbo_svg__fill-black turbo_svg__dark:fill-white"
        />
        <path
          fill="url(#turbo_svg__c)"
          fillRule="evenodd"
          d="M14.57 5.187V2.38c6.1.326 10.948 5.377 10.948 11.56 0 6.182-4.847 11.232-10.948 11.56v-2.807c4.547-.325 8.148-4.125 8.148-8.753s-3.601-8.428-8.148-8.753M7.31 19.68a8.74 8.74 0 0 1-2.122-5.11H2.38a11.53 11.53 0 0 0 2.941 7.096l1.987-1.986zm6 5.82v-2.807a8.73 8.73 0 0 1-5.112-2.121l-1.986 1.986a11.53 11.53 0 0 0 7.096 2.942z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <g
      fill="#fff"
      className="turbo_svg__relative turbo_svg__z-10 turbo_svg__header-logo_desktopLogo__OlA3C"
    >
      <path
        d="M56.262 11.294v-3.05h-14.7v3.05h5.55v10.143h3.601V11.294zm8.306 10.346c4.52 0 7-2.297 7-6.083V8.244h-3.6v6.964c0 2.113-1.103 3.308-3.4 3.308s-3.4-1.195-3.4-3.308V8.244h-3.601v7.313c0 3.786 2.48 6.083 7 6.083m12.515-4.576h3.583l2.83 4.373h4.134l-3.197-4.759c1.8-.643 2.903-2.076 2.903-4.024 0-2.83-2.113-4.41-5.329-4.41H73.48v13.193h3.602zm0-2.848v-2.958h4.74c1.269 0 1.967.55 1.967 1.488 0 .882-.698 1.47-1.966 1.47zm11.928 7.221h9.427c2.94 0 4.63-1.396 4.63-3.73 0-1.562-.992-2.627-2.168-3.105.809-.386 1.801-1.305 1.801-2.756 0-2.334-1.654-3.602-4.575-3.602H89.01zm3.455-8.03v-2.241h5.292c.993 0 1.544.386 1.544 1.12 0 .736-.551 1.122-1.544 1.122zm0 2.702h5.623c.974 0 1.507.477 1.507 1.194s-.533 1.194-1.507 1.194h-5.623zm19.408-8.085c-4.612 0-7.938 2.885-7.938 6.817s3.326 6.817 7.938 6.817 7.92-2.885 7.92-6.817-3.308-6.817-7.92-6.817m0 3.123c2.426 0 4.245 1.434 4.245 3.694s-1.819 3.693-4.245 3.693c-2.425 0-4.244-1.433-4.244-3.693s1.819-3.694 4.244-3.694"
        className="turbo_svg__fill-black turbo_svg__dark:fill-white"
      />
    </g>
  </svg>
);
export default SvgTurbo;
