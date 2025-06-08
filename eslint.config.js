import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
    globalIgnores(["dist", "external", "node_modules"]),
    {
        files: ["**/*.{js,jsx}"],
        extends: [
            js.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
            prettier,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        plugins: { react },
        rules: {
            "import/no-anonymous-default-export": "off",
            "no-console": "warn",
            "no-control-regex": "off",
            "no-unused-vars": "off",
            "react-hooks/exhaustive-deps": "off",
            "react/no-unescaped-entities": [
                "warn",
                {
                    forbid: [">", "}"],
                },
            ],
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
        },
    },
]);
