window.jQuery       = window.$                      = require 'jquery'
window._            = require 'underscore'
window.Backbone     = require 'backbone'
Backbone.Marionette = require 'backbone.marionette'
window.Store        = require 'nedb'
window.BackboNeDB   = require 'backbone-nedb'

$.fn.extend
  animateCss: (animationName)->
    animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    @addClass('animated ' + animationName).one(animationEnd, ->
      $(@).removeClass('animated ' + animationName)
    )
