window.jQuery       = window.$                      = require 'jquery'
window._            = require 'underscore'
window.Backbone     = require 'backbone'
Backbone.Marionette = require 'backbone.marionette'
window.Store        = require 'nedb'
window.BackboNeDB   = require 'backbone-nedb'

window.MyApp =
  Views: {}
  Collections: {}
  Models: {}

class MyApp.Application extends Backbone.Marionette.Application
  region: '#main_contents'

  start: ->
    main = @getRegion()
    model = new MyApp.Models.Hello
      hello: 'Hello World'
    main.show new MyApp.Views.Layout
      model: model

$(document).ready ->
  app = new MyApp.Application
  app.start()
