module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'plugin:sonarjs/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'sonarjs'],
	rules: {
		'jsx-a11y/label-has-associated-control': 0,
		'javascript.validate.enable': 0,
		'react/prop-types': 0,
		'jsx-a11y/label-has-for': 0,
		'react/destructuring-assignment': 0,
	},
};
