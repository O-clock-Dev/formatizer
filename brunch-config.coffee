pkg = require './package.json'

exports.config =
  ###
  # Plugins options
  ###
  plugins:
    # Server
    autoReload:
      enabled: true

  ###
  # Builds
  ###
  files:
    javascripts:
      joinTo: 'app.js'

  paths:
    watched: ['example']

  modules:
    autoRequire:
      'app.js': ['example/index']

  ###
  # Production
  ###
  # overrides:
  #   production:
  #     paths:
  #       public: 'dist'
