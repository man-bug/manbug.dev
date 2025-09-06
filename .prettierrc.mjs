/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    tabWidth: 4,
    singleQuote: false,
    trailingComma: "es5",
    semi: true,
    printWidth: 90,
    plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
