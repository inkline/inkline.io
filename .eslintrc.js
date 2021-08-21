module.exports = {
    root: true,
    env: {
        node: true,
        jest: true,
        browser: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'alloy',
        'alloy/vue',
    ],
    rules: {
        'indent': ['warn', 4],
        'semi': ['warn', 'always'],
        'vue/html-indent': ['warn', 4],
        'vue/max-attributes-per-line': 'off',
        'vue/custom-event-name-casing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-prototype-builtins': 'off'
    }
};
