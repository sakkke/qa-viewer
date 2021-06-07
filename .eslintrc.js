module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'svelte3'
  ],
  rules: {
    // ref: https://github.com/sveltejs/eslint-plugin-svelte3/issues/41#issuecomment-572503966
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }] // standard
  }
}
