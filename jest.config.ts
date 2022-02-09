// Or async function
module.exports = async () => ({
	verbose: true,
	testResultsProcessor: 'jest-junit',
	coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
	reporters: ['default', 'jest-junit'],
	rootDir: 'src',
	moduleNameMapper: {
		'\\.(css|less|scss|sass|svg)$': '<rootDir>/config/CSSStub.ts',
	},
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect',
		'jest-canvas-mock',
	],
	transform: {
		'^.+\\.(ts|tsx)?$': 'babel-jest',
	},
});
