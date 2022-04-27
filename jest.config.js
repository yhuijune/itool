module.exports = {
    roots: ['<rootDir>/test'],
    testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}