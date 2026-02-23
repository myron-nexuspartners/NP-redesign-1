export default [
  {
    files: ["js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2015,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        setTimeout: "readonly",
        String: "readonly",
        Date: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "eqeqeq": "error",
      "no-var": "off"
    }
  }
];
