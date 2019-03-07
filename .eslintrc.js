module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
    "indent": 0//缩进风格
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
