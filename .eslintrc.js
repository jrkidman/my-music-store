module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
  },
  // overrides: [
  //   {
  //     files: ['*-test.js', '*.spec.js', 'App.js'],
  //     rules: {
  //       'react/jsx-filename-extension': 'off',
  //       'react/react-in-jsx-scope': 'off',
  //       'react/no-unstable-nested-components': 'off',
  //       'arrow-body-style': 'off',
  //     },
  //   },
  // ],
};
