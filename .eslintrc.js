module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['next/core-web-vitals', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  settings: {
    next: {
      rootDir: ['src/*/']
    }
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off'
  }
};
