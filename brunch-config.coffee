pkg = require './package.json'

exports.config =
  ###
  # Plugins options
  ###
  plugins:
    # Js
    uglify:
      compress:
        drop_console: true
        drop_debugger: true

    # Server
    autoReload:
      enabled: true

  ###
  # Builds
  ###
  files:
    stylesheets:
      joinTo: 'app.css'
      order:
        before: 'app/styles/reset.styl'

    javascripts:
      joinTo: 'app.js'

  paths:
    watched: ['app']

  modules:
    autoRequire:
      'app.js': ['src/index']

  ###
  # Production
  ###
  # overrides:
  #   production:
  #     paths:
  #       public: 'dist'
