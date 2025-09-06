import importPlugin from "eslint-plugin-import";

/**
 * Import order plugin configuration
 *
 * @type {import("eslint").Linter.Config}
 * */
export const importOrderConfig = [
    {
        plugins: {
            import: importPlugin,
        },
        rules: {
            "import/order": [
                "error",
                {
                    groups: [
                        ["builtin"],
                        ["external"],
                        ["internal"],
                        ["parent", "sibling", "index", "object", "type"],
                    ],
                    pathGroupsExcludedImportTypes: [],
                    pathGroups: [
                        {
                            pattern: "@manbug/**",
                            group: "builtin",
                        },
                        {
                            pattern: "react",
                            group: "external",
                            position: "before",
                        },
                        {
                            pattern: "next/**",
                            group: "external",
                            position: "before",
                        },
                        {
                            pattern: "hono/**",
                            group: "external",
                            position: "before",
                        },
                        {
                            pattern: "@hono/**",
                            group: "external",
                            position: "before",
                        },
                        {
                            pattern: "@/**",
                            group: "internal",
                            position: "before",
                        },
                    ],
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                    "newlines-between": "always",
                },
            ],
        },
    },
    {
        ignores: ["dist/**"],
    },
];
