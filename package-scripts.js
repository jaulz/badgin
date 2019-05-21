const npsUtils = require('nps-utils')

const { series, concurrent, rimraf, crossEnv } = npsUtils

module.exports = {
  scripts: {
    test: {
      default: crossEnv(
        'NODE_ENV=test jest --runInBand --coverage --logHeapUsage'
      ),
    },
    build: {
      default: {
        description: 'build the project',
        script: series(rimraf('build/'), 'rollup -c'),
      },

      watch: {
        description: 'build the project and watch source folder',
        script: concurrent({
          http: 'live-server',
          transpile: 'rollup -cw',
        }),
      },
    },
  },
  options: {
    silent: false,
  },
}
