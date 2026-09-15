import nextConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      // All images on this site are small local static SVGs/screenshots —
      // next/image's optimizer has nothing to do here. Plain <img> is the
      // deliberate choice, not an oversight.
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
