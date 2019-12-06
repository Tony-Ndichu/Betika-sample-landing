module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/recommended'
      ],
    rules: {
        'no-console': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
        "ecmaVersion": 6,
      },
};
