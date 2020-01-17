module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'prettier/react',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      version: '16.9',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
		ecmaVersion: 9,
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true
		},
		sourceType: 'module'
	},
  plugins: ['markdown', 'react', 'babel', 'jest', '@typescript-eslint']
}
