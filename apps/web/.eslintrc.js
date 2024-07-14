module.exports = {
  plugins: [],
  root: true,
  extends: ['next', 'next/core-web-vitals', '../../.eslintrc.json'],
  settings: {
    next: {
      rootDir: '.',
    },
  },
  ignorePatterns: [
    'mocks',
    'next.config.js',
    'tailwind.config.js',
    'postcss.config.js',
    'sentry.client.config.js',
    'sentry.server.config.js',
    'sentry.edge.config.js',
    '.eslintrc.js',
    'vitest.config.ts',
  ],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    camelcase: 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'import/extensions': 'off',
    quotes: 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    '@next/next/no-html-link-for-pages': ['error', '.'],
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      plugins: ['testing-library', 'jest-dom'],
      extends: ['prettier', 'plugin:jest-dom/recommended'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': [0],
        '@typescript-eslint/no-use-before-define': [1],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/quotes': [
          2,
          'single',
          {
            avoidEscape: true,
          },
        ],
        'max-len': [
          'warn',
          {
            code: 120,
            ignorePattern: '/className=".+"/gm',
            ignoreTemplateLiterals: true,
            ignoreStrings: true,
            ignoreComments: true,
          },
        ],
        'sort-keys': 'error',
        'react/destructuring-assignment': 'warn',
        'react/display-name': 'warn',
        'react/prop-types': 'warn',
        'react/sort-prop-types': 'warn',
        'react/no-unescaped-entities': 'off',
        'react/jsx-sort-props': [
          2,
          {
            callbacksLast: true,
            ignoreCase: false,
            shorthandLast: true,
          },
        ],
      },
    },
  ],
};
