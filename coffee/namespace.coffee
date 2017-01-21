window.MyApp =
  Views: {}
  Collections: {}
  Models: {}

class MyApp.Application extends Backbone.Marionette.Application
  region: '#main_contents'

  start: ->
    main = @getRegion()
    main.show new MyApp.Views.Layout

$(document).ready ->
  app = new MyApp.Application
  app.start()
