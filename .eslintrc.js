module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        parser: 'babel-eslint'
    },
    globals: {
        document: true,
        localStorage: true,
        window: true
    },
    parser: 'vue-eslint-parser'
};
