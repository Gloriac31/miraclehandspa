import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import astro from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        fetch: 'readonly',
        Response: 'readonly',
        URL: 'readonly',
        HTMLElement: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off', // Allow any types for now
      '@typescript-eslint/no-unused-vars': 'off', // Allow unused vars for now
      '@typescript-eslint/no-require-imports': 'off', // Allow require() in scripts
      '@typescript-eslint/ban-ts-comment': 'off', // Allow @ts-ignore
      '@typescript-eslint/triple-slash-reference': 'off', // Allow triple slash refs
      '@typescript-eslint/no-empty-object-type': 'off', // Allow {} types
      'no-empty': 'off', // Allow empty blocks
      'no-undef': 'off', // TypeScript handles this
      'no-constant-condition': 'off', // Allow constant conditions
      'no-constant-binary-expression': 'off', // Allow constant binary expressions
      'no-useless-catch': 'off', // Allow useless catch blocks
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: typescriptParser,
        extraFileExtensions: ['.astro'],
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        fetch: 'readonly',
        Response: 'readonly',
        URL: 'readonly',
        HTMLElement: 'readonly',
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    plugins: {
      astro: astro,
      '@typescript-eslint': typescript,
    },
    rules: {
      ...astro.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off', // Allow any types for now
      '@typescript-eslint/no-unused-vars': 'off', // Allow unused vars for now
      'no-unused-vars': 'off', // Allow unused vars in Astro files
      'no-empty': 'off', // Allow empty blocks
      'no-undef': 'off', // TypeScript handles this
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.vercel/**',
      'pnpm-lock.yaml',
      '*.config.js',
      '*.config.mjs',
      '*.config.cjs',
      '.astro/**', // Ignore generated Astro files
      'src/components/contact/GoogleMaps.astro', // False positive parsing error
      'src/components/service/LaserPricing.astro', // False positive parsing error
      'src/components/thank-you/NextSteps.astro', // False positive parsing error
    ],
  },
]
