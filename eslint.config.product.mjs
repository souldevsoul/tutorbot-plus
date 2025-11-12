import tsParser from '@typescript-eslint/parser';

import productQuality from './eslint-plugin-product-quality/index.js';

/**
 * Product Quality ESLint Config for TutorBot Plus
 * Flat config format (ESLint 9+) with TypeScript support
 *
 * Enforces TutorBot Plus brand standards:
 * - blue/green/teal color palette (education/growth theme)
 * - Company name: TutorBot Plus
 * - Email: support@tutorbot.plus
 * - Payment provider: stripe
 */
export default [
  {
    ignores: [
      'eslint-plugin-product-quality/**',
      '.next/**',
      'node_modules/**',
      'test-voice-cloning.ts',
      // Adaptation check script (contains template names for searching)
      'scripts/check-adaptation.js',
      // Legacy VoiceCraft voice/audio components (not adapted to TutorBot)
      'components/voicecraft/**',
      'components/dashboard/audio-actions.tsx',
      'components/dashboard/voice-actions.tsx',
      // Legacy VoiceCraft project/executor components
      'components/project/specialist-project-card.tsx',
      'components/project/work-review-card.tsx',
      'components/project/work-submission-card.tsx',
      // Legacy API routes for voice/audio functionality
      'app/api/audios/**',
      'app/api/voices/**',
      'app/api/projects/**',
      // Legacy library files
      'lib/voice-providers.ts',
      'lib/audio-utils.ts',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
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
      // ========================================
      // LINK VALIDATION (Critical for UX)
      // ========================================
      'product-quality/no-broken-internal-links': 'warn',

      // ========================================
      // BRAND CONSISTENCY - TutorBot Plus ONLY
      // ========================================
      'product-quality/use-styleguide-colors-only': ['warn', {
        allowedColors: [
          // Base colors (always allowed)
          'black',
          'white',
          'transparent',
          'current',
          'inherit',
          // Grayscale (always allowed)
          'gray-',
          'slate-',
          'zinc-',
          'neutral-',
          // TutorBot Plus brand colors (blue/green/teal - education/growth theme)
          'blue-',       // Primary - Trust, education
          'green-',      // Secondary - Growth, success
          'teal-',       // Alternative
          'emerald-',    // Alternative green
          'cyan-',       // Accent
          'sky-',        // Accent variant
          'indigo-',     // Accent variant
          'amber-',      // Energy, achievement
          // Utility colors (always allowed)
          'red-',        // For errors
        ],
      }],

      // ========================================
      // CONTENT CONSISTENCY - TutorBot Plus
      // ========================================
      'product-quality/consistent-payment-providers': ['warn', {
        provider: 'stripe',
      }],
      'product-quality/consistent-company-info': ['warn', {
        companyName: 'TutorBot Plus',
        email: 'support@tutorbot.plus',
      }],

      // ========================================
      // PROJECT ADAPTATION CHECK
      // ========================================
      'product-quality/no-template-remnants': ['error', {
        projectName: 'TutorBot Plus',
        templateNames: ['VoiceCraft', 'ClipMaster', 'LogoSmith', 'PetPortrait AI'],
        forbiddenKeywords: [
          'voice',
          'Voice',
          'audio',
          'Audio',
          'synthesis',
          'Synthesis',
          'cloning',
          'Cloning',
          'Kokoro',
          'Minimax',
          'XTTS',
          'microphone',
          'Microphone',
          'waveform',
          'Waveform',
          'vocal',
          'Vocal',
        ],
      }],

      // ========================================
      // DESIGN SYSTEM CONSISTENCY
      // ========================================
      'product-quality/no-brutalist-styling': 'error',

      // ========================================
      // UX CONSISTENCY RULES
      // ========================================
      'product-quality/no-button-without-handler': 'warn',
      'product-quality/no-form-without-submit': 'error',
      'product-quality/no-missing-alt-text': 'error',
      'product-quality/no-generic-placeholders': 'warn',
      'product-quality/require-loading-state-on-async-button': 'warn',
      'product-quality/require-aria-label-on-icon-buttons': 'warn',

      // ========================================
      // ERROR HANDLING & QUALITY
      // ========================================
      'product-quality/require-try-catch-fetch': 'warn',
      // Disabled: Too noisy for API routes, more useful for UI components
      // 'product-quality/require-empty-state': 'warn',

      // ========================================
      // PERFORMANCE
      // ========================================
      'product-quality/require-image-optimization': 'warn',
    },
  },
  // ========================================
  // PUBLIC PAGES - STRICTER RULES
  // All user-facing pages must be fully adapted
  // ========================================
  {
    files: [
      'app/**/page.tsx',
      'app/**/page.ts',
    ],
    ignores: [
      // Non-public pages
      'app/admin/**',
      'app/dashboard/**',
      'app/specialist/**',
      'app/api/**',
      // Component showcase (allowed to reference component libraries)
      'app/components/page.tsx',
    ],
    rules: {
      // ========================================
      // CRITICAL: No template remnants in public pages
      // ========================================
      'product-quality/no-template-remnants': ['error', {
        projectName: 'TutorBot Plus',
        templateNames: ['VoiceCraft', 'ClipMaster', 'LogoSmith', 'PetPortrait AI'],
        forbiddenKeywords: [
          'voice',
          'Voice',
          'audio',
          'Audio',
          'synthesis',
          'Synthesis',
          'cloning',
          'Cloning',
          'Kokoro',
          'Minimax',
          'XTTS',
          'microphone',
          'Microphone',
          'waveform',
          'Waveform',
          'vocal',
          'Vocal',
        ],
      }],

      // ========================================
      // CRITICAL: No brutalist styling in public pages
      // ========================================
      'product-quality/no-brutalist-styling': 'error',

      // ========================================
      // CRITICAL: Consistent branding
      // ========================================
      'product-quality/consistent-company-info': ['error', {
        companyName: 'TutorBot Plus',
        email: 'support@tutorbot.plus',
      }],

      // ========================================
      // PUBLIC PAGE QUALITY STANDARDS
      // ========================================
      'product-quality/no-missing-alt-text': 'error',
      'product-quality/no-broken-internal-links': 'error',
      'product-quality/require-image-optimization': 'error',
    },
  },
];
