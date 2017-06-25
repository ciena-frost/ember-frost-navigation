module.exports = {
  coverageEnvVar: 'COVERAGE',
  coverageFolder: 'coverage',
  excludes: [
    '**/mirage/**/*',
    '**/dummy/**/*'
  ],
  useBabelInstrumenter: true,
  reporters: [
    'html',
    'lcov',
    'json-summary',
    'text-summary'
  ]
}
