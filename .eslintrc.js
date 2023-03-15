module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  overrides: [{
    files: ["*.ts", "*.tsx"]
  }, {
    files: ["*.spec.ts", "*.spec.tsx"],
    rules: {
      'i18next/no-literal-string': 'off'
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
      'react', 'i18next', 'react-hooks'
  ],
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ["to", "className", "data-testid"]
    }],
    '@typescript-eslint/space-before-function-paren': 'off',
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "error" // Checks effect dependencies
  }
};