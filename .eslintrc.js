module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    extends: [
        'react-app',
        'react-app/jest',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:import/typescript',
    ],
    plugins: ['import'],
    rules: {
        'no-console': [
            'error',
            {
                allow: ['warn', 'error'],
            },
        ],
        'no-var': 'error',
        'no-else-return': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandFirst: true,
                ignoreCase: false,
                noSortAlphabetically: true,
            },
        ],
    },
};
