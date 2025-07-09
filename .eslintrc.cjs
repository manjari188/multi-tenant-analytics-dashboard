module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["react", "react-hooks", "jsx-a11y"],
    settings: {
      react: {
        version: "detect"
      }
    }
  }
  