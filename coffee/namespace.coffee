window.MyApp =
  Views: {}
  Collections: {}
  Models: {}

$.fn.extend
  animateCss: (animationName)->
    animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    @addClass 'animated ' + animationName
      .one animationEnd, ->
        $(@).removeClass('animated ' + animationName)

class MyApp.Application extends Backbone.Marionette.Application
  region: '#main_contents'

  start: ->
    main = @getRegion()
    main.show new MyApp.Views.Layout

$(document).ready ->
  app = new MyApp.Application
  app.start()
