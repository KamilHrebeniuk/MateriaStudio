/* eslint-disable */
const pl = require("./pl.json");
const en = require("./en.json");

const i18n = {
  translations: {
    pl,
    en,
  },
  defaultLang: "pl",
  useBrowserDefault: true,
};

module.exports = i18n;
