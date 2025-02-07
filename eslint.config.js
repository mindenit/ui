import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    stylistic: {
      indent: 'tab'
    },
    vue: true,
    typescript: true,
  },
  {
    rules: {
      'antfu/top-level-function': 'off',
    }
  }
)
