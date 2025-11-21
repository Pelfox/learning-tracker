import antfu from '@antfu/eslint-config';

export default antfu({
  prettier: true,
  stylistic: false,

  react: true,
  formatters: true,

  rules: {
    'react-refresh/only-export-components': 'off',
  },
});
