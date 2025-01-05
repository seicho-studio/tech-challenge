module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-use-before-define': 'error',
    camelcase: 'error',
    curly: 'error',
    eqeqeq: 'error',
    'func-names': 'error',
    complexity: ['warn', 5],
    'max-lines-per-function': [
      'warn',
      { max: 20, skipComments: true, skipBlankLines: true }
    ],
    'max-statements': ['warn', 15],
    'max-params': ['warn', 5],
    'no-console': 'warn',
    'no-alert': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-inline-comments': 'error',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-unused-expressions': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-trailing-spaces': 'error',
    quotes: ['error', 'single'],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true
      }
    ],
    'max-statements-per-line': ['error', { max: 2 }]
  },
  overrides: [
    {
      files: ['src/utils/request_util.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
    {
      files: ['src/config/database.ts', 'src/config/environment.ts', 'src/index.ts'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
}
