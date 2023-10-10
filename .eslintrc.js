module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'next',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        //'plugin:prettier/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:tailwindcss/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'tailwindcss', 'prettier'],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        emitWarning: true,
    },
    ignorePatterns: ['modifyVars.js'],
    settings: {
        react: {
            version: 'detect',
        },
        tailwindcss: {
            config: 'tailwind.config.js',
            cssFiles: ['**/*.css', '!**/node_modules', '!**/.*', '!**/dist', '!**/build'],
        },
    },
    rules: {
        '@next/next/no-html-link-for-pages': [0],

        //'prettier/prettier': [2],

        /*'@typescript-eslint/no-unused-vars': [
            2,
            {
                // args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            },
        ],*/
        '@typescript-eslint/no-explicit-any': [0],
        '@typescript-eslint/array-type': [
            2,
            {
                default: 'generic',
            },
        ],

        /*'import/order': [
            2,
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always-and-inside-groups',
            },
        ],*/
        //'import/no-unresolved': [2],
        //'import/no-cycle': [2],

        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'react',
                        importNames: ['default'],
                        message: "Dont use 'import React from 'react''.",
                    },
                    {
                        name: 'antd',
                        importNames: ['Button', 'Tag'],
                        message: 'Dont use this component from antd.',
                    },
                ],
            },
        ],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        'react/jsx-boolean-value': [2],
        'react/jsx-curly-brace-presence': [2],
        'react/jsx-props-no-spreading': [0],
        'react/react-in-jsx-scope': [0],
        'react/prop-types': [0],
        'react/display-name': [0],
        'react/self-closing-comp': [2],

        'no-console': [2],
        'no-empty': [2],
        'no-empty-pattern': [2],
        //'no-multiple-empty-lines': [2, {max: 1}],
        'prefer-template': [2],
        //'max-lines': [1, {max: 300}],
        'react/no-unknown-property': ['error', {ignore: ['jsx', 'global']}],
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/enforces-negative-arbitrary-values': 'off',
        'react/no-unescaped-entities': 'off',
        'no-console': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-var': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/self-closing-comp': 'off',
        '@typescript-eslint/ban-types': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'prefer-template': 'off',
    },
};
