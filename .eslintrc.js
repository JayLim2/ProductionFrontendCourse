module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended'
  ],
  overrides: [
      {
          files: ["*.ts", "*.tsx"]
      }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react', 'i18next'
  ],
  rules: {
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'i18next/no-literal-string': ['error', {markupOnly: true, ignoreAttribute: ["to", "className"]}]
  }
}
