/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // The locales you want to support in your app
    locales: ["pl", "en"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "pl",
  },
};

// eslint-disable-next-line
module.exports = nextConfig;
