const eslintRules = {
  extends: 'airbnb-base',
  plugins: ['jest'],
  rules: {
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'comma-dangle': ['error', 'never'],
    'import/no-commonjs': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error'
  },
  env: {
    'jest/globals': true
  }
};

export default eslintRules;
