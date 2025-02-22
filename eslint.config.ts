 
import pluginVue from 'eslint-plugin-vue';
import {defineConfigWithVueTs, vueTsConfigs} from '@vue/eslint-config-typescript';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['src/app/**/*.{ts,mts,tsx,vue}', 'src/**/*.{ts,mts,tsx,vue}'],
    },

    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/out/**', '**/.vite/**', '**/dist-ssr/**', '**/coverage/**'],
    },

    pluginVue.configs['flat/recommended'],
    vueTsConfigs.all,

    {
        rules: {
            'vue/component-name-in-template-casing': ['error', 'kebab-case', {
                "registeredComponentsOnly": false,
                "ignores": [],
            }],
            '@typescript-eslint/no-magic-numbers': 'warn',
            '@typescript-eslint/prefer-readonly-parameter-types': 'off',
            'semi': ["error", "always"],
            "comma-dangle": ["error", {
                "arrays": "never",
                "objects": "always",
                "imports": "never",
                "exports": "always",
                "functions": "never",
            }],
            "@typescript-eslint/no-duplicate-enum-values": "error",
            "@typescript-eslint/prefer-enum-initializers": "error",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    "selector": "interface",
                    "prefix": ["I"],
                    "format": ["PascalCase"],
                },
                {
                    "selector": "enum",
                    "format": ["PascalCase"],
                    "prefix": ["I"],
                },
                {
                    "selector": "typeAlias",
                    "format": ["PascalCase"],
                    // "prefix": ["I"],
                },
                {
                    "selector": "enumMember",
                    "format": ["UPPER_CASE"],
                }
            ],
        },
    }
);
