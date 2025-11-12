import productQuality from './eslint-plugin-product-quality/index.js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules/**', '.next/**', 'eslint-plugin-product-quality/**', 'test-voice-cloning.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'product-quality': productQuality,
    },
    rules: {
      'product-quality/no-broken-internal-links': 'error',
      'product-quality/use-styleguide-colors-only': ['error', {
        allowedColors: ['green', 'teal', 'blue', 'emerald', 'cyan', 'sky', 'indigo', 'slate', 'gray', 'zinc', 'neutral', 'black', 'white', 'red']
      }],
      'product-quality/consistent-company-info': ['error', {
        companyName: 'TutorBot Plus',
        email: 'support@tutorbot.plus'
      }],
      'product-quality/consistent-payment-providers': ['error', {
        provider: 'stripe'
      }],
      'product-quality/no-button-without-handler': 'error',
      'product-quality/no-form-without-submit': 'error',
      'product-quality/no-missing-alt-text': 'error',
      'product-quality/no-generic-placeholders': 'error',
      'product-quality/require-loading-state-on-async-button': 'error',
      'product-quality/require-try-catch-fetch': 'off',
      'product-quality/require-empty-state': 'off',
      'product-quality/require-image-optimization': 'off',
      'product-quality/require-aria-label-on-icon-buttons': 'error',
    },
  },
];
