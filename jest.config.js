module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/static/webpack/pages/**',
        '!**/.next/**',
        '!**/.next/server/**',
        '!**/.next/server/static/**',
        '!**/.next/static/chunks/pages/**',
        '!**/.next/static/development/**',
        '!**/.next/static/chunks/**',
        '!**/jest.config.js/**',
        '!**/coverage/**',
        '!**/next.config.js/**',
        '!**/config/jest/cssTransform.js/**',
        '!**/pages/_document.js/**',
        '!**/.eslintrc.js/**'
    ],
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/', '/react-pagination-library/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
    },
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        '\\.(css|less)$': 'identity-obj-proxy'
    }
};
