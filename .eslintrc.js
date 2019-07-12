module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    plugins: ["@typescript-eslint", "react-hooks"],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "semicolon": [false, "never"],
        "quotemark": [true, "single"],
        "indent": [true, "spaces", 2],
        "object-literal-sort-keys": false,
        "no-shadowed-variable": false,
        "max-line-length": false,
        "prefer-for-of": false,
        "no-empty": false,
        "jsx-boolean-value": false,
        "no-console": [true, "log"],
        "member-access": false,
        "max-classes-per-file": false,
        "jsx-no-multiline-js": false,
        "member-ordering": false,
    }
};