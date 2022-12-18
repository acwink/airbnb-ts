module.exports = {
  root: true,
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    indent: "off",
    // "@typescript-eslint/indent": ["error", 2],
    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double"],
    semi: "off",
    "@typescript-eslint/semi": ["error"],
    "ts-styled-plugin": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
