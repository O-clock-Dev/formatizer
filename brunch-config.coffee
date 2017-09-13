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
      joinTo: 'css/app.css'
      order:
        before: 'app/styles/reset.styl'

    javascripts:
      joinTo: 'js/app.js'

  paths:
    watched: ['app']

  modules:
    autoRequire:
      'js/app.js': ['src/index']

  ###
  # Production
  ###
  overrides:
    production:
      paths:
        public: '../../public/' + pkg.name
