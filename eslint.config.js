import { baseConfig } from "@manbug/config/eslint/base.js";

/**
 * Root ESLint configuration for monorepo
 * Only applies to root-level files, not apps/packages
 * @type {import("eslint").Linter.Config[]}
 */
export default [
    ...baseConfig,
    {
        files: ["**/*.{js,ts,jsx,tsx}"],
        ignores: [
            "apps/**",
            "packages/**",
            "node_modules/**",
            "dist/**",
            ".next/**",
            "build/**",
        ],
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json",
            },
        },
    },
];
