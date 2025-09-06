import { importOrderConfig } from "@manbug/config/eslint/import-order.js";
import { nextJsConfig } from "@manbug/config/eslint/next.js";

/** @type {import("eslint").Linter.Config} */
export default [
    ...nextJsConfig,
    ...importOrderConfig,
];
