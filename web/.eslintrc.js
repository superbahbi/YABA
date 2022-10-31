module.exports = {
  extends: [
    "eslint:recommended",
    "next",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  rules: {
    "@next/next/no-html-link-for-pages": ["error", "web/pages/"],
  },
};
