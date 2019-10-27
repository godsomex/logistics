module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    globals: {
        document: true,
        window: true,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    parser: 'babel-eslint',
    plugins: ['react', 'jest'],
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaversion: 2018,
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
            spread: true,
        },
    },
    rules: {
        'require-jsdoc': 0,
        'object-curly-spacing': ['error', 'always'],
        'padded-blocks': 0,
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 0,
        'no-console': 0,
        'react/no-find-dom-node': 0,
        'no-unused-vars': 0,
    },
};
